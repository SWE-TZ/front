"use client"; // Ensure it's the first line
import React, { useState } from "react";
import Image from "next/image";
import logo from "/public/images/logo.png"; // Adjust this path as needed

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reset error
    setSuccessMessage(""); // Reset success message

    const payload = {
      first_name: firstName,
      last_name: lastName,
      email,
      phone_number: phoneNumber,
      password,
    };

    {/* API */}
    try {
      const response = await fetch("http://127.0.0.1:5555", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to create account");
      }

      const data = await response.json();
      setSuccessMessage("Account created successfully! Please log in.");
      console.log("Sign-up successful:", data);
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-light">
      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full bg-opacity-50 backdrop-blur-sm">
        <form
          onSubmit={handleSubmit}
          className="bg-dark/90 p-10 rounded-3xl shadow-2xl max-w-lg w-full mx-auto flex flex-col space-y-6 border border-light mt-10"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image src={logo} alt="Logo" width={150} height={50} />
          </div>

          {/* Success or Error Messages */}
          {error && (
            <div className="mb-4 bg-red-100 text-red-600 p-2 rounded text-center">
              {error}
            </div>
          )}
          {successMessage && (
            <div className="mb-4 bg-green-100 text-green-600 p-2 rounded text-center">
              {successMessage}
            </div>
          )}

          {/* Input Fields */}
          <input
            type="text"
            id="first_name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg text-dark bg-light placeholder-gray-600 focus:ring focus:ring-light focus:outline-none"
            placeholder="First Name"
            required
          />

          <input
            type="text"
            id="last_name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg text-dark bg-light placeholder-gray-600 focus:ring focus:ring-light focus:outline-none"
            placeholder="Last Name"
            required
          />

          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg text-dark bg-light placeholder-gray-600 focus:ring focus:ring-light focus:outline-none"
            placeholder="Email Address"
            required
          />

          <input
            type="text"
            id="phone_number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg text-dark bg-light placeholder-gray-600 focus:ring focus:ring-light focus:outline-none"
            placeholder="Phone Number"
            required
          />

          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg text-dark bg-light placeholder-gray-600 focus:ring focus:ring-light focus:outline-none"
            placeholder="Password"
            required
          />

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-light text-dark hover:bg-[#334955] hover:text-light transition-colors duration-300 font-semibold py-3 px-6 rounded-full shadow-lg hover:shadow-2xl focus:ring focus:ring-[#334955]"
            >
              Create Account
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
