"use client";
import React, { useState } from "react";
import Image from "next/image";
// import bg from "/public/logos/bg.jpg";
import logo from "/public/images/logo.png";
import { useRouter } from "next/navigation";

export default function Login() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

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
      "omar@zewailcity.edu.eg",
      "asmaa@zewailcity.edu.eg",
      "ali@zewailcity.edu.eg",
      "mariam@zewailcity.edu.eg",
    ];
    let result;
    const pass = ["0000","1111", "2222", "3333"];
    if (username.includes(user) && pass.includes(password)) {
      result = "Login Successful";
    } else {
      result =  "Login Failed";
    }
    validate(result);
  };

  function validate(result){
    console.log(user," and th pass is : ",password, " and the result is  : ",result)
    if(result.includes("Successful"))
    {
      //router.push('../pages/dashboard')
    }
    else{
      alert("Error credintials!")
    }
  }

  return (
    <div className="relative w-full h-screen bg-light">
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
          className="bg-dark bg-opacity-80 p-8 rounded-3xl shadow-2xl max-w-md w-full mx-auto flex flex-col relative backdrop-blur-md"
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
          <label className="text-light text-sm mb-1">Email Address</label>
          <input
            type="email"
            id="TB_user"
            value={user}
            onChange={handleInput}
            className="block mb-4 w-full px-4 py-2 rounded-lg text-dark bg-light focus:ring-2 focus:ring-dark focus:outline-none transition-all duration-300"
          />
          <label className="text-light text-sm mb-1">Password</label>
          <input
            type="password"
            id="TB_password"
            value={password}
            onChange={handleInput}
            className="block mb-4 w-full px-4 py-2 rounded-lg text-dark bg-light focus:ring-2 focus:ring-dark focus:outline-none transition-all duration-300"
          />
          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="bg-light text-dark hover:bg-[#334955] hover:text-light font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105"
              
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
