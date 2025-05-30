import { NavbarS } from "./navbar-s";
import boyImage from '../assets/boy.png'; 
import { Calander } from "./Calander";
import { LeaderBoard2 } from "./LeaderBoard-2";
import { useState, useEffect } from "react";
import { DashboardComponent } from "./DashboardComponent";

export function StudentDashboard() {
  const [greeting, setGreeting] = useState("");

  useEffect(() => {
    const getGreeting = () => {
      const hour = new Date().getHours();
      if (hour < 12) return "Good Morning";
      if (hour < 18) return "Good Afternoon";
      return "Good Evening";
    };
    setGreeting(getGreeting());
  }, []);

  return (
    <div className="parent-wrapper min-h-screen bg-white">
      <NavbarS />
      <div className="px-[120px]">
        <div className="flex gap-8 mt-[100px]">
          {/* Welcome Banner */}
          <div className="flex-1 flex flex-col items-center">
            <div className="relative overflow-hidden bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 rounded-[40px] p-8 text-white shadow-lg cursor-pointer group transition-all duration-300 hover:shadow-xl w-full mb-6">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white opacity-10 rounded-full -ml-24 -mb-24"></div>
              <div className="relative flex items-center">
                <div className="relative">
                  <img 
                    src={boyImage} 
                    className="w-[160px] h-[210px] mr-8 rounded-2xl shadow-lg transform transition-transform duration-300 group-hover:scale-105" 
                    alt="Profile"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold mb-2">{greeting}, Hasini Reddy</h2>
                  <p className="text-xl opacity-90">Welcome Back!</p>
                  <p className="text-lg opacity-80">Peer learning never sleeps. What will you contribute today?</p>
                </div>
              </div>
            </div>
            {/* <div className="w-[330px] mb-2">
              <p className="text-lg font-semibold text-gray-800 mb-5">Here's what you can do today:</p>
            </div>
            <DashboardComponent /> */}
          </div>
          
          
          {/* Right Column - Calendar and Leaderboard */}
          <div className="w-[330px] space-y-6">
            <Calander />
            <LeaderBoard2 />
          </div>
          
        </div>
      </div>
    </div>
  );
}
