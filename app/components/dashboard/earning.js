import React, { useState } from "react";

const earningsData = [
  {
    id: 1,
    service: "Apartment Cleaning",
    amount: 150,
    date: "2024-10-01",
    status: "Paid",
  },
  {
    id: 2,
    service: "Interior Painting",
    amount: 200,
    date: "2024-09-28",
    status: "Pending",
  },
  {
    id: 3,
    service: "Electrical Wiring",
    amount: 120,
    date: "2024-09-25",
    status: "Paid",
  },
  {
    id: 4,
    service: "Furniture Assembly",
    amount: 100,
    date: "2024-09-22",
    status: "Paid",
  },
];

const EarningsComponent = () => {
  const [filter, setFilter] = useState("monthly");

  const totalEarnings = earningsData.reduce((acc, job) => acc + job.amount, 0);

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-6 bg-[#FBE4CC] rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-[#1B262C] mb-6">
        Earnings Overview
      </h2>

      {/* Total Earnings */}
      <div className="mb-8 bg-[#1B262C] text-[#FBE4CC] p-6 rounded-lg text-center">
        <h3 className="text-2xl font-semibold">Total Earnings</h3>
        <p className="text-4xl font-bold mt-2">${totalEarnings}</p>
      </div>

      {/* Date Filter */}
      <div className="mb-4 flex justify-end">
        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          className="p-2 border border-[#1B262C] rounded-md bg-[#FBE4CC] text-[#1B262C]"
        >
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>

      {/* Earnings Breakdown Table */}
      <table className="w-full text-left table-auto border-collapse">
        <thead>
          <tr className="bg-[#1B262C] text-[#FBE4CC]">
            <th className="p-4">Service</th>
            <th className="p-4">Amount</th>
            <th className="p-4">Date</th>
            <th className="p-4">Status</th>
          </tr>
        </thead>
        <tbody>
          {earningsData.map((job) => (
            <tr key={job.id} className="bg-[#FBE4CC] text-[#1B262C]">
              <td className="p-4">{job.service}</td>
              <td className="p-4">${job.amount}</td>
              <td className="p-4">{job.date}</td>
              <td
                className={`p-4 ${
                  job.status === "Paid" ? "text-green-500" : "text-red-500"
                }`}
              >
                {job.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EarningsComponent;
