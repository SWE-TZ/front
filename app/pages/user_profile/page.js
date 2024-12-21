"use client";
import Image from "next/image";
import React from "react";
import { useState,useEffect } from "react";

const UserProfile = () => {
    const [user, setUser] = useState(null);

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
        <div className="bg-gray-50 min-h-screen py-40 px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image
                            src={user ? `${user.photo}` : "/images/doctor_3.jpg"}
                            alt="User"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-teal-600">
                                {user ? `${user.name}`: "No name"}
                            </h1>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold text-gray-500">{user?`${user.email}`:"No email"}</p>
                    </div>
                </div>

                {/* interests Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-teal-600">Departments interested in</h2>
                    <p className="bg-gray-100 p-4 rounded-md text-gray-700 mt-2">
                    Cardiology,Neurology
                    </p>
                </div>

                {/* location Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-teal-600">Email</h2>
                    <p className="bg-gray-100 p-4 rounded-md text-gray-700 mt-2">
                        zayed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
