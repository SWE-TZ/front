"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";


const ContactForm = () => {
  const [name,Setname] = useState('');
  const [email,Setemail] = useState('');
  const [subject,Setsubject] = useState('');
  const [text,Settext] = useState('');
  const router = useRouter();
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
          onChange={(e)=>Setname(e.target.value)}
        />
        <input
          type="email"
          placeholder="Your Email"
          className="p-4 rounded-md border border-gray-300 focus:border-[#1B262C] focus:ring-2 focus:ring-[#1B262C] transition duration-300"
          required
          onChange={(e)=>Setemail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Subject"
          className="p-4 rounded-md border border-gray-300 focus:border-[#1B262C] focus:ring-2 focus:ring-[#1B262C] transition duration-300"
          required
          onChange={(e)=>Setsubject(e.target.value)}
        />
        <textarea
          placeholder="Your Message"
          className="p-4 rounded-md border border-gray-300 focus:border-[#1B262C] focus:ring-2 focus:ring-[#1B262C] transition duration-300 h-40"
          required
          onChange={(e)=>Settext(e.target.value)}
        ></textarea>
        <Link href={`mailto:mziyad154@gmail.com?
        from=${encodeURIComponent(email)}
        &subject=${encodeURIComponent(subject)}
        &body=${encodeURIComponent(text)}
        %0A${encodeURIComponent(name)}`}>
          <button
            type="submit"
            className="col-span-1 md:col-span-2 px-6 py-3 bg-[#1B262C] text-[#FBE4CC] font-bold rounded-md transition duration-300"
          
          >
            Send Message
          </button>
        </Link>
      </form>
    </section>
  );
};

export default ContactForm;
