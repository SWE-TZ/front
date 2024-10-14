import React, { useState } from "react";

const services = {
  cleaning: {
    title: "Cleaning",
    description:
      "Clean your home or office; deep clean appliances and other spaces.",
    trending:
      "Now Trending: Eco-friendly products, home cleaning checklists, and cleaning hacks.",
    services: [
      "Party Clean Up",
      "Apartment Cleaning",
      "Deep Clean",
      "Garage Cleaning",
      "Move Out Clean",
    ],
    image: "/logos/home-clean.jpg",
  },
  painting: {
    title: "Painting",
    description:
      "Paint walls, ceilings, molding, and doors; includes prep and cleanup.",
    trending:
      "Now Trending: Color blocking, stripe details, and statement colors.",
    services: [
      "Interior Painting",
      "Exterior Painting",
      "Wallpaper Removal",
      "Accent Wall Painting",
      "Concrete & Brick Painting",
    ],
    image: "/logos/StockCake-Painter at Work_1728129298.jpg",
  },
  // Additional categories...
};

const MyServices = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const toggleCategory = (category) => {
    setActiveCategory(activeCategory === category ? null : category);
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6">
      <h2 className="text-3xl font-bold mb-6">My Services</h2>
      <ul className="space-y-4">
        {Object.entries(services).map(([key, category]) => (
          <li key={key} className="border-b pb-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={category.image}
                  alt={category.title}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                  <p className="text-sm text-gray-600">
                    {category.description}
                  </p>
                </div>
              </div>
              <button
                className="text-blue-500"
                onClick={() => toggleCategory(key)}
              >
                {activeCategory === key ? "Hide Details" : "View Details"}
              </button>
            </div>

            {activeCategory === key && (
              <div className="mt-4 pl-8">
                <p className="italic text-gray-500">{category.trending}</p>
                <ul className="mt-2 space-y-2">
                  {category.services.map((service, index) => (
                    <li
                      key={index}
                      className="flex justify-between items-center text-sm text-gray-700"
                    >
                      <span>{service}</span>
                      <div className="flex items-center space-x-4">
                        <button className="text-green-500">Edit</button>
                        <input type="checkbox" className="form-checkbox" />{" "}
                        Active
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyServices;
