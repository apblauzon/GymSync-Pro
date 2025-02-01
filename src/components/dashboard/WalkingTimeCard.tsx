import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

export const WalkingTimeCard = () => {
  return (
    <Card className="bg-[#F3E6FF] p-4 rounded-3xl">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-base sm:text-lg font-semibold text-gray-800">Running with Kate</h3>
        <button className="text-gray-600 hover:text-gray-800">
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
      
      <div className="text-sm text-gray-600 mb-4">
        9 Jan, 2025
      </div>
      
      <div className="flex items-center justify-center mb-4">
        <img 
          src="/lovable-uploads/a1291dad-e2fc-4c85-8531-662cfae4b8bc.png" 
          alt="Running shoes" 
          className="h-8 w-auto"
        />
      </div>
      
      <div className="text-center space-y-1">
        <p className="text-sm text-gray-600">Double Walking Time</p>
        <div className="flex items-baseline justify-center gap-1">
          <span className="text-2xl sm:text-3xl font-bold text-[#9b87f5]">34</span>
          <span className="text-sm text-gray-600">min</span>
        </div>
      </div>
    </Card>
  );
};