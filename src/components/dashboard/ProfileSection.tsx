import { Card } from "@/components/ui/card";
import { MoreHorizontal, Trophy, Activity, Calendar, Target, Clock, Heart } from "lucide-react";
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
    <Card className="bg-[#D3E4FD] text-gray-800 p-6 py-8 rounded-[25px] shadow-lg">
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-4 flex-1">
          <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center overflow-hidden shadow-md">
            <img 
              src="/lovable-uploads/49fec05a-cd8e-4715-b93f-7582ead9e45d.png" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-2">{clientData?.name}</h3>
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
                <Trophy className="w-4 h-4 text-blue-600" />
                <span>Advanced</span>
              </div>
              <div className="flex items-center gap-1 bg-white/50 px-3 py-1 rounded-full">
                <Activity className="w-4 h-4 text-blue-600" />
                <span>14,750 steps</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex-1">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white/50 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Calendar className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Member Since</span>
              </div>
              <p className="text-sm text-gray-600">{new Date(clientData?.join_date || '').toLocaleDateString()}</p>
            </div>
            <div className="bg-white/50 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Target className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Goals Met</span>
              </div>
              <p className="text-sm text-gray-600">15 this month</p>
            </div>
            <div className="bg-white/50 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Active Hours</span>
              </div>
              <p className="text-sm text-gray-600">{clientData?.usage_hours || 0} hours</p>
            </div>
            <div className="bg-white/50 p-4 rounded-2xl">
              <div className="flex items-center gap-2 mb-2">
                <Heart className="w-5 h-5 text-blue-600" />
                <span className="font-semibold">Health Score</span>
              </div>
              <p className="text-sm text-gray-600">92/100</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};