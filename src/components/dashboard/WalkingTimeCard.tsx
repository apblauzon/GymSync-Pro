import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

export const WalkingTimeCard = () => {
  return (
    <Card className="bg-[#F3E6FF] p-6 rounded-3xl h-[307px]">
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-center mb-3">
          <h3 className="text-xl font-semibold text-gray-800">Running with Kate</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-sm text-gray-600 mb-4">
          9 Jan, 2025
        </div>
        
        <div className="flex-grow flex items-center justify-center mb-4">
          <img 
            src="/lovable-uploads/a1291dad-e2fc-4c85-8531-662cfae4b8bc.png" 
            alt="Running shoes" 
            className="h-20 w-auto object-contain"
          />
        </div>
        
        <div className="text-center mt-auto">
          <p className="text-sm text-gray-600 mb-1">Double Walking Time</p>
          <div className="flex items-baseline justify-center gap-2">
            <span className="text-4xl font-bold text-[#9b87f5]">34</span>
            <span className="text-lg text-gray-600">min</span>
          </div>
        </div>
      </div>
    </Card>
  );
};