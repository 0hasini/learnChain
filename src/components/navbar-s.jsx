import { LearnChain } from "./learnChain"
import { useState, useRef, useEffect } from "react";
import boyImage from '../assets/boy.png';
import "../cssFiles/navbar-s.css"
import { useLocation, useNavigate } from "react-router-dom";

export function NavbarS(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const getButtonClass = (path) => {
        return location.pathname.includes(path)
            ? "nav-btn nav-btn-underline"
            : "nav-btn";
    };

    return(
        <div className="navbar-parent">
            <LearnChain/>
            <div className="dashboard-buttons font-mono text-lg">
                <button id="home" className={getButtonClass("/studentdashboard")} onClick={() => navigate("/studentdashboard")}>Home</button>
                <button id="assignments" className={getButtonClass("/assignments")} onClick={() => navigate("/assignments")}>Assignments</button>
                <button id="questions" className={getButtonClass("/questions")} onClick={() => navigate("/questions")}>Questions</button>
                <div className="relative" ref={dropdownRef}>
                    <button 
                        id="profile" 
                        className="flex items-center gap-2"
                        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    >
                        <img 
                            src={boyImage} 
                            alt="Profile" 
                            className="w-9 h-9 rounded-full border-2 border-blue-400 cursor-pointer"
                        />
                    </button>
                    
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2 z-50 border border-gray-100">
                            <a href="/profile" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                                Profile
                            </a>
                            <a href="/rewards" className="block px-4 py-2 text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                                Rewards History
                            </a>
                            <div className="border-t border-gray-100 my-1"></div>
                            <a href="/" className="block px-4 py-2 text-red-600 hover:bg-red-50">
                                Logout
                            </a>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}