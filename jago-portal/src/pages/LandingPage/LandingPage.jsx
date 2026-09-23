import React, { useState } from "react";
export default function LandingPage({ setView, appState, setAppState, notices, schemes, universities }) {
    return (
        <section className="min-h-screen flex flex-col fade-in block" id="view-landing">
            <nav className="bg-white shadow-sm px-8 py-5 flex justify-between items-center z-10 relative">
                <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-mota-green rounded-full flex items-center justify-center text-white font-bold text-lg">M</div>
                    <div>
                        <h1 className="font-bold text-xl text-mota-green leading-tight">JAGO</h1>
                        <p className="text-xs text-gray-500">Ministry of Tribal Affairs</p>
                    </div>
                </div>
            </nav>
            <div className="bg-mota-green text-white py-24 px-6 lg:px-20 relative overflow-hidden" style={{ minHeight: '60vh' }}>
                <div className="max-w-full px-6 mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    <div>
                        <span className="bg-white/20 text-mota-gold text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">Empowering Every ST Student</span>
                        <h2 className="text-5xl lg:text-6xl font-bold leading-tight mb-6">JAGO Tribal Scholarship Portal</h2>
                        <p className="text-lg text-green-50 mb-8 opacity-90">Seamless access to Pre-Matric, Post-Matric, and Higher Education schemes. Apply, track, and receive disbursements on a unified digital platform.</p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <button onClick={() => setView('registration')} className="bg-mota-gold text-mota-green font-bold py-3 px-8 rounded-md shadow-lg hover:bg-yellow-500 transition-colors">
                                📝 New Registration
                            </button>
                            <a className="bg-white text-mota-green font-bold py-3 px-8 rounded-md shadow-lg hover:bg-gray-100 transition-colors text-center" href="#login-section">
                                🔑 Existing Login
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded-lg shadow-xl p-6 text-gray-800">
                        <div className="flex justify-between items-center mb-4">
                            <h3 className="font-bold text-lg text-mota-green border-b-2 border-mota-gold pb-1 inline-block">Notice Board</h3>
                            <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded animate-pulse">Live</span>
                        </div>
                        <div className="space-y-3 h-64 overflow-y-auto no-scrollbar pr-2">
                            {(notices || []).map((n, i) => (
                                <div key={i} className="p-3 border-l-4 border-mota-gold bg-gray-50 hover:bg-gray-100 transition-colors rounded-r cursor-pointer text-sm">
                                    <div className="font-semibold text-gray-800">{n.title}</div>
                                    <div className="text-xs text-gray-500 mt-1">{n.date} | {n.type}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white shadow-md border-b border-gray-200">
                <div className="max-w-full px-6 mx-auto py-8 grid grid-cols-1 md:grid-cols-3 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200">
                    <div className="pt-4 md:pt-0">
                        <div className="font-black text-mota-green mb-1" style={{ fontSize: '3rem' }}>{appState.stats.beneficiaries.toLocaleString()}</div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Total Beneficiaries</div>
                    </div>
                    <div className="pt-4 md:pt-0">
                        <div className="font-black text-mota-green mb-1" style={{ fontSize: '3rem' }}>{appState.stats.disbursed}</div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">Scholarships Disbursed</div>
                    </div>
                    <div className="pt-4 md:pt-0">
                        <div className="font-black text-mota-green mb-1" style={{ fontSize: '3rem' }}>{appState.stats.states}</div>
                        <div className="text-sm text-gray-500 font-medium uppercase tracking-wide">States Covered</div>
                    </div>
                </div>
            </div>
            <div className="flex-grow flex items-center justify-center p-6 bg-gray-50" id="login-section">
                <div className="w-full max-w-4xl mx-auto py-12 px-4">
                    <div className="text-center mb-10">
                        <h3 className="text-3xl font-bold text-mota-green mb-3">Portal Login</h3>
                        <p className="text-gray-600">Select your role to access the JAGO portal</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
                        {/* Student Login Button Card */}
                        <div 
                            onClick={() => setView('student-login')}
                            className="bg-white rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-mota-green p-8 flex flex-col items-center cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-20 h-20 bg-green-50 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
                                🎓
                            </div>
                            <h4 className="text-2xl font-bold text-gray-800 mb-2">Student Login</h4>
                            <p className="text-center text-gray-500 mb-6">Access your scholarship dashboard, track applications, and view documents.</p>
                            <button className="w-full bg-mota-green text-white font-semibold py-3 px-6 rounded-lg hover:bg-[#12351f] transition-colors flex items-center justify-center gap-2">
                                Login as Student
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                        
                        {/* Admin Login Button Card */}
                        <div 
                            onClick={() => setView('admin-login')}
                            className="bg-gray-900 rounded-xl shadow-lg hover:shadow-2xl border-t-4 border-blue-500 p-8 flex flex-col items-center cursor-pointer transform hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-20 h-20 bg-gray-800 rounded-full flex items-center justify-center text-4xl mb-6 shadow-inner">
                                ⚙️
                            </div>
                            <h4 className="text-2xl font-bold text-white mb-2">Admin Login</h4>
                            <p className="text-center text-gray-400 mb-6">Manage applications, verify documents, and view analytics.</p>
                            <button className="w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2">
                                Login as Admin
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
