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
    <div className="flex justify-end gap-6">
      <button className="w-[100px] h-[100px] flex flex-col items-center justify-center gap-3 bg-[#FF6B6B] text-white rounded-[25px] hover:opacity-90 transition-opacity shadow-md">
        <Download className="w-8 h-8" />
        <span className="text-sm font-medium">Download</span>
      </button>
      <button className="w-[100px] h-[100px] flex flex-col items-center justify-center gap-3 bg-[#9b87f5] text-white rounded-[25px] hover:opacity-90 transition-opacity shadow-md">
        <Settings className="w-8 h-8" />
        <span className="text-sm font-medium">Settings</span>
      </button>
      <button 
        onClick={handleLogout}
        className="w-[100px] h-[100px] flex flex-col items-center justify-center gap-3 bg-[#9747FF] text-white rounded-[25px] hover:opacity-90 transition-opacity shadow-md"
      >
        <LogOut className="w-8 h-8" />
        <span className="text-sm font-medium">Logout</span>
      </button>
    </div>
  );
};