import React, { useState } from "react";

export default function RegistrationPage({ appState, setAppState, setView }) {
    const draft = appState.registrationDraft;
    const currentStep = draft.currentStep;

    const setStep = (step) => setAppState(p => ({
        ...p, registrationDraft: { ...p.registrationDraft, currentStep: step }
    }));

    const updateBasic = (field, val) => setAppState(p => ({
        ...p, registrationDraft: { ...p.registrationDraft, basicDetails: { ...p.registrationDraft.basicDetails, [field]: val } }
    }));

    const updateAcademic = (field, val) => setAppState(p => ({
        ...p, registrationDraft: { ...p.registrationDraft, academicDetails: { ...p.registrationDraft.academicDetails, [field]: val } }
    }));

    const handleUpload = (docKey) => {
        setAppState(p => ({
            ...p, registrationDraft: {
                ...p.registrationDraft,
                documents: {
                    ...p.registrationDraft.documents,
                    [docKey]: { status: 'uploading', step: 1, text: '📤 Uploading...' }
                }
            }
        }));

        setTimeout(() => {
            setAppState(p => ({
                ...p, registrationDraft: {
                    ...p.registrationDraft,
                    documents: {
                        ...p.registrationDraft.documents,
                        [docKey]: { ...p.registrationDraft.documents[docKey], step: 2, text: '🔍 OCR Scanning document...' }
                    }
                }
            }));

            setTimeout(() => {
                setAppState(p => ({
                    ...p, registrationDraft: {
                        ...p.registrationDraft,
                        documents: {
                            ...p.registrationDraft.documents,
                            [docKey]: { ...p.registrationDraft.documents[docKey], step: 3, text: '🤖 AI Extracting fields...' }
                        }
                    }
                }));

                setTimeout(() => {
                    const isVerified = Math.random() < 0.8;
                    setAppState(p => ({
                        ...p, registrationDraft: {
                            ...p.registrationDraft,
                            documents: {
                                ...p.registrationDraft.documents,
                                [docKey]: { 
                                    status: isVerified ? 'verified' : 'review',
                                    step: 4,
                                    text: isVerified ? '✅ Verified' : '⚠️ Manual Review Required',
                                    fileName: docKey + '_doc.pdf'
                                }
                            }
                        }
                    }));
                }, 1000);
            }, 1000);
        }, 500);
    };

    const submitForm = () => {
        setAppState(p => ({ ...p, generatedStudentId: 'ST' + Math.floor(1000 + Math.random() * 9000) }));
        setStep(5);
    };

    const docsList = [
        { key: 'caste', label: 'ST/PVTG Certificate' },
        { key: 'income', label: 'Income Certificate' },
        { key: 'aadhaar', label: 'Aadhaar Card' },
        { key: 'marksheet', label: 'Last Exam Marksheet' },
        { key: 'passbook', label: 'Bank Passbook' },
        { key: 'bonafide', label: 'Institution Bonafide' }
    ];

    return (
        <section className="min-h-screen bg-gray-50 fade-in pb-20">
            <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center sticky top-0 z-10">
                <h1 onClick={() => setView('landing')} className="font-bold text-xl text-mota-green flex items-center gap-2 cursor-pointer">
                    <span>🏠</span> New Student Registration
                </h1>
                <button className="text-sm text-gray-500 hover:text-mota-green font-medium">Save &amp; Continue Later</button>
            </nav>
            <div className="max-w-4xl px-6 mx-auto mt-8">
                {currentStep < 5 && (
                    <div className="flex items-center justify-between mb-8 relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-gray-200 -z-10"></div>
                        <div className="w-full absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-mota-green -z-10 transition-all duration-300" style={{ width: ((currentStep - 1) / 3 * 100) + '%' }}></div>
                        
                        {[1, 2, 3, 4].map(step => (
                            <div key={step} className="flex flex-col items-center bg-gray-50 px-2">
                                <div className="w-8 h-8 rounded-full flex items-center justify-center">
                                    {step}
                                </div>
                                <span className="text-xs mt-1 font-medium">
                                    {step === 1 ? 'Basic Details' : step === 2 ? 'Academic' : step === 3 ? 'Documents' : 'Review'}
                                </span>
                            </div>
                        ))}
                    </div>
                )}
                <div className="bg-white rounded-lg shadow border border-gray-100 p-8 md:p-10">
                    {currentStep === 1 && (
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Basic Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div><label className="block text-base text-gray-600 mb-1">Full Name</label><input value={draft.basicDetails.name || ''} onChange={e => updateBasic('name', e.target.value)} className="w-full border rounded px-4 py-3" placeholder="As per Aadhaar" type="text"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">Date of Birth</label><input value={draft.basicDetails.dob || ''} onChange={e => updateBasic('dob', e.target.value)} className="w-full border rounded px-4 py-3" type="date"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">Gender</label><select value={draft.basicDetails.gender || ''} onChange={e => updateBasic('gender', e.target.value)} className="w-full border rounded px-4 py-3"><option value="">Select</option><option>Male</option><option>Female</option><option>Other</option></select></div>
                                <div><label className="block text-base text-gray-600 mb-1">Mobile Number</label><input value={draft.basicDetails.mobile || ''} onChange={e => updateBasic('mobile', e.target.value)} className="w-full border rounded px-4 py-3" type="tel"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">Email</label><input value={draft.basicDetails.email || ''} onChange={e => updateBasic('email', e.target.value)} className="w-full border rounded px-4 py-3" type="email"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">State</label><input value={draft.basicDetails.state || ''} onChange={e => updateBasic('state', e.target.value)} className="w-full border rounded px-4 py-3" type="text"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">District</label><input value={draft.basicDetails.district || ''} onChange={e => updateBasic('district', e.target.value)} className="w-full border rounded px-4 py-3" type="text"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">Aadhaar Number</label><input value={draft.basicDetails.aadhaar || ''} onChange={e => updateBasic('aadhaar', e.target.value)} className="w-full border rounded px-4 py-3" placeholder="XXXX-XXXX-XXXX" type="text"/></div>
                            </div>
                            <div className="mt-6 flex justify-end">
                                <button onClick={() => setStep(2)} className="bg-mota-green text-white px-6 py-2 rounded font-medium hover:bg-[#12351f]">Next ➔</button>
                            </div>
                        </div>
                    )}
                    {currentStep === 2 && (
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Academic Details</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div><label className="block text-base text-gray-600 mb-1">Current Level</label><select value={draft.academicDetails.level || ''} onChange={e => updateAcademic('level', e.target.value)} className="w-full border rounded px-4 py-3"><option value="">Select</option><option>Pre-Matric</option><option>Post-Matric</option><option>UG</option><option>PG</option><option>PhD</option></select></div>
                                <div><label className="block text-base text-gray-600 mb-1">Class/Semester</label><input value={draft.academicDetails.class || ''} onChange={e => updateAcademic('class', e.target.value)} className="w-full border rounded px-4 py-3" type="text"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">Institution Name</label><input value={draft.academicDetails.inst || ''} onChange={e => updateAcademic('inst', e.target.value)} className="w-full border rounded px-4 py-3" type="text"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">AISHE Code</label><input value={draft.academicDetails.aishe || ''} onChange={e => updateAcademic('aishe', e.target.value)} className="w-full border rounded px-4 py-3" type="text"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">Board/University</label><input value={draft.academicDetails.board || ''} onChange={e => updateAcademic('board', e.target.value)} className="w-full border rounded px-4 py-3" type="text"/></div>
                                <div><label className="block text-base text-gray-600 mb-1">Marks in Last Exam (%)</label><input value={draft.academicDetails.marks || ''} onChange={e => updateAcademic('marks', e.target.value)} className="w-full border rounded px-4 py-3" type="number"/></div>
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button onClick={() => setStep(1)} className="text-gray-600 px-4 py-2 border rounded hover:bg-gray-50">← Back</button>
                                <button onClick={() => setStep(3)} className="bg-mota-green text-white px-6 py-2 rounded font-medium hover:bg-[#12351f]">Next ➔</button>
                            </div>
                        </div>
                    )}
                    {currentStep === 3 && (
                        <div id="reg-step-3">
                            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-4 border-b pb-2 gap-2">
                                <h3 className="text-lg font-bold text-gray-800">Document Upload</h3>
                                <span className="text-xs bg-green-50 text-green-700 px-2 py-1 rounded border border-green-200">Powered by AI OCR — extracted data will be auto-filled in your application</span>
                            </div>
                            <div className="space-y-4">
                                {docsList.map(doc => {
                                    const docData = draft.documents[doc.key];
                                    let progress = 0;
                                    if (docData.step === 1) progress = 25;
                                    else if (docData.step === 2) progress = 50;
                                    else if (docData.step === 3) progress = 75;
                                    else if (docData.step === 4) progress = 100;

                                    return (
                                        <div key={doc.key} className="flex flex-col p-3 border rounded shadow-sm">
                                            <div className="flex items-center justify-between">
                                                <div className="font-medium text-gray-700">{doc.label}</div>
                                                <div className="flex items-center gap-3">
                                                    {docData.status === 'awaiting' && (
                                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">Awaiting Upload</span>
                                                    )}
                                                    {docData.status !== 'awaiting' && !docData.step && (
                                                        <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">{docData.status}</span>
                                                    )}
                                                    {docData.status === 'awaiting' && (
                                                        <button onClick={() => handleUpload(doc.key)} className="px-3 py-1 bg-gray-100 border text-sm rounded hover:bg-gray-200 font-medium">Upload</button>
                                                    )}
                                                </div>
                                            </div>
                                            
                                            {docData.status !== 'awaiting' && (
                                                <div className="mt-3">
                                                    <div className="text-sm font-medium mb-2 flex items-center">
                                                        {docData.step < 4 && <span className="animate-spin inline-block mr-2">⏳</span>}
                                                        <span className={docData.step === 4 ? (docData.status === 'verified' ? 'text-green-600' : 'text-amber-600') : 'text-blue-600'}>
                                                            {docData.text}
                                                        </span>
                                                    </div>
                                                    {docData.step < 4 && (
                                                        <div className="w-full h-2 bg-gray-200 rounded overflow-hidden">
                                                            <div className="h-full bg-blue-500 transition-all duration-500" style={{ width: `${progress}%` }}></div>
                                                        </div>
                                                    )}
                                                    {docData.status === 'verified' && (
                                                        <div className="mt-3 text-sm bg-blue-50 p-3 rounded border border-blue-100">
                                                            {doc.key === 'aadhaar' && (
                                                                <>
                                                                    <div><strong>Name:</strong> {draft.basicDetails.name || 'John Doe'}</div>
                                                                    <div><strong>DOB:</strong> {draft.basicDetails.dob || '01-01-2000'}</div>
                                                                    <div><strong>Aadhaar No:</strong> XXXX-XXXX-{draft.basicDetails.aadhaar ? draft.basicDetails.aadhaar.slice(-4) : '1234'}</div>
                                                                </>
                                                            )}
                                                            {doc.key === 'income' && (
                                                                <>
                                                                    <div><strong>Annual Income:</strong> ₹1,20,000</div>
                                                                    <div><strong>Issuing Authority:</strong> Tehsildar</div>
                                                                </>
                                                            )}
                                                            {doc.key === 'caste' && (
                                                                <>
                                                                    <div><strong>Category:</strong> ST</div>
                                                                    <div><strong>Issuing State:</strong> Jharkhand</div>
                                                                </>
                                                            )}
                                                            {['marksheet', 'passbook', 'bonafide'].includes(doc.key) && (
                                                                <div>Fields extracted successfully</div>
                                                            )}
                                                        </div>
                                                    )}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button onClick={() => setStep(2)} className="text-gray-600 px-4 py-2 border rounded hover:bg-gray-50">← Back</button>
                                <button onClick={() => setStep(4)} className="bg-mota-green text-white px-6 py-2 rounded font-medium hover:bg-[#12351f]">Review ➔</button>
                            </div>
                        </div>
                    )}
                    {currentStep === 4 && (
                        <div>
                            <h3 className="text-lg font-bold text-gray-800 mb-4 border-b pb-2">Review &amp; Submit</h3>
                            <div className="bg-gray-50 p-4 rounded text-sm space-y-4">
                                <div><strong className="text-gray-700">Name:</strong> <span>{draft.basicDetails.name || '-'}</span></div>
                                <div><strong className="text-gray-700">Institution:</strong> <span>{draft.academicDetails.inst || '-'}</span></div>
                                <div><strong className="text-gray-700">Level:</strong> <span>{draft.academicDetails.level || '-'}</span></div>
                                <p className="text-xs text-gray-500 italic mt-2">I declare that all information provided is true to my knowledge.</p>
                            </div>
                            <div className="mt-6 flex justify-between">
                                <button onClick={() => setStep(3)} className="text-gray-600 px-4 py-2 border rounded hover:bg-gray-50">← Back</button>
                                <button onClick={submitForm} className="bg-mota-gold text-mota-green px-6 py-2 rounded font-bold hover:bg-yellow-500 shadow">Submit Application</button>
                            </div>
                        </div>
                    )}
                    {currentStep === 5 && (
                        <div className="text-center py-10">
                            <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4 text-3xl">✔</div>
                            <h3 className="text-2xl font-bold text-gray-800 mb-2">Registration Successful!</h3>
                            <p className="text-gray-600 mb-6">Your application has been drafted. Please save your Student ID to login.</p>
                            <div className="inline-block bg-gray-100 border border-gray-300 rounded px-6 py-3 font-mono text-xl font-bold tracking-wider text-mota-green mb-6">
                                {appState.generatedStudentId || 'ST2025XXXX'}
                            </div>
                            <div>
                                <button onClick={() => setView('landing')} className="bg-mota-green text-white px-6 py-2 rounded hover:bg-[#12351f]">Return to Login</button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
}
