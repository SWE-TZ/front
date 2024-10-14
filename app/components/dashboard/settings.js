"use client";
import React, { useState } from "react";

const SettingsComponent = () => {
  const [formData, setFormData] = useState({
    email: "provider@example.com",
    password: "",
    notifications: true,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Settings updated:", formData);
    // Add functionality to update settings (API call)
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 bg-[#FBE4CC] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#1B262C] mb-6">
        Account Settings
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block text-[#1B262C] text-lg mb-2">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full p-2 border border-[#1B262C] rounded"
            placeholder="Enter your email"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#1B262C] text-lg mb-2">Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            className="w-full p-2 border border-[#1B262C] rounded"
            placeholder="Enter new password"
          />
        </div>
        <div className="mb-6">
          <label className="block text-[#1B262C] text-lg mb-2">
            Notifications
          </label>
          <div className="flex items-center">
            <input
              type="checkbox"
              name="notifications"
              checked={formData.notifications}
              onChange={handleInputChange}
              className="h-4 w-4 text-[#1B262C]"
            />
            <span className="ml-2 text-[#1B262C]">
              Receive email notifications
            </span>
          </div>
        </div>
        <button
          type="submit"
          className="w-full p-3 bg-[#1B262C] text-[#FBE4CC] rounded-lg hover:bg-[#374045]"
        >
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default SettingsComponent;
