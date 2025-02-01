import { Card } from "@/components/ui/card";
import { User, Star, Clock, Phone } from "lucide-react";

export const AvailableTrainer = () => {
  return (
    <Card className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#38BDF8]/5 p-6 rounded-[25px] h-full hover:shadow-lg hover:shadow-[#0EA5E9]/10 transition-all duration-300">
      <div className="flex flex-col gap-4">
        <div className="bg-[#0EA5E9] p-3 rounded-xl w-fit">
          <User className="w-6 h-6 text-white" />
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-xl font-semibold text-gray-800">Available Trainer</h3>
            <div className="flex items-center gap-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm text-gray-600">4.9</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <img 
                src="/lovable-uploads/49fec05a-cd8e-4715-b93f-7582ead9e45d.png"
                alt="John Smith" 
                className="w-10 h-10 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-medium text-gray-800">John Smith</p>
                <p className="text-sm text-gray-600">Strength & Conditioning</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Clock className="w-4 h-4" />
              <p className="text-sm">Available: 2:00 PM - 6:00 PM</p>
            </div>
            <div className="flex items-center gap-2 text-gray-600">
              <Phone className="w-4 h-4" />
              <p className="text-sm">Contact: (555) 123-4567</p>
            </div>
          </div>
          <button className="mt-4 w-full bg-[#0EA5E9] text-white py-2 rounded-lg hover:bg-[#0284C7] transition-colors duration-300">
            Book Session
          </button>
        </div>
      </div>
    </Card>
  );
};