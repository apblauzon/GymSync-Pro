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
    <div className="flex flex-col gap-3">
      <button className="flex items-center justify-center gap-2 bg-[#FF6B6B] text-white p-3 rounded-xl text-sm">
        <Download className="w-4 h-4" />
        Download
      </button>
      <button className="flex items-center justify-center gap-2 bg-[#9b87f5] text-white p-3 rounded-xl text-sm">
        <Settings className="w-4 h-4" />
        Settings
      </button>
      <button 
        onClick={handleLogout}
        className="flex items-center justify-center gap-2 bg-[#9747FF] text-white p-3 rounded-xl text-sm"
      >
        <LogOut className="w-4 h-4" />
        Logout
      </button>
    </div>
  );
};