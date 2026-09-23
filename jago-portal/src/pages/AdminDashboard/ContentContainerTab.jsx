import React from "react";
export default function ContentContainerTab({ appState, setAppState }) {
 return (
<div className="relative" id="tab-content-container">
{/*  Student Tabs  */}
<div className="hidden" id="tab-student-dashboard">
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
<div className="hidden space-y-8" id="tab-student-explore">
<div>
<h3 className="font-bold text-lg mb-4 text-mota-green">Available Schemes</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="scheme-cards"></div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<h3 className="font-bold text-lg mb-4 text-gray-800">University/College Explorer</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-base whitespace-nowrap">
<thead className="bg-gray-50 border-b">
<tr><th className="p-4">University</th><th className="p-4">Country</th><th className="p-4">Domain</th><th className="p-4">Seats</th><th className="p-4">Action</th></tr>
</thead>
<tbody className="divide-y" id="university-table"></tbody>
</table>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<h3 className="font-bold mb-4 text-gray-800 text-sm">Previous Year Cutoffs</h3>
<div className="space-y-3" id="prev-cutoffs"></div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<h3 className="font-bold mb-4 text-gray-800 text-sm">Applicants Trend</h3>
<div className="flex items-end h-32 gap-2" id="prev-applicants-chart"></div>
</div>
</div>
</div>
<div className="hidden" id="tab-student-documents">
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
<div className="flex items-center gap-3 mb-2"><div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold">D</div><h3 className="font-bold text-gray-800">Document Wallet</h3></div>
<p className="text-sm text-gray-500">DigiLocker integration coming soon.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="wallet-docs">
{/*  JS populated  */}
</div>
</div>
<div className="hidden" id="tab-student-track">
<div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
<h3 className="font-bold text-gray-800 mb-6">Application: Post-Matric Scholarship (2025-26)</h3>
<div className="flex flex-col md:flex-row justify-between relative">
<div className="absolute left-[15px] top-4 bottom-4 w-1 bg-gray-200 md:w-full md:h-1 md:left-0 md:top-[15px] md:bottom-auto -z-10"></div>
<div className="absolute left-[15px] top-4 h-1/2 w-1 bg-mota-green md:w-1/2 md:h-1 md:left-0 md:top-[15px] -z-10"></div>
<div className="flex md:flex-col items-center gap-4 md:gap-2 mb-6 md:mb-0 bg-white">
<div className="w-8 h-8 bg-mota-green text-white rounded-full flex items-center justify-center text-sm">?</div>
<div className="text-sm font-medium text-gray-800">Submitted</div>
</div>
<div className="flex md:flex-col items-center gap-4 md:gap-2 mb-6 md:mb-0 bg-white">
<div className="w-8 h-8 bg-mota-green text-white rounded-full flex items-center justify-center text-sm">?</div>
<div className="text-sm font-medium text-gray-800">Verified</div>
</div>
<div className="flex md:flex-col items-center gap-4 md:gap-2 mb-6 md:mb-0 bg-white">
<div className="w-8 h-8 bg-mota-gold text-white rounded-full flex items-center justify-center text-sm">3</div>
<div className="text-sm font-bold text-mota-gold">Sanctioned</div>
</div>
<div className="flex md:flex-col items-center gap-4 md:gap-2 bg-white">
<div className="w-8 h-8 bg-gray-200 text-gray-500 rounded-full flex items-center justify-center text-sm">4</div>
<div className="text-sm font-medium text-gray-500">Disbursed</div>
</div>
</div>
<div className="mt-8 text-center"><button className="text-sm border px-4 py-2 rounded text-gray-600 hover:bg-gray-50">Raise Query</button></div>
</div>
</div>
<div className="hidden" id="tab-student-notices">
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-8 space-y-4" id="full-student-notices"></div>
</div>
<div className="hidden space-y-8" id="tab-student-faq">
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<h3 className="font-bold text-lg mb-4 text-mota-green">Frequently Asked Questions</h3>
<div className="space-y-3" id="faq-list"></div>
</div>
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<h3 className="font-bold text-lg mb-4 text-gray-800">Important Contacts</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-base whitespace-nowrap">
<thead className="bg-gray-50 border-b"><tr><th className="p-4">Name</th><th className="p-4">Role</th><th className="p-4">Email</th><th className="p-4">Phone</th></tr></thead>
<tbody className="divide-y" id="contacts-table"></tbody>
</table>
</div>
</div>
</div>
{/*  Admin Tabs  */}
<div className="hidden space-y-6" id="tab-admin-analytics">
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
<div className="hidden" id="tab-admin-applications">
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<div className="flex gap-4 mb-4">
<input className="border px-4 py-3 rounded text-sm w-full md:w-1/3" placeholder="Search ID or Name" type="text"/>
<select className="border px-4 py-3 rounded text-sm"><option>All Schemes</option><option>NOS</option></select>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-base whitespace-nowrap">
<thead className="bg-gray-50 border-b"><tr><th className="p-4">ID</th><th className="p-4">Name</th><th className="p-4">Scheme</th><th className="p-4">State</th><th className="p-4">Status</th><th className="p-4">Action</th></tr></thead>
<tbody className="divide-y" id="admin-student-table"></tbody>
</table>
</div>
</div>
</div>
<div className="hidden" id="tab-admin-verification">
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<h3 className="font-bold mb-4">Document Verification Queue</h3>
<div className="space-y-4" id="admin-verify-queue"></div>
</div>
</div>
<div className="hidden" id="tab-admin-rankings">
<div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
<div className="flex justify-between mb-4">
<h3 className="font-bold">Merit Rankings</h3>
<button className="text-xs bg-gray-100 px-3 py-1 rounded border" >Sort by Score</button>
</div>
<table className="w-full text-left text-base whitespace-nowrap">
<thead className="bg-gray-50 border-b"><tr><th className="p-4">Rank</th><th className="p-4">Name</th><th className="p-4">Score</th><th className="p-4">Scheme</th><th className="p-4">State</th></tr></thead>
<tbody className="divide-y" id="admin-rank-table"></tbody>
</table>
</div>
</div>
<div className="hidden space-y-6" id="tab-admin-notices">
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<h3 className="font-bold text-gray-800 mb-4">Add New Notice</h3>
<form className="grid grid-cols-1 md:grid-cols-3 gap-4" >
<input className="border px-4 py-3 rounded col-span-2 text-sm" id="new-notice-title" placeholder="Notice Title" required="" type="text"/>
<select className="border px-4 py-3 rounded text-sm" id="new-notice-category"><option>General</option><option>Post-Matric</option><option>NOS</option></select>
<button className="bg-mota-green text-white px-4 py-2 rounded font-medium col-span-1 md:col-span-3 hover:bg-[#12351f]" type="submit">Publish Notice</button>
</form>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<h3 className="font-bold text-gray-800 mb-4">Manage Notices</h3>
<div className="space-y-3" id="admin-notice-list"></div>
</div>
</div>
</div>
);
}