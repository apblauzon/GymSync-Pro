
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { ActivityTracking } from "@/components/dashboard/ActivityTracking";
import { WorkoutStreak } from "@/components/dashboard/WorkoutStreak";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex">
      {/* Vertical Sidebar */}
      <DashboardSidebar />

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto space-y-4">
          <ProfileSection />
          <ActivityTracking />
          <WorkoutStreak />
          <StatsSection />
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
