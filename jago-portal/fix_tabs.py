import os
import re

src_dir = 'D:/ai man/sih3/jago-portal/src/'

def modify_file(filepath, replacements):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()
    
    # Also remove "hidden" from className
    content = content.replace('className="hidden', 'className="')
    content = content.replace(' className="hidden"', '')

    for old, new in replacements:
        content = content.replace(old, new)
        
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

# EXPLORE
modify_file(os.path.join(src_dir, 'pages/StudentDashboard/StudentExploreTab.jsx'), [
    ('<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="scheme-cards"></div>',
     '''<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4" id="scheme-cards">
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
</div>'''),
    ('<tbody className="divide-y" id="university-table"></tbody>',
     '''<tbody className="divide-y" id="university-table">
    {appState.universities && appState.universities.map((u, i) => (
        <tr key={i}>
            <td className="p-4 font-medium text-gray-800">{u.name}</td>
            <td className="p-4"><span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">{u.country}</span></td>
            <td className="p-4 text-gray-600">{u.domain}</td>
            <td className="p-4 text-gray-600">{u.seats}</td>
            <td className="p-4 text-mota-green font-medium cursor-pointer hover:underline">Apply</td>
        </tr>
    ))}
</tbody>'''),
    ('<div className="space-y-3" id="prev-cutoffs"></div>',
     '''<div className="space-y-3" id="prev-cutoffs">
    {appState.prevYearCutoffs && appState.prevYearCutoffs.map((c, i) => (
        <div key={i} className="flex justify-between text-sm border-b pb-2"><span className="text-gray-700">{c.scheme}</span><span className="font-bold text-mota-green">{c.cutoff}</span></div>
    ))}
</div>'''),
    ('<div className="flex items-end h-32 gap-2" id="prev-applicants-chart"></div>',
     '''<div className="flex items-end h-32 gap-2" id="prev-applicants-chart">
    {appState.prevYearApplicants && appState.prevYearApplicants.map((a, i) => (
        <div key={i} className="flex-1 flex flex-col justify-end group">
            <div className="text-[10px] text-center text-gray-400 mb-1 opacity-0 group-hover:opacity-100">{a.count}k</div>
            <div className="bg-mota-gold rounded-t-sm w-full chart-bar" style={{ height: a.count + '%' }}></div>
            <div className="text-[10px] text-center mt-1 truncate w-full px-1" title={a.scheme}>{a.scheme.split(' ')[0]}</div>
        </div>
    ))}
</div>''')
])

# FAQ
modify_file(os.path.join(src_dir, 'pages/StudentDashboard/StudentFaqTab.jsx'), [
    ('<div className="space-y-4" id="faq-list"></div>',
     '''<div className="space-y-4" id="faq-list">
    {appState.faqs && appState.faqs.map((f, i) => (
        <details key={i} className="bg-gray-50 p-4 rounded border"><summary className="font-medium cursor-pointer text-gray-800 outline-none">{f.q}</summary><p className="mt-2 text-sm text-gray-600 ml-4">{f.a}</p></details>
    ))}
</div>'''),
    ('<tbody className="divide-y" id="contacts-table"></tbody>',
     '''<tbody className="divide-y" id="contacts-table">
    {appState.contacts && appState.contacts.map((c, i) => (
        <tr key={i}><td className="p-4 font-medium">{c.name}</td><td className="p-4 text-gray-600">{c.role}</td><td className="p-4 text-blue-600">{c.email}</td><td className="p-4 text-gray-600">{c.phone}</td></tr>
    ))}
</tbody>''')
])

# STUDENT NOTICES
modify_file(os.path.join(src_dir, 'pages/StudentDashboard/StudentNoticesTab.jsx'), [
    ('<div className="space-y-4" id="student-notice-board"></div>',
     '''<div className="space-y-4" id="student-notice-board">
    {appState.notices && appState.notices.map((n, i) => (
        <div key={i} className="p-4 border-l-4 border-mota-gold bg-gray-50 rounded-r flex justify-between items-start">
            <div><div className="font-bold text-gray-800 mb-1">{n.title}</div><div className="text-sm text-gray-600">{n.desc}</div></div>
            <div className="text-right"><div className="text-xs font-semibold text-mota-green bg-green-50 px-2 py-1 rounded">{n.type}</div><div className="text-xs text-gray-500 mt-2">Deadline: {n.deadline}</div></div>
        </div>
    ))}
</div>''')
])

# ADMIN NOTICES
modify_file(os.path.join(src_dir, 'pages/AdminDashboard/AdminNoticesTab.jsx'), [
    ('<div className="space-y-4" id="admin-notice-board"></div>',
     '''<div className="space-y-4" id="admin-notice-board">
    {appState.notices && appState.notices.map((n, i) => (
        <div key={i} className="p-4 border-l-4 border-mota-gold bg-gray-50 rounded-r flex justify-between items-start">
            <div><div className="font-bold text-gray-800 mb-1">{n.title}</div><div className="text-sm text-gray-600">{n.desc}</div></div>
            <div className="text-right"><div className="text-xs font-semibold text-mota-green bg-green-50 px-2 py-1 rounded">{n.type}</div><div className="text-xs text-gray-500 mt-2">Deadline: {n.deadline}</div></div>
        </div>
    ))}
</div>''')
])

# DASHBOARD
modify_file(os.path.join(src_dir, 'pages/StudentDashboard/StudentDashboardTab.jsx'), [
    ('<div className="space-y-3" id="dash-notices"></div>',
     '''<div className="space-y-3" id="dash-notices">
    {appState.notices && appState.notices.slice(0, 3).map((n, i) => (
        <div key={i} className="p-3 border-l-4 border-mota-gold bg-gray-50 rounded-r text-sm">
            <div className="font-semibold text-gray-800">{n.title}</div>
            <div className="text-xs text-gray-500 mt-1">{n.date} | {n.type}</div>
        </div>
    ))}
</div>'''),
    ('<span id="user-greeting">User</span>',
     '''<span id="user-greeting">{appState.currentUser?.name}</span>''')
])

# ADMIN APPLICATIONS
modify_file(os.path.join(src_dir, 'pages/AdminDashboard/AdminApplicationsTab.jsx'), [
    ('<tbody className="divide-y" id="admin-student-table"></tbody>',
     '''<tbody className="divide-y" id="admin-student-table">
    {appState.studentRecords && appState.studentRecords.map((r, i) => (
        <tr key={i}>
            <td className="p-4 text-xs font-mono text-gray-500">{r.id}</td>
            <td className="p-4 font-medium text-gray-800">{r.name}</td>
            <td className="p-4 text-gray-600">{r.scheme}</td>
            <td className="p-4 text-gray-600">{r.state}</td>
            <td className="p-4"><span className={px-2 py-1 rounded-full text-xs font-medium }>{r.status}</span></td>
            <td className="p-4"><button className="text-mota-green hover:underline text-sm">View</button></td>
        </tr>
    ))}
</tbody>''')
])

# ADMIN VERIFICATION
modify_file(os.path.join(src_dir, 'pages/AdminDashboard/AdminVerificationTab.jsx'), [
    ('<div className="space-y-4" id="admin-verify-queue"></div>',
     '''<div className="space-y-4" id="admin-verify-queue">
    {appState.studentRecords && appState.studentRecords.filter(r => r.status==='Pending').map((r, i) => (
        <div key={i} className="flex flex-col md:flex-row justify-between md:items-center p-4 border rounded-lg bg-gray-50 gap-4">
            <div className="flex-1">
                <div className="font-medium text-gray-800">{r.name} <span className="text-xs font-mono text-gray-500 ml-2">{r.id}</span></div>
                <div className="text-xs text-gray-500 mt-1">Pending: Income Certificate | Uploaded: 2 hours ago</div>
                <div className="text-xs text-blue-600 mt-1 flex items-center gap-1"><span className="animate-spin inline-block">⏳</span> AI OCR Processing...</div>
            </div>
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-mota-green text-white rounded text-sm hover:bg-[#12351f]">Verify</button>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded text-sm hover:bg-red-50">Reject</button>
            </div>
        </div>
    ))}
</div>''')
])

# ADMIN RANKINGS
modify_file(os.path.join(src_dir, 'pages/AdminDashboard/AdminRankingsTab.jsx'), [
    ('<tbody className="divide-y" id="admin-rank-table"></tbody>',
     '''<tbody className="divide-y" id="admin-rank-table">
    {appState.studentRecords && [...appState.studentRecords].sort((a,b) => b.score - a.score).map((r, i) => (
        <tr key={i}>
            <td className="p-4 text-gray-500 font-bold">#{i+1}</td>
            <td className="p-4 font-medium">{r.name}</td>
            <td className="p-4 font-bold text-mota-green">{r.score}</td>
            <td className="p-4 text-gray-600">{r.scheme}</td>
            <td className="p-4 text-gray-600">{r.state}</td>
        </tr>
    ))}
</tbody>''')
])

# STUDENT DOCUMENTS
modify_file(os.path.join(src_dir, 'pages/StudentDashboard/StudentDocumentsTab.jsx'), [
    ('<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="wallet-docs"></div>',
     '''<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" id="wallet-docs">
    {['Aadhaar', 'Income Certificate', 'Caste Certificate', 'Bank Passbook'].map((d, i) => (
        <div key={i} className="border p-4 rounded-lg flex justify-between items-center bg-white shadow-sm">
            <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400">📄</div>
                <div><div className="text-sm font-medium text-gray-800">{d}</div><div className={	ext-xs }>{i===1?'Rejected':'Verified ✔️'}</div></div>
            </div>
        </div>
    ))}
</div>''')
])

# ADMIN ANALYTICS
modify_file(os.path.join(src_dir, 'pages/AdminDashboard/AdminAnalyticsTab.jsx'), [
    ('<div className="flex items-end h-64 gap-2" id="admin-chart-schemes"></div>',
     '''<div className="flex items-end h-64 gap-2" id="admin-chart-schemes">
    {[60, 80, 40, 90, 30].map((h, i) => {
        const labels = ['Pre-Matric', 'Post-Matric', 'Top Class', 'NFST', 'NOS'];
        return (
            <div key={i} className="flex-1 flex flex-col justify-end relative group">
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">{h}k</div>
                <div className="w-full bg-mota-green rounded-t-sm chart-bar" style={{ height: h + '%' }}></div>
                <div className="text-[10px] text-center mt-2 text-gray-500 truncate" title={labels[i]}>{labels[i].split(' ')[0]}</div>
            </div>
        );
    })}
</div>''')
])

print("Fixed tabs successfully.")
