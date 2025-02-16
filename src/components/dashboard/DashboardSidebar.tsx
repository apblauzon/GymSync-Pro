
import { NavLink, useNavigate } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { 
  User, 
  Timer, 
  Route as RouteIcon, 
  Zap, 
  Activity,
  LineChart,
  Heart,
  Bike,
  Calendar,
  Download,
  Settings,
  LogOut
} from "lucide-react";

export const DashboardSidebar = () => {
  const navigate = useNavigate();

  const { data: clientData } = useQuery({
    queryKey: ['client'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');
      
      const { data: client } = await supabase
        .from('clients')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      return client;
    }
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  const navLinkClasses = "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors hover:bg-gray-100";
  const activeNavLinkClasses = "bg-blue-50 text-blue-600 font-medium";

  return (
    <aside className="w-[300px] min-h-screen bg-white shadow-lg flex flex-col">
      {/* Profile Section */}
      <div className="p-6 border-b">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
            <User className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <h3 className="font-medium text-gray-900">{clientData?.name || 'Loading...'}</h3>
            <p className="text-sm text-gray-500">{clientData?.email}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2 text-sm">
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <Timer className="w-4 h-4 text-blue-600" />
            <span>56m</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <RouteIcon className="w-4 h-4 text-blue-600" />
            <span>5km</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <Zap className="w-4 h-4 text-blue-600" />
            <span>1345 kcal</span>
          </div>
          <div className="flex items-center gap-2 p-2 bg-gray-50 rounded">
            <Activity className="w-4 h-4 text-blue-600" />
            <span>95%</span>
          </div>
        </div>
      </div>

      {/* Navigation Links */}
      <nav className="flex-1 p-4 space-y-2">
        <NavLink 
          to="/dashboard/overview" 
          className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
        >
          <User className="w-5 h-5" />
          <span>Overview</span>
        </NavLink>

        <NavLink 
          to="/dashboard/progress" 
          className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
        >
          <LineChart className="w-5 h-5" />
          <span>Progress</span>
        </NavLink>

        <NavLink 
          to="/dashboard/health" 
          className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
        >
          <Heart className="w-5 h-5" />
          <span>Health Metrics</span>
        </NavLink>

        <NavLink 
          to="/dashboard/running" 
          className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
        >
          <Bike className="w-5 h-5" />
          <span>Running with Kate</span>
        </NavLink>

        <NavLink 
          to="/dashboard/sessions" 
          className={({ isActive }) => `${navLinkClasses} ${isActive ? activeNavLinkClasses : ''}`}
        >
          <Calendar className="w-5 h-5" />
          <span>Sessions & Events</span>
        </NavLink>
      </nav>

      {/* Bottom Actions */}
      <div className="p-4 border-t space-y-2">
        <button className={`${navLinkClasses} w-full`}>
          <Download className="w-5 h-5" />
          <span>Download</span>
        </button>
        <button className={`${navLinkClasses} w-full`}>
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </button>
        <button 
          onClick={handleLogout}
          className={`${navLinkClasses} w-full text-red-600 hover:bg-red-50`}
        >
          <LogOut className="w-5 h-5" />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};
