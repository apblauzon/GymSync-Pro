import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { HeartMetrics } from "@/components/dashboard/HeartMetrics";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { ActionsSection } from "@/components/dashboard/ActionsSection";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { WalkingTimeCard } from "@/components/dashboard/WalkingTimeCard";
import { ActivityTracking } from "@/components/dashboard/ActivityTracking";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] p-4 lg:p-6">
      <div className="h-[calc(100vh-3rem)] max-w-[1662px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 overflow-hidden">
        {/* Left Column - Progress and Heart Metrics */}
        <div className="lg:col-span-5 grid grid-cols-1 md:grid-cols-2 gap-4 h-full">
          {/* Progress Section */}
          <div className="h-full">
            <ProgressSection />
          </div>
          
          {/* Heart Metrics */}
          <div className="h-full flex flex-col gap-4">
            <HeartMetrics />
          </div>
        </div>

        {/* Middle Column - Stats and Profile */}
        <div className="lg:col-span-4 grid grid-cols-1 gap-4 h-full">
          {/* Stats Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 gap-4">
            <StatsGrid />
          </div>
          
          {/* Profile Section */}
          <div className="h-auto">
            <ProfileSection />
          </div>
          
          {/* Stats Section */}
          <div className="h-auto mt-auto">
            <StatsSection />
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-3 grid grid-cols-1 gap-4 h-full">
          {/* Activity Tracking */}
          <div className="h-[55%]">
            <ActivityTracking />
          </div>
          
          {/* Events and Actions */}
          <div className="h-[45%] flex gap-4">
            <UpcomingEvents />
            <ActionsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;