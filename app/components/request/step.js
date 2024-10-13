export default function Step({ step, label, currentStep, onClick }) {
  return (
    <div
      onClick={onClick}
      className={`flex flex-col items-center cursor-pointer ${
        currentStep >= step ? "text-dark" : "text-gray-600"
      }`}
    >
      <div
        className={`h-8 w-8 rounded-full flex items-center justify-center border-2 ${
          currentStep >= step
            ? "border-dark bg-dark text-light"
            : "border-gray-400"
        }`}
      >
        {step}
      </div>
      <span
        className={`text-sm mt-2 ${currentStep === step ? "text-black" : ""}`}
      >
        {label}
      </span>
    </div>
  );
}
