"use client";
import React, { useState } from "react";
import Image from "next/image"; // For logo image
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For displaying errors
  const router = useRouter();

  const handleInput = (e) => {
    const { id, value } = e.target;
    if (id === "TB_user") setUser(value);
    else if (id === "TB_password") setPassword(value);
  };

  const loginHandler = async (e) => {
    e.preventDefault();
    setError(""); // Reset error

    try {
      const response = await fetch("http://127.0.0.1:5555", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: user, password }),
      });

      if (!response.ok) throw new Error("Invalid credentials");

      const data = await response.json();
      console.log("Login successful:", data);

      router.push("/");
    } catch (err) {
      setError("Invalid email or password. Please try again.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-light">
      <form
        onSubmit={loginHandler}
        className="bg-dark p-8 rounded-xl shadow-2xl w-full max-w-md"
      >
        {/* Logo */}
        <div className="flex justify-center mb-6">
          <Image
            src="/images/logo.png" // Replace with the path to your logo
            alt="Doctor Connect Logo"
            width={100}
            height={100}
            priority={true}
          />
        </div>

        {/* Error Message */}
        {error && (
          <div className="mb-4 bg-red-100 text-red-600 p-2 rounded text-center">
            {error}
          </div>
        )}

        {/* Email Input */}
        <label className="block mb-2 text-sm font-semibold text-light">
          Email Address
        </label>
        <input
          type="email"
          id="TB_user"
          value={user}
          onChange={handleInput}
          placeholder="Enter your email"
          className="block w-full p-3 mb-4 text-dark rounded-lg bg-light focus:ring-2 focus:ring-dark focus:outline-none transition-all"
          required
        />

        {/* Password Input */}
        <label className="block mb-2 text-sm font-semibold text-light">
          Password
        </label>
        <input
          type="password"
          id="TB_password"
          value={password}
          onChange={handleInput}
          placeholder="Enter your password"
          className="block w-full p-3 mb-6 text-dark rounded-lg bg-light focus:ring-2 focus:ring-dark focus:outline-none transition-all"
          required
        />

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-light text-dark py-3 font-semibold rounded-lg hover:bg-[#334955] hover:text-light transition-all"
        >
          Login
        </button>
      </form>
    </div>
  );
}
