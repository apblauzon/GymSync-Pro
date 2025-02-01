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
    <Card className="w-[250px] bg-[#9b87f5] text-white p-4 h-full">
      <h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
      <div className="space-y-3">
        {challenges?.map((challenge) => (
          <div key={challenge.challenge_id} className="flex items-center gap-3">
            <div className="bg-[#8B5CF6] p-2 rounded-lg text-center min-w-[48px]">
              <div className="text-xs">
                {new Date(challenge.start_date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}
              </div>
              <div className="text-lg font-bold">
                {new Date(challenge.start_date).getDate()}
              </div>
            </div>
            <div>
              <div className="font-medium text-sm">{challenge.challenge_name}</div>
              <div className="text-xs opacity-75">
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