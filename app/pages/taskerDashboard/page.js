const TableDashboard = () => {
    const rows = [
      { name: "John Doe", email: "john@example.com", service: "Establishing electricity", address: "123 Main St", date: "2024-09-20" },
      { name: "Jane Smith", email: "jane@example.com", service: "Installing a lamp", address: "456 Oak St", date: "2024-09-18" },
      { name: "Sam Brown", email: "sam@example.com", service: "Electrical fault repair", address: "789 Pine St", date: "2024-09-15" },
      { name: "Alice White", email: "alice@example.com", service: "Electrical device repair", address: "321 Elm St", date: "2024-09-10" },
      { name: "Bob Green", email: "bob@example.com", service: "Installing an electrical outlet", address: "654 Maple St", date: "2024-09-08" },
    ];
  
    return (
      <div className="container mx-auto p-8">
        <div className="h-[100px] w-full"></div>
        <h1 className="text-2xl font-bold mb-6 text-center">Service Providers Dashboard</h1>
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200">
            <thead>
              <tr className="bg-gray-100 text-left">
                <th className="py-3 px-4 border-b">Name</th>
                <th className="py-3 px-4 border-b">E-mail</th>
                <th className="py-3 px-4 border-b">Type of Service</th>
                <th className="py-3 px-4 border-b">Address</th>
                <th className="py-3 px-4 border-b">Price</th>
                <th className="py-3 px-4 border-b">Date</th>
                <th className="py-3 px-4 border-b">Action</th>
              </tr>
            </thead>
            <tbody>
              {rows.map((row, index) => (
                <tr key={index} className="text-left">
                  <td className="py-3 px-4 border-b">{row.name}</td>
                  <td className="py-3 px-4 border-b">{row.email}</td>
                  <td className="py-3 px-4 border-b">{row.service}</td>
                  <td className="py-3 px-4 border-b">{row.address}</td>
                  <td className="py-3 px-4 border-b">{row.price}</td>
                  <td className="py-3 px-4 border-b">{row.date}</td>
                  <td className="py-3 px-4 border-b flex space-x-2">
                    <button className="bg-green-500 text-white py-1 px-3 rounded-lg hover:bg-green-600">
                      Accept
                    </button>
                    <button className="bg-red-500 text-white py-1 px-3 rounded-lg hover:bg-red-600">
                      Decline
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default TableDashboard;
  