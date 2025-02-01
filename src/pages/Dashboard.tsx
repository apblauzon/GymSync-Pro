import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { HeartMetrics } from "@/components/dashboard/HeartMetrics";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { LastSessionSection } from "@/components/dashboard/LastSessionSection";
import { ActionsSection } from "@/components/dashboard/ActionsSection";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { WalkingTimeCard } from "@/components/dashboard/WalkingTimeCard";
import { ActivityTracking } from "@/components/dashboard/ActivityTracking";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] p-4 lg:p-6">
      <div className="max-w-[1662px] mx-auto grid grid-cols-12 gap-4">
        {/* Left Column - Progress and Heart Metrics */}
        <div className="col-span-5 grid grid-cols-2 gap-4 auto-rows-min">
          {/* Progress Section */}
          <div className="col-span-1 h-[400px]">
            <ProgressSection />
          </div>
          
          {/* Heart Metrics */}
          <div className="col-span-1">
            <HeartMetrics />
          </div>

          {/* Running with Kate - Full Width */}
          <div className="col-span-2">
            <WalkingTimeCard />
          </div>
        </div>

        {/* Middle Column - Stats and Profile */}
        <div className="col-span-4 grid grid-cols-2 gap-4 auto-rows-min">
          {/* Stats Grid */}
          <StatsGrid />
          
          {/* Profile Section - Full Width */}
          <div className="col-span-2">
            <ProfileSection />
          </div>
          
          {/* Stats Section - Full Width */}
          <div className="col-span-2">
            <StatsSection />
          </div>
          
          {/* Last Session - Full Width */}
          <div className="col-span-2">
            <LastSessionSection />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3 grid grid-cols-1 gap-4 auto-rows-min">
          {/* Activity Tracking */}
          <div className="h-[500px]">
            <ActivityTracking />
          </div>
          
          {/* Events and Actions */}
          <div className="flex gap-2">
            <UpcomingEvents />
            <ActionsSection />
          </div>
          
          {/* View Gym Trainer */}
          <div className="w-full bg-white rounded-xl p-4 h-[34px] flex items-center justify-center">
            <span className="text-sm">View Gym Trainer Available</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;