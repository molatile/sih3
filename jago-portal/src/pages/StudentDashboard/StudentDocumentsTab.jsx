import React from "react";
export default function StudentDocumentsTab({ appState, setAppState }) {
 return (
<div className="" id="tab-student-documents">
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 mb-6">
<div className="flex items-center gap-3 mb-2"><div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center font-bold">D</div><h3 className="font-bold text-gray-800">Document Wallet</h3></div>
<p className="text-sm text-gray-500">DigiLocker integration coming soon.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4" id="wallet-docs">
{/*  JS populated  */}
</div>
</div>
);
}