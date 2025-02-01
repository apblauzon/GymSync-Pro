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
    <div className="min-h-[870px] bg-[#F8F7FF] p-6 lg:p-10">
      <div className="max-w-[1662px] mx-auto grid grid-cols-12 gap-6">
        {/* Left Section */}
        <div className="col-span-12 lg:col-span-6">
          {/* Top Section with Progress and Heart Metrics side by side */}
          <div className="flex flex-col lg:flex-row gap-6 mb-6">
            {/* Progress Component */}
            <div className="w-full lg:w-[380px]">
              <ProgressSection />
            </div>
            
            {/* Heart Metrics Components */}
            <div className="w-full lg:w-[320px]">
              <HeartMetrics />
            </div>
          </div>

          {/* Running with Kate Component at the bottom */}
          <div className="w-full">
            <WalkingTimeCard />
          </div>
        </div>

        {/* Center Section */}
        <div className="col-span-12 lg:col-span-3">
          <div className="grid grid-cols-2 gap-4 mb-6">
            <StatsGrid />
          </div>

          {/* Profile Section */}
          <div className="w-full max-w-[463px] mb-6">
            <ProfileSection />
          </div>

          {/* Stats Section */}
          <div className="w-full max-w-[434px] mb-6">
            <StatsSection />
          </div>

          {/* Last Session Section */}
          <div className="w-full max-w-[434px]">
            <LastSessionSection />
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-12 lg:col-span-3">
          {/* Activity Tracking */}
          <div className="w-full max-w-[430px] mb-6">
            <ActivityTracking />
          </div>

          {/* Upcoming Events and Actions side by side */}
          <div className="flex gap-4">
            <div className="space-y-4">
              {/* Upcoming Events */}
              <div className="w-[302px]">
                <UpcomingEvents />
              </div>

              {/* View Gym Trainer Available */}
              <div className="w-[302px] bg-white rounded-xl p-4 h-[34px] flex items-center">
                <span className="text-sm">View Gym Trainer Available</span>
              </div>
            </div>

            {/* Action Buttons */}
            <ActionsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;