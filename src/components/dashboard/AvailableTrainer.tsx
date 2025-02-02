import { Card } from "@/components/ui/card";
import { User, Star, Clock, Phone, MoreHorizontal, ChevronRight } from "lucide-react";

export const AvailableTrainer = () => {
  return (
    <Card className="bg-gradient-to-br from-[#0EA5E9]/10 to-[#38BDF8]/5 p-6 rounded-[25px] h-full hover:shadow-lg hover:shadow-[#0EA5E9]/10 transition-all duration-300 group overflow-hidden">
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-center">
          <div className="bg-[#0EA5E9] p-3 rounded-xl w-fit group-hover:scale-105 transition-transform duration-300">
            <User className="w-6 h-6 text-white" />
          </div>
          <button className="text-gray-600 hover:text-gray-800 p-2 rounded-full hover:bg-white/50 transition-all duration-300">
            <MoreHorizontal className="w-6 h-6" />
          </button>
        </div>
        <div>
          <div className="flex items-center gap-2 mb-3">
            <h3 className="text-2xl font-semibold text-gray-800 group-hover:text-[#0EA5E9] transition-colors duration-300">
              Available Trainer
            </h3>
            <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="text-sm font-medium text-yellow-700">4.9</span>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex items-center gap-3 bg-white/50 p-3 rounded-xl hover:bg-white/80 transition-all duration-300">
              <img 
                src="/lovable-uploads/49fec05a-cd8e-4715-b93f-7582ead9e45d.png"
                alt="John Smith" 
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="text-base font-medium text-gray-800">John Smith</p>
                <p className="text-sm text-gray-600">Strength & Conditioning</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600 bg-white/50 p-3 rounded-xl hover:bg-white/80 transition-all duration-300">
              <Clock className="w-5 h-5 text-[#0EA5E9]" />
              <div>
                <p className="text-sm font-medium text-gray-800">Available Hours</p>
                <p className="text-sm">2:00 PM - 6:00 PM</p>
              </div>
            </div>
            <div className="flex items-center gap-3 text-gray-600 bg-white/50 p-3 rounded-xl hover:bg-white/80 transition-all duration-300">
              <Phone className="w-5 h-5 text-[#0EA5E9]" />
              <div>
                <p className="text-sm font-medium text-gray-800">Contact</p>
                <p className="text-sm">(555) 123-4567</p>
              </div>
            </div>
          </div>
          <button className="mt-4 w-full bg-[#0EA5E9] text-white py-2 rounded-lg hover:bg-[#0284C7] transition-colors duration-300 flex items-center justify-center gap-2">
            Book Session
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </Card>
  );
};