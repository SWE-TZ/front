import Image from "next/image";
import React from "react";

const DoctorProfile = () => {
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
                                Dr. John Doe
                            </h1>
                            <p className="text-gray-600">
                                <span className="text-teal-500 font-semibold">4.5</span> ⭐️ (40 reviews)
                            </p>
                        </div>
                    </div>
                    <div className="text-right">
                        <p className="text-lg font-bold text-teal-600">$150</p>
                        <p className="text-gray-500">Cardiology</p>
                    </div>
                </div>

                {/* About Me Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-teal-600">About me</h2>
                    <p className="bg-gray-100 p-4 rounded-md text-gray-700 mt-2">
                        Experienced cardiologist with 10+ years in treating heart conditions.
                    </p>
                </div>

                {/* Skills Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-teal-600">Skills and experience</h2>
                    <p className="bg-gray-100 p-4 rounded-md text-gray-700 mt-2">
                        Experienced cardiologist with 10+ years in treating heart conditions.
                    </p>
                </div>

                {/* Reviews Section */}
                <div className="mt-6">
                    <h2 className="text-xl font-semibold text-teal-600">Reviews about my work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                        {/* Review 1 */}
                        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                            <h3 className="text-teal-600 font-bold">Alice Green</h3>
                            <div className="flex items-center space-x-1 text-yellow-500">
                                {/* {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i}>⭐</span>
                                ))} */}
                            </div>
                            <p className="text-gray-700 mt-2">
                                Dr. John is very knowledgeable and helped me with my heart condition.
                            </p>
                        </div>
                        {/* Review 2 */}
                        <div className="bg-gray-100 p-4 rounded-md shadow-sm">
                            <h3 className="text-teal-600 font-bold">Bob White</h3>
                            <div className="flex items-center space-x-1 text-yellow-500">
                                {/* {Array.from({ length: 5 }, (_, i) => (
                                    <span key={i}>⭐</span>
                                ))} */}
                            </div>
                            <p className="text-gray-700 mt-2">
                                Great consultation, but I had to wait a bit longer than expected.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DoctorProfile;
