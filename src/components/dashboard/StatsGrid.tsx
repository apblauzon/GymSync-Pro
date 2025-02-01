import { Card } from "@/components/ui/card";
import { Timer, Route, Flame, Activity } from "lucide-react";

export const StatsGrid = () => {
  return (
    <div className="col-span-6 grid grid-cols-2 gap-4">
      <Card className="bg-[#FF9F7B] text-white p-4">
        <Timer className="w-5 h-5 mb-2" />
        <h3 className="text-sm mb-1">Time</h3>
        <div className="text-2xl font-bold">56m</div>
      </Card>
      <Card className="bg-[#F3F0FF] p-4">
        <Route className="w-5 h-5 mb-2" />
        <h3 className="text-sm mb-1">Total distance</h3>
        <div className="text-2xl font-bold">5km</div>
      </Card>
      <Card className="bg-[#FFE7F9] p-4">
        <Flame className="w-5 h-5 mb-2" />
        <h3 className="text-sm mb-1">Energy burn</h3>
        <div className="text-2xl font-bold">1345 kal</div>
      </Card>
      <Card className="bg-[#E7F9FF] p-4">
        <Activity className="w-5 h-5 mb-2" />
        <h3 className="text-sm mb-1">Symmetry</h3>
        <div className="text-2xl font-bold">95%</div>
      </Card>
    </div>
  );
};