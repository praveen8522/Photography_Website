import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }
    setError("");
    alert("Account Created Successfully!");
    navigate("/signin");
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-gray-900 to-gray-700 text-white">
      <div className="w-full max-w-md bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center mb-6">Sign Up</h2>
        {error && <p className="text-red-400 text-sm text-center mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm mb-2">Username</label>
            <input
              type="text"
              name="username"
              className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              value={formData.username}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm mb-2">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className="mb-4 relative">
            <label className="block text-sm mb-2">Password</label>
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              className="w-full p-3 border border-gray-600 rounded bg-gray-700 text-white focus:ring-2 focus:ring-blue-500"
              value={formData.password}
              onChange={handleChange}
            />
            <button
              type="button"
              className="absolute right-3 top-10 text-gray-400 hover:text-white"
              onClick={togglePasswordVisibility}
            >
              {showPassword ? "🙈" : "👁️"}
            </button>
          </div>
          <button
            type="submit"
            className="w-full py-3 mt-4 bg-blue-500 hover:bg-blue-600 rounded-lg font-bold transition-all"
          >
            Sign Up
          </button>
          <p className="text-center mt-4 text-gray-400">
            Already have an account?{" "}
            <Link to="/signin" className="text-blue-400 hover:text-blue-500">
              Sign In
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}
