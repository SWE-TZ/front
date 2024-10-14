// components/Header.js
"use client";
import { useState, useEffect } from "react";
import {
  BellIcon,
  MagnifyingGlassIcon,
  PlusCircleIcon,
  UserCircleIcon,
  SunIcon,
  MoonIcon,
} from "@heroicons/react/24/outline"; // Correct import path for v2
import AddServiceModal from "./addService";

const Header = () => {
  const [theme, setTheme] = useState("dark");
  const [showNotifications, setShowNotifications] = useState(false);
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showAddServiceModal, setShowAddServiceModal] = useState(false);

  // Initialize theme based on local storage or system preference
  useEffect(() => {
    if (
      localStorage.getItem("color-theme") === "dark" ||
      (!("color-theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      setTheme("dark");
    } else {
      document.documentElement.classList.remove("dark");
      setTheme("light");
    }
  }, []);

  const toggleTheme = () => {
    if (theme === "dark") {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("color-theme", "light");
      setTheme("light");
    } else {
      document.documentElement.classList.add("dark");
      localStorage.setItem("color-theme", "dark");
      setTheme("dark");
    }
  };

  return (
    <header className="flex justify-between items-center p-6 bg-gray-800 shadow-md">
      <div className="flex items-center space-x-4">
        {/* Theme Toggle */}
        <button onClick={toggleTheme} className="focus:outline-none">
          {theme === "dark" ? (
            <SunIcon className="w-6 h-6 text-[#FBE4CC]" />
          ) : (
            <MoonIcon className="w-6 h-6 text-[#1B262C]" />
          )}
        </button>
        {/* Search Bar */}
        <div className="relative">
          <input
            type="text"
            placeholder="Search for jobs..."
            className="pl-10 pr-4 py-2 rounded-md bg-gray-700 text-[#FBE4CC] focus:outline-none focus:ring-2 focus:ring-[#FBE4CC]"
          />
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
        </div>
      </div>
      <div className="flex items-center space-x-4">
        {/* Add Service Button */}
        <button
          onClick={() => setShowAddServiceModal(true)}
          className="flex items-center bg-[#FBE4CC] text-[#1B262C] px-4 py-2 rounded-md font-semibold hover:bg-[#e6d1b9] transition-colors duration-200"
        >
          <PlusCircleIcon className="w-5 h-5 mr-2" />
          Add Service
        </button>
        {/* Notifications */}
        <div className="relative">
          <button
            onClick={() => setShowNotifications(!showNotifications)}
            className="focus:outline-none"
          >
            <BellIcon className="w-6 h-6 text-[#FBE4CC] hover:text-gray-400 transition-colors duration-200" />
          </button>
          {showNotifications && (
            <div className="absolute right-0 mt-2 w-64 bg-gray-800 rounded-md shadow-lg z-10">
              <div className="p-4">
                <h3 className="text-lg font-semibold mb-2 text-[#FBE4CC]">
                  Notifications
                </h3>
                <ul>
                  <li className="flex items-center p-2 hover:bg-gray-700 rounded-md cursor-pointer transition-colors duration-200">
                    <BellIcon className="w-5 h-5 mr-2 text-[#FBE4CC]" />
                    <span>You have a new job request.</span>
                  </li>
                  {/* Add more notifications as needed */}
                </ul>
              </div>
            </div>
          )}
        </div>
        {/* Profile Dropdown */}
        <div className="relative">
          <button
            onClick={() => setShowProfileMenu(!showProfileMenu)}
            className="flex items-center focus:outline-none"
          >
            <UserCircleIcon className="w-10 h-10 text-[#FBE4CC]" />
          </button>
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 bg-gray-800 rounded-md shadow-lg z-10">
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md text-[#FBE4CC]"
              >
                Profile
              </a>
              <a
                href="#"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md text-[#FBE4CC]"
              >
                Settings
              </a>
              <a
                href="/"
                className="block px-4 py-2 hover:bg-gray-700 rounded-md text-[#FBE4CC]"
              >
                Logout
              </a>
            </div>
          )}
        </div>
      </div>
      {/* Add Service Modal */}
      {showAddServiceModal && (
        <AddServiceModal onClose={() => setShowAddServiceModal(false)} />
      )}
    </header>
  );
};

export default Header;
