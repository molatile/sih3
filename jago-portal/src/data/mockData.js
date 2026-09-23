export const initialAppState = {
            currentUser: null, // null | { id: '1', role: 'student', name: 'Ravi Kumar' } | { id: '2', role: 'admin', name: 'Admin Officer' }
            currentView: 'landing',
            activeSidebarTab: null,
            isSidebarOpen: false,
            isAiChatOpen: false,
            generatedStudentId: null,

            // Multi-step form state
            registrationDraft: {
                currentStep: 1,
                basicDetails: {},
                academicDetails: {},
                documents: {
                    caste: { status: 'awaiting', fileName: null },
                    income: { status: 'awaiting', fileName: null },
                    aadhaar: { status: 'awaiting', fileName: null },
                    marksheet: { status: 'awaiting', fileName: null },
                    passbook: { status: 'awaiting', fileName: null },
                    bonafide: { status: 'awaiting', fileName: null }
                }
            },

            // Mock Data
            stats: {
                beneficiaries: 1249053,
                disbursed: '₹842 Cr',
                states: 28
            }
};

export const cutoffData = [  
  { scheme: 'Pre-Matric', cutoff2324: '55%', cutoff2425: '58%', change: 'up' },  
  { scheme: 'Post-Matric', cutoff2324: '60%', cutoff2425: '62%', change: 'up' },  
  { scheme: 'Top Class', cutoff2324: '82%', cutoff2425: '85%', change: 'up' },  
  { scheme: 'NFST', cutoff2324: '63%', cutoff2425: '65%', change: 'up' },  
  { scheme: 'NOS', cutoff2324: '58%', cutoff2425: '60%', change: 'up' },  
];  
export const applicantTrend = [  
  { scheme: 'Pre-Matric', y2223: 95, y2324: 110, y2425: 120 },  
  { scheme: 'Post-Matric', y2223: 70, y2324: 75, y2425: 80 },  
  { scheme: 'Top Class', y2223: 30, y2324: 36, y2425: 40 },  
  { scheme: 'NFST', y2223: 18, y2324: 22, y2425: 25 },  
  { scheme: 'NOS', y2223: 8, y2324: 9, y2425: 10 },  
];

export const contacts = [  
  { name: 'Dr. Amit Sharma', role: 'Nodal Officer, NOS', email: 'nos.mota@gov.in', phone: '011-23382391', state: 'Central' },  
  { name: 'Smt. Priya Singh', role: 'Director, Scholarships', email: 'dir.schol-mota@gov.in', phone: '011-23382392', state: 'Central' },  
  { name: 'Sh. Ramesh Oraon', role: 'State Coordinator, Jharkhand', email: 'jhr.tribal@gov.in', phone: '0651-2490XXX', state: 'Jharkhand' },  
  { name: 'Smt. Kavita Bai', role: 'State Coordinator, Odisha', email: 'odi.tribal@gov.in', phone: '0674-2391XXX', state: 'Odisha' },  
  { name: 'Sh. Dinesh Bhil', role: 'State Coordinator, Rajasthan', email: 'raj.tribal@gov.in', phone: '0141-2921XXX', state: 'Rajasthan' },  
  { name: 'Smt. Anita Munda', role: 'State Coordinator, Chhattisgarh', email: 'cg.tribal@gov.in', phone: '0771-2234XXX', state: 'Chhattisgarh' },  
  { name: 'Sh. Prakash Nayak', role: 'State Coordinator, Assam', email: 'assam.tribal@gov.in', phone: '0361-2237XXX', state: 'Assam' },  
  { name: 'Helpdesk', role: 'General Scholarship Queries', email: 'helpdesk.mota@gov.in', phone: '1800-XXX-XXXX', state: 'All States' },  
];