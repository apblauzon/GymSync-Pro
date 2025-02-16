
import { StatsGrid } from "./StatsGrid";
import { ProgressSection } from "./ProgressSection";
import { HeartMetrics } from "./HeartMetrics";
import { WalkingTimeCard } from "./WalkingTimeCard";
import { LastSessionDate } from "./LastSessionDate";
import { AvailableTrainer } from "./AvailableTrainer";
import { UpcomingEvents } from "./UpcomingEvents";
import { ActionsSection } from "./ActionsSection";

export const DashboardSidebar = () => {
  return (
    <aside className="w-[400px] min-h-screen bg-white shadow-lg p-4 space-y-4 overflow-y-auto">
      {/* Stats Section */}
      <div className="grid grid-cols-2 gap-3">
        <StatsGrid />
      </div>

      {/* Progress Section */}
      <div className="h-[600px]">
        <ProgressSection />
      </div>

      {/* Health Metrics */}
      <div className="h-[500px]">
        <HeartMetrics />
      </div>

      {/* Running with Kate */}
      <WalkingTimeCard />

      {/* Last Session & Available Trainer */}
      <div className="space-y-4">
        <LastSessionDate />
        <AvailableTrainer />
      </div>

      {/* Upcoming Events */}
      <div className="h-[400px]">
        <UpcomingEvents />
      </div>

      {/* Actions Section */}
      <div className="sticky bottom-4">
        <ActionsSection />
      </div>
    </aside>
  );
};
