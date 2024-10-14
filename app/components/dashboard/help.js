"use client";
import React, { useState } from "react";

const helpTopics = [
  {
    id: 1,
    question: "How do I accept or decline a job request?",
    answer:
      "You can manage job requests under the 'Jobs' section of your dashboard. Click on the job you want to view and select 'Accept' or 'Decline'.",
  },
  {
    id: 2,
    question: "How do I update my services?",
    answer:
      "Navigate to the 'My Services' section. There, you can add new services, update descriptions, or remove services you no longer provide.",
  },
  {
    id: 3,
    question: "How do I contact customer support?",
    answer:
      "You can reach customer support through our 24/7 chat system or by calling us at 1-800-123-4567.",
  },
];

const HelpComponent = () => {
  const [activeId, setActiveId] = useState(null);

  const toggleAnswer = (id) => {
    setActiveId(id === activeId ? null : id);
  };

  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-6 bg-[#FBE4CC] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#1B262C] mb-6">Help & Support</h2>
      <ul className="space-y-4">
        {helpTopics.map((topic) => (
          <li key={topic.id} className="border-b border-[#1B262C] pb-4">
            <button
              onClick={() => toggleAnswer(topic.id)}
              className="flex justify-between items-center w-full text-lg text-[#1B262C] font-medium focus:outline-none"
            >
              {topic.question}
              <span>{activeId === topic.id ? "-" : "+"}</span>
            </button>
            {activeId === topic.id && (
              <p className="mt-2 text-sm text-[#1B262C]">{topic.answer}</p>
            )}
          </li>
        ))}
      </ul>
      <div className="mt-6 p-4 bg-[#1B262C] text-[#FBE4CC] rounded-lg">
        <h3 className="text-xl font-bold mb-2">Need More Help?</h3>
        <p>You can contact customer support at any time:</p>
        <p>Email: support@homeservice.com</p>
        <p>Phone: 1-800-123-4567</p>
      </div>
    </div>
  );
};

export default HelpComponent;
