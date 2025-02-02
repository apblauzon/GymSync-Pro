import { Card } from "@/components/ui/card";
import { Calendar, Clock, Dumbbell, Timer, MoreHorizontal, ChevronRight } from "lucide-react";

export const LastSessionDate = () => {
  return (
    <Card className="bg-gradient-to-br from-[#F97316]/10 to-[#FB923C]/5 p-6 rounded-[25px] h-full hover:shadow-lg hover:shadow-[#F97316]/10 transition-all duration-300 group">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="bg-[#F97316] p-3 rounded-xl w-fit group-hover:scale-105 transition-transform duration-300">
            <Calendar className="w-6 h-6 text-white" />
          </div>
          <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-white/50 transition-all duration-300">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        <div>
          <h3 className="text-2xl font-semibold text-gray-800 mb-3 group-hover:text-[#F97316] transition-colors duration-300">
            Last Session
          </h3>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-gray-600 bg-white/50 p-3 rounded-xl hover:bg-white/80 transition-all duration-300">
              <Clock className="w-5 h-5 text-[#F97316]" />
              <div>
                <p className="text-sm font-medium text-gray-800">Date & Time</p>
                <p className="text-sm">March 15, 2024 - 10:30 AM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600 bg-white/50 p-3 rounded-xl hover:bg-white/80 transition-all duration-300">
              <Timer className="w-5 h-5 text-[#F97316]" />
              <div>
                <p className="text-sm font-medium text-gray-800">Duration</p>
                <p className="text-sm">1h 15min</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600 bg-white/50 p-3 rounded-xl hover:bg-white/80 transition-all duration-300">
              <Dumbbell className="w-5 h-5 text-[#F97316]" />
              <div>
                <p className="text-sm font-medium text-gray-800">Workout Type</p>
                <p className="text-sm">Upper Body Strength</p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full bg-[#F97316] text-white py-2 rounded-lg hover:bg-[#EA580C] transition-colors duration-300 flex items-center justify-center gap-2">
            Schedule Next Session
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};