import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { HeartMetrics } from "@/components/dashboard/HeartMetrics";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { LastSessionSection } from "@/components/dashboard/LastSessionSection";
import { ActionsSection } from "@/components/dashboard/ActionsSection";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { WalkingTimeCard } from "@/components/dashboard/WalkingTimeCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] p-10">
      <div className="max-w-[1662px] mx-auto grid grid-cols-12 gap-6">
        {/* Left Column */}
        <div className="col-span-3">
          <div className="w-[300px] mb-6">
            <ProgressSection />
          </div>
          <div className="w-[320px]">
            <HeartMetrics />
          </div>
        </div>

        {/* Middle Column */}
        <div className="col-span-6">
          <div className="w-[650px] mb-6">
            <WalkingTimeCard />
          </div>
          
          <div className="grid grid-cols-4 gap-4 mb-6">
            <StatsGrid />
          </div>

          <div className="w-[463px] mb-6">
            <ProfileSection />
          </div>

          <div className="w-[434px] mb-6">
            <StatsSection />
          </div>

          <div className="w-[434px]">
            <LastSessionSection />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-3">
          <div className="w-[430px] mb-6">
            <div className="h-[384px] bg-white rounded-xl p-4">
              <h2 className="text-lg font-semibold">Activity Tracking</h2>
            </div>
          </div>

          <div className="w-[302px] mb-4">
            <UpcomingEvents />
          </div>

          <div className="w-[302px] mb-6 bg-white rounded-xl p-4 h-[34px] flex items-center">
            <span className="text-sm">View Gym Trainer Available</span>
          </div>

          <ActionsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;