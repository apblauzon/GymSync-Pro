import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { WalkingTimeCard } from "@/components/dashboard/WalkingTimeCard";
import { HeartBeatSection } from "@/components/dashboard/HeartBeatSection";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { LastSessionSection } from "@/components/dashboard/LastSessionSection";
import { ActionsSection } from "@/components/dashboard/ActionsSection";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";

const Dashboard = () => {
  return (
    <div className="h-screen bg-[#F8F7FF] p-6">
      <div className="max-w-[1800px] mx-auto grid grid-cols-12 gap-4 h-full">
        {/* Left Column */}
        <div className="col-span-3">
          <ProgressSection />
          <WalkingTimeCard />
        </div>

        {/* Middle Column */}
        <div className="col-span-9 grid grid-cols-12 gap-4">
          <HeartBeatSection />
          <StatsGrid />
          <ProfileSection />
          <StatsSection />
          <LastSessionSection />
        </div>

        {/* Right Column */}
        <div className="col-span-3 space-y-4">
          <UpcomingEvents />
          <ActionsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;