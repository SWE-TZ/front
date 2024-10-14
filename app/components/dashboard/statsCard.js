// components/StatisticCards.js
"use client";
import {
  ChatBubbleLeftRightIcon,
  WrenchScrewdriverIcon,
  CurrencyDollarIcon,
  HomeIcon,
} from "@heroicons/react/24/outline";

const StatisticCards = () => {
  const stats = [
    {
      title: "Active Jobs",
      value: "45",
      icon: ChatBubbleLeftRightIcon,
    },
    {
      title: "Total Services",
      value: "120",
      icon: WrenchScrewdriverIcon,
    },
    {
      title: "New Requests",
      value: "20",
      icon: HomeIcon,
    },
    {
      title: "Total Earnings",
      value: "$5,000",
      icon: CurrencyDollarIcon,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-gray-800 p-6 rounded-lg shadow-lg flex items-center justify-between hover:bg-gray-700 transition-colors duration-200"
        >
          <div>
            <h2 className="text-3xl font-bold">{stat.value}</h2>
            <p className="text-lg">{stat.title}</p>
          </div>
          <stat.icon className="w-12 h-12 text-light" />
        </div>
      ))}
    </div>
  );
};

export default StatisticCards;
