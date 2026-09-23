import React from "react";
export default function StudentDashboardTab({ appState, setAppState }) {
 return (
<div className="" id="tab-student-dashboard">
<div className="mb-6"><h3 className="text-2xl font-bold text-gray-800">Welcome back, <span className="text-mota-green" id="welcome-name"></span></h3><p className="text-gray-500 text-sm">Here's your scholarship summary.</p></div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-blue-500">
<div className="text-sm text-gray-500 mb-1">Active Applications</div><div className="text-3xl font-bold text-gray-800">2</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-mota-gold">
<div className="text-sm text-gray-500 mb-1">Pending Actions</div><div className="text-3xl font-bold text-gray-800">1</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 border-l-4 border-l-mota-green">
<div className="text-sm text-gray-500 mb-1">Last Disbursement</div><div className="text-3xl font-bold text-gray-800">?45,000</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<h4 className="font-bold text-gray-800 mb-4">Quick Links</h4>
<div className="flex gap-4">
<button className="bg-blue-50 text-blue-700 px-4 py-2 rounded-md font-medium hover:bg-blue-100" >Apply Now</button>
<button className="bg-gray-50 text-gray-700 px-4 py-2 rounded-md border font-medium hover:bg-gray-100" >Check Status</button>
</div>
</div>
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<h4 className="font-bold text-gray-800 mb-4 border-b pb-2">Recent Notices</h4>
<ul className="space-y-3 text-sm" id="student-mini-notices"></ul>
</div>
</div>
</div>
);
}