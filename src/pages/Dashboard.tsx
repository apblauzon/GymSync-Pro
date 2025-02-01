import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Activity, 
  Download, 
  LogOut, 
  MoreHorizontal, 
  Settings, 
  Trophy, 
  User 
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const activityData = [
  { value: 30 },
  { value: 40 },
  { value: 35 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
  { value: 55 },
];

const Dashboard = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(85);

  const { data: clientData } = useQuery({
    queryKey: ['client'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');
      
      const { data: client } = await supabase
        .from('clients')
        .select('*')
        .eq('user_id', user.id)
        .single();
      
      return client;
    }
  });

  const { data: workouts } = useQuery({
    queryKey: ['workouts'],
    queryFn: async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) throw new Error('No user found');
      
      const { data } = await supabase
        .from('workouts')
        .select('*')
        .eq('client_id', clientData?.clients_id)
        .order('start_time', { ascending: false })
        .limit(1);
      
      return data;
    },
    enabled: !!clientData?.clients_id
  });

  const { data: challenges } = useQuery({
    queryKey: ['challenges'],
    queryFn: async () => {
      const { data } = await supabase
        .from('group_challenges')
        .select('*')
        .order('start_date', { ascending: true })
        .limit(4);
      
      return data;
    }
  });

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-[#F8F7FF] p-8">
      <div className="max-w-7xl mx-auto grid grid-cols-12 gap-6">
        {/* Progress Section */}
        <Card className="col-span-3 p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-xl">Progress</h2>
            <select className="bg-[#F3F0FF] px-3 py-1 rounded-full text-sm">
              <option>This Week</option>
            </select>
          </div>
          <div className="relative w-48 h-48 mx-auto mb-6">
            <Progress value={progress} className="w-48 h-48" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-4xl font-bold">{progress}%</div>
              <div className="text-sm text-gray-500">Goal Completion</div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex justify-between items-center">
              <span>Cardio Training</span>
              <span>85%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Strength Training</span>
              <span>75%</span>
            </div>
            <div className="flex justify-between items-center">
              <span>Flexibility Training</span>
              <span>65%</span>
            </div>
          </div>
        </Card>

        {/* Heart Beat Section */}
        <div className="col-span-9 grid grid-cols-12 gap-6">
          <Card className="col-span-6 bg-[#F2FCE2] p-6">
            <div className="flex justify-between mb-4">
              <h2 className="font-semibold text-xl">Heart Beat</h2>
              <MoreHorizontal className="text-gray-500" />
            </div>
            <div className="text-5xl font-bold mb-2">
              110 <span className="text-2xl font-normal">bpm</span>
            </div>
            <div className="inline-block bg-white px-3 py-1 rounded-full text-sm mb-4">
              Normal
            </div>
            <div className="text-sm text-gray-600 mb-4">
              You are calm and ready for exercises!
            </div>
            <ChartContainer className="h-24" config={{}}>
              <ResponsiveContainer>
                <LineChart data={activityData}>
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#4CAF50" 
                    strokeWidth={2} 
                    dot={false}
                  />
                  <ChartTooltip
                    content={({ active, payload }) => {
                      if (!active || !payload?.length) return null;
                      return (
                        <ChartTooltipContent>
                          {payload[0].value} bpm
                        </ChartTooltipContent>
                      );
                    }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </ChartContainer>
          </Card>

          {/* Stats Grid */}
          <div className="col-span-6 grid grid-cols-2 gap-6">
            <Card className="bg-[#FF9F7B] text-white p-6">
              <h3 className="text-lg mb-2">Time</h3>
              <div className="text-4xl font-bold">56m</div>
            </Card>
            <Card className="bg-[#F3F0FF] p-6">
              <h3 className="text-lg mb-2">Total distance</h3>
              <div className="text-4xl font-bold">5km</div>
            </Card>
            <Card className="bg-[#FFE7F9] p-6">
              <h3 className="text-lg mb-2">Energy burn</h3>
              <div className="text-4xl font-bold">1345 kal</div>
            </Card>
            <Card className="bg-[#E7F9FF] p-6">
              <h3 className="text-lg mb-2">Symmetry</h3>
              <div className="text-4xl font-bold">95%</div>
            </Card>
          </div>

          {/* Profile Section */}
          <Card className="col-span-6 bg-[#7B6EF6] text-white p-6">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-semibold">My Profile</h2>
              <MoreHorizontal />
            </div>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center">
                <User size={32} className="text-[#7B6EF6]" />
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-2">{clientData?.name}</h3>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2">
                    <Trophy size={16} />
                    <span>Advanced</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity size={16} />
                    <span>14,750 steps</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <Card className="col-span-6 bg-[#FFF9E7] p-6">
            <div className="grid grid-cols-3 gap-6">
              <div>
                <h3 className="text-gray-500 mb-2">Weight</h3>
                <div className="text-2xl font-semibold">{clientData?.weight} kg</div>
              </div>
              <div>
                <h3 className="text-gray-500 mb-2">Height</h3>
                <div className="text-2xl font-semibold">{clientData?.height} cm</div>
              </div>
              <div>
                <h3 className="text-gray-500 mb-2">Age</h3>
                <div className="text-2xl font-semibold">30 yrs</div>
              </div>
            </div>
          </Card>

          {/* Last Session */}
          <Card className="col-span-12 bg-[#4CAF50] text-white p-6">
            <h2 className="text-xl font-semibold">
              Last Session: {workouts?.[0]?.start_time ? new Date(workouts[0].start_time).toLocaleDateString() : 'No sessions yet'}
            </h2>
          </Card>
        </div>

        {/* Right Side - Events and Actions */}
        <div className="col-span-3 space-y-6">
          <Card className="bg-[#7B6EF6] text-white p-6">
            <h2 className="text-xl font-semibold mb-4">Upcoming Events</h2>
            <div className="space-y-4">
              {challenges?.map((challenge) => (
                <div key={challenge.challenge_id} className="flex items-center gap-4">
                  <div className="bg-[#6A5CE8] p-2 rounded-lg text-center">
                    <div className="text-sm">{new Date(challenge.start_date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</div>
                    <div className="text-xl font-bold">{new Date(challenge.start_date).getDate()}</div>
                  </div>
                  <div>
                    <div className="font-semibold">{challenge.challenge_name}</div>
                    <div className="text-sm opacity-75">
                      {new Date(challenge.start_date).toLocaleTimeString('en-US', { 
                        hour: 'numeric', 
                        minute: '2-digit',
                        hour12: true 
                      })}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Card>

          <div className="flex flex-col gap-4">
            <button className="flex items-center justify-center gap-2 bg-[#FF6B6B] text-white p-4 rounded-xl">
              <Download />
              Download
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#7B6EF6] text-white p-4 rounded-xl">
              <Settings />
              Settings
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-[#9747FF] text-white p-4 rounded-xl"
            >
              <LogOut />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;