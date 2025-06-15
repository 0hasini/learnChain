import { useState } from "react";
import { Link } from "react-router-dom";

export function JoinNow() {
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(prev => !prev);
  };

  return (
    <div className="flex justify-between m-0">
      <div className="bg-gradient-to-b from-blue-400 to-blue-700 h-screen w-1/2 m-0">
        <div className="text-gray-200 font-bold mt-20 tracking-tight text-3xl tracking-tight text-center">
          Create your learnChain account
        </div>

        <div className="text-gray-200 font-bold mt-4 text-xl text-center pl-27 cursor-pointer select-none flex items-center gap-1.5" onClick={toggleFeatures}>
          Explore role-specific tools for instructors and students.
          <span className="text-sm ml-1">{showFeatures ? "▲" : "▼"}</span>
        </div>

        {showFeatures && (
          <ul className="text-gray-200 text-xl mt-2.5 pl-40 list-disc leading-relaxed">
            <li>Track your learning progress</li>
            <li>Role-based dashboard for students & instructors</li>
            <li>Earn blockchain-backed rewards</li>
            <li>Learn with verified peers</li>
            <li>Real-time leaderboard rankings</li>
          </ul>
        )}
      </div>

      <div className="bg-white h-screen w-1/2 m-0 text-gray-900 pl-22.5">
        <div className="flex justify-end pr-22.5 mt-9 text-base">
          Already Have an account? 
          <Link to="/login" style={{ textDecoration: 'underline' }}>
            Log In!
          </Link>
        </div>
        <div className="mt-19 ml-9 text-2xl font-semibold tracking-wide w-112.5 h-115 pt-7.5 bg-gray-900/5 rounded-4xl tracking-tight font-inter">
            <div className="text-center pb-4">
                <span>Sign up to </span>
                <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent inline-block font-inter tracking-tight"> learnChain</span>
            </div>
            <div className="pl-15 mt-3.5 mb-3.5 text-sm font-medium pr-14.5">
                <div>Email</div>
                <input type="text" placeholder="Email" className="w-80 h-8.75 px-2 py-1.5 rounded-md border border-gray-300 text-sm outline-none mt-1.25 transition-colors duration-300 ease-in-out focus:border-blue-700 focus:shadow-sm focus:shadow-blue-500/20"></input>
            </div>

            <div id="form-username">
                <div>Username</div>
                <input type="text" placeholder="Username"></input>
            </div>

            <div className="pl-15 mt-3.5 mb-3.5 text-sm font-medium pr-14.5">
                <div>Password</div>
                <input type="text" placeholder="Password" className="w-80 h-8.75 px-2 py-1.5 rounded-md border border-gray-300 text-sm outline-none mt-1.25 transition-colors duration-300 ease-in-out focus:border-blue-700 focus:shadow-sm focus:shadow-blue-500/20"></input>
            </div>
            
            <div className="mt-5 text-base pl-15 mt-3.5 mb-3.5 text-sm font-medium pr-14.5">
                <div>Role</div>
                <div className="mt-2 mb-5 flex justify-around">
                    <label className="inline-flex items-center mr-5 font-medium">
                        <input type="radio" name="role" value="instructor" className="mr-1.5 accent-blue-700" />
                        Instructor
                    </label>
                    <label className="inline-flex items-center mr-5 font-medium">
                        <input type="radio" name="role" value="student" className="mr-1.5 accent-blue-700" />
                        Student
                    </label>
                </div>
            </div>

            <div>
                <button className="px-4 py-4 bg-gradient-to-b from-blue-400 to-blue-700 text-white ml-15 border-none rounded-md font-medium text-base cursor-pointer transition-colors duration-200 ease-in-out w-80 h-9">
                    Sign Up
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
