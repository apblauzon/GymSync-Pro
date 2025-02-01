import { Card } from "@/components/ui/card";
import { Timer, Route, Zap, Activity } from "lucide-react";

export const StatsGrid = () => {
  return (
    <>
      <Card className="bg-[#FEC6A1] p-4 flex flex-col items-center justify-center aspect-square rounded-[25px]">
        <Timer className="w-7 h-7 mb-2 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-1">Time</h3>
        <div className="text-3xl font-bold text-gray-800">56m</div>
      </Card>
      
      <Card className="bg-[#E5DEFF] p-4 flex flex-col items-center justify-center aspect-square rounded-[25px]">
        <Route className="w-7 h-7 mb-2 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-1">Total distance</h3>
        <div className="text-3xl font-bold text-gray-800">5km</div>
      </Card>
      
      <Card className="bg-[#FFDEE2] p-4 flex flex-col items-center justify-center aspect-square rounded-[25px]">
        <Zap className="w-7 h-7 mb-2 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-1">Energy burn</h3>
        <div className="text-3xl font-bold text-gray-800">1345 kal</div>
      </Card>
      
      <Card className="bg-[#D3E4FD] p-4 flex flex-col items-center justify-center aspect-square rounded-[25px]">
        <Activity className="w-7 h-7 mb-2 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-1">Symmetry</h3>
        <div className="text-3xl font-bold text-gray-800">95%</div>
      </Card>
    </>
  );
};