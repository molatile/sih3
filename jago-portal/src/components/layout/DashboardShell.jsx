import React from 'react';
import Sidebar from './Sidebar';

export default function DashboardShell({ appState, setAppState, setView, switchTab, children }) {
    return (
        <section className="min-h-screen bg-gray-50 flex-col md:flex-row h-full flex w-full">
            <Sidebar appState={appState} setAppState={setAppState} setView={setView} switchTab={switchTab} />
            <main className="flex-1 flex flex-col h-full overflow-hidden min-w-0">
                <header className="bg-white border-b border-gray-200 h-16 flex items-center justify-between px-4 lg:px-8 flex-shrink-0">
                    <div className="flex items-center gap-4">
                        <button onClick={() => setAppState(p => ({...p, isSidebarOpen: !p.isSidebarOpen}))} className="md:hidden text-gray-500 focus:outline-none">
                            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </button>
                        <h2 className="text-lg font-semibold text-gray-800 md:hidden">JAGO</h2>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="hidden sm:block text-right">
                            <div className="text-sm font-medium text-gray-800">{appState.currentUser?.name}</div>
                            <div className="text-xs text-gray-500">{appState.currentUser?.role === 'admin' ? 'State Nodal Officer' : 'Applicant'}</div>
                        </div>
                        <div className="w-10 h-10 rounded-full bg-mota-green text-white flex items-center justify-center font-bold">
                            {appState.currentUser?.name.charAt(0) || 'U'}
                        </div>
                        <button onClick={() => { setView('landing'); setAppState(p => ({...p, currentUser: null})); }} className="text-gray-400 hover:text-red-500 ml-2">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
                        </button>
                    </div>
                </header>
                <div className="flex-1 overflow-y-auto p-4 lg:p-8">
                    {children}
                </div>
            </main>
        </section>
    );
}
