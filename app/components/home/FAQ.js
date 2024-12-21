"use client";
import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I choose a doctor?",
      answer:
        "You can choose a doctor through our website by selecting the doctor section in the nav and filter the doctors you want.",
    },
    {
      question: "What types of services do you offer?",
      answer:
        "We offer a wide range of doctors from several locations and managing appoinments",
    },
    {
      question: "Are the service doctors qualified?",
      answer:
        "Yes, all of our doctors are experienced professionals who have been carefully vetted to ensure high-quality service.",
    },
    {
      question: "How can I manage my appointments?",
      answer:
        "You can open your account and there you will find a section for appointments where all the appointments you are enrolled in are present and there will be an option for adding or deleting them.",
    },
    {
      question: "If i'm a doctor how, can i join?",
      answer:
        "You can join by signing up and adding your information and your clinic information.",
    },
  ];

  return (
    <section className="bg-light text-dark py-12 px-6 mt-20 mb-20">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b border-dark mb-4 pb-4">
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
