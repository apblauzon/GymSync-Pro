import { Card } from "@/components/ui/card";
import { Calendar } from "lucide-react";

export const LastSessionDate = () => {
  return (
    <Card className="bg-[#E6F7FF] p-6 rounded-[25px] h-full">
      <div className="flex flex-col gap-4">
        <div className="bg-[#4FB6E5] p-3 rounded-xl w-fit">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Last Session</h3>
          <p className="text-base text-gray-600">March 15, 2024</p>
        </div>
      </div>
    </Card>
  );
};