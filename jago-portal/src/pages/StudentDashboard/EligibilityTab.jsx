import React, { useState } from 'react';

export default function EligibilityTab() {
  const [formData, setFormData] = useState({
    level: '',
    income: '',
    marks: '',
    hasStCert: '',
    hasScholarship: ''
  });

  const [results, setResults] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const checkEligibility = (e) => {
    e.preventDefault();
    
    const level = formData.level;
    const income = formData.income;
    const marks = parseFloat(formData.marks) || 0;
    const st = formData.hasStCert === 'Yes';
    const scholarship = formData.hasScholarship === 'Yes';

    const isIncomeBelow2_5L = income === 'Below ₹1L' || income === '₹1L-₹2.5L';
    
    // Logic
    // Pre-Matric: level=Pre-Matric, income below ₹2.5L, ST=Yes
    const eligiblePreMatric = level === 'Pre-Matric' && isIncomeBelow2_5L && st;
    const reasonPreMatric = eligiblePreMatric ? '' : 
        (!st ? 'Requires ST Certificate.' : 
        (level !== 'Pre-Matric' ? 'Only for Pre-Matric level.' : 
        'Income must be below ₹2.5L.'));

    // Post-Matric: level=Post-Matric/UG/PG, income below ₹2.5L, ST=Yes
    const eligiblePostMatric = ['Post-Matric', 'UG', 'PG'].includes(level) && isIncomeBelow2_5L && st;
    const reasonPostMatric = eligiblePostMatric ? '' :
        (!st ? 'Requires ST Certificate.' :
        (!['Post-Matric', 'UG', 'PG'].includes(level) ? 'Requires Post-Matric, UG, or PG level.' :
        'Income must be below ₹2.5L.'));

    // Top Class: marks above 80%, ST=Yes, not already availing scholarship
    const eligibleTopClass = marks > 80 && st && !scholarship;
    const reasonTopClass = eligibleTopClass ? '' :
        (!st ? 'Requires ST Certificate.' :
        (scholarship ? 'Cannot be availing another scholarship.' :
        'Marks must be above 80%.'));

    // NFST: level=PG/PhD, ST=Yes, marks above 65%
    const eligibleNfst = ['PG', 'PhD'].includes(level) && st && marks > 65;
    const reasonNfst = eligibleNfst ? '' :
        (!st ? 'Requires ST Certificate.' :
        (!['PG', 'PhD'].includes(level) ? 'Requires PG or PhD level.' :
        'Marks must be above 65%.'));

    // NOS: level=UG/PG/PhD, marks above 60%, ST=Yes
    const eligibleNos = ['UG', 'PG', 'PhD'].includes(level) && st && marks > 60;
    const reasonNos = eligibleNos ? '' :
        (!st ? 'Requires ST Certificate.' :
        (!['UG', 'PG', 'PhD'].includes(level) ? 'Requires UG, PG, or PhD level.' :
        'Marks must be above 60%.'));

    setResults({
      schemes: [
        { name: 'Pre-Matric Scholarship', eligible: eligiblePreMatric, reason: reasonPreMatric },
        { name: 'Post-Matric Scholarship', eligible: eligiblePostMatric, reason: reasonPostMatric },
        { name: 'Top Class Education', eligible: eligibleTopClass, reason: reasonTopClass },
        { name: 'National Fellowship (NFST)', eligible: eligibleNfst, reason: reasonNfst },
        { name: 'National Overseas Scholarship (NOS)', eligible: eligibleNos, reason: reasonNos },
      ],
      hasScholarship: scholarship
    });
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      <h2 className="text-2xl font-bold text-gray-800">🎯 Check Your Eligibility</h2>
      
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <form onSubmit={checkEligibility} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Current Education Level</label>
            <select name="level" required value={formData.level} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-500">
              <option value="">Select Level</option>
              <option value="Pre-Matric">Pre-Matric</option>
              <option value="Post-Matric">Post-Matric</option>
              <option value="UG">Undergraduate (UG)</option>
              <option value="PG">Postgraduate (PG)</option>
              <option value="PhD">PhD</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Annual Family Income</label>
            <select name="income" required value={formData.income} onChange={handleChange} className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-500">
              <option value="">Select Income Range</option>
              <option value="Below ₹1L">Below ₹1L</option>
              <option value="₹1L-₹2.5L">₹1L - ₹2.5L</option>
              <option value="₹2.5L-₹6L">₹2.5L - ₹6L</option>
              <option value="Above ₹6L">Above ₹6L</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Marks in Last Exam (%)</label>
            <input type="number" name="marks" required min="0" max="100" step="0.01" value={formData.marks} onChange={handleChange} placeholder="e.g. 85" className="w-full border border-gray-300 rounded p-2 focus:outline-none focus:border-green-500" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Do you have an ST certificate?</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="hasStCert" value="Yes" required onChange={handleChange} checked={formData.hasStCert === 'Yes'} className="text-green-600 focus:ring-green-500" /> Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="hasStCert" value="No" required onChange={handleChange} checked={formData.hasStCert === 'No'} className="text-green-600 focus:ring-green-500" /> No
              </label>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Are you currently availing any scholarship?</label>
            <div className="flex gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="hasScholarship" value="Yes" required onChange={handleChange} checked={formData.hasScholarship === 'Yes'} className="text-green-600 focus:ring-green-500" /> Yes
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="radio" name="hasScholarship" value="No" required onChange={handleChange} checked={formData.hasScholarship === 'No'} className="text-green-600 focus:ring-green-500" /> No
              </label>
            </div>
          </div>

          <button type="submit" className="w-full bg-mota-green text-white font-semibold py-2 px-4 rounded hover:bg-[#12351f] transition-colors mt-6">
            Check Eligibility
          </button>
        </form>
      </div>

      {results && (
        <div className="space-y-4 animate-fade-in">
          <h3 className="text-xl font-bold text-gray-800 border-b pb-2 mt-4">Eligibility Results</h3>
          
          {results.hasScholarship && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded text-yellow-800">
              <p className="font-bold flex items-center gap-2">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path></svg>
                Warning
              </p>
              <p className="text-sm mt-1 ml-7">You are currently availing a scholarship. MoTA allows only one scheme at a time.</p>
            </div>
          )}

          <div className="grid gap-4 md:grid-cols-2">
            {results.schemes.map((scheme, idx) => (
              <div key={idx} className={`p-4 rounded-lg border ${scheme.eligible ? 'bg-green-50 border-green-200' : 'bg-gray-50 border-gray-200'}`}>
                <div className="flex items-start gap-3">
                  <div className={`mt-0.5 flex-shrink-0 ${scheme.eligible ? 'text-green-600' : 'text-gray-400'}`}>
                    {scheme.eligible ? (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    ) : (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    )}
                  </div>
                  <div>
                    <h4 className={`font-semibold ${scheme.eligible ? 'text-green-800' : 'text-gray-700'}`}>{scheme.name}</h4>
                    {!scheme.eligible && (
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed"><strong>Reason:</strong> {scheme.reason}</p>
                    )}
                    {scheme.eligible && (
                      <p className="text-xs text-green-700 mt-1 font-medium">You are eligible to apply!</p>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
