import React, { useState } from "react";
import axios from "axios";
import { FaLock, FaEnvelope, FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../features/auth/AuthSlice";

const API_URL = "http://localhost:8000/api/v1/auth/login/";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const [form, setForm] = useState({ username: "", password: "" });

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    setError(null);

    try {
      const res = await axios.post(API_URL, {
        username: form.email,
        password: form.password,
      });

      const { access: token, user } = res.data;

      const role = user.role;

      localStorage.setItem("token", token);

      localStorage.setItem("userRole", role); 

      dispatch(setCredentials({ token, user }));

      if (role === "admin") {
        navigate("/");
      } else if (role === "farmer") {
        navigate("/farmers");
      } else {
        navigate("/farmers");
      }
    } catch (err) {
      console.error("Login failed:", err.response?.data || err.message);

      setError("Invalid credentials. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-sm p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        {/* Header Section */}
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-16 h-16 bg-[#00BF40FF] rounded-full text-white text-3xl mb-4">
            <FaLock />
          </div>

          <h2 className="text-3xl font-semibold text-gray-800">Welcome Back</h2>

          <p className="text-gray-500">
            Sign in to your Shamba Records account
          </p>
        </div>

        {/* Form Inputs */}
        <form className="space-y-6 " onSubmit={submit}>
          {/* Email Input */}

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700"
            >
              Email Address
            </label>

            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaEnvelope className="text-gray-400" />
              </div>

              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="block w-full pl-10 pr-3 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00BF40FF] focus:border-green-600"
                placeholder="Enter your email"
              />
            </div>
          </div>

          {/* Password Input */}

          <div>
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="relative mt-1 rounded-md shadow-sm">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <FaLock className="text-gray-400" />
              </div>

              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={form.password}
                onChange={handleChange}
                className="block w-full pl-10 pr-10 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                placeholder="Enter your password"
              />

              <div
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <FaEyeSlash className="text-gray-400" />
                ) : (
                  <FaEye className="text-gray-400" />
                )}
              </div>
            </div>
          </div>

          {/* Remember me & Forgot Password */}

          <div className="flex items-center justify-between text-sm">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-[#00BF40FF] border-gray-300 rounded focus:ring-[#00BF40FF]"
              />

              <label htmlFor="remember-me" className="ml-2 block text-gray-900">
                Remember me
              </label>
            </div>

            <a
              href="#"
              className="font-medium text-[#00BF40FF] hover:text-green-600"
            >
              Forgot password?
            </a>
          </div>

          {/* Sign In Button */}

          <button
            disabled={isLoading}
            type="submit"
            className="w-full px-4 py-3 text-lg font-medium text-white bg-[#00BF40FF] rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {isLoading ? "Signing in..." : "Sign In"}
          </button>

          {error && <p className="text-sm text-red-600 mt-2">{error}</p>}
        </form>

        {/* Register Link */}
        <div className="text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/auth/register"
            className="font-medium text-[#00BF40FF] hover:text-green-600"
          >
            Register as Farmer
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
