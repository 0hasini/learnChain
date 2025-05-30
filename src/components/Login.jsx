import { useState } from "react";
import { Navbar } from "./navbar";
import "../cssFiles/Login.css";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  return (
    <div className="wrapper">
      <Navbar />
      <div className="container">
        <div className="welcome-wrapper">
          <span className="welcome">Welcome to </span>
          <span className="learnChain">learnChain</span>
        </div>

        <div className="login-msg">Log in to access your account!</div>

        <div className="inputs">
          <div className="email">
            <div id="hd1">Email</div>
            <input type="text" placeholder="name@email.com" id="eml" />
          </div>

          <div className="password">
            <div id="hd2">Password</div>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" ......"
                id="pass"
              />
              <span
                className="eye-icon"
                onClick={togglePassword}
                role="button"
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
        </div>

        <button className="loginn-btn">Login</button>
      </div>
    </div>
  );
}
