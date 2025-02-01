import { Card } from "@/components/ui/card";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { Scale, Ruler, CalendarDays, Activity, Heart, Target } from "lucide-react";

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

  // Calculate BMI
  const calculateBMI = () => {
    if (clientData?.weight && clientData?.height) {
      const heightInMeters = clientData.height / 100;
      const bmi = clientData.weight / (heightInMeters * heightInMeters);
      return bmi.toFixed(1);
    }
    return "N/A";
  };

  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return "Underweight";
    if (bmi < 25) return "Normal";
    if (bmi < 30) return "Overweight";
    return "Obese";
  };

  const bmi = Number(calculateBMI());

  return (
    <Card className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#38BDF8]/5 p-8 rounded-[25px] backdrop-blur-sm">
      <h2 className="text-2xl font-bold mb-8 text-gray-800 bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
        Health Metrics
      </h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-[#D3E4FD]">
          <Scale className="w-10 h-10 text-[#0EA5E9] mb-3" />
          <h3 className="text-gray-600 text-base font-semibold mb-2">Weight</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
            {clientData?.weight || 75} kg
          </div>
          <p className="text-sm text-gray-500 mt-2">Target: 70 kg</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-[#D3E4FD]">
          <Ruler className="w-10 h-10 text-[#0EA5E9] mb-3" />
          <h3 className="text-gray-600 text-base font-semibold mb-2">Height</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
            {clientData?.height || 175} cm
          </div>
          <p className="text-sm text-gray-500 mt-2">Adult Average</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-[#D3E4FD]">
          <CalendarDays className="w-10 h-10 text-[#0EA5E9] mb-3" />
          <h3 className="text-gray-600 text-base font-semibold mb-2">Age</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
            30 yrs
          </div>
          <p className="text-sm text-gray-500 mt-2">Birth: 1994</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-[#D3E4FD]">
          <Activity className="w-10 h-10 text-[#0EA5E9] mb-3" />
          <h3 className="text-gray-600 text-base font-semibold mb-2">BMI</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
            {calculateBMI()}
          </div>
          <p className="text-sm text-gray-500 mt-2">{bmi !== null ? getBMICategory(bmi) : "N/A"}</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-[#D3E4FD]">
          <Heart className="w-10 h-10 text-[#0EA5E9] mb-3" />
          <h3 className="text-gray-600 text-base font-semibold mb-2">Resting HR</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
            72 bpm
          </div>
          <p className="text-sm text-gray-500 mt-2">Normal Range</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-6 shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105 hover:bg-gradient-to-br hover:from-white hover:to-[#D3E4FD]">
          <Target className="w-10 h-10 text-[#0EA5E9] mb-3" />
          <h3 className="text-gray-600 text-base font-semibold mb-2">Daily Goal</h3>
          <div className="text-3xl font-bold bg-gradient-to-r from-[#0EA5E9] to-[#38BDF8] bg-clip-text text-transparent">
            85%
          </div>
          <p className="text-sm text-gray-500 mt-2">Progress</p>
        </div>
      </div>
    </Card>
  );
};