import React from "react";

export default function StepTwo({ formData, handleChange }) {
  return (
    <div className="mb-6 border border-dark p-4 rounded-md w-full bg-light">
      <textarea
        name="taskDetails"
        placeholder="Enter task details..."
        value={formData.taskDetails}
        onChange={handleChange}
        className="w-full mt-4 px-4 py-2 border border-dark rounded-md"
        rows="4"
      />
    </div>
  );
}
