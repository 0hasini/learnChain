import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Navbar } from "./navbar";

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
    <div className="flex justify-center mt-37.5 h-50vh font-inter">
      <Navbar />
      <div className="w-87.5 h-87.5 bg-gray-900/5 rounded-2xl">
        <div className="pt-7.5 pb-1.25 text-2xl font-semibold pl-11">
          <span className="text-gray-900">Welcome to </span>
          <span className="bg-gradient-to-b from-blue-400 to-blue-700 bg-clip-text text-transparent inline-block font-inter text-2xl font-bold tracking-tight">learnChain</span>
        </div>

        <div className="text-gray-900/70 font-medium text-sm flex justify-center">Log in to access your account!</div>

        <div className="inputs">
          <div className="email">
            <div id="hd1">Email</div>
            <input type="text" placeholder="name@email.com" id="eml" />
          </div>

          <div className="mb-5">
            <div className="text-gray-900 text-xs">Password</div>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder=" ......"
                id="pass"
              />
              <span
                className="absolute right-2 top-1/2 transform -translate-y-1/2 cursor-pointer"
                onClick={togglePassword}
                role="button"
                aria-label="Toggle password visibility"
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>

        <button className="loginn-btn">Login</button>
      </div>
    </div>
  );
}
