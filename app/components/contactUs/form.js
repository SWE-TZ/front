import React from "react";

const ContactForm = () => {
  return (
    <section className="py-16 max-w-6xl mx-auto px-4 bg-[#FBE4CC] rounded-lg shadow-lg mb-7">
      <h2 className="text-4xl font-bold text-center mb-10 text-[#1B262C]">
        Send Us a Message
      </h2>
      <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <input
          type="text"
          placeholder="Your Name"
          className="p-4 rounded-md border border-gray-300 focus:border-[#1B262C] focus:ring-2 focus:ring-[#1B262C] transition duration-300"
          required
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-md border border-gray-300 focus:border-[#1B262C] focus:ring-2 focus:ring-[#1B262C] transition duration-300"
          required
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-4 rounded-md border border-gray-300 focus:border-[#1B262C] focus:ring-2 focus:ring-[#1B262C] transition duration-300"
          required
        />
        <textarea
          placeholder="Your Message"
          className="p-4 rounded-md border border-gray-300 focus:border-[#1B262C] focus:ring-2 focus:ring-[#1B262C] transition duration-300 h-40"
          required
        ></textarea>
        <button
          type="submit"
          className="col-span-1 md:col-span-2 px-6 py-3 bg-[#1B262C] text-[#FBE4CC] font-bold rounded-md hover:bg-[#F9D5B5] transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>
  );
};

export default ContactForm;
