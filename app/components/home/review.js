import ReviewCard from "./reviewCard";

export default function Review() {
  const reviews = [
    {
      name: "Mary K.",
      review:
        "Exceptional care with a focus on comprehensive diagnosis and personalized treatment.",
      service: "Internal Medicine",
    },
    {
      name: "Amanda L.",
      review:
        "Compassionate and professional care, prioritizing women's health and well-being.",
      service: "Gynecologist",
    },
    {
      name: "Sabrina K.",
      review:
        "Thorough, knowledgeable, and dedicated to delivering top-notch patient care.",
      service: "Internal Medicine",
    },
    {
      name: "Jana T.",
      review:
        "Expert care with a deep understanding of complex neurological conditions.",
      service: "Neurologist",
    },
  ];

  return (
    <div className="m-8">
      <p className="text-dark bg-light font-bold text-center text-3xl p-2 mt-16 mb-8">
        See what happy customers are saying about Doctor Connect
      </p>
      <div className="bg-light flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 items-center p-3">
          {reviews.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              review={review.review}
              service={review.service}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
