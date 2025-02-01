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
    <div className="flex flex-col gap-2 ml-auto">
      <button className="w-[65px] h-[65px] flex flex-col items-center justify-center gap-1 bg-[#FF6B6B] text-white rounded-[25px] hover:opacity-90 transition-opacity">
        <Download className="w-5 h-5" />
        <span className="text-[10px]">Download</span>
      </button>
      <button className="w-[65px] h-[65px] flex flex-col items-center justify-center gap-1 bg-[#9b87f5] text-white rounded-[25px] hover:opacity-90 transition-opacity">
        <Settings className="w-5 h-5" />
        <span className="text-[10px]">Settings</span>
      </button>
      <button 
        onClick={handleLogout}
        className="w-[65px] h-[65px] flex flex-col items-center justify-center gap-1 bg-[#9747FF] text-white rounded-[25px] hover:opacity-90 transition-opacity"
      >
        <LogOut className="w-5 h-5" />
        <span className="text-[10px]">Logout</span>
      </button>
    </div>
  );
};