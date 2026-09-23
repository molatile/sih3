import React, { useState, useEffect } from "react";

const VerificationRow = ({ r }) => {
    const [ocrState, setOcrState] = useState({ step: 0, text: 'Queued...' });
    
    useEffect(() => {
        let isMounted = true;
        
        const runPipeline = async () => {
            if (!isMounted) return;
            setOcrState({ step: 1, text: '📤 Uploading...' });
            
            await new Promise(res => setTimeout(res, 500));
            if (!isMounted) return;
            setOcrState({ step: 2, text: '🔍 OCR Scanning document...' });
            
            await new Promise(res => setTimeout(res, 1000));
            if (!isMounted) return;
            setOcrState({ step: 3, text: '🤖 AI Extracting fields...' });
            
            await new Promise(res => setTimeout(res, 1000));
            if (!isMounted) return;
            const isVerified = Math.random() < 0.8;
            setOcrState({ 
                step: 4, 
                text: isVerified ? '✅ Verified' : '⚠️ Manual Review Required',
                isVerified 
            });
        };
        
        runPipeline();
        
        return () => { isMounted = false; };
    }, []);

    let progress = 0;
    if (ocrState.step === 1) progress = 25;
    else if (ocrState.step === 2) progress = 50;
    else if (ocrState.step === 3) progress = 75;
    else if (ocrState.step === 4) progress = 100;

    return (
        <div className="flex flex-col md:flex-row justify-between md:items-start p-4 border rounded-lg bg-gray-50 gap-4 shadow-sm">
            <div className="flex-1 w-full">
                <div className="font-medium text-gray-800">{r.name} <span className="text-xs font-mono text-gray-500 ml-2">{r.id}</span></div>
                <div className="text-xs text-gray-500 mt-1 mb-2">Pending: Income Certificate | Uploaded: Just now</div>
                
                <div className="text-sm font-medium mt-2 flex items-center">
                    {ocrState.step > 0 && ocrState.step < 4 && <span className="animate-spin inline-block mr-2">⏳</span>}
                    <span className={ocrState.step === 4 ? (ocrState.isVerified ? 'text-green-600' : 'text-amber-600') : 'text-blue-600'}>
                        {ocrState.text}
                    </span>
                </div>
                
                {ocrState.step > 0 && ocrState.step < 4 && (
                    <div className="w-full h-2 bg-gray-200 rounded mt-2 overflow-hidden max-w-xs">
                        <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                    </div>
                )}
                
                {ocrState.step === 4 && ocrState.isVerified && (
                     <div className="mt-3 text-sm text-gray-700 bg-white p-3 rounded border max-w-md">
                         <div className="font-semibold text-gray-800 mb-2 border-b pb-1">Extracted Data (Income Certificate):</div>
                         <div className="grid grid-cols-2 gap-2">
                             <div><span className="text-gray-500">Annual Income:</span><br/>₹1,20,000</div>
                             <div><span className="text-gray-500">Issuing Authority:</span><br/>Tehsildar</div>
                         </div>
                     </div>
                )}
            </div>
            <div className="flex gap-2 shrink-0">
                <button className="px-4 py-2 bg-mota-green text-white rounded text-sm hover:bg-[#12351f] font-medium transition-colors">Verify</button>
                <button className="px-4 py-2 border border-red-500 text-red-500 rounded text-sm hover:bg-red-50 font-medium transition-colors">Reject</button>
            </div>
        </div>
    );
};

export default function AdminVerificationTab({ appState, setAppState }) {
    return (
        <div className="" id="tab-admin-verification">
            <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
                <h3 className="font-bold mb-4 text-lg">Document Verification Queue</h3>
                <div className="space-y-4" id="admin-verify-queue">
                    {appState.studentRecords && appState.studentRecords.filter(r => r.status==='Pending').map((r) => (
                        <VerificationRow key={r.id} r={r} />
                    ))}
                    {(!appState.studentRecords || appState.studentRecords.filter(r => r.status==='Pending').length === 0) && (
                        <div className="text-gray-500 text-center py-8">No pending documents to verify.</div>
                    )}
                </div>
            </div>
        </div>
    );
}