import { Card } from "@/components/ui/card";
import { MoreHorizontal } from "lucide-react";

export const HeartMetrics = () => {
  return (
    <div className="grid grid-cols-1 gap-3 h-full">
      {/* Heart Beat Card */}
      <Card className="bg-[#F3FFE5] p-4 rounded-3xl flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Heart Beat</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold">110</span>
            <span className="text-gray-600 mb-1">bpm</span>
          </div>
          <span className="inline-block bg-[#E5FFB6] text-gray-700 px-3 py-1 rounded-full text-sm mb-2 w-fit">
            Normal
          </span>
          <p className="text-sm text-gray-600 mb-4">
            You are calm and ready for exercises!
          </p>
          <div className="flex-grow flex items-end">
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
      <Card className="bg-[#D3E4FD] p-4 rounded-3xl flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-lg font-semibold">Heart Score</h3>
          <button className="text-gray-600 hover:text-gray-800">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-end gap-2 mb-2">
            <span className="text-4xl font-bold">82%</span>
          </div>
          <span className="inline-block bg-white text-gray-700 px-3 py-1 rounded-full text-sm mb-2 w-fit">
            Very Healthy
          </span>
          <p className="text-sm text-gray-600">
            Keep up your good work, Arvin
          </p>
        </div>
      </Card>
    </div>
  );
};