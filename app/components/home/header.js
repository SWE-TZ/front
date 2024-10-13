export default function Header() {
  return (
    <header
      className="relative w-full h-[100vh] flex flex-col items-center justify-center bg-cover bg-center "
      style={{ backgroundImage: "url(/images/request.jpg)" }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Main Heading */}
      <h1 className="text-5xl md:text-8xl font-extrabold text-white relative z-10 mt-4 md:mt-0 tracking-wider drop-shadow-lg">
        Welcome to FIX IT
      </h1>

      {/* Subheading */}
      <p className="text-lg md:text-2xl text-white relative z-10 mt-4 md:mt-6 max-w-3xl text-center leading-relaxed drop-shadow-md">
        Professional, reliable, and personalized services right at your
        doorstep, designed to make your home repairs easy and stress-free.
      </p>

      {/* Button Group */}
      <div className="relative z-10 flex space-x-4 mt-10">
        {/* Primary Call-to-Action Button */}
        <button className="px-8 py-3 bg-[#FBE4CC] text-[#1B262C] font-bold rounded-full hover:bg-[#e6c9b2] transition duration-300 ease-in-out shadow-lg hover:scale-105">
          Get Started
        </button>

        {/* Secondary Button */}
        <button className="px-8 py-3 bg-transparent border border-[#FBE4CC] text-[#FBE4CC] font-bold rounded-full hover:bg-[#FBE4CC] hover:text-[#1B262C] transition duration-300 ease-in-out shadow-lg hover:scale-105">
          Learn More
        </button>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-10 w-12 h-12 border-4 border-white rounded-full animate-bounce"></div>
    </header>
  );
}
