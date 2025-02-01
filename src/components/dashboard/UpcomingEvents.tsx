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
        .limit(4);
      
      return data;
    }
  });

  return (
    <Card className="bg-[#9b87f5] text-white p-4 rounded-[25px] h-full">
      <h2 className="text-xl font-semibold mb-3">Upcoming Events</h2>
      <div className="space-y-2.5 h-[calc(100%-2rem)] overflow-auto">
        {challenges?.map((challenge) => (
          <div key={challenge.challenge_id} className="flex items-center gap-3 bg-white/10 p-3 rounded-2xl">
            <div className="bg-[#8B5CF6] p-2.5 rounded-xl text-center min-w-[56px]">
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