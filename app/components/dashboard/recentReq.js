// components/RecentServiceRequests.js
import { EyeIcon } from "@heroicons/react/24/outline";

const RecentServiceRequests = () => {
  const requests = [
    {
      client: "Jane Smith",
      service: "Plumbing Repair",
      amount: "$150",
    },
    {
      client: "Michael Johnson",
      service: "Deep Cleaning",
      amount: "$200",
    },
    {
      client: "Sophia Lee",
      service: "Electrical Repair",
      amount: "$300",
    },
    // Add more requests as needed
  ];

  return (
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-semibold">Recent Service Requests</h2>
        <a
          href="#"
          className="bg-light text-dark px-3 py-1 rounded-md hover:bg-[#e6d1b9] transition-colors duration-200"
        >
          View All
        </a>
      </div>
      <div className="max-h-96 overflow-y-auto">
        <table className="min-w-full text-left">
          <thead>
            <tr>
              <th className="py-2">Client</th>
              <th className="py-2">Service</th>
              <th className="py-2">Amount</th>
              <th className="py-2">Option</th>
            </tr>
          </thead>
          <tbody>
            {requests.map((request, index) => (
              <tr
                key={index}
                className="border-t hover:bg-gray-700 transition-colors duration-200"
              >
                <td className="py-2">{request.client}</td>
                <td className="py-2">{request.service}</td>
                <td className="py-2">{request.amount}</td>
                <td className="py-2">
                  <a
                    href="#"
                    className="flex items-center bg-light text-dark px-3 py-1 rounded-md text-sm hover:bg-[#e6d1b9] transition-colors duration-200"
                  >
                    <EyeIcon className="w-5 h-5 mr-1" />
                    View
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentServiceRequests;
