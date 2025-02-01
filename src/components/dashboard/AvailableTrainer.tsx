import { Card } from "@/components/ui/card";
import { User } from "lucide-react";

export const AvailableTrainer = () => {
  return (
    <Card className="bg-[#FFE6E6] p-6 rounded-[25px] h-full">
      <div className="flex flex-col gap-4">
        <div className="bg-[#E54F4F] p-3 rounded-xl w-fit">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Available Trainer</h3>
          <p className="text-base text-gray-600">John Smith</p>
        </div>
      </div>
    </Card>
  );
};