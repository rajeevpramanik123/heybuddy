import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Navigate } from 'react-router-dom';

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SecurityModal from './components/SecurityModal';
import CertificateModal from './components/CertificateModal';
import RecruiterReadinessModal from './components/RecruiterReadinessModal';
import CurriculumModal from './components/CurriculumModal';
import AccountLinkModal from './components/AccountLinkModal';

import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import DayChallengePage from './pages/DayChallengePage';

import { MOCK_STUDENT } from './data/mockData';
import './styles/design-system.css';

export default function App() {
  // Student State
  const [student, setStudent] = useState(MOCK_STUDENT);
  const [studentState, setStudentState] = useState('ACTIVE_DAY12'); // 'ACTIVE_DAY12' | 'EMPTY_PROFILE' | 'BROKEN_STREAK' | 'COMPLETED_60'
  
  // User Auth / Linking State
  const [userAuth, setUserAuth] = useState(() => {
    const saved = localStorage.getItem('abtalks_user_auth');
    if (saved) {
      try { return JSON.parse(saved); } catch (e) {}
    }
    return {
      hasChosenPath: false,
      isLinked: false,
      github: '',
      linkedin: ''
    };
  });
  
  // UI Toggles
  const [isNightMode, setIsNightMode] = useState(false);
  const [isFocusMode, setIsFocusMode] = useState(false);
  
  // Modals
  const [securityModalOpen, setSecurityModalOpen] = useState(false);
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [readinessModalOpen, setReadinessModalOpen] = useState(false);
  const [curriculumModalOpen, setCurriculumModalOpen] = useState(false);
  const [linkModalOpen, setLinkModalOpen] = useState(false);

  // Sync Night Mode class directly on document.body for full-screen OLED dark mode
  useEffect(() => {
    if (isNightMode) {
      document.body.classList.add('night-mode');
    } else {
      document.body.classList.remove('night-mode');
    }
  }, [isNightMode]);

  // Account Linking Handlers
  const handleCompleteLinking = (data) => {
    const newAuth = {
      hasChosenPath: true,
      isLinked: true,
      github: data.github,
      linkedin: data.linkedin,
      linkedAt: data.linkedAt
    };
    setUserAuth(newAuth);
    localStorage.setItem('abtalks_user_auth', JSON.stringify(newAuth));
    setLinkModalOpen(false);
  };

  const handleContinueAsGuest = () => {
    const newAuth = {
      hasChosenPath: true,
      isLinked: false,
      github: '',
      linkedin: ''
    };
    setUserAuth(newAuth);
    localStorage.setItem('abtalks_user_auth', JSON.stringify(newAuth));
    setLinkModalOpen(false);
  };

  // streakMode: 'BROKEN' | 'REVIVED' | 'FRESH' | 'SUBMITTED_WITH_FREEZE' | 'SUBMITTED_WITHOUT_FREEZE'
  const [streakMode, setStreakMode] = useState('BROKEN');

  // Handle Day 12 task submission completion update
  const handleSubmissionComplete = () => {
    if (!userAuth.isLinked) {
      // Do not increment streak if user is unlinked/guest
      return;
    }
    if (streakMode === 'REVIVED' || streakMode === 'SUBMITTED_WITH_FREEZE') {
      setStreakMode('SUBMITTED_WITH_FREEZE');
    } else {
      setStreakMode('SUBMITTED_WITHOUT_FREEZE');
    }
  };

  return (
    <HashRouter>
      <div className={`min-h-screen flex flex-col transition-colors duration-300 ${isNightMode ? 'night-mode' : ''}`}>
        
        {/* Global Clean Navbar */}
        <Navbar
          student={student}
          userAuth={userAuth}
          openLinkModal={() => setLinkModalOpen(true)}
          isNightMode={isNightMode}
          setIsNightMode={setIsNightMode}
        />

        {/* Main Content Area */}
        <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <Routes>
            <Route 
              path="/" 
              element={
                <LandingPage 
                  openLinkModal={() => setLinkModalOpen(true)} 
                  userAuth={userAuth} 
                  student={student}
                />
              } 
            />
            
            <Route
              path="/dashboard"
              element={
                <DashboardPage
                  student={student}
                  studentState={studentState}
                  setStudentState={setStudentState}
                  isFocusMode={isFocusMode}
                  setIsFocusMode={setIsFocusMode}
                  openCertModal={() => setCertModalOpen(true)}
                  openSecurityModal={() => setSecurityModalOpen(true)}
                  openReadinessModal={() => setReadinessModalOpen(true)}
                  openCurriculumModal={() => setCurriculumModalOpen(true)}
                  isNightMode={isNightMode}
                  userAuth={userAuth}
                  openLinkModal={() => setLinkModalOpen(true)}
                  streakMode={streakMode}
                  setStreakMode={setStreakMode}
                />
              }
            />

            <Route
              path="/guest-dashboard"
              element={
                <DashboardPage
                  student={student}
                  studentState={studentState}
                  setStudentState={setStudentState}
                  isFocusMode={isFocusMode}
                  setIsFocusMode={setIsFocusMode}
                  openCertModal={() => setCertModalOpen(true)}
                  openSecurityModal={() => setSecurityModalOpen(true)}
                  openReadinessModal={() => setReadinessModalOpen(true)}
                  openCurriculumModal={() => setCurriculumModalOpen(true)}
                  isNightMode={isNightMode}
                  userAuth={{ hasChosenPath: true, isLinked: false, github: '', linkedin: '' }}
                  openLinkModal={() => setLinkModalOpen(true)}
                  streakMode={streakMode}
                  setStreakMode={setStreakMode}
                />
              }
            />

            <Route
              path="/day/12"
              element={
                <DayChallengePage
                  student={student}
                  userAuth={userAuth}
                  onSubmissionComplete={handleSubmissionComplete}
                  openSecurityModal={() => setSecurityModalOpen(true)}
                  openLinkModal={() => setLinkModalOpen(true)}
                  streakMode={streakMode}
                  setStreakMode={setStreakMode}
                />
              }
            />

            {/* Fallback redirect */}
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>

        {/* Global Footer */}
        <Footer />

        {/* Security Briefing Modal */}
        <SecurityModal
          isOpen={securityModalOpen}
          onClose={() => setSecurityModalOpen(false)}
        />

        {/* Cryptographic Completion Certificate Modal */}
        <CertificateModal
          isOpen={certModalOpen}
          onClose={() => setCertModalOpen(false)}
          student={student}
        />

        {/* Recruiter Readiness Score Breakdown Modal */}
        <RecruiterReadinessModal
          isOpen={readinessModalOpen}
          onClose={() => setReadinessModalOpen(false)}
          student={student}
          userAuth={userAuth}
          streakMode={streakMode}
        />

        {/* Full 60 Days Curriculum Roadmap Modal */}
        <CurriculumModal
          isOpen={curriculumModalOpen}
          onClose={() => setCurriculumModalOpen(false)}
        />

        {/* Account Linking Onboarding Decision Modal */}
        <AccountLinkModal
          isOpen={linkModalOpen}
          onClose={() => setLinkModalOpen(false)}
          onCompleteLinking={handleCompleteLinking}
          onContinueAsGuest={handleContinueAsGuest}
        />

      </div>
    </HashRouter>
  );
}
