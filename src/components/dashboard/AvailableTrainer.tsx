import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export const AvailableTrainer = () => {
  return (
    <Card className="bg-[#F3E6FF] p-6 rounded-[25px]">
      <div className="flex items-center gap-3">
        <div className="bg-[#9b87f5] p-3 rounded-xl">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Available Trainer</h3>
          <p className="text-base text-gray-600">John Smith</p>
        </div>
      </div>
    </Card>
  );
};