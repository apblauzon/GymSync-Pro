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
    <Card className="bg-[#FFF9E7] p-6 rounded-[25px]">
      <h2 className="text-xl font-semibold mb-6 text-gray-800">Health Metrics</h2>
      <div className="grid grid-cols-3 gap-6">
        <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm">
          <Scale className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-gray-500 text-sm font-semibold mb-1">Weight</h3>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {clientData?.weight || 75} kg
          </div>
          <p className="text-xs text-gray-500 mt-1">Target: 70 kg</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm">
          <Ruler className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-gray-500 text-sm font-semibold mb-1">Height</h3>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {clientData?.height || 175} cm
          </div>
          <p className="text-xs text-gray-500 mt-1">Adult Average</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm">
          <CalendarDays className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-gray-500 text-sm font-semibold mb-1">Age</h3>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            30 yrs
          </div>
          <p className="text-xs text-gray-500 mt-1">Birth: 1994</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm">
          <Activity className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-gray-500 text-sm font-semibold mb-1">BMI</h3>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            {calculateBMI()}
          </div>
          <p className="text-xs text-gray-500 mt-1">{bmi !== null ? getBMICategory(bmi) : "N/A"}</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm">
          <Heart className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-gray-500 text-sm font-semibold mb-1">Resting HR</h3>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            72 bpm
          </div>
          <p className="text-xs text-gray-500 mt-1">Normal Range</p>
        </div>

        <div className="flex flex-col items-center bg-white rounded-2xl p-4 shadow-sm">
          <Target className="w-8 h-8 text-primary mb-2" />
          <h3 className="text-gray-500 text-sm font-semibold mb-1">Daily Goal</h3>
          <div className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            85%
          </div>
          <p className="text-xs text-gray-500 mt-1">Progress</p>
        </div>
      </div>
    </Card>
  );
};