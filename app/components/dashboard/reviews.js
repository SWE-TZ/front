"use client";
import React from "react";
import { FaStar } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    clientName: "Sarah Johnson",
    rating: 5,
    reviewText:
      "Excellent service! The provider was professional and thorough in cleaning my apartment. Highly recommend!",
    date: "October 12, 2024",
  },
  {
    id: 2,
    clientName: "Mike Harrison",
    rating: 4,
    reviewText:
      "Good service overall, but the provider arrived 10 minutes late. However, the painting job was well done.",
    date: "October 10, 2024",
  },
  // Add more reviews as needed...
];

const ReviewComponent = () => {
  return (
    <div className="w-full max-w-3xl mx-auto my-6 p-4 bg-[#FBE4CC] rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6 text-[#1B262C]">
        Service Provider Reviews
      </h2>
      <ul className="space-y-6">
        {reviews.map((review) => (
          <li key={review.id} className="border-b border-[#1B262C] pb-4">
            <div className="flex justify-between items-center mb-2">
              <div>
                <h3 className="text-xl font-semibold text-[#1B262C]">
                  {review.clientName}
                </h3>
                <p className="text-sm text-gray-700">{review.date}</p>
              </div>
              <div className="flex items-center">
                {Array(review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-[#F57C00] h-5 w-5" />
                  ))}
                {Array(5 - review.rating)
                  .fill()
                  .map((_, i) => (
                    <FaStar key={i} className="text-gray-300 h-5 w-5" />
                  ))}
              </div>
            </div>
            <p className="text-sm text-[#1B262C]">{review.reviewText}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReviewComponent;
