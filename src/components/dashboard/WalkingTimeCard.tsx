import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

export const WalkingTimeCard = () => {
  return (
    <Card className="bg-[#F3E6FF] p-6 pb-8 rounded-[25px] h-[280px]">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-2xl font-semibold text-gray-800">Running with Kate</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-base text-gray-600 mb-3">
          9 Jan, 2025
        </div>
        
        <div className="flex-grow flex items-center justify-center mb-3">
          <img 
            src="/lovable-uploads/a1291dad-e2fc-4c85-8531-662cfae4b8bc.png" 
            alt="Running shoes" 
            className="h-24 w-auto object-contain"
          />
        </div>
        
        <div className="text-center">
          <p className="text-base text-gray-600 mb-2">Double Walking Time</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-bold text-[#9b87f5]">34</span>
            <span className="text-xl text-gray-600">min</span>
          </div>
        </div>
      </div>
    </Card>
  );
};