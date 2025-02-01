import { Card } from "@/components/ui/card";
import { Calendar, Clock, Dumbbell, Timer } from "lucide-react";

export const LastSessionDate = () => {
  return (
    <Card className="bg-gradient-to-br from-[#F97316]/10 to-[#FB923C]/5 p-6 rounded-[25px] h-full hover:shadow-lg hover:shadow-[#F97316]/10 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="bg-[#F97316] p-3 rounded-xl w-fit">
          <Calendar className="w-6 h-6 text-white" />
        </div>
        <div>
          <h3 className="text-xl font-semibold text-gray-800 mb-3">Last Session</h3>
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <p className="text-base">March 15, 2024 - 10:30 AM</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Timer className="w-4 h-4" />
              <p className="text-base">Duration: 1h 15min</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Dumbbell className="w-4 h-4" />
              <p className="text-base">Upper Body Strength</p>
            </div>
          </div>
          <button className="mt-4 w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-[#EA580C] transition-colors duration-300">
            Schedule Next Session
          </button>
        </div>
      </div>
    </Card>
  );
};