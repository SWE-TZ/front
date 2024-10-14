"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import clean from "/public/logos/mop.png";
import paint from "/public/logos/paint-roller.png";
import elect from "/public/logos/light-bulb.png";
import tool from "/public/logos/tools.png";
import move from "/public/logos/fast-delivery.png";
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
        // Set the default category to "cleaning"
        setSelectedCategory(data.cleaning);
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
      <div className="bg-[#FBE4CC] text-[#1B262C] p-6  mt-10">
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center gap-8 md:gap-16 p-3">
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("cleaning")}>
                <Image
                  src={clean}
                  width={50}
                  height={50}
                  alt="cleaning"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Cleaning
                </p>
              </button>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("painting")}>
                <Image
                  src={paint}
                  width={50}
                  height={50}
                  alt="painting"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Painting
                </p>
              </button>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("electrical")}>
                <Image
                  src={elect}
                  width={50}
                  height={50}
                  alt="electrical"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Electrical
                </p>
              </button>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("homeRepairs")}>
                <Image
                  src={tool}
                  width={50}
                  height={50}
                  alt="tools"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Home Repairs
                </p>
              </button>
            </li>
            <li className="flex flex-col items-center space-y-2 p-3">
              <button onClick={() => handleCategoryClick("moving")}>
                <Image
                  src={move}
                  width={50}
                  height={50}
                  alt="moving"
                  className="mx-auto"
                />
                <p className="font-semibold text-center text-[#1B262C]">
                  Moving
                </p>
              </button>
            </li>
          </ul>
        </div>

        {/* Subcategory Buttons */}
        {selectedCategory && (
          <div className="flex justify-center mt-4 text-[#1B262C]">
            <ul className="flex gap-4 flex-wrap justify-center">
              {selectedCategory.services.map((service, index) => (
                <li key={index}>
                  <button
                    className="border border-[#1B262C] px-4 py-2 rounded-full text-center hover:bg-[#1B262C] hover:text-[#FBE4CC] transition-colors duration-300 transform hover:scale-105"
                    onClick={() =>
                      router.push(`/pages/request/${selectedCategory.title}`)
                    }
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
        <div className="bg-[#FBE4CC] flex justify-center items-center h-screen">
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
            <div className="absolute top-1/2 right-11 transform -translate-y-1/2 bg-[#1B262C] text-[#FBE4CC] p-8 rounded-lg shadow-lg w-11/12 md:w-[40%]">
              <h2 className="text-2xl font-bold mb-4 text-center">
                {selectedCategory.title}
              </h2>
              <ul className="list-disc pl-5 text-lg">
                <li>{selectedCategory.description}</li>
                <br />
                <li>{selectedCategory.trending}</li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
