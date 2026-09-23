import React from "react";
export default function AdminNoticesTab({ appState, setAppState }) {
 return (
<div className=" space-y-6" id="tab-admin-notices">
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
);
}