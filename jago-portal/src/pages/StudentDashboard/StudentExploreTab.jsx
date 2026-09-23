import { cutoffData, applicantTrend } from "../../data/mockData";

export default function StudentExploreTab({ appState, setAppState }) {
 return (
<div className=" space-y-8" id="tab-student-explore">
<div>
<h3 className="font-bold text-lg mb-4 text-mota-green">Available Schemes</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="scheme-cards">
{/* We just hardcode the schemes or use appState if they were in it. 
  In the HTML they were hardcoded in renderStudentData()! Let's mock them. */}
    <div className="border p-5 rounded-lg hover:shadow-md transition-shadow bg-white">
        <h4 className="font-bold text-mota-green mb-1">Pre-Matric Scholarship</h4>
        <p className="text-sm text-gray-500 mb-3">For Class IX & X students</p>
        <div className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">₹3,000/year</div>
    </div>
    <div className="border p-5 rounded-lg hover:shadow-md transition-shadow bg-white">
        <h4 className="font-bold text-mota-green mb-1">Post-Matric Scholarship</h4>
        <p className="text-sm text-gray-500 mb-3">For Class XI to PhD</p>
        <div className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">Up to ₹12,000/year</div>
    </div>
    <div className="border p-5 rounded-lg hover:shadow-md transition-shadow bg-white">
        <h4 className="font-bold text-mota-green mb-1">National Fellowship</h4>
        <p className="text-sm text-gray-500 mb-3">For MPhil & PhD scholars</p>
        <div className="text-xs font-semibold text-blue-600 bg-blue-50 inline-block px-2 py-1 rounded">₹28,000/month</div>
    </div>
</div>
</div>
<div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
<h3 className="font-bold text-lg mb-4 text-gray-800">University/College Explorer</h3>
<div className="overflow-x-auto">
<table className="w-full text-left text-base whitespace-nowrap">
<thead className="bg-gray-50 border-b">
<tr><th className="p-4">University</th><th className="p-4">Country</th><th className="p-4">Domain</th><th className="p-4">Seats</th><th className="p-4">Action</th></tr>
</thead>
<tbody className="divide-y" id="university-table">
    {appState.universities && appState.universities.map((u, i) => (
        <tr key={i}>
            <td className="p-4 font-medium text-gray-800">{u.name}</td>
            <td className="p-4"><span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{u.country}</span></td>
            <td className="p-4 text-gray-600">{u.domain}</td>
            <td className="p-4 text-gray-600">{u.seats}</td>
            <td className="p-4 text-mota-green font-medium cursor-pointer hover:underline">Apply</td>
        </tr>
    ))}
</tbody>
</table>
</div>
</div>

<div className="mt-8">
<h3 className="font-bold text-lg mb-4 text-gray-800">📊 Previous Year Stats</h3>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
    <h4 className="font-bold mb-4 text-gray-800 text-sm">Marks Cutoff</h4>
    <div className="overflow-x-auto">
      <table className="w-full text-left text-sm whitespace-nowrap">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="p-3">Scheme</th>
            <th className="p-3">2023-24</th>
            <th className="p-3">2024-25</th>
            <th className="p-3">Change</th>
          </tr>
        </thead>
        <tbody className="divide-y">
          {cutoffData.map((c, i) => (
            <tr key={i}>
              <td className="p-3 font-medium text-gray-800">{c.scheme}</td>
              <td className="p-3 text-gray-600">{c.cutoff2324}</td>
              <td className="p-3 font-bold text-mota-green">{c.cutoff2425}</td>
              <td className="p-3">
                {c.change === 'up' ? (
                  <span className="text-green-600 font-bold">↑</span>
                ) : (
                  <span className="text-red-600 font-bold">↓</span>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>

  <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col">
    <h4 className="font-bold mb-4 text-gray-800 text-sm">Applicants Trend (in thousands)</h4>
    <div className="flex-1 flex items-end justify-between h-48 gap-4" id="prev-applicants-chart">
      {applicantTrend.map((a, i) => {
        const max = 150; 
        return (
          <div key={i} className="flex flex-col items-center flex-1 h-full justify-end">
            <div className="flex items-end h-full gap-1 w-full justify-center group relative pb-2">
              <div className="w-1/3 bg-blue-200 hover:bg-blue-300 rounded-t-sm relative group/bar transition-colors" style={{ height: `${(a.y2223 / max) * 100}%` }}>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-1 rounded opacity-0 group-hover/bar:opacity-100 pointer-events-none z-10">{a.y2223}</span>
              </div>
              <div className="w-1/3 bg-blue-400 hover:bg-blue-500 rounded-t-sm relative group/bar transition-colors" style={{ height: `${(a.y2324 / max) * 100}%` }}>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-1 rounded opacity-0 group-hover/bar:opacity-100 pointer-events-none z-10">{a.y2324}</span>
              </div>
              <div className="w-1/3 bg-blue-600 hover:bg-blue-700 rounded-t-sm relative group/bar transition-colors" style={{ height: `${(a.y2425 / max) * 100}%` }}>
                <span className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs bg-gray-800 text-white px-1 rounded opacity-0 group-hover/bar:opacity-100 pointer-events-none z-10">{a.y2425}</span>
              </div>
            </div>
            <div className="text-[10px] text-center mt-1 truncate w-full" title={a.scheme}>{a.scheme.split(' ')[0]}</div>
          </div>
        );
      })}
    </div>
    <div className="mt-4 pt-4 border-t text-sm text-gray-700 flex items-center gap-2">
      <span className="text-xl">📈</span>
      <span>Post-Matric applications grew 7% vs last year</span>
    </div>
  </div>
</div>
</div>
</div>
);
}