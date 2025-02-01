import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 to-secondary/5 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Welcome to GymSync Pro</h1>
          <p className="text-xl text-gray-600 mb-8">
            Your fitness journey starts here. Track your progress, set goals, and achieve greatness.
          </p>
          <Button onClick={() => navigate("/")}>Get Started</Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;