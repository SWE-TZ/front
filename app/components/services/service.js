"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";

// ServiceCard component
export default function Service() {
  const [services, setServices] = useState([]);
  const [error, setError] = useState(null);

  // Fetch data from the JSON file
  useEffect(() => {
    fetch("/models/detialedServices.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => setServices(data))
      .catch((error) => {
        console.error("Error fetching services:", error);
        setError(error.message);
      });
  }, []);

  return (
    <div className="container mx-auto p-4">
      {/* {error && <div className="text-red-500">Error: {error}</div>} */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <div
            key={service.id}
            className="relative max-w-sm rounded-lg overflow-hidden bg-[#FBE4CC] text-[#1B262C] border border-gray-200 shadow-lg transition-transform transform hover:scale-105"
          >
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                layout="fill"
                objectFit="cover"
                className="w-full h-full"
              />
              <div className="absolute inset-0 bg-black opacity-40"></div>
            </div>

            {/* Service content */}
            <div className="relative p-6 text-center text-[#FBE4CC]">
              <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
              <p className="mb-5 text-base leading-relaxed">
                {service.description}
              </p>
              <p className="text-xl font-semibold mb-5">
                Price: ${service.price}
              </p>
              <button className="bg-[#1B262C] text-[#FBE4CC] py-3 px-8 rounded-full shadow-md hover:bg-[#0F1A1E] transition-all duration-300 transform hover:scale-105">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
