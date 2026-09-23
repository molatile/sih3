import React from "react";
export default function AdminRankingsTab({ appState, setAppState }) {
 return (
<div className="" id="tab-admin-rankings">
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<div className="flex justify-between mb-4">
<h3 className="font-bold">Merit Rankings</h3>
<button className="text-xs bg-gray-100 px-3 py-1 rounded border" >Sort by Score</button>
</div>
<table className="w-full text-left text-base whitespace-nowrap">
<thead className="bg-gray-50 border-b"><tr><th className="p-4">Rank</th><th className="p-4">Name</th><th className="p-4">Score</th><th className="p-4">Scheme</th><th className="p-4">State</th></tr></thead>
<tbody className="divide-y" id="admin-rank-table">
    {appState.studentRecords && [...appState.studentRecords].sort((a,b) => b.score - a.score).map((r, i) => (
        <tr key={i}>
            <td className="p-4 text-gray-500 font-bold">#{i+1}</td>
            <td className="p-4 font-medium">{r.name}</td>
            <td className="p-4 font-bold text-mota-green">{r.score}</td>
            <td className="p-4 text-gray-600">{r.scheme}</td>
            <td className="p-4 text-gray-600">{r.state}</td>
        </tr>
    ))}
</tbody>
</table>
</div>
</div>
);
}