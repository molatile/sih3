import React from "react";
export default function AdminApplicationsTab({ appState, setAppState }) {
 return (
<div className="" id="tab-admin-applications">
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<div className="flex gap-4 mb-4">
<input className="border px-4 py-3 rounded text-sm w-full md:w-1/3" placeholder="Search ID or Name" type="text"/>
<select className="border px-4 py-3 rounded text-sm"><option>All Schemes</option><option>NOS</option></select>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-base whitespace-nowrap">
<thead className="bg-gray-50 border-b"><tr><th className="p-4">ID</th><th className="p-4">Name</th><th className="p-4">Scheme</th><th className="p-4">State</th><th className="p-4">Status</th><th className="p-4">Action</th></tr></thead>
<tbody className="divide-y" id="admin-student-table">
    {appState.studentRecords && appState.studentRecords.map((r, i) => {
        const statusColor = r.status === 'Approved' ? 'bg-green-100 text-green-700' : r.status === 'Rejected' ? 'bg-red-100 text-red-700' : 'bg-yellow-100 text-yellow-700';
        return (
        <tr key={i}>
            <td className="p-4 text-xs font-mono text-gray-500">{r.id}</td>
            <td className="p-4 font-medium text-gray-800">{r.name}</td>
            <td className="p-4 text-gray-600">{r.scheme}</td>
            <td className="p-4 text-gray-600">{r.state}</td>
            <td className="p-4"><span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColor}`}>{r.status}</span></td>
            <td className="p-4"><button className="text-mota-green hover:underline text-sm">View</button></td>
        </tr>
        );
    })}
</tbody>
</table>
</div>
</div>
</div>
);
}