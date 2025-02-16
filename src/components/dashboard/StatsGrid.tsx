
import { Card } from "@/components/ui/card";
import { Timer, Route, Zap, Activity } from "lucide-react";

export const StatsGrid = () => {
  return (
    <>
      <Card className="bg-[#D3E4FD] p-6 flex flex-col items-center justify-center rounded-[25px] aspect-square hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        <Timer className="w-10 h-10 mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
        <h3 className="text-blue-800 text-sm font-medium mb-2">Time</h3>
        <div className="text-4xl font-bold text-blue-900">56m</div>
        <p className="text-blue-600 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Daily Target: 120m</p>
      </Card>
      
      <Card className="bg-[#E5DEFF] p-6 flex flex-col items-center justify-center rounded-[25px] aspect-square hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        <Route className="w-10 h-10 mb-3 text-indigo-600 group-hover:scale-110 transition-transform" />
        <h3 className="text-indigo-800 text-sm font-medium mb-2">Total distance</h3>
        <div className="text-4xl font-bold text-indigo-900">5km</div>
        <p className="text-indigo-600 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Goal: 10km</p>
      </Card>
      
      <Card className="bg-[#FFDEE2] p-6 flex flex-col items-center justify-center rounded-[25px] aspect-square hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        <Zap className="w-10 h-10 mb-3 text-rose-600 group-hover:scale-110 transition-transform" />
        <h3 className="text-rose-800 text-sm font-medium mb-2">Energy burn</h3>
        <div className="text-4xl font-bold text-rose-900">1345</div>
        <p className="text-rose-600 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Target: 2000</p>
      </Card>
      
      <Card className="bg-[#D3E4FD] p-6 flex flex-col items-center justify-center rounded-[25px] aspect-square hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer group">
        <Activity className="w-10 h-10 mb-3 text-blue-600 group-hover:scale-110 transition-transform" />
        <h3 className="text-blue-800 text-sm font-medium mb-2">Symmetry</h3>
        <div className="text-4xl font-bold text-blue-900">95%</div>
        <p className="text-blue-600 text-xs mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Perfect Balance</p>
      </Card>
    </>
  );
};
