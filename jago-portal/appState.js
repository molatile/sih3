const appState = {
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
            stats: { beneficiaries: 1250000, disbursed: 450, states: 28 },
            notices: [
                { id: 1, title: 'NOS 2025-26 applications now open', date: '2025-08-10', category: 'NOS' },
                { id: 2, title: 'Top Class Scholarship deadline: 31 Oct', date: '2025-08-15', category: 'General' },
                { id: 3, title: 'Server maintenance this weekend', date: '2025-08-18', category: 'General' },
                { id: 4, title: 'New guidelines for Pre-Matric released', date: '2025-08-20', category: 'Pre-Matric' }
            ],
            schemes: [
                { name: 'Pre-Matric Scholarship', amount: '?1,000/yr', deadline: '31 Oct 2025' },
                { name: 'Post-Matric Scholarship', amount: '?2,500 - ?10,000/yr', deadline: '31 Oct 2025' },
                { name: 'Top Class Education', amount: 'Full Tuition + ?3k/mo', deadline: '15 Nov 2025' },
                { name: 'National Fellowship (NFST)', amount: '?31,000/mo', deadline: 'Rolling' },
                { name: 'National Overseas (NOS)', amount: 'Tuition + $15,400/yr', deadline: '30 Sep 2025' }
            ],
            universities: [
                { name: 'Delhi University', country: 'India', domain: 'Humanities', seats: 50 },
                { name: 'IIT Bombay', country: 'India', domain: 'Engineering', seats: 25 },
                { name: 'Oxford University', country: 'UK', domain: 'Various', seats: 5 },
                { name: 'MIT', country: 'USA', domain: 'Technology', seats: 3 },
                { name: 'University of Melbourne', country: 'Australia', domain: 'Sciences', seats: 4 },
                { name: 'JNU', country: 'India', domain: 'Social Science', seats: 30 },
                { name: 'Stanford', country: 'USA', domain: 'Various', seats: 2 },
                { name: 'Univ. of Toronto', country: 'Canada', domain: 'Various', seats: 5 }
            ],
            prevYearCutoffs: [
                { scheme: 'Top Class Education', cutoff: '85%' },
                { scheme: 'NFST', cutoff: 'PG with 65%' },
                { scheme: 'NOS', cutoff: '60% (UG/PG)' }
            ],
            prevYearApplicants: [
                { scheme: 'Pre-Matric', count: 120 }, // scale for mock chart
                { scheme: 'Post-Matric', count: 80 },
                { scheme: 'Top Class', count: 40 },
                { scheme: 'NOS', count: 10 }
            ],
            studentRecords: [
                { id: 'ST2025001', name: 'Ravi Kumar', scheme: 'NOS', state: 'Jharkhand', status: 'Pending', score: 88 },
                { id: 'ST2025002', name: 'Sunita Hembrom', scheme: 'Post-Matric', state: 'Odisha', status: 'Verified', score: 75 },
                { id: 'ST2025003', name: 'Ajay Munda', scheme: 'Top Class', state: 'Chhattisgarh', status: 'Pending', score: 92 },
                { id: 'ST2025004', name: 'Meena Oraon', scheme: 'Pre-Matric', state: 'Assam', status: 'Disbursed', score: 60 },
                { id: 'ST2025005', name: 'Vikram Bhil', scheme: 'NOS', state: 'Rajasthan', status: 'Rejected', score: 55 }
            ],
            faqs: [
                { q: 'Can I apply for more than one scheme?', a: 'No, you can only avail one MoTA scholarship at a time.' },
                { q: 'What is the income limit for Post-Matric?', a: 'The family income must not exceed ?2.5 Lakhs per annum.' },
                { q: 'Do I need DigiLocker?', a: 'Yes, passing documents via DigiLocker is highly recommended for faster verification.' },
                { q: 'Is Aadhaar mandatory?', a: 'Yes, Aadhaar seeding with your bank account is required for DBT.' }
            ],
            contacts: [
                { name: 'Dr. Amit Sharma', role: 'Nodal Officer, NOS', email: 'nos.mota@gov.in', phone: '011-2338XXXX' },
                { name: 'Smt. Priya Singh', role: 'Director, Scholarships', email: 'dir.schol-mota@gov.in', phone: '011-2338YYYY' }
            ]
        };

        const STUDENT_NAV = [
            { id: 'student-dashboard', label: '?? Dashboard' },
            { id: 'student-applications', label: '?? My Applications' },
            { id: 'student-explore', label: '?? Explore Scholarships' },
            { id: 'student-documents', label: '?? My Documents' },
            { id: 'student-track', label: '?? Track Status' },
            { id: 'student-notices', label: '?? Notice Board' },
            { id: 'student-faq', label: '? FAQ' },
            { id: 'logout', label: '?? Logout' }
        ];

        const ADMIN_NAV = [
            { id: 'admin-analytics', label: '?? Analytics' },
            { id: 'admin-applications', label: '?? Student Applications' },
            { id: 'admin-verification', label: '? Verification Queue' },
            { id: 'admin-rankings', label: '?? Rankings & Scores' },
            { id: 'admin-notices', label: '?? Notice Board Manager' },
            { id: 'logout', label: '?? Logout' }
        ];


        // -----------------------------------------
        // 2. CORE NAVIGATION & ROUTING
        // -----------------------------------------
        function switchView(viewId) {
            ['view-landing', 'view-registration', 'view-dashboard-shell'].forEach(v => {
                document.getElementById(v).classList.add('hidden');
            });
            document.getElementById(`view-${viewId}`).classList.remove('hidden');
            appState.currentView = viewId;
            window.scrollTo(0, 0);
        }

        function switchTab(tabId) {
            if (tabId === 'logout') return handleLogout();
            
            // Update state
            appState.activeSidebarTab = tabId;
            
            // Hide all tabs
            const container = document.getElementById('tab-content-container');
            Array.from(container.children).forEach(child => child.classList.add('hidden'));
            
            // Show target
            document.getElementById(`tab-${tabId}`).classList.remove('hidden');
            
            // Update Sidebar styling
            const nav = document.getElementById('sidebar-nav');
            Array.from(nav.children).forEach(child => {
                child.classList.remove('bg-gray-100', 'text-mota-green', 'font-bold', 'border-r-4', 'border-mota-green');
                child.classList.add('text-gray-600');
                if(child.dataset.id === tabId) {
                    child.classList.remove('text-gray-600');
                    child.classList.add('bg-gray-100', 'text-mota-green', 'font-bold', 'border-r-4', 'border-mota-green');
                    document.getElementById('dashboard-title').innerText = child.dataset.label.substring(2); // strip emoji
                }
            });

            if (appState.isSidebarOpen) toggleSidebar(); // Close mobile sidebar
        }

        function toggleSidebar() {
            const sb = document.getElementById('sidebar');
            appState.isSidebarOpen = !appState.isSidebarOpen;
            if (appState.isSidebarOpen) {
                sb.classList.remove('-translate-x-full');
            } else {
                sb.classList.add('-translate-x-full');
            }
        }

        function toggleAiChat() {
            const panel = document.getElementById('ai-chat-panel');
            appState.isAiChatOpen = !appState.isAiChatOpen;
            if (appState.isAiChatOpen) {
                panel.classList.remove('translate-x-full');
            } else {
                panel.classList.add('translate-x-full');
            }
        }


        // -----------------------------------------
        // 3. AUTHENTICATION (MOCK)
        // -----------------------------------------
        function handleLogin() {
            const id = document.getElementById('login-id').value.trim();
            if (id === '1') {
                appState.currentUser = { id: '1', role: 'student', name: 'Ravi Kumar' };
                setupDashboard(STUDENT_NAV, 'student-dashboard', 'Student Portal');
                document.getElementById('welcome-name').innerText = appState.currentUser.name;
                document.getElementById('ai-fab').classList.remove('hidden'); // Show AI for student
            } else if (id === '2') {
                appState.currentUser = { id: '2', role: 'admin', name: 'Admin Officer' };
                setupDashboard(ADMIN_NAV, 'admin-analytics', 'Admin Portal');
                document.getElementById('ai-fab').classList.add('hidden'); // Hide AI for admin
            } else {
                alert('Invalid ID. Use 1 for Student, 2 for Admin.');
                return;
            }
            document.getElementById('header-user-name').innerText = appState.currentUser.name;
            document.getElementById('header-user-id').innerText = `ID: ${id === '1' ? 'ST2025001' : 'ADM-01'}`;
            document.getElementById('header-user-initial').innerText = appState.currentUser.name.charAt(0);
            switchView('dashboard-shell');
        }

        function handleLogout() {
            appState.currentUser = null;
            document.getElementById('login-id').value = '';
            document.getElementById('ai-fab').classList.add('hidden');
            switchView('landing');
        }

        function setupDashboard(navArray, defaultTab, roleText) {
            document.getElementById('sidebar-role-text').innerText = roleText;
            const nav = document.getElementById('sidebar-nav');
            nav.innerHTML = navArray.map(item => 
                `<button data-id="${item.id}" data-label="${item.label}" onclick="switchTab('${item.id}')" class="w-full text-left px-4 py-4 text-base rounded-md mb-1 transition-colors block text-gray-600 hover:bg-gray-50">
                    ${item.label}
                </button>`
            ).join('');
            switchTab(defaultTab);
        }


        // -----------------------------------------
        // 4. REGISTRATION FLOW
        // -----------------------------------------
        function startRegistration() {
            appState.registrationDraft.currentStep = 1;
            renderRegistrationDocs(); // prep doc step
            switchView('registration');
            goToRegStep(1);
        }

        function goToRegStep(step) {
            // Basic validation check on step transition could go here
            if (step === 4) {
                // Populate review screen
                document.getElementById('rev-name').innerText = document.getElementById('reg-name').value || 'N/A';
                document.getElementById('rev-inst').innerText = document.getElementById('reg-inst').value || 'N/A';
                document.getElementById('rev-level').innerText = document.getElementById('reg-level').value || 'N/A';
            }

            [1,2,3,4].forEach(s => document.getElementById(`reg-step-${s}`).classList.add('hidden'));
            document.getElementById(`reg-step-${step}`).classList.remove('hidden');
            document.getElementById('reg-success').classList.add('hidden');
            
            // Update Progress Bar
            document.getElementById('reg-progress-bar').style.width = `${(step-1)*33.33}%`;
            [1,2,3,4].forEach(s => {
                const marker = document.getElementById(`step-marker-${s}`);
                marker.className = `w-8 h-8 rounded-full flex items-center justify-center border-2 ${s < step ? 'step-done' : (s === step ? 'step-active bg-white' : 'step-inactive bg-white')}`;
            });
        }

        function renderRegistrationDocs() {
            const docs = [
                { key: 'caste', label: 'ST/PVTG Certificate' },
                { key: 'income', label: 'Income Certificate' },
                { key: 'aadhaar', label: 'Aadhaar Card' },
                { key: 'marksheet', label: 'Last Exam Marksheet' },
                { key: 'passbook', label: 'Bank Passbook' },
                { key: 'bonafide', label: 'Institution Bonafide' }
            ];
            
            const html = docs.map(d => {
                const state = appState.registrationDraft.documents[d.key];
                const isUploaded = state.status === 'uploaded';
                return `
                <div class="flex items-center justify-between p-3 border rounded ${isUploaded ? 'bg-green-50 border-green-200' : 'bg-white'}">
                    <div>
                        <div class="text-sm font-medium text-gray-800">${d.label}</div>
                        <div class="text-xs ${isUploaded ? 'text-green-600' : 'text-orange-500'} font-medium mt-1">
                            ${isUploaded ? 'Uploaded ?' : 'Awaiting Upload'}
                        </div>
                    </div>
                    <button onclick="mockUpload('${d.key}')" class="text-sm ${isUploaded ? 'text-gray-500' : 'bg-gray-100 border text-gray-700'} px-3 py-1 rounded hover:bg-gray-200">
                        ${isUploaded ? 'Replace' : 'Upload'}
                    </button>
                </div>`;
            }).join('');
            document.getElementById('doc-upload-list').innerHTML = html;
        }

        function mockUpload(key) {
            appState.registrationDraft.documents[key] = { status: 'uploaded', fileName: `mock_${key}.pdf` };
            renderRegistrationDocs(); // re-render
        }

        function submitRegistration() {
            [1,2,3,4].forEach(s => document.getElementById(`reg-step-${s}`).classList.add('hidden'));
            document.getElementById('reg-success').classList.remove('hidden');
            
            // Generate Random ID
            const randomNum = Math.floor(1000 + Math.random() * 9000);
            appState.generatedStudentId = `ST2025${randomNum}`;
            document.getElementById('generated-student-id').innerText = appState.generatedStudentId;
        }

        function saveRegistrationDraft() {
            alert("Draft Saved Successfully to local session state! You can return later.");
            switchView('landing');
        }


        // -----------------------------------------
        // 5. RENDERING MOCK DATA (STUDENT & ADMIN)
        // -----------------------------------------
        function renderAllNotices() {
            const mkNotice = (n) => `
                <div class="border-l-4 border-mota-gold pl-3 py-2 border-b border-gray-100 last:border-0">
                    <div class="text-xs text-gray-500 mb-1">${n.date} &bull; <span class="bg-gray-100 px-1 rounded">${n.category}</span></div>
                    <div class="text-sm font-medium text-gray-800">${n.title}</div>
                </div>`;
            
            // 1. Landing
            document.getElementById('landing-notices').innerHTML = appState.notices.map(mkNotice).join('');
            
            // 2. Student Dashboard Mini
            const miniList = document.getElementById('student-mini-notices');
            if(miniList) miniList.innerHTML = appState.notices.slice(0,3).map(n => `<li class="border-b pb-2"><div class="text-xs text-gray-500">${n.date}</div><div class="text-gray-800">${n.title}</div></li>`).join('');
            
            // 3. Student Full Notice Board
            const fullList = document.getElementById('full-student-notices');
            if(fullList) fullList.innerHTML = appState.notices.map(mkNotice).join('');

            // 4. Admin Notice Manager
            const adminList = document.getElementById('admin-notice-list');
            if(adminList) {
                adminList.innerHTML = appState.notices.map((n, i) => `
                    <div class="flex justify-between items-center p-3 border rounded bg-gray-50">
                        <div><div class="text-sm font-bold">${n.title}</div><div class="text-xs text-gray-500">${n.date} | ${n.category}</div></div>
                        <button onclick="deleteNotice(${i})" class="text-red-500 text-sm hover:underline">Delete</button>
                    </div>
                `).join('');
            }
        }

        function addAdminNotice() {
            const title = document.getElementById('new-notice-title').value;
            const category = document.getElementById('new-notice-category').value;
            if(!title) return;
            const d = new Date();
            appState.notices.unshift({
                id: Date.now(),
                title: title,
                date: d.toISOString().split('T')[0],
                category: category
            });
            document.getElementById('new-notice-title').value = '';
            renderAllNotices(); // Live update everywhere
        }

        function deleteNotice(index) {
            appState.notices.splice(index, 1);
            renderAllNotices();
        }

        function renderStudentData() {
            // Schemes
            document.getElementById('scheme-cards').innerHTML = appState.schemes.map(s => `
                <div class="bg-white p-8 rounded-lg shadow-sm border border-gray-100 flex flex-col justify-between">
                    <div>
                        <h4 class="font-bold text-gray-800 mb-1">${s.name}</h4>
                        <div class="text-xs text-gray-500 mb-4">Amount: ${s.amount} | Deadline: ${s.deadline}</div>
                    </div>
                    <button class="w-full text-center text-sm border border-mota-green text-mota-green py-2 rounded hover:bg-green-50 transition-colors">Check Eligibility</button>
                </div>
            `).join('');

            // Universities
            document.getElementById('university-table').innerHTML = appState.universities.map(u => `
                <tr>
                    <td class="p-4 font-medium text-gray-800">${u.name}</td>
                    <td class="p-4"><span class="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">${u.country}</span></td>
                    <td class="p-4 text-gray-600">${u.domain}</td>
                    <td class="p-4 text-gray-600">${u.seats}</td>
                    <td class="p-4"><button class="text-blue-600 hover:underline">View</button></td>
                </tr>
            `).join('');

            // FAQs & Contacts
            document.getElementById('faq-list').innerHTML = appState.faqs.map(f => `
                <details class="bg-gray-50 p-4 rounded border"><summary class="font-medium cursor-pointer text-gray-800 outline-none">${f.q}</summary><p class="mt-2 text-sm text-gray-600 ml-4">${f.a}</p></details>
            `).join('');
            document.getElementById('contacts-table').innerHTML = appState.contacts.map(c => `
                <tr><td class="p-4 font-medium">${c.name}</td><td class="p-4 text-gray-600">${c.role}</td><td class="p-4 text-blue-600">${c.email}</td><td class="p-4 text-gray-600">${c.phone}</td></tr>
            `).join('');

            // Previous Year Data charts
            document.getElementById('prev-cutoffs').innerHTML = appState.prevYearCutoffs.map(c => `
                <div class="flex justify-between text-sm border-b pb-2"><span class="text-gray-700">${c.scheme}</span><span class="font-bold text-mota-green">${c.cutoff}</span></div>
            `).join('');
            
            document.getElementById('prev-applicants-chart').innerHTML = appState.prevYearApplicants.map(a => `
                <div class="flex-1 flex flex-col justify-end group">
                    <div class="text-[10px] text-center text-gray-400 mb-1 opacity-0 group-hover:opacity-100">${a.count}k</div>
                    <div class="bg-mota-gold rounded-t-sm w-full chart-bar" style="height: ${a.count}%;"></div>
                    <div class="text-[10px] text-center mt-1 truncate w-full px-1" title="${a.scheme}">${a.scheme.split(' ')[0]}</div>
                </div>
            `).join('');

            // Documents Wallet
            const docs = ['Aadhaar', 'Income Certificate', 'Caste Certificate', 'Bank Passbook'];
            document.getElementById('wallet-docs').innerHTML = docs.map((d, i) => `
                <div class="border p-4 rounded-lg flex justify-between items-center bg-white shadow-sm">
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400">??</div>
                        <div><div class="text-sm font-medium text-gray-800">${d}</div><div class="text-xs ${i===1?'text-red-500':'text-green-600'}">${i===1?'Rejected':'Verified ?'}</div></div>
                    </div>
                    ${i===1 ? '<button class="text-xs bg-red-50 text-red-600 border border-red-200 px-3 py-1 rounded">Re-upload</button>' : ''}
                </div>
            `).join('');
        }

        function renderAdminData() {
            // Admin Application Table
            const renderStatus = (s) => {
                if(s==='Verified') return `<span class="bg-blue-100 text-blue-700 px-2 py-1 rounded text-xs">${s}</span>`;
                if(s==='Disbursed') return `<span class="bg-green-100 text-green-700 px-2 py-1 rounded text-xs">${s}</span>`;
                if(s==='Rejected') return `<span class="bg-red-100 text-red-700 px-2 py-1 rounded text-xs">${s}</span>`;
                return `<span class="bg-yellow-100 text-yellow-700 px-2 py-1 rounded text-xs">${s}</span>`;
            };

            document.getElementById('admin-student-table').innerHTML = appState.studentRecords.map(r => `
                <tr>
                    <td class="p-4 text-xs font-mono text-gray-500">${r.id}</td>
                    <td class="p-4 font-medium text-gray-800">${r.name}</td>
                    <td class="p-4 text-gray-600">${r.scheme}</td>
                    <td class="p-4 text-gray-600">${r.state}</td>
                    <td class="p-4">${renderStatus(r.status)}</td>
                    <td class="p-4">
                        ${r.status === 'Pending' ? 
                            `<button class="text-xs bg-mota-green text-white px-2 py-1 rounded hover:bg-[#12351f]" onclick="adminAction('${r.id}', 'Verified')">Verify</button>
                             <button class="text-xs bg-red-100 text-red-600 px-2 py-1 rounded ml-1" onclick="adminAction('${r.id}', 'Rejected')">Reject</button>` 
                            : `<span class="text-xs text-gray-400">Done</span>`}
                    </td>
                </tr>
            `).join('');

            // Verification Queue
            document.getElementById('admin-verify-queue').innerHTML = appState.studentRecords.filter(r => r.status==='Pending').map(r => `
                <div class="flex flex-col md:flex-row justify-between md:items-center p-4 border rounded-lg bg-gray-50 gap-4">
                    <div class="flex-1">
                        <div class="font-medium text-gray-800">${r.name} <span class="text-xs font-mono text-gray-500 ml-2">${r.id}</span></div>
                        <div class="text-xs text-gray-500 mt-1">Pending: Income Certificate | Uploaded: 2 hours ago</div>
                        <div class="text-xs text-blue-600 mt-1 flex items-center gap-1"><span class="animate-spin inline-block">?</span> AI OCR Processing...</div>
                    </div>
                    <div class="flex gap-2">
                        <button class="bg-white border text-gray-700 px-3 py-1 rounded text-sm hover:bg-gray-100">Request Resubmission</button>
                        <button class="bg-mota-green text-white px-3 py-1 rounded text-sm hover:bg-[#12351f]" onclick="adminAction('${r.id}', 'Verified')">Mark Verified</button>
                    </div>
                </div>
            `).join('');

            renderRankings();
            
            // Scheme Chart Mock
            const chartData = [60, 80, 40, 90, 30]; // Heights
            const chartLabels = ['Pre-Matric', 'Post-Matric', 'Top Class', 'NFST', 'NOS'];
            document.getElementById('admin-chart-schemes').innerHTML = chartData.map((h, i) => `
                <div class="flex-1 flex flex-col justify-end relative group">
                    <div class="absolute -top-6 left-1/2 -translate-x-1/2 text-xs font-bold text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">${h}k</div>
                    <div class="w-full bg-mota-green rounded-t-sm chart-bar" style="height: ${h}%"></div>
                    <div class="text-[10px] text-center mt-2 text-gray-500 truncate" title="${chartLabels[i]}">${chartLabels[i].split(' ')[0]}</div>
                </div>
            `).join('');
        }

        
