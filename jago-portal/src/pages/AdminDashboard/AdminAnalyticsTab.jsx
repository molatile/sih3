import React from "react";
export default function AdminAnalyticsTab({ appState, setAppState }) {
 return (
<div className=" space-y-6" id="tab-admin-analytics">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm"><div className="text-xs text-gray-500 uppercase tracking-wide">Total Applications</div><div className="text-2xl font-bold text-gray-800">14,520</div></div>
<div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm"><div className="text-xs text-gray-500 uppercase tracking-wide">Pending Verification</div><div className="text-2xl font-bold text-red-600">3,105</div></div>
<div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm"><div className="text-xs text-gray-500 uppercase tracking-wide">Sanctioned</div><div className="text-2xl font-bold text-blue-600">8,200</div></div>
<div className="bg-white p-8 rounded-lg border border-gray-100 shadow-sm"><div className="text-xs text-gray-500 uppercase tracking-wide">Disbursed</div><div className="text-2xl font-bold text-mota-green">3,215</div></div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<h3 className="font-bold text-sm text-gray-800 mb-4">Applications by Scheme</h3>
<div className="flex items-end h-40 gap-4" id="admin-chart-schemes"></div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
<div>
<h3 className="font-bold text-sm text-gray-800 mb-4">State-wise Distribution</h3>
<p className="text-xs text-gray-500 mb-4">Chart placeholder (Pie/Donut)</p>
</div>
<div className="flex justify-center items-center h-32 w-32 rounded-full border-8 border-mota-green border-r-mota-gold border-b-blue-400 border-l-gray-300 mx-auto transform rotate-45"></div>
</div>
</div>
</div>
);
}