import { useState } from "react";
import { Link } from "react-router-dom";
import "../cssFiles/JoinNow.css";

export function JoinNow() {
  const [showFeatures, setShowFeatures] = useState(false);

  const toggleFeatures = () => {
    setShowFeatures(prev => !prev);
  };

  return (
    <div className="joinnow-wrapper">
      <div className="something-else">
        <div className="create-text" id="id1">
          Create your learnChain account
        </div>

        <div className="create-text" id="id2" onClick={toggleFeatures}>
          Explore role-specific tools for instructors and students.
          <span className="dropdown-icon">{showFeatures ? "▲" : "▼"}</span>
        </div>

        {showFeatures && (
          <ul className="feature-list">
            <li>Track your learning progress</li>
            <li>Role-based dashboard for students & instructors</li>
            <li>Earn blockchain-backed rewards</li>
            <li>Learn with verified peers</li>
            <li>Real-time leaderboard rankings</li>
          </ul>
        )}
      </div>

      <div className="signup-container">
        <div className="signin">Already Have an account? 
        <Link to="/login" style={{ textDecoration: 'underline' }}>
          Log In!
        </Link>
        
        </div>
        <div className="join">
            <div id="signup-text">
                <span>Sign up to </span>
                <span id="learnChain"> learnChain</span></div>
            <div id="form-email">
                <div>Email</div>
                <input type="text" placeholder="Email"></input>
            </div>

            <div id="form-username">
                <div>Student ID</div>
                <input type="text" placeholder="Student ID"></input>
            </div>

            <div id="form-password">
                <div>Password</div>
                <input type="text" placeholder="Password"></input>
            </div>
            
            <div id="form-role">
                <div>Role</div>
                <div id="form-role-2">
                    <label className="radio-label">
                        <input type="radio" name="role" value="instructor" />
                        Instructor
                    </label>
                    <label className="radio-label">
                        <input type="radio" name="role" value="student" />
                        Student
                    </label>
                </div>
                </div>

            <div>
                <button className="signup-button">
                    Sign Up
                </button>
            </div>
        </div>
      </div>
    </div>
  );
}
