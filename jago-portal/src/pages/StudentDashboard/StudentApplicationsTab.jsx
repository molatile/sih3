import React from "react";
export default function StudentApplicationsTab({ appState, setAppState }) {
 return (
<div className="hidden" id="tab-student-applications">
<div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
<table className="w-full text-left text-base whitespace-nowrap">
<thead className="bg-gray-50 text-gray-600 border-b">
<tr><th className="p-4">Scheme Name</th><th className="p-4">Applied On</th><th className="p-4">Status</th><th className="p-4">Disbursement</th><th className="p-4">Action</th></tr>
</thead>
<tbody>
<tr className="border-b">
<td className="p-4 font-medium">Post-Matric Scholarship</td><td className="p-4">12 Aug 2025</td>
<td className="p-4"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">Under Verification</span></td>
<td className="p-4">-</td><td className="p-4"><button className="text-blue-600 hover:underline">View Details</button></td>
</tr>
<tr>
<td className="p-4 font-medium">National Fellowship (NFST)</td><td className="p-4">05 Jan 2025</td>
<td className="p-4"><span className="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">Disbursed</span></td>
<td className="p-4">?25,000</td><td className="p-4"><button className="text-blue-600 hover:underline">View Details</button></td>
</tr>
</tbody>
</table>
</div>
</div>
);
}