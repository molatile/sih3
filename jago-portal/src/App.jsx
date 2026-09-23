import React, { useState } from 'react';
import LandingPage from './pages/LandingPage/LandingPage';
import RegistrationPage from './pages/RegistrationPage/RegistrationPage';
import StudentLoginPage from './pages/LoginPage/StudentLoginPage';
import AdminLoginPage from './pages/LoginPage/AdminLoginPage';
import DashboardShell from './components/layout/DashboardShell';
import { initialAppState } from './data/mockData';

import StudentDashboardTab from './pages/StudentDashboard/StudentDashboardTab';
import EligibilityTab from './pages/StudentDashboard/EligibilityTab';
import StudentApplicationsTab from './pages/StudentDashboard/StudentApplicationsTab';
import StudentExploreTab from './pages/StudentDashboard/StudentExploreTab';
import StudentDocumentsTab from './pages/StudentDashboard/StudentDocumentsTab';
import StudentTrackTab from './pages/StudentDashboard/StudentTrackTab';
import StudentNoticesTab from './pages/StudentDashboard/StudentNoticesTab';
import StudentFaqTab from './pages/StudentDashboard/StudentFaqTab';
import MyPositionTab from './pages/StudentDashboard/MyPositionTab';

import AdminAnalyticsTab from './pages/AdminDashboard/AdminAnalyticsTab';
import AdminApplicationsTab from './pages/AdminDashboard/AdminApplicationsTab';
import AdminVerificationTab from './pages/AdminDashboard/AdminVerificationTab';
import AdminRankingsTab from './pages/AdminDashboard/AdminRankingsTab';
import AdminNoticesTab from './pages/AdminDashboard/AdminNoticesTab';

function App() {
  const [appState, setAppState] = useState(initialAppState);

  const setView = (view) => {
    setAppState((prev) => ({ ...prev, currentView: view }));
  };

  const switchTab = (tabId) => {
    setAppState((prev) => ({ ...prev, activeSidebarTab: tabId }));
  };

  const renderTab = () => {
    switch (appState.activeSidebarTab) {
      case 'student-dashboard': return <StudentDashboardTab appState={appState} setAppState={setAppState} />;
      case 'student-eligibility': return <EligibilityTab appState={appState} setAppState={setAppState} />;
      case 'student-applications': return <StudentApplicationsTab appState={appState} setAppState={setAppState} />;
      case 'student-explore': return <StudentExploreTab appState={appState} setAppState={setAppState} />;
      case 'student-documents': return <StudentDocumentsTab appState={appState} setAppState={setAppState} />;
      case 'student-track': return <StudentTrackTab appState={appState} setAppState={setAppState} />;
      case 'student-notices': return <StudentNoticesTab appState={appState} setAppState={setAppState} />;
      case 'student-faq': return <StudentFaqTab appState={appState} setAppState={setAppState} />;
      case 'student-position': return <MyPositionTab appState={appState} setAppState={setAppState} />;
      
      case 'admin-analytics': return <AdminAnalyticsTab appState={appState} setAppState={setAppState} />;
      case 'admin-applications': return <AdminApplicationsTab appState={appState} setAppState={setAppState} />;
      case 'admin-verification': return <AdminVerificationTab appState={appState} setAppState={setAppState} />;
      case 'admin-rankings': return <AdminRankingsTab appState={appState} setAppState={setAppState} />;
      case 'admin-notices': return <AdminNoticesTab appState={appState} setAppState={setAppState} />;
      default: return null;
    }
  };

  return (
    <>
      {appState.currentView === 'landing' && (
        <LandingPage 
          setView={setView} 
          appState={appState} 
          setAppState={setAppState} 
          notices={appState.notices || []}
          schemes={appState.schemes || []}
          universities={appState.universities || []}
        />
      )}
      {appState.currentView === 'student-login' && <StudentLoginPage setView={setView} setAppState={setAppState} />}
      {appState.currentView === 'admin-login' && <AdminLoginPage setView={setView} setAppState={setAppState} />}
      {appState.currentView === 'registration' && <RegistrationPage setView={setView} appState={appState} setAppState={setAppState} />}
      {appState.currentView === 'dashboard' && (
        <DashboardShell appState={appState} setAppState={setAppState} setView={setView} switchTab={switchTab}>
          {renderTab()}
        </DashboardShell>
      )}
    </>
  );
}

export default App;

