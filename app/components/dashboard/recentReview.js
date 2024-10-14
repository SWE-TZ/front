// components/RecentReviews.js
"use client";
const RecentReviews = () => {
  const reviews = [
    {
      client: "Jane Smith",
      rating: "⭐⭐⭐⭐⭐",
      feedback: "Excellent service!",
    },
    {
      client: "Michael Johnson",
      rating: "⭐⭐⭐⭐",
      feedback: "Very good but a bit late.",
    },
    {
      client: "Sophia Lee",
      rating: "⭐⭐⭐⭐⭐",
      feedback: "Highly recommend!",
    },
    // Add more reviews as needed
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Recent Reviews</h2>
        <a
          href="#"
          className="bg-light text-dark px-3 py-1 rounded-md hover:bg-[#e6d1b9] transition-colors duration-200"
        >
          View All
        </a>
      </div>
      <div className="max-h-96 overflow-y-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Client</th>
              <th className="py-2">Rating</th>
              <th className="py-2">Feedback</th>
            </tr>
          </thead>
          <tbody>
            {reviews.map((review, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="py-2">{review.client}</td>
                <td className="py-2">{review.rating}</td>
                <td className="py-2">{review.feedback}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentReviews;
