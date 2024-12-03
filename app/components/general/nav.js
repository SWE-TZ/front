import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/logo.png";

export default function Nav() {
  return (
    <div className="fixed z-50 bg-light bg-opacity-35 px-6 md:px-8 w-full  shadow-md backdrop-blur-sm">
      <div className="h-full container mx-auto max-w-screen-xl flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link href="/">
            <Image src={logo} alt="Logo" className="w-[100px] h-auto" />
          </Link>
          <li className="text-dark hover:text-light transition-colors duration-300 font-semibold">
              <Link href="/pages/user_profile">profile</Link>
            </li>
        </div>
        

        {/* Navigation Links */}
        <div className="flex flex-grow justify-center md:justify-center space-x-6 font-bold">
          <ul className="flex space-x-6 font-medium">
            <li className="text-dark hover:text-light transition-colors duration-300 font-semibold">
              <Link href="/">Home</Link>
            </li>
            <li className="text-dark hover:text-light transition-colors duration-300 font-semibold">
            <Link href="/pages/recommendations">Doctors</Link>
            </li>
            <li className="text-dark hover:text-light transition-colors duration-300 font-semibold">
              <Link href="/">MY Appointments</Link>
            </li>

            <li className="text-dark hover:text-light transition-colors duration-300 font-semibold">
              <Link href="/pages/contactUs">Contact us</Link>
            </li>
          </ul>
        </div>

        {/* Login/Sign-In Button */}
        <div className="flex items-center space-x-6">
          {/* Login / Sign In Button */}
          <Link href="/pages/choose">
            <button className="bg-dark text-light font-semibold py-3 px-6 rounded-full shadow-md hover:bg-light hover:text-dark transition-colors duration-300 transform hover:scale-105">
              Login / Sign In
            </button>
          </Link>

          {/* Become a Tasker Link */}
          <Link href="/pages/doctor_signup">
            <button className="bg-dark text-light font-semibold py-3 px-6 rounded-full shadow-md hover:bg-light hover:text-dark transition-colors duration-300 transform hover:scale-105">
              Join us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
