import { Card } from "@/components/ui/card";
import { RefreshCw } from "lucide-react";

export const ActivityTracking = () => {
  const days = [
    { day: 'Sun', date: '18' },
    { day: 'Mon', date: '19' },
    { day: 'Tue', date: '20' },
    { day: 'Wed', date: '21' },
    { day: 'Thu', date: '22', isActive: true },
    { day: 'Fri', date: '23' },
    { day: 'Sat', date: '24' },
  ];

  return (
    <Card className="bg-white rounded-[25px] p-6 h-full">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-semibold">Activity Tracking</h2>
        <RefreshCw className="w-5 h-5 text-gray-500" />
      </div>

      {/* Calendar Days */}
      <div className="grid grid-cols-7 gap-2 mb-8">
        {days.map((item, index) => (
          <div key={index} className="text-center">
            <div className="text-sm text-gray-600 mb-1">{item.day}</div>
            <div className={`text-base font-medium p-2 rounded-lg ${
              item.isActive 
                ? 'bg-[#FF6B6B] text-white' 
                : 'text-gray-900'
            }`}>
              {item.date}
            </div>
          </div>
        ))}
      </div>

      {/* Activity Graph */}
      <div className="relative h-[calc(100%-12rem)] mt-4">
        <img 
          src="/lovable-uploads/c974cd7e-4430-4775-ab53-9c2d25ce4933.png" 
          alt="Activity graph" 
          className="w-full h-full object-contain rounded-lg"
        />
      </div>
    </Card>
  );
};