import Image from "next/image";
import logo from "/public/logos/footer-logo.png";
import Link from "next/link";

export default function Choose() {
  return (
    <div className="relative w-full h-screen">
      <div className="relative z-10 flex justify-center items-center h-full">
        <form className="bg-[#1B262C] bg-opacity-80 p-8 rounded-3xl shadow-2xl max-w-md w-full mx-auto flex flex-col relative backdrop-blur-md">
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
          <div className="flex flex-col space-y-4 mt-4">
            <Link href="/pages/login">
              <button className="bg-[#FBE4CC] text-[#1B262C] hover:bg-[#334955] hover:text-[#FBE4CC] font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 w-full">
                Log in
              </button>
            </Link>
            <Link href="/pages/Sign">
              {" "}
              {/* Adjust the link according to your route */}
              <button className="bg-[#FBE4CC] text-[#1B262C] hover:bg-[#334955] hover:text-[#FBE4CC] font-semibold py-3 px-6 rounded-full transition-transform transform hover:scale-105 w-full">
                Sign Up
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
