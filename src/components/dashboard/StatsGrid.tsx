import { Card } from "@/components/ui/card";
import { Timer, Route, Zap, Loader } from "lucide-react";

export const StatsGrid = () => {
  return (
    <>
      <Card className="w-[200px] h-[140px] bg-[#FEC6A1] p-4 flex flex-col items-center justify-center">
        <Timer className="w-6 h-6 mb-2 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-1">Time</h3>
        <div className="text-2xl font-bold text-gray-800">56m</div>
      </Card>
      
      <Card className="w-[200px] h-[140px] bg-[#E5DEFF] p-4 flex flex-col items-center justify-center">
        <Route className="w-6 h-6 mb-2 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-1">Total distance</h3>
        <div className="text-2xl font-bold text-gray-800">5km</div>
      </Card>
      
      <Card className="w-[200px] h-[140px] bg-[#FFDEE2] p-4 flex flex-col items-center justify-center">
        <Zap className="w-6 h-6 mb-2 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-1">Energy burn</h3>
        <div className="text-2xl font-bold text-gray-800">1345 kal</div>
      </Card>
      
      <Card className="w-[200px] h-[140px] bg-[#D3E4FD] p-4 flex flex-col items-center justify-center">
        <Loader className="w-6 h-6 mb-2 text-gray-800" />
        <h3 className="text-gray-800 text-sm font-medium mb-1">Symmetry</h3>
        <div className="text-2xl font-bold text-gray-800">95%</div>
      </Card>
    </>
  );
};