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
    <Card className="bg-[#FFF9E7] p-6 rounded-[25px]">
      <div className="grid grid-cols-3 gap-6">
        <div>
          <h3 className="text-gray-500 text-base font-semibold mb-2">Weight</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{clientData?.weight || 75} kg</div>
        </div>
        <div>
          <h3 className="text-gray-500 text-base font-semibold mb-2">Height</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">{clientData?.height || 175} cm</div>
        </div>
        <div>
          <h3 className="text-gray-500 text-base font-semibold mb-2">Age</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">30 yrs</div>
        </div>
      </div>
    </Card>
  );
};