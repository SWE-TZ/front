// app/components/myServices.js
import { useState } from "react";

const MyServices = () => {
  // Sample data for services, replace with actual user data
  const userServices = [
    "Cleaning",
    "Plumbing",
    "Electrical Work",
    "Painting",
    "Gardening",
  ];

  const [showServices, setShowServices] = useState(false);

  const toggleServices = () => {
    setShowServices((prev) => !prev);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-md shadow-md">
      <button
        onClick={toggleServices}
        className="w-full flex items-center justify-between bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
      >
        <span>My Services</span>
        <span>{showServices ? "-" : "+"}</span>
      </button>

      {showServices && (
        <ul className="mt-4 space-y-2">
          {userServices.map((service, index) => (
            <li
              key={index}
              className="p-2 bg-white rounded-md shadow-sm hover:bg-gray-200 transition-colors duration-200"
            >
              {service}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyServices;
