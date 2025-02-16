
import { Routes, Route, Navigate } from "react-router-dom";
import { ProfileSection } from "@/components/dashboard/ProfileSection";
import { StatsSection } from "@/components/dashboard/StatsSection";
import { ActivityTracking } from "@/components/dashboard/ActivityTracking";
import { WorkoutStreak } from "@/components/dashboard/WorkoutStreak";
import { DashboardSidebar } from "@/components/dashboard/DashboardSidebar";
import { ProgressSection } from "@/components/dashboard/ProgressSection";
import { HeartMetrics } from "@/components/dashboard/HeartMetrics";
import { WalkingTimeCard } from "@/components/dashboard/WalkingTimeCard";
import { LastSessionDate } from "@/components/dashboard/LastSessionDate";
import { AvailableTrainer } from "@/components/dashboard/AvailableTrainer";
import { UpcomingEvents } from "@/components/dashboard/UpcomingEvents";
import { StatsGrid } from "@/components/dashboard/StatsGrid";

const Overview = () => {
  return (
    <div className="space-y-6">
      <ProfileSection />
      <div className="grid grid-cols-4 gap-4">
        <StatsGrid />
      </div>
      <ActivityTracking />
      <WorkoutStreak />
      <StatsSection />
    </div>
  );
};

const Progress = () => {
  return <ProgressSection />;
};

const Health = () => {
  return <HeartMetrics />;
};

const Running = () => {
  return <WalkingTimeCard />;
};

const Sessions = () => {
  return (
    <div className="space-y-4">
      <LastSessionDate />
      <AvailableTrainer />
      <UpcomingEvents />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex">
      <DashboardSidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-[1200px] mx-auto">
          <Routes>
            <Route path="/" element={<Navigate to="overview" replace />} />
            <Route path="overview" element={<Overview />} />
            <Route path="progress" element={<Progress />} />
            <Route path="health" element={<Health />} />
            <Route path="running" element={<Running />} />
            <Route path="sessions" element={<Sessions />} />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
