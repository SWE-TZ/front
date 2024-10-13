import ReviewCard from "./reviewCard";

export default function Review() {
  const reviews = [
    {
      name: "Mary K.",
      review:
        "My Mom was very pleased with her service, the products used and the attentiveness by the ladies who cleaned the apartment.",
      service: "Apartment Cleaning",
    },
    {
      name: "Amanda L.",
      review:
        "I hired Joe to patch 2 holes on my wall and 1 hole on my ceiling. Joe was great with communication, fast, professional and did a fantastic job.",
      service: "Home Repairs",
    },
    {
      name: "Sabrina K.",
      review:
        "Aleksandr was fantastic! He came with all the equipment to do the job, even the hardware I didn’t know I would need.",
      service: "Electrical Help",
    },
    {
      name: "Jana T.",
      review:
        "Jose fixed my AC drain line which was clogging my master bathroom sink. He was prompt, communicative, and efficient. Highly recommend!",
      service: "Plumbing",
    },
  ];

  return (
    <div className="m-8">
      <p className="text-[#1B262C] bg-[#FBE4CC] font-bold text-center text-3xl p-2 mt-16 mb-8">
        See what happy customers are saying about FIX IT
      </p>
      <div className="bg-[#FBE4CC] flex justify-center">
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
