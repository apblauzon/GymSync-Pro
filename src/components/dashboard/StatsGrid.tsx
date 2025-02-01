import { Card } from "@/components/ui/card";
import { Timer, Route, Zap, Loader } from "lucide-react";

export const StatsGrid = () => {
  return (
    <div className="col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
      <Card className="bg-[#FEC6A1] p-4 sm:p-6 flex flex-col items-center justify-center">
        <Timer className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-gray-800" />
        <h3 className="text-gray-800 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Time</h3>
        <div className="text-xl sm:text-2xl font-bold text-gray-800">56m</div>
      </Card>
      
      <Card className="bg-[#E5DEFF] p-4 sm:p-6 flex flex-col items-center justify-center">
        <Route className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-gray-800" />
        <h3 className="text-gray-800 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Total distance</h3>
        <div className="text-xl sm:text-2xl font-bold text-gray-800">5km</div>
      </Card>
      
      <Card className="bg-[#FFDEE2] p-4 sm:p-6 flex flex-col items-center justify-center">
        <Zap className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-gray-800" />
        <h3 className="text-gray-800 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Energy burn</h3>
        <div className="text-xl sm:text-2xl font-bold text-gray-800">1345 kal</div>
      </Card>
      
      <Card className="bg-[#D3E4FD] p-4 sm:p-6 flex flex-col items-center justify-center">
        <Loader className="w-5 h-5 sm:w-6 sm:h-6 mb-2 sm:mb-3 text-gray-800" />
        <h3 className="text-gray-800 text-xs sm:text-sm font-medium mb-1 sm:mb-2">Symmetry</h3>
        <div className="text-xl sm:text-2xl font-bold text-gray-800">95%</div>
      </Card>
    </div>
  );
};