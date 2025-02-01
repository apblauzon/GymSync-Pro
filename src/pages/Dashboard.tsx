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
      <div className="max-w-[1662px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-4 lg:gap-6">
        {/* Left Section */}
        <div className="lg:col-span-5 grid grid-cols-1 gap-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Progress Component */}
            <div className="w-full">
              <ProgressSection />
            </div>
            
            {/* Heart Metrics Components */}
            <div className="w-full">
              <HeartMetrics />
            </div>
          </div>

          {/* Walking Time Card */}
          <div className="w-full mt-auto">
            <WalkingTimeCard />
          </div>
        </div>

        {/* Center Section */}
        <div className="lg:col-span-4 flex flex-col gap-4">
          <div className="grid grid-cols-2 gap-4">
            <StatsGrid />
          </div>

          <div className="flex flex-col gap-4">
            <ProfileSection />
            <StatsSection />
            <LastSessionSection />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-3">
          <div className="h-full flex flex-col gap-4">
            {/* Activity Tracking */}
            <div className="w-full flex-grow">
              <ActivityTracking />
            </div>

            {/* Upcoming Events and Actions Container */}
            <div className="flex gap-2">
              <UpcomingEvents />
              <ActionsSection />
            </div>

            {/* View Gym Trainer Available */}
            <div className="w-full bg-white rounded-xl p-4 h-[34px] flex items-center justify-center">
              <span className="text-sm">View Gym Trainer Available</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;