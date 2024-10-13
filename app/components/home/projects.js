import Image from "next/image";
import cleaning from "/public/logos/cleann.png";
import paint from "/public/logos/Painting-Services.png";
import plumb from "/public/logos/plumb.png";
import electt from "/public/logos/Electrical-Services-3-1024x682.jpg";
import window from "/public/logos/window.png";
import move from "/public/logos/moving.png";

export default function Projects() {
  return (
    <>
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-[#1B262C] bg-[#FBE4CC] text-center font-bold text-4xl p-4 mb-10">
          MOST POPULAR PROJECTS
        </h2>
        <div className="flex justify-center">
          <span className="block w-24 h-1 bg-[#1B262C] rounded"></span>
        </div>
      </div>

      <div className="bg-[#FBE4CC] flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {/* Project Card */}
          {projectData.map((project, index) => (
            <div
              key={index}
              className="bg-[#1B262C] p-4 w-[350px] h-[320px] flex flex-col items-center rounded-3xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="w-[280px] h-[180px] flex items-center justify-center overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  width={280}
                  height={180}
                  objectFit="contain"
                  alt={project.title}
                />
              </div>
              <p className="text-[#FBE4CC] mt-4 text-2xl font-semibold">
                {project.title}
              </p>
              <p className="text-[#FBE4CC] text-sm mt-2">
                Projects starting at {project.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Project data for dynamic rendering
const projectData = [
  {
    title: "Home & Apartment Cleaning",
    price: "$49",
    image: cleaning,
  },
  {
    title: "Indoor Painting",
    price: "$79",
    image: paint,
  },
  {
    title: "Help Moving",
    price: "$67",
    image: move,
  },
  {
    title: "Minor Plumbing Repairs",
    price: "$74",
    image: plumb,
  },
  {
    title: "Window & Blinds Repair",
    price: "$61",
    image: window,
  },
  {
    title: "Electrical Help",
    price: "$69",
    image: electt,
  },
];
