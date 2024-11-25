import ReviewCard from "./reviewCard";

export default function Review() {
  const reviews = [
    {
      name: "Mary K.",
      review:
        "My Uncle Saeed had cancer at the 2nd level, after eating mahshi he died and the doctor helped us knowing the cause of death.",
      service: "Internal Medicine",
    },
    {
      name: "Amanda L.",
      review:
        "I had my first baby after 8 months of appointments with a Gynecologist from the website, and now i have a healthy 4 kilo baby.",
      service: "Gynecologist",
    },
    {
      name: "Sabrina K.",
      review:
        "I had a crucial internal stomach pain that made me dying for days until making an appointment here.",
      service: "Internal Medicine",
    },
    {
      name: "Jana T.",
      review:
        "My cousin was suffering from dawn syndrome, but after appointments with nuerons doctor for 2 year, he now has up syndrome.",
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
