import React, { useState } from "react";

export default function StudentLoginPage({ setView, setAppState }) {
    const [loginId, setLoginId] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        setError('');
        
        if (loginId === '1') {
            const user = { id: '1', role: 'student', name: 'Ravi Kumar' };
            setAppState(p => ({ 
                ...p, 
                currentUser: user, 
                activeSidebarTab: 'student-dashboard', 
                currentView: 'dashboard' 
            }));
        } else {
            setError('Invalid Student ID. Please try again.');
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center bg-gray-50 p-6 fade-in">
            <div className="bg-white rounded-lg shadow-lg border border-gray-100 w-full max-w-md p-8 relative">
                <button 
                    onClick={() => setView('landing')}
                    className="absolute top-4 left-4 text-gray-500 hover:text-mota-green flex items-center gap-1 transition-colors"
                >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                    Back
                </button>
                <div className="mt-6 mb-6 text-center">
                    <div className="w-16 h-16 bg-mota-green rounded-full flex items-center justify-center text-white font-bold text-2xl mx-auto mb-4">🎓</div>
                    <h3 className="text-2xl font-bold text-mota-green">Student Login</h3>
                    <p className="text-sm text-gray-500 mt-2">Enter your Student ID to access your dashboard</p>
                </div>
                <form className="space-y-4" onSubmit={handleLogin}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Student ID</label>
                        <input 
                            className={`w-full border rounded-md px-4 py-3 focus:ring-2 focus:ring-mota-green focus:border-mota-green outline-none transition-colors ${error ? 'border-red-500' : 'border-gray-300'}`}
                            placeholder="Try '1'" 
                            required 
                            type="text"
                            value={loginId}
                            onChange={e => {
                                setLoginId(e.target.value);
                                setError('');
                            }}
                        />
                    </div>
                    {error && <p className="text-red-500 text-sm">{error}</p>}
                    <button className="w-full bg-mota-green text-white font-bold py-3 rounded-md hover:bg-[#12351f] transition-colors shadow-sm mt-2" type="submit">
                        Login as Student
                    </button>
                </form>
            </div>
        </section>
    );
}
