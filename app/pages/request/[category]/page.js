"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Header from "@/app/components/request/header";
import ProgressBar from "@/app/components/request/progressBar";
export default function Request({ params }) {

  const { category } = params;
  const router = useRouter();
  const [formData, setFormData] = useState({
    startAddress: "",
    unit: "",
    endAddress: "",
    taskDetails: "",
    taskSize: "",
  });

  const [showStartAddressFields, setShowStartAddressFields] = useState(true);
  const [showEndAddressFields, setShowEndAddressFields] = useState(false);
  const [showTaskOptions, setShowTaskOptions] = useState(false);
  const [showTaskDetails, setShowTaskDetails] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleNext = () => {
    sessionStorage.setItem("formData", JSON.stringify(formData));
    router.push(`../step2/${category}`);
  };

    // const query = new URLSearchParams({
    //     category: JSON.stringify(category)
    // }).toString();
    // const pathname = '/pages/step2/'+category+`?${query}`;


  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative z-10 max-w-4xl mx-auto bg-light p-8 rounded-lg">
        <ProgressBar currentStep={1} />
        <form onSubmit={(e) => e.preventDefault()}>
          {/* Start Address Section */}
          <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
            <button
              type="button"
              className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
              onClick={() => {
                setShowStartAddressFields(!showStartAddressFields);
                setShowEndAddressFields(false);
                setShowTaskOptions(false);
                setShowTaskDetails(false);
              }}
            >
              Start Address
            </button>
            {showStartAddressFields && (
              <div className="mt-4">
                <input
                  type="text"
                  name="startAddress"
                  placeholder="Street address"
                  value={formData.startAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-4 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                />
                <input
                  type="text"
                  name="unit"
                  placeholder="Unit or apt #"
                  value={formData.unit}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                />
                <button
                  type="button"
                  className="my-5 w-full px-4 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded bg-dark text-light font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
                  onClick={() => {
                    setShowEndAddressFields(true);
                    setShowStartAddressFields(false);
                  }}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
          {/* End Address Section */}
          <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
            <button
              type="button"
              className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
              onClick={() => {
                setShowStartAddressFields(false);
                setShowEndAddressFields(!showEndAddressFields);
                setShowTaskOptions(false);
                setShowTaskDetails(false);
              }}
            >
              End Address
            </button>
            {showEndAddressFields && (
              <div className="mt-4">
                <input
                  type="text"
                  name="endAddress"
                  placeholder="End Address"
                  value={formData.endAddress}
                  onChange={handleChange}
                  className="w-full px-4 py-2 mb-4 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                />
                <button
                  type="button"
                  className="my-5 w-full px-4 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded bg-dark text-light font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
                  onClick={() => {
                    setShowEndAddressFields(false);
                    setShowTaskOptions(true);
                  }}
                >
                  Continue
                </button>
              </div>
            )}
          </div>
          {/* Task Options Section */}
          <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
            <button
              type="button"
              className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
              onClick={() => {
                setShowStartAddressFields(false);
                setShowEndAddressFields(false);
                setShowTaskOptions(!showTaskOptions);
                setShowTaskDetails(false);
              }}
            >
              Task Options
            </button>
            {showTaskOptions && (
              <div className="mt-4">
                <label className="block text-lg font-medium text-gray-700 mb-2">
                  Task options
                </label>
                <div className="flex gap-4">
                  {["small", "mid", "large"].map((size) => (
                    <button
                      key={size}
                      type="button"
                      onClick={() => setFormData({ ...formData, taskSize: size })}
                      className={`py-2 px-4 rounded-md border ${
                        formData.taskSize === size ? "bg-gray-300" : "bg-gray-100"
                      }`}
                    >
                      {size.charAt(0).toUpperCase() + size.slice(1)}
                    </button>
                  ))}
                  <button
                    type="button"
                    className="my-5 w-full px-4 md:px-6 md:py-3 lg:px-8 lg:py-4 rounded bg-dark text-light font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
                    onClick={() => {
                      setShowTaskOptions(false);
                      setShowTaskDetails(true);
                    }}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </div>
          {/* Task Details Section */}
          <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
            <button
              type="button"
              className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
              onClick={() => {
                setShowStartAddressFields(false);
                setShowEndAddressFields(false);
                setShowTaskOptions(false);
                setShowTaskDetails(!showTaskDetails);
              }}
            >
              Tell us the details of your task
            </button>
            {showTaskDetails && (
              <div>
                <textarea
                  name="taskDetails"
                  placeholder="Enter details here..."
                  value={formData.taskDetails}
                  onChange={handleChange}
                  className="w-full mt-4 px-4 py-2 border border-dark rounded-md focus:ring-2 focus:ring-light focus:outline-none"
                  rows="4"
                />
                <button
                  type="button"
                  onClick={handleNext}
                  className="w-full bg-dark text-light py-2 rounded-md font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
                  
                >
                  Continue
                </button>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}