import { Card } from "@/components/ui/card";
import { Trophy, Flame, Calendar } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const WorkoutStreak = () => {
  const { data: workoutData } = useQuery({
    queryKey: ['workouts-streak'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');
      
      const { data: client } = await supabase
        .from('clients')
        .select('clients_id')
        .eq('user_id', user.id)
        .single();
      
      if (!client) return null;
      
      const { data: workouts } = await supabase
        .from('workouts')
        .select('start_time')
        .eq('client_id', client.clients_id)
        .order('start_time', { ascending: false })
        .limit(30);
      
      return workouts;
    }
  });

  const streakCount = workoutData?.length || 0;
  const lastWorkout = workoutData?.[0]?.start_time 
    ? new Date(workoutData[0].start_time).toLocaleDateString()
    : 'No workouts yet';

  return (
    <Card className="bg-gradient-to-br from-[#4F46E5] to-[#06B6D4] text-white p-6 rounded-[25px] mb-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Trophy className="w-6 h-6" />
          <h3 className="text-xl font-semibold">Workout Streak</h3>
        </div>
        <Calendar className="w-5 h-5 opacity-80" />
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-white/10 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Flame className="w-5 h-5 text-orange-400" />
            <span className="text-sm opacity-80">Current Streak</span>
          </div>
          <div className="text-3xl font-bold">{streakCount} days</div>
        </div>
        
        <div className="bg-white/10 rounded-2xl p-4">
          <div className="flex items-center gap-2 mb-2">
            <Calendar className="w-5 h-5 text-blue-300" />
            <span className="text-sm opacity-80">Last Workout</span>
          </div>
          <div className="text-lg font-medium">{lastWorkout}</div>
        </div>
      </div>
    </Card>
  );
};