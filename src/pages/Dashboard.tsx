import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { WalkingTimeCard } from "@/components/dashboard/WalkingTimeCard";
import { HeartMetrics } from "@/components/dashboard/HeartMetrics";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { LastSessionSection } from "@/components/dashboard/LastSessionSection";
import { ActionsSection } from "@/components/dashboard/ActionsSection";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] p-10">
      <div className="max-w-[1662px] mx-auto grid grid-cols-12 gap-4">
        {/* Left Column - Progress & Running with Kate */}
        <div className="col-span-3">
          <div className="w-[300px]">
            <ProgressSection />
          </div>
          <div className="w-[300px] mt-4">
            <WalkingTimeCard />
          </div>
        </div>

        {/* Second Column - Heart Metrics */}
        <div className="col-span-3">
          <HeartMetrics />
        </div>

        {/* Middle Column - Stats, Profile, etc */}
        <div className="col-span-4">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <StatsGrid />
          </div>
          <div className="w-[463px]">
            <ProfileSection />
          </div>
          <div className="w-[434px] mt-4">
            <StatsSection />
          </div>
          <div className="w-[434px] mt-4">
            <LastSessionSection />
          </div>
        </div>

        {/* Right Column - Activity & Actions */}
        <div className="col-span-2">
          <div className="w-[430px] mb-4">
            <div className="h-[384px] bg-white rounded-xl p-4">
              <h2 className="text-lg font-semibold">Activity Tracking</h2>
            </div>
          </div>
          <div className="w-[302px]">
            <UpcomingEvents />
          </div>
          <div className="w-[302px] mt-4 bg-white rounded-xl p-4 h-[34px] flex items-center">
            <span className="text-sm">View Gym Trainer Available</span>
          </div>
          <div className="mt-4">
            <ActionsSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;