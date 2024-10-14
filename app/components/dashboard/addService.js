// components/AddServiceModal.js
"use client";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/outline";

const AddServiceModal = ({ onClose }) => {
  const [serviceName, setServiceName] = useState("");
  const [serviceDescription, setServiceDescription] = useState("");
  const [servicePrice, setServicePrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., API call)
    console.log({
      serviceName,
      serviceDescription,
      servicePrice,
    });
    // Close the modal after submission
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-dark p-6 rounded-lg w-96 shadow-lg relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 focus:outline-none"
        >
          <XMarkIcon className="w-6 h-6 text-light" />
        </button>
        <h2 className="text-2xl font-semibold mb-4 text-light">
          Add New Service
        </h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="service-name" className="block mb-1 text-light">
              Service Name
            </label>
            <input
              type="text"
              id="service-name"
              value={serviceName}
              onChange={(e) => setServiceName(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-light"
              required
            />
          </div>
          <div className="mb-4">
            <label
              htmlFor="service-description"
              className="block mb-1 text-light"
            >
              Description
            </label>
            <textarea
              id="service-description"
              rows="3"
              value={serviceDescription}
              onChange={(e) => setServiceDescription(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-light"
              required
            ></textarea>
          </div>
          <div className="mb-4">
            <label htmlFor="service-price" className="block mb-1 text-light">
              Price
            </label>
            <input
              type="number"
              id="service-price"
              value={servicePrice}
              onChange={(e) => setServicePrice(e.target.value)}
              className="w-full p-2 rounded-md bg-gray-700 text-light focus:outline-none focus:ring-2 focus:ring-light"
              required
            />
          </div>
          <div className="flex justify-end space-x-4">
            <button
              type="button"
              onClick={onClose}
              className="bg-gray-600 text-light px-4 py-2 rounded-md hover:bg-gray-700 transition-colors duration-200"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="bg-light text-dark px-4 py-2 rounded-md hover:bg-[#e6d1b9] transition-colors duration-200"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddServiceModal;
