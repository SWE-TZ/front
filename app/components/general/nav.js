import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Nav() {
  return (
    <div className="fixed z-50 bg-[#FBE4CC] bg-opacity-35 px-6 md:px-8 w-full  shadow-md backdrop-blur-sm">
      <div className="h-full container mx-auto max-w-screen-xl flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-[100px] h-auto" />
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="flex flex-grow justify-center md:justify-center space-x-6 font-bold">
          <ul className="flex space-x-6 font-medium">
            <li className="text-[#1B262C] hover:text-[#FBE4CC] transition-colors duration-300 font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-[#1B262C] hover:text-[#FBE4CC] transition-colors duration-300 font-semibold">
              <Link href="/pages/service">Services</Link>
            </li>
            <li className="text-[#1B262C] hover:text-[#FBE4CC] transition-colors duration-300 font-semibold">
              <Link href="/pages/recommendations">Recommendations</Link>
            </li>

            <li className="text-[#1B262C] hover:text-[#FBE4CC] transition-colors duration-300 font-semibold">
              <Link href="/pages/pricing">Pricing</Link>
            </li>
          </ul>
        </div>

        {/* Login/Sign-In Button */}
        <div className="flex items-center space-x-6">
          {/* Login / Sign In Button */}
          <Link href="/pages/choose">
            <button className="bg-[#1B262C] text-[#FBE4CC] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#FBE4CC] hover:text-[#1B262C] transition-colors duration-300 transform hover:scale-105">
              Login / Sign In
            </button>
          </Link>

          {/* Become a Tasker Link */}
          <Link href="/pages/taskerForm">
            <button className="bg-[#1B262C] text-[#FBE4CC] font-semibold py-3 px-6 rounded-full shadow-md hover:bg-[#FBE4CC] hover:text-[#1B262C] transition-colors duration-300 transform hover:scale-105">
              Become a Tasker
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
