
import { Card } from "@/components/ui/card";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from "recharts";
import { Utensils, Flame } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const CalorieStats = () => {
  const { data: workoutData } = useQuery({
    queryKey: ['calories'],
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
        .select('calories_burned')
        .eq('client_id', client.clients_id)
        .gte('start_time', new Date().toISOString().split('T')[0])
        .order('start_time', { ascending: false });
      
      return workouts;
    }
  });

  const caloriesConsumed = 2100; // Mock data - replace with actual tracking
  const caloriesBurned = workoutData?.reduce((sum, workout) => sum + (workout.calories_burned || 0), 0) || 0;
  const dailyGoal = 2500;

  const data = [
    { name: 'Calories In', value: caloriesConsumed, color: '#4F46E5' },
    { name: 'Calories Out', value: caloriesBurned, color: '#F97316' }
  ];

  const percentage = Math.round((caloriesConsumed / dailyGoal) * 100);

  return (
    <Card className="bg-white p-6 rounded-[25px] shadow-lg">
      <div className="flex justify-between items-start mb-6">
        <div>
          <h3 className="text-xl font-semibold mb-2">Calorie Tracking</h3>
          <p className="text-sm text-gray-600">Daily Goal: {dailyGoal} kcal</p>
        </div>
        <div className="text-right">
          <div className="flex items-center gap-2 text-sm font-medium mb-1">
            <Utensils className="w-4 h-4 text-primary" />
            <span>{caloriesConsumed} kcal in</span>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium">
            <Flame className="w-4 h-4 text-orange-500" />
            <span>{caloriesBurned} kcal out</span>
          </div>
        </div>
      </div>

      <div className="h-[200px]">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={60}
              outerRadius={80}
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.color} />
              ))}
            </Pie>
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>

      <div className="mt-4 text-center">
        <p className="text-sm font-medium text-gray-600">
          {percentage < 100 ? (
            `You've consumed ${percentage}% of your daily calorie goal`
          ) : (
            "You've reached your daily calorie goal!"
          )}
        </p>
        {percentage < 75 && (
          <p className="text-xs text-orange-500 mt-1">
            Don't forget to log your meals to track your progress!
          </p>
        )}
      </div>
    </Card>
  );
};
