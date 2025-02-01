import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export const LastSessionDate = () => {
  return (
    <Card className="bg-[#F3E6FF] p-6 rounded-[25px]">
      <div className="flex items-center gap-3">
        <div className="bg-[#9b87f5] p-3 rounded-xl">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-1">Last Session</h3>
          <p className="text-base text-gray-600">March 15, 2024</p>
        </div>
      </div>
    </Card>
  );
};