
import { Card } from "@/components/ui/card";
import { Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";

const tips = [
  "Increase protein intake in breakfast to stay fuller longer",
  "Drink water before meals to help with portion control",
  "Try to get 7-8 hours of sleep for better recovery",
  "Include colorful vegetables in every meal for better nutrition",
  "Take short walks after meals to aid digestion",
  "Practice mindful eating by avoiding distractions during meals",
  "Prep your meals in advance to maintain healthy eating habits",
  "Balance your plate with protein, carbs, and healthy fats",
  "Stay hydrated throughout your workout sessions",
  "Include rest days in your workout routine for proper recovery"
];

export const DailyTip = () => {
  const [currentTip, setCurrentTip] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTip((prev) => (prev + 1) % tips.length);
    }, 10000); // Rotate tips every 10 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="bg-gradient-to-br from-primary/10 to-secondary/5 p-6 rounded-[25px] shadow-lg">
      <div className="flex items-start gap-4">
        <div className="bg-primary/20 p-2 rounded-lg">
          <Lightbulb className="w-6 h-6 text-primary" />
        </div>
        <div>
          <h3 className="text-lg font-semibold mb-2">Tip of the Day</h3>
          <p className="text-gray-600 transition-all duration-300 animate-fade-in">
            {tips[currentTip]}
          </p>
        </div>
      </div>
    </Card>
  );
};
