import React, { useState } from "react";

export default function AdminLoginPage({ setView, setAppState }) {
    const [loginId, setLoginId] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        
        if (loginId === '2') {
            const user = { id: '2', role: 'admin', name: 'Admin Officer' };
            setAppState(p => ({ 
                ...p, 
                currentUser: user, 
                activeSidebarTab: 'admin-analytics', 
                currentView: 'dashboard' 
            }));
        } else {
            setError('Invalid Admin ID. Please try again.');
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-900 p-6 fade-in">
            <div className="bg-gray-800 rounded-lg shadow-xl border border-gray-700 w-full max-w-md p-8 relative">
                <button 
                    onClick={() => setView('landing')}
                    className="absolute top-4 left-4 text-gray-400 hover:text-white flex items-center gap-1 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Back
                </button>
                <div className="mt-6 mb-6 text-center">
                    <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">⚙️</div>
                    <h3 className="text-2xl font-bold text-white">Admin Portal</h3>
                    <p className="text-sm text-gray-400 mt-2">Enter your Admin ID to access the dashboard</p>
                </div>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-300 mb-1">Admin ID</label>
                        <input 
                            className={`w-full bg-gray-700 text-white border rounded-md px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors ${error ? 'border-red-500' : 'border-gray-600'}`}
                            placeholder="Try '2'" 
                            required 
                            type="text"
                            value={loginId}
                            onChange={e => {
                                setLoginId(e.target.value);
                                setError('');
                            }}
                        />
                    </div>
                    {error && <p className="text-red-400 text-sm">{error}</p>}
                    <button className="w-full bg-blue-600 text-white font-bold py-3 rounded-md hover:bg-blue-700 transition-colors shadow-sm mt-2" type="submit">
                        Login as Admin
                    </button>
                </form>
            </div>
        </section>
    );
}
