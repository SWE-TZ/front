import Image from "next/image";
import star from "/public/images/star.png";

export default function ReviewCard({ name, review, service }) {
  return (
    <div className="text-dark bg-gradient-to-br from-light to-light border-dark border-4 p-4 w-[260px] h-[300px] flex flex-col rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105">
      <div className="w-full flex items-center justify-center space-x-3">
        <p className="font-bold text-base">{name}</p>
        <Image src={star} width={80} height={25} alt="Star rating" />
      </div>
      <p className="mt-2 text-sm text-center text-dark leading-relaxed">
        {review}
      </p>
      <a href="#" className="mt-auto">
        <p className="mt-4 text-lg font-bold text-light text-center bg-dark py-2 rounded-full shadow-inner hover:bg-dark transition-colors duration-300">
          {service}
        </p>
      </a>
    </div>
  );
}
