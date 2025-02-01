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
    <div className="h-screen bg-[#F8F7FF] p-3 sm:p-6 overflow-hidden">
      <div className="max-w-[1800px] mx-auto grid grid-cols-12 gap-3 sm:gap-4 h-full">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 flex flex-col h-full">
          <div className="flex-grow">
            <ProgressSection />
          </div>
          <WalkingTimeCard />
        </div>

        {/* Middle Column */}
        <div className="col-span-12 lg:col-span-6 grid grid-cols-12 gap-3 sm:gap-4 h-full">
          <HeartBeatSection />
          <StatsGrid />
          <ProfileSection />
          <StatsSection />
          <LastSessionSection />
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-3 flex flex-col gap-3 sm:gap-4 h-full">
          <div className="flex-grow">
            <UpcomingEvents />
          </div>
          <ActionsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;