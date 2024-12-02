import Link from "next/link";
export default function Header() {
  return (
    <header
      className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url(/images/homepage_1.png)" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Heading */}
      <h1 className="md:text-8xl  text-white relative z-10 mt-4 md:mt-0 tracking-wider drop-shadow-lg">
        Doctor Connect
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-2xl text-white relative z-10 mt-4 md:mt-6 max-w-3xl text-center leading-relaxed drop-shadow-md">
        Professional, reliable and easy way to connect 
        with your doctor, manage appointments and find the best doctors.
      </p>

      {/* Button Group */}
      <div className="relative z-10 flex space-x-4 mt-10">
        {/* Primary Call-to-Action Button */}
        <button className="px-8 py-3 bg-light text-dark font-bold rounded-full hover:bg-dark hover:text-light transition duration-300 ease-in-out shadow-lg hover:scale-105">
          Get Started
        </button>

        {/* Secondary Button */}
        <Link href="/pages/contactUs">
          <button className="px-8 py-3 bg-transparent border border-light text-light font-bold rounded-full hover:bg-light hover:text-dark transition duration-300 ease-in-out shadow-lg hover:scale-105">
            Learn More
          </button>
        </Link>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 w-12 h-12 border-4 border-white rounded-full animate-bounce"></div>
    </header>
  );
}
