"use client";
import React, { useState, useEffect } from "react";
import Header from "@/app/components/request/header";
import ProgressBar from "@/app/components/request/progressBar";
import { useRouter } from "next/navigation"; 

export default function Step2({ params }) {

  const {category} = params;
  const router = useRouter(); 
  const [formData, setFormData] = useState({
    startAddress: "",
    unit: "",
    endAddress: "",
    taskDetails: "",
    taskSize: "",
  });
const [currentStep, setCurrentStep] = useState(1);
  useEffect(() => {
    const savedData = JSON.parse(sessionStorage.getItem("formData"));
    if (savedData) {
      setFormData(savedData);
    } else {
      router.push("../pages/request");
    }
  }, [router]);

  const handleNext = () => {
    sessionStorage.setItem("formData", JSON.stringify(formData));
    router.push(`../step3/${category}`);
  };
  const handleStepClick = (step) => {
    setCurrentStep(step);
    router.push("../pages/request");
  };
  

  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="relative z-10 max-w-4xl mx-auto bg-light p-8 rounded-lg">
        <ProgressBar currentStep={2} onStepClick={handleStepClick}/>
        <h2 className="text-lg font-bold mb-4">Step 2: Confirm Details</h2>
        <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
          STEP 2
        </div>
        <button
          onClick={handleNext}
          className="w-full bg-dark text-light py-2 rounded-md font-semibold hover:bg-gray-400 transition duration-200 border border-dark"
        >
          Confirm & Continue
        </button>
      </div>
    </div>
  );
}