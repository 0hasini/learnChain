import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./navbar";
import "../cssFiles/Login.css";

export function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setShowPassword(prev => !prev);
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      const response = await fetch('http://localhost:3000/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include',
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || 'Login failed');
      }

      // Store the token in localStorage
      localStorage.setItem('token', data.data.token);
      localStorage.setItem('user', JSON.stringify(data.data.user));

      // Redirect based on user role
      if (data.data.user.role === 'student') {
        navigate('/studentdashboard');
      } else if (data.data.user.role === 'instructor') {
        navigate('/instructordashboard');
      }

    } catch (err) {
      setError(err.message || 'An error occurred during login');
    } finally {
      setLoading(false);
    }
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

        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleLogin} className="inputs">
          <div className="email">
            <div id="hd1">Email</div>
            <input
              type="email"
              placeholder="name@email.com"
              id="eml"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="password">
            <div id="hd2">Password</div>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" ......"
                id="pass"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
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

          <button 
            type="submit" 
            className="loginn-btn"
            disabled={loading}
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
