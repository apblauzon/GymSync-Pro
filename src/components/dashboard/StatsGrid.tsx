import { Card } from "@/components/ui/card";
import { Timer, Route, Zap, Activity } from "lucide-react";

export const StatsGrid = () => {
  return (
    <>
      <Card className="bg-[#FEC6A1] p-6 flex flex-col items-center justify-center rounded-[25px] aspect-square">
        <Timer className="w-10 h-10 mb-3 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-2">Time</h3>
        <div className="text-4xl font-bold text-gray-800">56m</div>
      </Card>
      
      <Card className="bg-[#E5DEFF] p-6 flex flex-col items-center justify-center rounded-[25px] aspect-square">
        <Route className="w-10 h-10 mb-3 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-2">Total distance</h3>
        <div className="text-4xl font-bold text-gray-800">5km</div>
      </Card>
      
      <Card className="bg-[#FFDEE2] p-6 flex flex-col items-center justify-center rounded-[25px] aspect-square">
        <Zap className="w-10 h-10 mb-3 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-2">Energy burn</h3>
        <div className="text-4xl font-bold text-gray-800">1345</div>
      </Card>
      
      <Card className="bg-[#D3E4FD] p-6 flex flex-col items-center justify-center rounded-[25px] aspect-square">
        <Activity className="w-10 h-10 mb-3 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-2">Symmetry</h3>
        <div className="text-4xl font-bold text-gray-800">95%</div>
      </Card>
    </>
  );
};