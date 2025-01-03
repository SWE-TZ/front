"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import cardio from "@/public/images/heart.png";
import nueurologist from "@/public/images/brain.png";
import gynecologist from "@/public/images/mom.png";
import Imedicnie from "@/public/images/stomach.png";
import physiotherapist from "@/public/images/muscle.png";
import { useRouter } from "next/navigation";

export default function Cat() {
  const [categoriesData, setCategoriesData] = useState({});
  const [selectedCategory, setSelectedCategory] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Fetch category data from the JSON file dynamically
    fetch("/models/categories.json")
      .then((response) => response.json())
      .then((data) => {
        setCategoriesData(data);
        // Set the default category to "cardiologist"
        setSelectedCategory(data.Cardiologist);
      })
      .catch((error) => console.error("Error loading categories:", error));
  }, []);

  // Function to handle category selection
  const handleCategoryClick = (category) => {
    setSelectedCategory(categoriesData[category]);
  };

  return (
    <>
      {/* Top Service Icons */}
      <div className="bg-light text-dark p-6  mt-10">
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-8 md:gap-16 p-3">
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("Cardiologist")}>
                <Image
                  src={cardio}
                  width={100}
                  height={100}
                  alt="cardiologist"
                  className="mx-auto hover:w-[120px] hover:transition-smooth"
                />
                <p className=" text-center text-dark">
                  Cardiologist
                </p>
              </button>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("Neurologist")}>
                <Image
                  src={nueurologist}
                  width={100}
                  height={100}
                  alt="nueurologist"
                  className="mx-auto"
                />
                <p className="text-center text-dark">
                  Neurologist
                </p>
              </button>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("Physiotherapist")}>
                <Image
                  src={physiotherapist}
                  width={100}
                  height={100}
                  alt="physiotherapist"
                  className="mx-auto"
                />
                <p className="text-center text-dark">
                  Physiotherapist
                </p>
              </button>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("InternalMedicine")}>
                <Image
                  src={Imedicnie}
                  width={100}
                  height={100}
                  alt="intermedicine"
                  className="mx-auto"
                />
                <p className="text-center text-dark">
                  Internal Medicine
                </p>
              </button>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("Gynecologist")}>
                <Image
                  src={gynecologist}
                  width={100}
                  height={100}
                  alt="gynecologist"
                  className="mx-auto"
                />
                <p className="text-center text-dark">
                  Gynecologist
                </p>
              </button>
            </li>
          </ul>
        </div>

        {/* Subcategory Buttons */}
        {selectedCategory && (
          <div className="flex justify-center mt-4 text-dark">
            <ul className="flex gap-4 flex-wrap justify-center">
              {selectedCategory.services.map((service, index) => (
                <li key={index}>
                  <button
                    className="border border-dark px-4 py-2 rounded-full text-center hover:bg-dark hover:text-light transition-colors duration-300 transform hover:scale-105"
                  >
                    {service}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      {/* Main Content with Image and Card */}
      {selectedCategory && (
        <div className="bg-light flex justify-center items-center h-screen">
          <div className="relative w-[1200px] h-[600px]">
            {/* Background Image */}
            <Image
              src={selectedCategory.image}
              alt={selectedCategory.title}
              layout="fill"
              objectFit="cover"
              className="rounded-lg shadow-lg left-10"
            />

            {/* Card Content Positioned on the Left */}
            <div className="absolute top-1/2 right-11 transform -translate-y-1/2 bg-dark text-light p-8 rounded-lg shadow-lg w-11/12 md:w-[40%]">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {selectedCategory.title}
              </h2>
              <ul className="list-disc text-lg">
                <li>{selectedCategory.description}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
