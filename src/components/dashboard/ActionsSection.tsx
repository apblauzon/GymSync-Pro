import { Card } from "@/components/ui/card";
import { Download, Settings, LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";

export const ActionsSection = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="flex flex-col gap-4 ml-auto">
      <button className="w-[75px] h-[75px] flex flex-col items-center justify-center gap-2 bg-[#FF6B6B] text-white rounded-[25px] hover:opacity-90 transition-opacity shadow-md">
        <Download className="w-6 h-6" />
        <span className="text-[11px] font-medium">Download</span>
      </button>
      <button className="w-[75px] h-[75px] flex flex-col items-center justify-center gap-2 bg-[#9b87f5] text-white rounded-[25px] hover:opacity-90 transition-opacity shadow-md">
        <Settings className="w-6 h-6" />
        <span className="text-[11px] font-medium">Settings</span>
      </button>
      <button 
        onClick={handleLogout}
        className="w-[75px] h-[75px] flex flex-col items-center justify-center gap-2 bg-[#9747FF] text-white rounded-[25px] hover:opacity-90 transition-opacity shadow-md"
      >
        <LogOut className="w-6 h-6" />
        <span className="text-[11px] font-medium">Logout</span>
      </button>
    </div>
  );
};