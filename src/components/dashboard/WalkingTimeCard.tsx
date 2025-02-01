import { Card } from "@/components/ui/card";

export const WalkingTimeCard = () => {
  return (
    <Card className="mt-4 bg-[#F3E6FF] p-4 rounded-xl">
      <div className="flex justify-between items-center mb-2">
        <h3 className="font-semibold">Running with Kate</h3>
        <button className="text-sm text-[#9b87f5] hover:underline">
          View more
        </button>
      </div>
      <div className="text-sm text-gray-600 mb-4">
        9 Jan, 2025
      </div>
      <div className="flex justify-center mb-4">
        <img 
          src="/lovable-uploads/a1291dad-e2fc-4c85-8531-662cfae4b8bc.png" 
          alt="Running shoes" 
          className="h-8 w-auto"
        />
      </div>
      <div className="text-center">
        <div className="text-sm text-gray-600">Double Walking Time</div>
        <div className="text-3xl font-bold text-[#9b87f5]">34 min</div>
      </div>
    </Card>
  );
};