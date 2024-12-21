"use client"; // Ensure it's the first line
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation"; // Use for navigation
import Image from "next/image";
import logo from "/public/images/logo.png"; // Adjust this path as needed


export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const router = useRouter();

  const validate = (result,type,user) => {
    console.log("Email:", email, "Password:", password,"type:", type, "Result:", result);
    if (result.includes("Successful")) {
      console.log("user:",user);
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/pages/dashboard");
    } else {
      alert("Error credentials!");
    }
  };

  useEffect(()=>{
    fetch("/models/user.json")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
      })
      .catch((error) => console.error("Failed to fetch users:", error));
  }, []);

  const handleLogin = (e) => {
    e.preventDefault();
    setError(""); 
    setSuccessMessage("");

    // Validate user credentials
    const user = users.find(
      (user) => user.email === email && user.password === password
    );

    if (user) {
      const successResult = "Login Successful!";
      const type = user.type;
      setSuccessMessage(successResult);
      validate(successResult,type,user);
    } else {
      const errorResult = "Login Failed!";
      setError(errorResult);
      validate(errorResult);
    }
  };

  return (
    <div className="relative w-full h-screen overflow-hidden bg-light">
      <div className="relative z-10 flex justify-center items-center h-full bg-opacity-50 backdrop-blur-sm">
        <form
          onSubmit={handleLogin}
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
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg text-dark bg-light placeholder-gray-600"
            placeholder="Email Address"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="block w-full px-4 py-3 rounded-lg text-dark bg-light placeholder-gray-600"
            placeholder="Password"
            required
          />

          {/* Submit Button */}
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-light text-dark hover:bg-[#334955] transition-colors duration-300 py-3 px-6 rounded-full"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
