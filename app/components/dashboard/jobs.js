"use clients";
import React, { useState } from "react";

const jobRequests = [
  {
    id: 1,
    service: "Cleaning",
    description: "Deep cleaning for a 3-bedroom apartment.",
    clientName: "Sarah Johnson",
    contact: "sarah@example.com",
    requestedDate: "October 18, 2024, 10:00 AM",
    location: "Downtown, City A",
    payment: "$150",
  },
  {
    id: 2,
    service: "Painting",
    description: "Accent wall painting in the living room.",
    clientName: "Mike Harrison",
    contact: "mike@example.com",
    requestedDate: "October 19, 2024, 2:00 PM",
    location: "Westside, City B",
    payment: "$200",
  },
  // Add more job requests...
];

const JobRequests = () => {
  const [viewingDetails, setViewingDetails] = useState(null); // Track which job details are being viewed
  const [jobStatus, setJobStatus] = useState({});

  const handleAccept = (id) => {
    setJobStatus((prev) => ({ ...prev, [id]: "Accepted" }));
  };

  const handleDecline = (id) => {
    setJobStatus((prev) => ({ ...prev, [id]: "Declined" }));
  };

  return (
    <div className="w-full max-w-4xl mx-auto my-6 p-4 bg-[#FBE4CC] rounded-lg shadow">
      <h2 className="text-3xl font-bold mb-6 text-[#1B262C]">Job Requests</h2>
      <ul className="space-y-4">
        {jobRequests.map((job) => (
          <li key={job.id} className="border-t border-[#1B262C] pt-4">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-[#1B262C] rounded-full flex items-center justify-center text-white font-bold">
                  {job.service.charAt(0)}
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#1B262C]">
                    {job.service}
                  </h3>
                  <p className="text-sm text-[#1B262C]">{job.description}</p>
                  <p className="text-sm text-gray-700">
                    Client: {job.clientName}
                  </p>
                  <p className="text-sm text-gray-700">
                    Date: {job.requestedDate}
                  </p>
                </div>
              </div>
              <div className="flex space-x-2 mt-4 md:mt-0">
                <button
                  className="px-3 py-1 bg-[#1B262C] text-[#FBE4CC] rounded hover:bg-[#334756]"
                  onClick={() => handleAccept(job.id)}
                >
                  Accept
                </button>
                <button
                  className="px-3 py-1 bg-[#F57C00] text-white rounded hover:bg-[#D95C00]"
                  onClick={() => handleDecline(job.id)}
                >
                  Decline
                </button>
                <button
                  className="px-3 py-1 bg-[#457B9D] text-[#FBE4CC] rounded hover:bg-[#2a5b7d]"
                  onClick={() =>
                    setViewingDetails(viewingDetails === job.id ? null : job.id)
                  }
                >
                  {viewingDetails === job.id ? "Hide Details" : "View Details"}
                </button>
              </div>
            </div>

            {viewingDetails === job.id && (
              <div className="mt-4 bg-[#FBE4CC] p-4 rounded-lg border border-[#1B262C]">
                <p>
                  <strong>Location:</strong> {job.location}
                </p>
                <p>
                  <strong>Payment:</strong> {job.payment}
                </p>
                <p>
                  <strong>Contact:</strong> {job.contact}
                </p>
              </div>
            )}

            {jobStatus[job.id] && (
              <div
                className={`mt-4 p-2 rounded-lg ${
                  jobStatus[job.id] === "Accepted"
                    ? "bg-green-100 text-green-700"
                    : "bg-red-100 text-red-700"
                }`}
              >
                Job {jobStatus[job.id]}
              </div>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default JobRequests;
