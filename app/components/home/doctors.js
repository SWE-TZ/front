import Image from "next/image";
import doctor1 from "@/public/images/doctor_1.jpg";
import doctor2 from "@/public/images/doctor_2.jpg";
import doctor3 from "@/public/images/doctor_3.jpg";
import doctor4 from "@/public/images/doctor_4.jpg";
import doctor5 from "@/public/images/doctor_5.jpg";
import doctor6 from "@/public/images/doctor_6.jpeg";

export default function Doctors() {
  return (
    <>
      {/* Section Title */}
      <div className="text-center mb-10">
        <h2 className="text-dark bg-light text-center font-bold text-4xl p-4 mb-10">
          Top Doctors
        </h2>
        <div className="flex justify-center">
          <span className="block w-24 h-1 bg-dark rounded"></span>
        </div>
      </div>

      <div className="bg-light flex justify-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 items-center">
          {/* Project Card */}
          {FamousDoctors.map((project, index) => (
            <div
              key={index}
              className="bg-dark p-4 w-[350px] h-[320px] flex flex-col items-center rounded-3xl hover:scale-105 transition-transform duration-300 shadow-lg"
            >
              <div className="flex items-center justify-center w-full h-64 bg-dark rounded-lg overflow-hidden">
                <Image
                  src={project.image}
                  alt="Doctor Image"
                  className="object-contain w-full h-full"
                />
              </div>

              <p className="text-light mt-4 text-2xl font-semibold">
                {project.title}
              </p>
              <p className="text-light text-sm mt-2">
                Doctor {project.Name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

// Project data for dynamic rendering
const FamousDoctors = [
  {
    title: "Nueurologist",
    Name: "Magdy Yaqoub",
    image: doctor1,
  },
  {
    title: "Cardiologist",
    Name: "Mohammed Salah",
    image: doctor2,
  },
  {
    title: "Physiotherapist",
    Name: "asmaa desokey",
    image: doctor3,
  },
  {
    title: "Internal Medicine",
    Name: "Farida Ziyad",
    image: doctor4,
  },
  {
    title: "Gynecologist",
    Name: "Omar Medhat",
    image: doctor5,
  },
  {
    title: "Cardiologist",
    Name: "Kareem Ezz",
    image: doctor6,
  },
];
