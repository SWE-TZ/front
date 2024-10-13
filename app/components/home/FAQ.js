"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a service?",
      answer:
        "You can book a service through our website by selecting the service you need and filling out the request form. You'll then be matched with a service provider based on availability.",
    },
    {
      question: "What types of services do you offer?",
      answer:
        "We offer a wide range of home services, including cleaning, plumbing, painting, electrical work, and more. Visit our Services page to see the full list.",
    },
    {
      question: "Are the service providers qualified?",
      answer:
        "Yes, all of our service providers are experienced professionals who have been carefully vetted to ensure high-quality service.",
    },
    {
      question: "How can I trust the service providers?",
      answer:
        "We verify the credentials of all our providers and ensure they are experienced in their respective fields. Additionally, our review system allows you to see feedback from other clients.",
    },
    {
      question: "What is the cancellation policy?",
      answer:
        "You can cancel or reschedule your service up to 24 hours before the scheduled time without any penalty. Please check our terms and conditions for more details.",
    },
  ];

  return (
    <section className="bg-[#FBE4CC] text-[#1B262C] py-12 px-6 mt-20 mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-[#1B262C] mb-4 pb-4">
            <button
              className="w-full text-left focus:outline-none flex justify-between items-center"
              onClick={() => toggleFAQ(index)}
            >
              <span className="font-semibold text-lg">{faq.question}</span>
              <span>{openIndex === index ? "-" : "+"}</span>
            </button>
            <div
              className={`mt-2 text-sm leading-6 transition-all duration-300 ${
                openIndex === index ? "block" : "hidden"
              }`}
            >
              {faq.answer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
