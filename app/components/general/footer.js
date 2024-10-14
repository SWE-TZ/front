import Link from "next/link";
import Image from "next/image";
import logo2 from "@/public/images/footer-logo.png";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-[#1B262C] text-[#FBE4CC] py-12">
      <div className="container max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 px-4">
        {/* Logo Section */}
        <div className="flex items-center justify-center md:justify-start">
          <Image src={logo2} alt="logo" className="w-[150px] h-auto" />
        </div>

        {/* Links Section */}
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-lg">Quick Links</p>
            <ul className="flex flex-col gap-4 font-semibold">
              <li>
                <Link href="/" className="hover:text-[#FBE4CC] hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/service"
                  className="hover:text-[#FBE4CC] hover:underline"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/recommendations"
                  className="hover:text-[#FBE4CC] hover:underline"
                >
                  Recommendations
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/pricing"
                  className="hover:text-[#FBE4CC] hover:underline"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-6">
            <p className="font-semibold text-lg">Company</p>
            <ul className="flex flex-col gap-4 font-semibold">
              <li>
                <Link
                  href="/pages/contactUs"
                  className="hover:text-[#FBE4CC] hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FBE4CC] hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FBE4CC] hover:underline">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/" className="hover:text-[#FBE4CC] hover:underline">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col items-center md:items-start space-y-4">
          <p className="font-semibold text-lg">Contact Us</p>
          <p>
            Email:{" "}
            <a href="FixitCompany@gmail.com" className="hover:underline">
              FixitCompany@gmail.com
            </a>
          </p>
          <p>
            Phone:{" "}
            <a href="tel:+123456789" className="hover:underline">
              +123 456 789
            </a>
          </p>
          <p>Address: **** Street, *** City, **** Country</p>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="container max-w-screen-lg mx-auto py-6 flex justify-center gap-6">
        <FontAwesomeIcon
          fixedWidth
          className="h-[50px] w-[50px] text-[#FBE4CC] border-2 border-[#FBE4CC] rounded-full p-[12px] hover:text-[#1B262C] hover:bg-[#FBE4CC] hover:border-[#1B262C] transition-all"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          fixedWidth
          className="h-[50px] w-[50px] text-[#FBE4CC] border-2 border-[#FBE4CC] rounded-full p-[12px] hover:text-[#1B262C] hover:bg-[#FBE4CC] hover:border-[#1B262C] transition-all"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          fixedWidth
          className="h-[50px] w-[50px] text-[#FBE4CC] border-2 border-[#FBE4CC] rounded-full p-[12px] hover:text-[#1B262C] hover:bg-[#FBE4CC] hover:border-[#1B262C] transition-all"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          fixedWidth
          className="h-[50px] w-[50px] text-[#FBE4CC] border-2 border-[#FBE4CC] rounded-full p-[12px] hover:text-[#1B262C] hover:bg-[#FBE4CC] hover:border-[#1B262C] transition-all"
          icon={faLinkedinIn}
        />
      </div>

      {/* Bottom Text Section */}
      <div className="container max-w-screen-xl mx-auto py-4 text-center text-[#FBE4CC] border-t border-[#FBE4CC] mt-12">
        <p>&copy; {new Date().getFullYear()} FIXIT. All rights reserved.</p>
      </div>
    </div>
  );
}
