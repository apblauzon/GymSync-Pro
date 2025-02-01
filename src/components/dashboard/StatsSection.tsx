import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const StatsSection = () => {
  const { data: clientData } = useQuery({
    queryKey: ['client'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');
      
      const { data: client } = await supabase
        .from('clients')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      return client;
    }
  });

  return (
    <Card className="bg-[#FFF9E7] p-4 h-[90px]">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h3 className="text-gray-500 text-sm mb-1">Weight</h3>
          <div className="text-xl font-semibold">{clientData?.weight || 75} kg</div>
        </div>
        <div>
          <h3 className="text-gray-500 text-sm mb-1">Height</h3>
          <div className="text-xl font-semibold">{clientData?.height || 175} cm</div>
        </div>
        <div>
          <h3 className="text-gray-500 text-sm mb-1">Age</h3>
          <div className="text-xl font-semibold">30 yrs</div>
        </div>
      </div>
    </Card>
  );
};