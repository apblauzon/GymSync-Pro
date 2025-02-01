import { useEffect, useState } from "react";
import { Card } from "@/components/ui/card";
import { 
  Activity, 
  Download, 
  LogOut, 
  MoreHorizontal, 
  Settings, 
  Trophy, 
  User,
  Heart,
  Timer,
  Route,
  Flame,
  Dumbbell
} from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { LineChart, Line, ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

const activityData = [
  { value: 30 },
  { value: 40 },
  { value: 35 },
  { value: 50 },
  { value: 45 },
  { value: 60 },
  { value: 55 },
];

const progressData = [
  { name: 'Progress', value: 85 },
  { name: 'Remaining', value: 15 },
];

const COLORS = ['#7B6EF6', '#E0E0E0'];

const Dashboard = () => {
  const navigate = useNavigate();

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
    <div className="h-screen bg-[#F8F7FF] p-6">
      <div className="max-w-[1800px] mx-auto grid grid-cols-12 gap-4 h-full">
        {/* Progress Section */}
        <Card className="col-span-3 p-4">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-semibold text-lg">Progress</h2>
            <select className="bg-[#F3F0FF] px-3 py-1 rounded-full text-sm">
              <option>This Week</option>
            </select>
          </div>
          <div className="relative w-40 h-40 mx-auto mb-4">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={progressData}
                  innerRadius={35}
                  outerRadius={50}
                  paddingAngle={0}
                  dataKey="value"
                >
                  {progressData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
              <div className="text-3xl font-bold">85%</div>
              <div className="text-xs text-gray-500">Goal</div>
            </div>
          </div>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Dumbbell className="w-4 h-4 text-[#7B6EF6]" />
                <span className="text-sm">Cardio Training</span>
              </div>
              <span className="text-sm font-medium">85%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-[#7B6EF6]" />
                <span className="text-sm">Strength Training</span>
              </div>
              <span className="text-sm font-medium">75%</span>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-2">
                <Timer className="w-4 h-4 text-[#7B6EF6]" />
                <span className="text-sm">Flexibility Training</span>
              </div>
              <span className="text-sm font-medium">65%</span>
            </div>
          </div>
        </Card>

        {/* Heart Beat Section */}
        <div className="col-span-9 grid grid-cols-12 gap-4">
          <Card className="col-span-6 bg-[#F2FCE2] p-4">
            <div className="flex justify-between mb-3">
              <h2 className="font-semibold text-lg">Heart Beat</h2>
              <MoreHorizontal className="text-gray-500" />
            </div>
            <div className="flex items-baseline gap-2 mb-2">
              <div className="text-4xl font-bold">110</div>
              <div className="text-lg">bpm</div>
            </div>
            <div className="inline-block bg-white px-3 py-1 rounded-full text-sm mb-3">
              Normal
            </div>
            <div className="text-sm text-gray-600 mb-3">
              You are calm and ready for exercises!
            </div>
            <ChartContainer className="h-20" config={{}}>
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
          <div className="col-span-6 grid grid-cols-2 gap-4">
            <Card className="bg-[#FF9F7B] text-white p-4">
              <Timer className="w-5 h-5 mb-2" />
              <h3 className="text-sm mb-1">Time</h3>
              <div className="text-2xl font-bold">56m</div>
            </Card>
            <Card className="bg-[#F3F0FF] p-4">
              <Route className="w-5 h-5 mb-2" />
              <h3 className="text-sm mb-1">Total distance</h3>
              <div className="text-2xl font-bold">5km</div>
            </Card>
            <Card className="bg-[#FFE7F9] p-4">
              <Flame className="w-5 h-5 mb-2" />
              <h3 className="text-sm mb-1">Energy burn</h3>
              <div className="text-2xl font-bold">1345 kal</div>
            </Card>
            <Card className="bg-[#E7F9FF] p-4">
              <Activity className="w-5 h-5 mb-2" />
              <h3 className="text-sm mb-1">Symmetry</h3>
              <div className="text-2xl font-bold">95%</div>
            </Card>
          </div>

          {/* Profile Section */}
          <Card className="col-span-6 bg-[#7B6EF6] text-white p-4">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold">My Profile</h2>
              <MoreHorizontal />
            </div>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
                <User size={24} className="text-[#7B6EF6]" />
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-1">{clientData?.name}</h3>
                <div className="flex items-center gap-4 text-sm">
                  <div className="flex items-center gap-2">
                    <Trophy size={14} />
                    <span>Advanced</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Activity size={14} />
                    <span>14,750 steps</span>
                  </div>
                </div>
              </div>
            </div>
          </Card>

          {/* Stats Cards */}
          <Card className="col-span-6 bg-[#FFF9E7] p-4">
            <div className="grid grid-cols-3 gap-4">
              <div>
                <h3 className="text-gray-500 text-sm mb-1">Weight</h3>
                <div className="text-xl font-semibold">{clientData?.weight} kg</div>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm mb-1">Height</h3>
                <div className="text-xl font-semibold">{clientData?.height} cm</div>
              </div>
              <div>
                <h3 className="text-gray-500 text-sm mb-1">Age</h3>
                <div className="text-xl font-semibold">30 yrs</div>
              </div>
            </div>
          </Card>

          {/* Last Session */}
          <Card className="col-span-12 bg-[#4CAF50] text-white p-4">
            <h2 className="text-lg font-semibold">
              Last Session: {workouts?.[0]?.start_time ? new Date(workouts[0].start_time).toLocaleDateString() : 'No sessions yet'}
            </h2>
          </Card>
        </div>

        {/* Right Side - Events and Actions */}
        <div className="col-span-3 space-y-4">
          <Card className="bg-[#7B6EF6] text-white p-4">
            <h2 className="text-lg font-semibold mb-3">Upcoming Events</h2>
            <div className="space-y-3">
              {challenges?.map((challenge) => (
                <div key={challenge.challenge_id} className="flex items-center gap-3">
                  <div className="bg-[#6A5CE8] p-2 rounded-lg text-center min-w-[48px]">
                    <div className="text-xs">{new Date(challenge.start_date).toLocaleDateString('en-US', { weekday: 'short' }).toUpperCase()}</div>
                    <div className="text-lg font-bold">{new Date(challenge.start_date).getDate()}</div>
                  </div>
                  <div>
                    <div className="font-medium text-sm">{challenge.challenge_name}</div>
                    <div className="text-xs opacity-75">
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

          <div className="flex flex-col gap-3">
            <button className="flex items-center justify-center gap-2 bg-[#FF6B6B] text-white p-3 rounded-xl text-sm">
              <Download className="w-4 h-4" />
              Download
            </button>
            <button className="flex items-center justify-center gap-2 bg-[#7B6EF6] text-white p-3 rounded-xl text-sm">
              <Settings className="w-4 h-4" />
              Settings
            </button>
            <button 
              onClick={handleLogout}
              className="flex items-center justify-center gap-2 bg-[#9747FF] text-white p-3 rounded-xl text-sm"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;