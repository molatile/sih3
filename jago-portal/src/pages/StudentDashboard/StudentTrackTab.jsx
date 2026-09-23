import React from "react";
export default function StudentTrackTab({ appState, setAppState }) {
 return (
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
);
}