import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { HeartMetrics } from "@/components/dashboard/HeartMetrics";
import { StatsGrid } from "@/components/dashboard/StatsGrid";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { ActionsSection } from "@/components/dashboard/ActionsSection";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { WalkingTimeCard } from "@/components/dashboard/WalkingTimeCard";
import { ActivityTracking } from "@/components/dashboard/ActivityTracking";
import { LastSessionDate } from "@/components/dashboard/LastSessionDate";
import { AvailableTrainer } from "@/components/dashboard/AvailableTrainer";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] p-4 lg:p-6">
      <div className="grid grid-cols-12 gap-4 h-screen max-h-[900px]">
        {/* Left Column */}
        <div className="col-span-12 lg:col-span-3 grid grid-rows-[1fr,1fr] gap-4">
          <ProgressSection />
          <HeartMetrics />
        </div>

        {/* Middle Column */}
        <div className="col-span-12 lg:col-span-6 grid grid-rows-[auto,1fr,auto] gap-4">
          <div className="grid grid-cols-4 gap-4">
            <StatsGrid />
          </div>
          <div className="grid grid-rows-[auto,1fr,auto] gap-4">
            <ProfileSection />
            <ActivityTracking />
            <StatsSection />
          </div>
        </div>

        {/* Right Column */}
        <div className="col-span-12 lg:col-span-3 grid grid-rows-[auto,auto,auto,1fr,auto] gap-4">
          <WalkingTimeCard />
          <div className="grid grid-cols-2 gap-4">
            <LastSessionDate />
            <AvailableTrainer />
          </div>
          <UpcomingEvents />
          <ActionsSection />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;