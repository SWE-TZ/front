import Image from "next/image";
import React from "react";

const UserProfile = () => {
    return (
        <div className="bg-gray-50 min-h-screen py-40 px-8">
            <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
                {/* Header Section */}
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                        <Image
                            src="/images/user.png"
                            alt="User"
                            width={80}
                            height={80}
                            className="rounded-full"
                        />
                        <div>
                            <h1 className="text-2xl font-bold text-teal-600">
                                asmaa desokey
                            </h1>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-semibold text-gray-500">asmaa@gmail.com</p>
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
                    <h2 className="text-xl font-semibold text-teal-600">Location</h2>
                    <p className="bg-gray-100 p-4 rounded-md text-gray-700 mt-2">
                        zayed
                    </p>
                </div>
            </div>
        </div>
    );
};

export default UserProfile;
