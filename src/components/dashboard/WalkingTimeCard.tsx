import { Card } from "@/components/ui/card";
import { MoreHorizontal, Calendar, Timer, ArrowRight } from "lucide-react";

export const WalkingTimeCard = () => {
  return (
    <Card className="bg-[#F2FCE2] p-6 rounded-[25px] h-[400px] hover:shadow-lg transition-all duration-300 group relative overflow-hidden">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#2E7D32] transition-colors duration-300">
            Running with Kate
          </h3>
          <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-white/50 transition-all duration-300">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        
        <div className="flex items-center gap-2 text-gray-600 mb-3">
          <Calendar className="w-4 h-4" />
          <span className="text-base">9 Jan, 2025</span>
        </div>
        
        <div className="flex-grow flex items-center justify-center mb-6 group-hover:scale-105 transition-transform duration-300">
          <img 
            src="/lovable-uploads/a1291dad-e2fc-4c85-8531-662cfae4b8bc.png" 
            alt="Running shoes" 
            className="h-32 w-auto object-contain"
          />
        </div>
        
        <div className="text-center transform group-hover:-translate-y-1 transition-transform duration-300 mb-6">
          <p className="text-base text-gray-600 mb-2">Double Walking Time</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-bold text-[#2E7D32] group-hover:scale-110 transition-transform duration-300">34</span>
            <span className="text-xl text-gray-600">min</span>
          </div>
        </div>

        <div className="mt-auto">
          <button className="w-full flex items-center justify-center gap-2 text-[#2E7D32] py-2 rounded-lg hover:bg-[#2E7D32]/10 transition-colors duration-300">
            View Details <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};