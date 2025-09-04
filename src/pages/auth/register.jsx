// src/components/CreateFarmerAccountForm.jsx
import React, { useState } from "react";
import { FaUser, FaEye } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

import { useDispatch } from "react-redux";

import { useRegisterMutation } from "../../services/api";
import { setCredentials } from "../../features/auth/AuthSlice";

const CreateFarmerAccountForm = () => {
  const [showPassword, setShowPassword] = React.useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [register, { isLoading, error }] = useRegisterMutation();

  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    confirm_password: "",
    role: "farmer",
  });

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (form.password !== form.confirm_password) {
      alert("Passwords do not match");
      return;
    }
    const payload = {
      username: form.email,
      email: form.email,
      first_name: form.first_name,
      last_name: form.last_name,
      phone: form.phone,
      address: form.address,
      role: form.role,
      password: form.password,
      confirm_password: form.confirm_password,
    };

    try {
      const res = await register(payload).unwrap();

      dispatch(setCredentials({ token: res.token, user: res.user }));
      navigate("/auth/login"); 
    } catch (err) {
      console.error("Register failed", err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-white p-4">
      <div className="w-full max-w-2xl p-8 space-y-6 bg-white rounded-lg shadow-2xl">
        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-16 h-16 bg-[#00BF40FF] rounded-full text-white text-3xl mb-4">
            <FaUser />
          </div>
          <h2 className="text-3xl font-semibold text-gray-800">Create Farmer Account</h2>
          <p className="text-gray-500">Fill in your details to get started</p>
        </div>

        <form className="space-y-6" onSubmit={onSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">First Name</label>
              <input
                type="text"
                id="first_name"
                name="first_name"
                value={form.first_name}
                onChange={onChange}
                placeholder="John"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
            <div>
              <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">Last Name</label>
              <input
                type="text"
                id="last_name"
                name="last_name"
                value={form.last_name}
                onChange={onChange}
                placeholder="Smith"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <div className="relative mt-1 rounded-md shadow-sm">
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={onChange}
                placeholder="john@example.com"
                className="block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={form.phone}
              onChange={onChange}
              placeholder="+254711023567"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div>
            <label htmlFor="address" className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              id="address"
              name="address"
              value={form.address}
              onChange={onChange}
              placeholder="Malaba"
              className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={form.password}
                onChange={onChange}
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
                {/* <div
                              className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
                              onClick={() => setShowPassword(!showPassword)}
                            >
                              {showPassword ? (
                                <FaEyeSlash className="text-gray-400" />
                              ) : (
                                <FaEye className="text-gray-400" />
                              )}
                            </div> */}
            </div>
            <div>
              <label htmlFor="confirm_password" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <input
                type="password"
                id="confirm_password"
                name="confirm_password"
                value={form.confirm_password}
                onChange={onChange}
                placeholder="••••••••"
                className="mt-1 block w-full px-4 py-2 bg-gray-50 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
              />
            </div>
          </div>

          <div className="flex items-center">
            <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-[#00BF40FF] border-gray-300 rounded focus:ring-green-500" />
            <label htmlFor="terms" className="ml-2 block text-sm text-gray-900">
              I agree to the <a href="#" className="text-green-600 hover:text-green-500">Terms of Service</a> and <a href="#" className="text-[#00BF40FF] hover:text-green-600">Privacy Policy</a>
            </label>
          </div>

          <button
            type="submit"
            disabled={isLoading}
            className="w-full px-4 py-3 text-lg font-medium text-white bg-[#00BF40FF] rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            {isLoading ? "Creating..." : "Create Farmer Account"}
          </button>

          {error && (
            <p className="text-sm text-red-600">
              {typeof error?.data === "string" ? error.data : "Registration failed"}
            </p>
          )}
        </form>

        <div className="text-center text-sm text-gray-500">
          Already have an account?
          <Link to="/auth/login" className="font-medium text-[#00BF40FF] hover:text-green-600">
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CreateFarmerAccountForm;
