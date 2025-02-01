import { Card } from "@/components/ui/card";
import { MoreHorizontal, Heart, HeartPulse, Activity, Timer } from "lucide-react";
import { useState } from "react";

export const HeartMetrics = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="grid grid-rows-[1.2fr,0.8fr] gap-4 h-full">
      {/* Heart Beat Card */}
      <Card className="bg-gradient-to-br from-[#FF6B6B]/10 to-[#FF8E8E]/5 p-5 rounded-[25px] flex flex-col transition-all duration-300 hover:shadow-lg hover:shadow-[#FF6B6B]/10">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <HeartPulse className="w-7 h-7 text-[#FF6B6B]" />
            <h3 className="text-2xl font-semibold text-gray-800">Heart Beat</h3>
          </div>
          <button 
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-gray-600 hover:text-gray-800 transition-colors"
          >
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex flex-col flex-grow">
          <div className="flex items-baseline gap-2 mb-2">
            <span className="text-6xl font-bold text-[#FF6B6B]">110</span>
            <span className="text-2xl text-gray-600">bpm</span>
          </div>
          <div className="flex gap-2 mb-3">
            <span className="inline-block bg-[#FFE6E6] text-[#FF6B6B] px-3 py-1 rounded-full text-sm font-medium">
              Normal Range
            </span>
            <span className="inline-block bg-[#E6FFF1] text-[#2ECC71] px-3 py-1 rounded-full text-sm font-medium">
              Optimal Zone
            </span>
          </div>
          <div className="space-y-2">
            <p className="text-base text-gray-600">
              You are in the fat-burning zone! Keep it up!
            </p>
            {isExpanded && (
              <div className="space-y-2 animate-fade-in">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Timer className="w-4 h-4" />
                  <span>Duration in zone: 15 minutes</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Activity className="w-4 h-4" />
                  <span>Trending: Stable</span>
                </div>
              </div>
            )}
          </div>
          <div className="mt-auto">
            <img 
              src="/lovable-uploads/c99e39bb-c731-41bb-b223-86357dc26fbf.png" 
              alt="Heart rate graph" 
              className="w-full h-14 object-contain"
            />
          </div>
        </div>
      </Card>

      {/* Heart Score Card */}
      <Card className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#38BDF8]/5 p-5 rounded-[25px] hover:shadow-lg hover:shadow-[#0EA5E9]/10 transition-all duration-300">
        <div className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-2">
            <Heart className="w-7 h-7 text-[#0EA5E9]" />
            <h3 className="text-2xl font-semibold text-gray-800">Heart Score</h3>
          </div>
          <button className="text-gray-600 hover:text-gray-800 transition-colors">
            <MoreHorizontal className="w-5 h-5" />
          </button>
        </div>
        <div className="flex items-center gap-4">
          <div className="bg-white p-3 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300">
            <Heart className="w-14 h-14 text-[#0EA5E9] fill-[#0EA5E9]" />
          </div>
          <div>
            <div className="flex items-baseline gap-1 mb-1.5">
              <span className="text-6xl font-bold text-gray-800">82</span>
              <span className="text-3xl text-gray-600">%</span>
            </div>
            <span className="inline-block bg-[#E6F7FF] text-[#0EA5E9] px-4 py-1.5 rounded-full text-lg font-medium shadow-sm">
              Very Healthy
            </span>
          </div>
        </div>
      </Card>
    </div>
  );
};