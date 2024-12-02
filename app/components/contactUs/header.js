export default function Header() {
  return (
    <header
      className="relative bg-light h-60 flex flex-col items-center justify-center bg-cover bg-center"
      style={{ backgroundImage: "url(/images/contactUs.jpg)" }}
    >
      {/* Overlay with Text */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Optional overlay for better text readability */}
      <h1 className="text-6xl font-bold text-[#FFFFFF] relative z-10 mt-10">
        Contact US
      </h1>
    </header>
  );
}
