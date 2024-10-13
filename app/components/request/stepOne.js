import React, { useState } from "react";

export default function StepOne({ formData, handleChange, setCurrentStep }) {
  const [showStartAddressFields, setShowStartAddressFields] = useState(true);
  const [showEndAddressFields, setShowEndAddressFields] = useState(false);

  return (
    <div>
      {/* Start Address Section */}
      <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
        <button
          type="button"
          className="w-full text-dark py-2 rounded-md text-left px-4 border font-medium hover:bg-dark hover:text-light"
          onClick={() => setShowStartAddressFields(!showStartAddressFields)}
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
              className="w-full px-4 py-2 mb-4 border border-dark rounded-md"
            />
            <input
              type="text"
              name="unit"
              placeholder="Unit or apt #"
              value={formData.unit}
              onChange={handleChange}
              className="w-full px-4 py-2 border border-dark rounded-md"
            />
            <button
              type="button"
              className="my-5 w-full px-4 py-2 bg-dark text-light rounded-md font-semibold hover:bg-gray-400"
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
      {showEndAddressFields && (
        <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
          <input
            type="text"
            name="endAddress"
            placeholder="End Address"
            value={formData.endAddress}
            onChange={handleChange}
            className="w-full px-4 py-2 mb-4 border border-dark rounded-md"
          />
          <button
            type="button"
            className="w-full bg-dark text-light py-2 rounded-md"
            onClick={() => setCurrentStep(2)}
          >
            Continue
          </button>
        </div>
      )}
    </div>
  );
}
