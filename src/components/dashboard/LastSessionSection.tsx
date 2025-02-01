import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const LastSessionSection = () => {
  const { data: workouts } = useQuery({
    queryKey: ['workouts'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');
      
      const { data: client } = await supabase
        .from('clients')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      const { data } = await supabase
        .from('workouts')
        .select('*')
        .eq('client_id', client?.clients_id)
        .order('start_time', { ascending: false })
        .limit(1);
      
      return data;
    }
  });

  return (
    <Card className="col-span-12 bg-[#4CAF50] text-white p-4">
      <h2 className="text-lg font-semibold">
        Last Session: {workouts?.[0]?.start_time ? new Date(workouts[0].start_time).toLocaleDateString() : 'No sessions yet'}
      </h2>
    </Card>
  );
};