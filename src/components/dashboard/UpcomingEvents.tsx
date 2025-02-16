
import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const UpcomingEvents = () => {
  const { data: challenges } = useQuery({
    queryKey: ['challenges'],
    queryFn: async () => {
      const { data } = await supabase
        .from('group_challenges')
        .select('*')
        .order('start_date', { ascending: true })
        .limit(2);  // Changed from 4 to 2
      
      return data;
    }
  });

  return (
    <Card className="bg-gradient-to-br from-[#F97316] to-[#FB923C] text-white p-6 py-8 rounded-[25px] h-full">
      <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
      <div className="space-y-3 h-[calc(100%-2rem)] overflow-auto">
        {challenges?.map((challenge) => (
          <div key={challenge.challenge_id} className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl hover:bg-white/20 transition-colors cursor-pointer">
            <div className="bg-white/20 p-2.5 rounded-xl text-center min-w-[56px] backdrop-blur-sm">
              <div className="text-xs font-medium">
                {new Date(challenge.start_date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}
              </div>
              <div className="text-xl font-bold">
                {new Date(challenge.start_date).getDate()}
              </div>
            </div>
            <div>
              <div className="font-medium text-lg mb-0.5">{challenge.challenge_name}</div>
              <div className="text-sm text-white/75">
                {new Date(challenge.start_date).toLocaleTimeString('en-US', { 
                  hour: 'numeric', 
                  minute: '2-digit',
                  hour12: true 
                })}
              </div>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
