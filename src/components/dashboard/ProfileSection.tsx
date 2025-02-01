import { Card } from "@/components/ui/card";
import { MoreHorizontal, User, Trophy, Activity } from "lucide-react";
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
    <Card className="col-span-6 bg-[#9b87f5] text-white p-4">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">My Profile</h2>
        <MoreHorizontal />
      </div>
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
          <User size={24} className="text-[#9b87f5]" />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-1">{clientData?.name}</h3>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-2">
              <Trophy size={14} />
              <span>Advanced</span>
            </div>
            <div className="flex items-center gap-2">
              <Activity size={14} />
              <span>14,750 steps</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};