"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation"; // Import router for navigation

const DoctorProfile = () => {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    } else {
      alert("You should be signed in!");
      router.push("/pages/choose");
    }
  }, []); // Run only once on initial render

  return (
    <div className="bg-gray-50 min-h-screen py-20 px-8">
      <div className="w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
        {/* Header Section */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <Image
              src="/images/doctor_1.jpg"
              alt="Doctor"
              width={80}
              height={80}
              className="rounded-full"
            />
            <div>
              <h1 className="text-2xl font-bold text-teal-600">
                {user ? user.name : "No user"}
              </h1>
              <p className="text-gray-600">
                <span className="text-teal-500 font-semibold">
                  {user ? user.rating : "No user"}
                </span>{" "}
                ⭐️ (40 reviews)
              </p>
            </div>
          </div>
          <div className="text-right">
            <p className="text-lg font-bold text-teal-600">
              ${user ? user.price : "No rating"}
            </p>
            <p className="text-gray-500">
              {user ? user.specialization : "No specialization"}
            </p>
          </div>
        </div>

        {/* About Me Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-teal-600">About Me</h2>
          <p className="bg-gray-100 p-4 rounded-md text-gray-700 mt-2">
            {user ? user.about : "No information available"}
          </p>
        </div>

        {/* Skills Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-teal-600">
            Skills and Experience
          </h2>
          <p className="bg-gray-100 p-4 rounded-md text-gray-700 mt-2">
            {user && user.skills
              ? user.skills.length > 0
                ? user.skills.join(", ")
                : "No skills available"
              : "No user information"}
          </p>
        </div>

        {/* Reviews Section */}
        <div className="mt-6">
          <h2 className="text-xl font-semibold text-teal-600">
            Reviews About My Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            {user && user.reviews && user.reviews.length > 0 ? (
              user.reviews.map((review, index) => (
                <div
                  key={index}
                  className="bg-gray-100 p-4 rounded-md shadow-sm"
                >
                  <h3 className="text-teal-600 font-bold">{review.reviewer}</h3>
                  <div className="flex items-center space-x-1 text-yellow-500">
                    {Array.from({ length: review.rating }, (_, i) => (
                      <span key={i}>⭐</span>
                    ))}
                  </div>
                  <p className="text-gray-700 mt-2">{review.comment}</p>
                </div>
              ))
            ) : (
              <p>No reviews available</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
