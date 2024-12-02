import Link from "next/link";
import Image from "next/image";
import logo2 from "@/public/images/logo.png";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer() {
  return (
    <div className="bg-dark text-light py-12">
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
                <Link href="/" className="hover:text-light hover:underline">
                  Home
                </Link>
              </li>
              <li>
              <Link
                  href="/pages/recommendations"
                  className="hover:text-[#FBE4CC] hover:underline"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  href="/pages/recommendations"
                  className="hover:text-light hover:underline"
                >
                  Appointments
                </Link>
              </li>
              <li>
                <Link
                  href="#"
                  className="hover:text-light hover:underline"
                >
                  Privacy Policy
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
                  className="hover:text-light hover:underline"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-light hover:underline">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-light hover:underline">
                  Terms of Service
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
            <a href="DoctorConect@gmail.com" className="hover:underline">
              DoctorConnect@gmail.com
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
          className="h-[50px] w-[50px] text-light border-2 border-light rounded-full p-[12px] hover:text-dark hover:bg-light hover:border-dark transition-all"
          icon={faFacebook}
        />
        <FontAwesomeIcon
          fixedWidth
          className="h-[50px] w-[50px] text-light border-2 border-light rounded-full p-[12px] hover:text-dark hover:bg-light hover:border-dark transition-all"
          icon={faTwitter}
        />
        <FontAwesomeIcon
          fixedWidth
          className="h-[50px] w-[50px] text-light border-2 border-light rounded-full p-[12px] hover:text-dark hover:bg-light hover:border-dark transition-all"
          icon={faInstagram}
        />
        <FontAwesomeIcon
          fixedWidth
          className="h-[50px] w-[50px] text-light border-2 border-light rounded-full p-[12px] hover:text-dark hover:bg-light hover:border-dark transition-all"
          icon={faLinkedinIn}
        />
      </div>

      {/* Bottom Text Section */}
      <div className="container max-w-screen-xl mx-auto py-4 text-center text-light border-t border-light mt-12">
        <p>&copy; {new Date().getFullYear()} DoctorConnect. All rights reserved.</p>
      </div>
    </div>
  );
}
