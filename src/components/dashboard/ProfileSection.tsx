import { Card } from "@/components/ui/card";
import { MoreHorizontal, Trophy, Activity } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

export const ProfileSection = () => {
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
    <Card className="bg-[#9b87f5] text-white p-6 pb-8 h-[140px] rounded-[25px]">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold">My Profile</h2>
        <MoreHorizontal className="w-5 h-5" />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden">
          <img 
            src="/lovable-uploads/49fec05a-cd8e-4715-b93f-7582ead9e45d.png" 
            alt="Profile" 
            className="w-full h-full object-cover"
          />
        </div>
        <div>
          <h3 className="text-2xl font-semibold mb-2">{clientData?.name}</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1">
              <Trophy className="w-4 h-4" />
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-1">
              <Activity className="w-4 h-4" />
              <span>14,750 steps</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};