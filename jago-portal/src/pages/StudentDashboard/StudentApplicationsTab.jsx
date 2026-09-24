import React from "react";

export default function StudentApplicationsTab({ appState, setAppState }) {
  const applications = (appState?.applications && appState.applications.length > 0) 
    ? appState.applications 
    : [  
        { scheme: 'Post-Matric Scholarship', appliedOn: '12 Aug 2025', status: 'Under Verification', disbursement: '-' },  
        { scheme: 'National Fellowship (NFST)', appliedOn: '05 Jan 2025', status: 'Disbursed', disbursement: '₹25,000' },  
      ];

  const getStatusBadge = (status) => {
    switch (status) {
      case 'Disbursed':
        return <span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">{status}</span>;
      case 'Under Verification':
        return <span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">{status}</span>;
      case 'Sanctioned':
        return <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">{status}</span>;
      case 'Rejected':
        return <span className="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">{status}</span>;
      default:
        return <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">{status}</span>;
    }
  };

  return (
    <div id="tab-student-applications">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
        <table className="w-full text-left text-base whitespace-nowrap">
          <thead className="bg-gray-50 text-gray-600 border-b">
            <tr>
              <th className="p-4">Scheme Name</th>
              <th className="p-4">Applied On</th>
              <th className="p-4">Status</th>
              <th className="p-4">Disbursement</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {applications.map((app, idx) => (
              <tr key={idx} className="border-b last:border-b-0">
                <td className="p-4 font-medium">{app.scheme}</td>
                <td className="p-4">{app.appliedOn}</td>
                <td className="p-4">{getStatusBadge(app.status)}</td>
                <td className="p-4">{app.disbursement}</td>
                <td className="p-4"><button className="text-blue-600 hover:underline">View Details</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}