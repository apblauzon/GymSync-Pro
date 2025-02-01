import { Card } from "@/components/ui/card";
import { MoreHorizontal, Heart } from "lucide-react";

export const HeartMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-4 h-full">
      {/* Heart Beat Card */}
      <Card className="bg-[#F3FFE5] p-6 rounded-[25px] flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Heart Beat</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col h-[calc(100%-4rem)]">
          <div className="flex items-end gap-2 mb-3">
            <span className="text-4xl font-bold">110</span>
            <span className="text-gray-600 mb-1">bpm</span>
          </div>
          <span className="inline-block bg-[#E5FFB6] text-gray-700 px-3 py-1 rounded-full text-sm mb-3 w-fit">
            Normal
          </span>
          <p className="text-sm text-gray-600 mb-6">
            You are calm and ready for exercises!
          </p>
          <div className="mt-auto">
            <svg className="w-full h-16" viewBox="0 0 200 50">
              <path
                d="M0,25 L30,25 L40,10 L50,40 L60,15 L70,25 L200,25"
                fill="none"
                stroke="#16A34A"
                strokeWidth="2"
              />
            </svg>
          </div>
        </div>
      </Card>

      {/* Heart Score Card */}
      <Card className="bg-[#D3E4FD] p-6 rounded-[25px] flex-1">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">Heart Score</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-6 h-[calc(100%-4rem)]">
          <div className="bg-white p-4 rounded-2xl shadow-sm">
            <Heart className="w-12 h-12 text-[#9b87f5] fill-[#9b87f5]" />
          </div>
          <div>
            <div className="flex items-baseline gap-2 mb-2">
              <span className="text-5xl font-bold text-gray-800">82%</span>
            </div>
            <span className="inline-block bg-white text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium shadow-sm">
              Very Healthy
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};