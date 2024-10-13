"use client";
import React, { useState } from "react";
import Image from "next/image";
// import bg from "/public/logos/bg.jpg";
import logo from "/public/logos/footer-logo.png";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [result, setResult] = useState("");

  const handleInput = (e) => {
    const x = e.target.value;
    if (e.target.id === "TB_user") {
      setUser(x);
    } else if (e.target.id === "TB_password") {
      setPassword(x);
    }
  };

  const ShowResult = (e) => {
    e.preventDefault();
    const username = [
      "Rawan@gmail.com",
      "Mohammed@hotmail.com",
      "doaa@yahoo.com",
      "Ali@gmail.com",
    ];
    const pass = ["1234", "5678", "0000", "8888"];
    if (username.includes(user) && pass.includes(password)) {
      setResult("Login Successful");
    } else {
      setResult("Login Failed");
    }
  };

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      {/* <Image
        src={bg}
        alt="Background"
        layout="fill"
        objectFit="cover"
        quality={100}
        className="z-0"
      /> */}
      {/* Content */}
      <div className="relative z-10 flex justify-center items-center h-full">
        <form
          onSubmit={ShowResult}
          className="bg-[#1B262C] bg-opacity-80 p-8 rounded-3xl shadow-2xl max-w-md w-full mx-auto flex flex-col relative backdrop-blur-md"
        >
          {/* Logo */}
          <div className="flex justify-center mb-6">
            <Image
              src={logo}
              alt="Logo"
              width={150}
              height={50}
              priority={true}
            />
          </div>
          <label className="text-[#FBE4CC] text-sm mb-1">Email Address</label>
          <input
            type="email"
            id="TB_user"
            value={user}
            onChange={handleInput}
            className="block mb-4 w-full px-4 py-2 rounded-lg text-[#1B262C] bg-[#FBE4CC] focus:ring-2 focus:ring-[#1B262C] focus:outline-none transition-all duration-300"
          />
          <label className="text-[#FBE4CC] text-sm mb-1">Password</label>
          <input
            type="password"
            id="TB_password"
            value={password}
            onChange={handleInput}
            className="block mb-4 w-full px-4 py-2 rounded-lg text-[#1B262C] bg-[#FBE4CC] focus:ring-2 focus:ring-[#1B262C] focus:outline-none transition-all duration-300"
          />
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-[#FBE4CC] text-[#1B262C] hover:bg-[#334955] hover:text-[#FBE4CC] font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105"
            >
              Login
            </button>
          </div>
          {/* Result Message - Only show if result is not empty */}
          {result && (
            <div className="absolute bottom-[-30px] left-0 right-0 text-center text-[#FBE4CC] bg-[#1B262C] font-semibold py-2 px-4 rounded-md mt-4">
              {result}
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
