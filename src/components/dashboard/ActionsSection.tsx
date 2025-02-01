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
    <div className="flex flex-col gap-4">
      <button className="w-[91px] h-[93px] flex flex-col items-center justify-center gap-2 bg-[#FF6B6B] text-white rounded-xl">
        <Download className="w-6 h-6" />
        <span className="text-xs">Download</span>
      </button>
      <button className="w-[91px] h-[93px] flex flex-col items-center justify-center gap-2 bg-[#9b87f5] text-white rounded-xl">
        <Settings className="w-6 h-6" />
        <span className="text-xs">Settings</span>
      </button>
      <button 
        onClick={handleLogout}
        className="w-[91px] h-[93px] flex flex-col items-center justify-center gap-2 bg-[#9747FF] text-white rounded-xl"
      >
        <LogOut className="w-6 h-6" />
        <span className="text-xs">Logout</span>
      </button>
    </div>
  );
};