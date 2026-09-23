import React, { useState } from 'react';

// Hardcoded mock data to ensure it works even if not present in appState
const mockStudentRecords = [
  { id: 'ST2025001', name: 'Ravi Kumar', state: 'Maharashtra', score: 88, status: 'Verified', scheme: 'Pre-Matric Scholarship' },
  { id: 'ST2025002', name: 'Anita Sharma', state: 'Delhi', score: 92, status: 'Verified', scheme: 'Pre-Matric Scholarship' },
  { id: 'ST2025003', name: 'Rahul Verma', state: 'UP', score: 85, status: 'Pending', scheme: 'Pre-Matric Scholarship' },
  { id: 'ST2025004', name: 'Priya Singh', state: 'Bihar', score: 95, status: 'Verified', scheme: 'Pre-Matric Scholarship' },
  { id: 'ST2025005', name: 'Amit Patel', state: 'Gujarat', score: 78, status: 'Verified', scheme: 'Post-Matric Scholarship' },
  { id: 'ST2025006', name: 'Neha Gupta', state: 'MP', score: 89, status: 'Verified', scheme: 'Post-Matric Scholarship' },
  { id: 'ST2025007', name: 'Vikram Yadav', state: 'Rajasthan', score: 91, status: 'Verified', scheme: 'Pre-Matric Scholarship' },
];

export default function MyPositionTab({ appState, setAppState }) {
    const studentRecords = (appState.studentRecords && appState.studentRecords.length > 0) 
        ? appState.studentRecords 
        : mockStudentRecords;
    
    // Logged-in student (mocked as requested)
    const currentStudentId = 'ST2025001';
    
    // Get unique schemes for the dropdown
    const schemes = [...new Set(studentRecords.map(r => r.scheme))].filter(Boolean);
    const [selectedScheme, setSelectedScheme] = useState(schemes[0] || '');

    // Filter by selected scheme and sort by score descending
    const filteredRecords = studentRecords
        .filter(r => r.scheme === selectedScheme)
        .sort((a, b) => b.score - a.score);

    // Find current student's rank in this scheme
    const currentStudentIndex = filteredRecords.findIndex(r => r.id === currentStudentId);
    const currentStudentRank = currentStudentIndex !== -1 ? currentStudentIndex + 1 : null;
    const totalApplicants = filteredRecords.length;
    
    // Calculate percentile
    let topPercentile = 0;
    if (currentStudentRank && totalApplicants > 1) {
        // e.g. rank 3 of 142 -> top 2%
        topPercentile = (currentStudentRank / totalApplicants) * 100;
    } else if (currentStudentRank === 1) {
        topPercentile = 1;
    }

    // Helper to anonymize name (e.g. "Ravi Kumar" -> "R**i K***r")
    const anonymizeName = (name) => {
        if (!name) return '';
        const parts = name.split(' ');
        return parts.map(part => {
            if (part.length <= 2) return part;
            return `${part[0]}${'*'.repeat(part.length - 2)}${part[part.length - 1]}`;
        }).join(' ');
    };

    return (
        <div className="space-y-6 animate-fade-in pb-10" id="tab-student-position">
            {/* Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div>
                    <h2 className="text-2xl font-bold text-gray-800">My Position & Rankings</h2>
                    <p className="text-gray-500">Track your standing against other applicants.</p>
                </div>
                {schemes.length > 0 && (
                    <select 
                        value={selectedScheme}
                        onChange={(e) => setSelectedScheme(e.target.value)}
                        className="border border-gray-300 rounded-lg p-2 bg-white shadow-sm focus:ring-2 focus:ring-mota-green focus:border-mota-green outline-none"
                    >
                        {schemes.map(s => (
                            <option key={s} value={s}>{s}</option>
                        ))}
                    </select>
                )}
            </div>

            {currentStudentRank ? (
                <>
                    {/* Top Card */}
                    <div className="bg-green-50 border border-green-200 rounded-xl p-6 flex flex-col md:flex-row items-center justify-between shadow-sm">
                        <div>
                            <h3 className="text-green-800 font-medium text-lg mb-1">Your Rank</h3>
                            <div className="text-4xl font-extrabold text-green-700">
                                #{currentStudentRank} <span className="text-lg font-medium text-green-600">out of {totalApplicants} applicants</span>
                            </div>
                        </div>
                        <div className="mt-4 md:mt-0 md:text-right">
                            <p className="text-green-700 font-medium">Scheme: {selectedScheme}</p>
                            <p className="text-green-600 text-sm mt-1">Status: {filteredRecords[currentStudentIndex].status || 'N/A'}</p>
                        </div>
                    </div>

                    {/* Percentile Bar */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="font-bold text-gray-800 mb-4">Performance Percentile</h3>
                        <div className="relative pt-1">
                            <div className="flex mb-2 items-center justify-between">
                                <div>
                                    <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-white bg-mota-green">
                                        Top {Math.ceil(topPercentile)}%
                                    </span>
                                </div>
                                <div className="text-right">
                                    <span className="text-xs font-semibold inline-block text-gray-600">
                                        Your Score: {filteredRecords[currentStudentIndex].score}
                                    </span>
                                </div>
                            </div>
                            <div className="overflow-hidden h-2 mb-4 text-xs flex rounded bg-gray-200">
                                <div style={{ width: `${100 - topPercentile}%` }} className="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-mota-green"></div>
                            </div>
                            <p className="text-sm text-gray-500">You are in the top {Math.ceil(topPercentile)}% of applicants for this scheme.</p>
                        </div>
                    </div>
                </>
            ) : (
                <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-6 text-yellow-800">
                    You haven't applied for this scheme or your rank data is not available yet.
                </div>
            )}

            {/* Leaderboard Table */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                <div className="p-6 border-b border-gray-100 bg-gray-50">
                    <h3 className="font-bold text-gray-800">Ranked Leaderboard</h3>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-white border-b border-gray-200 text-gray-500 text-sm">
                                <th className="p-4 font-medium whitespace-nowrap">Rank</th>
                                <th className="p-4 font-medium whitespace-nowrap">Name</th>
                                <th className="p-4 font-medium whitespace-nowrap">State</th>
                                <th className="p-4 font-medium whitespace-nowrap">Score</th>
                                <th className="p-4 font-medium whitespace-nowrap">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-100">
                            {filteredRecords.map((r, i) => {
                                const isCurrent = r.id === currentStudentId;
                                return (
                                    <tr key={r.id || i} className={`${isCurrent ? 'bg-green-50' : 'hover:bg-gray-50'} transition-colors`}>
                                        <td className={`p-4 font-bold ${isCurrent ? 'text-green-700' : 'text-gray-500'}`}>
                                            #{i + 1}
                                        </td>
                                        <td className="p-4 whitespace-nowrap">
                                            <div className="flex items-center gap-2">
                                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 ${isCurrent ? 'bg-green-200 text-green-800' : 'bg-gray-200 text-gray-600'}`}>
                                                    {r.name ? r.name.charAt(0) : '?'}
                                                </div>
                                                <span className={`font-medium ${isCurrent ? 'text-green-800' : 'text-gray-700'}`}>
                                                    {isCurrent ? `${r.name} (You)` : anonymizeName(r.name)}
                                                </span>
                                            </div>
                                        </td>
                                        <td className="p-4 text-gray-600 whitespace-nowrap">{r.state || 'N/A'}</td>
                                        <td className={`p-4 font-bold ${isCurrent ? 'text-green-700' : 'text-mota-green'}`}>{r.score || 0}</td>
                                        <td className="p-4 whitespace-nowrap">
                                            <span className={`px-2 py-1 text-xs rounded-full ${
                                                r.status === 'Verified' ? 'bg-green-100 text-green-700' :
                                                r.status === 'Pending' ? 'bg-yellow-100 text-yellow-700' :
                                                'bg-gray-100 text-gray-700'
                                            }`}>
                                                {r.status || 'N/A'}
                                            </span>
                                        </td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    {filteredRecords.length === 0 && (
                        <div className="p-8 text-center text-gray-500">
                            No records found for this scheme.
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
