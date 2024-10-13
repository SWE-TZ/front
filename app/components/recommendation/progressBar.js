import React from 'react';
import { useRouter } from 'next/navigation';

const ProgressBar = ({ currentStep, onStepClick }) => {
  const router = useRouter();
  // const handleStepClick = (step) => {
  //   if (step <= currentStep) {
  //     if(step===1){
  //       router.push("../pages/request");
  //     }
  //     else{
  //       router.push(`../pages/step${step}`);
  //     }
  //   }
  //   else{
  //     if(currentStep===1){
  //       router.push("../pages/request");
  //     }else{
  //     router.push(`../pages/step${currentStep}`);
  //     }
  //   }
  // };
  return (
    <div className="mb-6 border border-dark p-4 rounded-md w-[800px] h-[92px] mx-auto mt-[20px]">
      <div className="flex justify-between items-center mb-6">
        <Step step={1} label="Describe your task" currentStep={currentStep}  />
        <Step step={2} label="" currentStep={currentStep}  />
        <Step step={3} label="" currentStep={currentStep}  />
        <Step step={4} label="" currentStep={currentStep}  />
      </div>
      <div className="relative w-full h-2 bg-gray-100 rounded-full">
        <div
          className="absolute top-0 h-2 bg-dark rounded-full transition-all duration-300"
          style={{ width: `${(currentStep / 4) * 100}%` }} // Progress based on the current step
        />
      </div>
    </div>
  );
};

const Step = ({ step, label, currentStep, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer ${currentStep >= step ? "text-bg" : "text-gray-600"}`}>
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${
          currentStep >= step ? "border-dark bg-dark text-light" : "border-gray-400"
        }`}
      >
        {step}
      </div>
      <span className={`text-sm mt-2 ${currentStep === step ? "text-black" : ""}`}>
        {label}
      </span>
    </div>
  );
};

export default ProgressBar;