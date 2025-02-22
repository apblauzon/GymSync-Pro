
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
import { CalorieStats } from "@/components/dashboard/CalorieStats";
import { DailyTip } from "@/components/dashboard/DailyTip";

const Overview = () => {
  return (
    <div className="space-y-6">
      <ProfileSection />
      <div className="grid grid-cols-2 gap-6">
        <CalorieStats />
        <DailyTip />
      </div>
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
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Your Progress</h2>
      <ProgressSection />
    </div>
  );
};

const Health = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Health Metrics</h2>
      <div className="grid grid-cols-3 gap-4">
        <HeartMetrics />
        <WalkingTimeCard />
        <LastSessionDate />
      </div>
    </div>
  );
};

const Running = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Running Stats</h2>
      <AvailableTrainer />
    </div>
  );
};

const Sessions = () => {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold">Upcoming Sessions</h2>
      <UpcomingEvents />
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-[#F8F7FF] flex">
      <DashboardSidebar />
      <main className="flex-1 p-6 overflow-y-auto">
        <div className="max-w-[1600px] mx-auto">
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
