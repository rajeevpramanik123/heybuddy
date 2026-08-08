import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Flame, 
  Trophy, 
  Briefcase, 
  GitCommit, 
  ArrowRight, 
  ShieldCheck, 
  ShieldAlert, 
  CheckCircle2, 
  Lock, 
  Award, 
  Users, 
  Quote, 
  Eye,
  Moon,
  UserX,
  Plus,
  Calendar,
  Activity
} from 'lucide-react';
import { Linkedin } from '../components/Icons';
import DemoSidebar from '../components/DemoSidebar';
import { 
  MOCK_ACHIEVEMENTS, 
  MOCK_LEADERBOARD, 
  MOCK_RECENT_SUBMISSIONS, 
  MOCK_MOTIVATIONAL_QUOTES,
  MOCK_DAY_12_CHALLENGE
} from '../data/mockData';

export default function DashboardPage({ 
  student, 
  studentState, 
  setStudentState,
  isFocusMode, 
  setIsFocusMode, 
  openCertModal,
  openSecurityModal,
  openReadinessModal,
  openCurriculumModal,
  isNightMode,
  userAuth,
  openLinkModal,
  streakMode = 'BROKEN',
  setStreakMode = () => {}
}) {
  const [streakRestoredNotice, setStreakRestoredNotice] = useState(false);

  const isLinked = userAuth ? userAuth.isLinked : true;

  // Determine states based on studentState toggle or unregistered status
  const isEmptyProfile = studentState === 'EMPTY_PROFILE' || !isLinked;
  const isBrokenStreak = streakMode === 'BROKEN';
  const isCompleted = studentState === 'COMPLETED_60';

  // Math logic for all 5 streakMode states:
  // 1. BROKEN: Streak = 0, Max = 10, Completed = 0
  // 2. FRESH: Streak = 0, Max = 10, Completed = 0
  // 3. REVIVED: Streak = 11, Max = 11, Completed = 11
  // 4. SUBMITTED_WITH_FREEZE: Streak = 12, Max = 12, Completed = 12
  // 5. SUBMITTED_WITHOUT_FREEZE: Streak = 1, Max = 10, Completed = 1 (1 active day on heatmap!)
  const streakDays = (!isLinked || isEmptyProfile) 
    ? 0 
    : isCompleted 
      ? 60 
      : streakMode === 'SUBMITTED_WITH_FREEZE'
        ? 12
        : streakMode === 'SUBMITTED_WITHOUT_FREEZE'
          ? 1
          : streakMode === 'REVIVED'
            ? 11 
            : 0;

  const maxStreakRecord = (!isLinked || isEmptyProfile) 
    ? 0 
    : isCompleted 
      ? 60 
      : streakMode === 'SUBMITTED_WITH_FREEZE'
        ? 12
        : streakMode === 'REVIVED'
          ? 11 
          : 10;

  // When streak is broken (0 days) or unregistered guest, progress, heatmap, and badges reset to 0 until revived or submitted!
  const completedDays = (!isLinked || isEmptyProfile)
    ? 0
    : isCompleted 
      ? 60 
      : streakMode === 'SUBMITTED_WITH_FREEZE'
        ? 12
        : streakMode === 'SUBMITTED_WITHOUT_FREEZE'
          ? 1
          : streakMode === 'REVIVED'
            ? 11
            : 0;

  const progressPercent = Math.round((completedDays / 60) * 100);

  const handleActivateStreakFreeze = () => {
    setStudentState('ACTIVE_DAY12');
    setStreakRestoredNotice(true);
    setTimeout(() => setStreakRestoredNotice(false), 5000);
  };

  const randomQuote = MOCK_MOTIVATIONAL_QUOTES[0];

  return (
    <div className="py-6 px-4">
      
      {/* 2-Column Dashboard Layout: Left Sidebar + Right Main Content (Zero Overlapping!) */}
      <div className="flex flex-col md:flex-row items-start gap-6">
        
        {/* LEFT COLUMN: Demo Edge Controls Sidebar */}
        <div className="w-full md:w-64 shrink-0">
          <DemoSidebar
            studentState={studentState}
            setStudentState={setStudentState}
            isFocusMode={isFocusMode}
            setIsFocusMode={setIsFocusMode}
            openSecurityModal={openSecurityModal}
            openCertModal={openCertModal}
            openCurriculumModal={openCurriculumModal}
            completedDays={completedDays}
            isLinked={isLinked}
            openLinkModal={openLinkModal}
          />
        </div>

        {/* RIGHT COLUMN: Dashboard Main Content Area */}
        <div className="flex-1 w-full space-y-6">
          
          {/* Dynamic Submission Completion Verification Alert Banner */}
          {student.completedDays >= 12 && !isBrokenStreak && !isEmptyProfile && (
            <div className="glass-card bg-emerald-950/70 border-emerald-500/60 p-4 flex items-center justify-between gap-3 text-xs animate-fade-in">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">Day 12 Challenge Submitted & Verified! 🎉</p>
                  <p className="text-emerald-200">
                    Your streak increased to <strong className="text-orange-400">{student.streak} Days 🔥</strong> | New Highest Record: <strong className="text-amber-300">{student.maxStreak} Days 🏆</strong>
                  </p>
                </div>
              </div>
              <span className="pill-badge pill-emerald shrink-0">+150 XP</span>
            </div>
          )}

          {/* Dynamic Streak Freeze Restored Protection Alert Banner */}
          {streakRestoredNotice && (
            <div className="glass-card bg-emerald-950/60 border-emerald-500/50 p-4 flex items-center justify-between gap-3 text-xs animate-fade-in">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                <div>
                  <p className="font-bold text-white">Streak Shield Activated! 🔥</p>
                  <p className="text-emerald-200">
                    Your streak has been restored to <strong className="text-orange-400">{student.streak} Days</strong>. Max Record preserved at <strong className="text-amber-300">{student.maxStreak} Days 🏆</strong>.
                  </p>
                </div>
              </div>
              <span className="pill-badge pill-emerald shrink-0">Protected</span>
            </div>
          )}

          {/* Night Mode Late Night Coding Reminder Banner */}
          {isNightMode && (
            <div className="glass-card bg-indigo-950/60 border-indigo-500/40 p-4 flex items-center justify-between gap-3 text-xs animate-fade-in">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 text-indigo-300 flex items-center justify-center shrink-0">
                  <Moon className="w-4 h-4 text-amber-300" />
                </div>
                <div>
                  <p className="font-bold text-white">Late Night Coding Mode Active (After College Session)</p>
                  <p className="text-gray-300">You are committing code late at night. Finish Day 12 to secure today's flame!</p>
                </div>
              </div>
              <span className="pill-badge pill-purple shrink-0">🌙 Night Mode</span>
            </div>
          )}

          {/* Unregistered User Warning Banner */}
          {!isLinked && (
            <div className="glass-card bg-amber-950/40 border-amber-500/50 p-4 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-fade-in shadow-lg">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-amber-500/20 text-amber-400 flex items-center justify-center shrink-0">
                  <UserX className="w-6 h-6" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-bold text-white text-base">Unregistered Learner Mode (Account Unlinked)</h3>
                    <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 text-[10px] font-extrabold uppercase">
                      Streak Recording Disabled
                    </span>
                  </div>
                  <p className="text-xs text-amber-200 mt-1 leading-relaxed">
                    You can browse curriculum tasks and submit code, but <strong>your daily streak will NOT be recorded</strong> until you link your GitHub & LinkedIn profiles.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-3 pt-1 border-t border-white/10">
                <button 
                  onClick={openLinkModal}
                  className="btn-primary text-xs py-2.5 px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 flex items-center gap-1.5"
                >
                  <Flame className="w-4 h-4 text-white" />
                  <span>Link GitHub & LinkedIn to Start Fresh Streak Today</span>
                </button>
              </div>
            </div>
          )}

          {/* Active Session: Broken Streak & Streak Freeze Revival Banner */}
          {isLinked && !isCompleted && (
            streakMode === 'BROKEN' ? (
              <div className="glass-card bg-red-950/70 border-2 border-red-500/60 p-5 rounded-2xl space-y-4 animate-fade-in shadow-2xl">
                
                {/* Card Header: Shield Icon + Title + Max Prior Pill */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-red-500/30 pb-3">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-red-500/20 text-red-400 border border-red-500/30 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-extrabold text-white text-base font-heading">
                        Yesterday (Day 11) Missed! Streak Dropped to 0 Days ⚠️
                      </h4>
                      <p className="text-xs text-red-200 mt-0.5">
                        Your streak broke on Day 11. You have <strong>1 Free Streak Freeze</strong> available to revive your streak back to 11 Days!
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 border border-amber-500/40 text-xs font-bold font-mono shadow-sm">
                      🏆 Max Prior Maintained: 10 Days
                    </span>
                  </div>
                </div>

                {/* Card Footer Actions */}
                <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-1">
                  <button
                    onClick={() => setStreakMode('REVIVED')}
                    className="btn-primary w-full sm:w-auto text-xs py-2.5 px-5 bg-gradient-to-r from-red-600 to-orange-500 hover:brightness-110 flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  >
                    <ShieldCheck className="w-4.5 h-4.5 text-white" />
                    <span>Use Freeze (Revive to 11d 🔥)</span>
                  </button>

                  <button
                    onClick={() => setStreakMode('FRESH')}
                    className="btn-secondary w-full sm:w-auto text-xs py-2.5 px-4 border-amber-500/50 text-amber-300 hover:bg-amber-500/20 flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <Flame className="w-4 h-4 text-amber-400" />
                    <span>Start Fresh Streak Today</span>
                  </button>
                </div>

              </div>
            ) : streakMode === 'SUBMITTED_WITH_FREEZE' ? (
              <div className="glass-card bg-emerald-950/80 border-2 border-emerald-500/60 p-4 rounded-2xl flex items-center justify-between gap-3 text-xs animate-fade-in shadow-xl">
                <div className="flex items-center gap-2.5">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm font-heading">Day 12 Verified with Streak Freeze! 🎉</p>
                    <p className="text-emerald-200 mt-0.5">
                      Streak resumed to <strong className="text-orange-400">12 Days 🔥</strong>. New Max Record reached: <strong className="text-amber-300">12 Days 🏆</strong>!
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setStreakMode('BROKEN')}
                  className="text-[10px] text-gray-400 hover:underline shrink-0"
                >
                  Reset Test
                </button>
              </div>
            ) : streakMode === 'SUBMITTED_WITHOUT_FREEZE' ? (
              <div className="glass-card bg-amber-950/60 border-2 border-amber-500/50 p-4 rounded-2xl flex items-center justify-between gap-3 text-xs animate-fade-in shadow-xl">
                <div className="flex items-center gap-2.5">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="font-bold text-white text-sm font-heading">Day 12 Submitted — Fresh Streak Started! 🌱</p>
                    <p className="text-amber-200 mt-0.5">
                      New Streak Flame: <strong className="text-orange-400">1 Day 🔥</strong> | Prior Max Preserved: <strong className="text-amber-300">10 Days 🏆</strong>
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setStreakMode('BROKEN')}
                  className="text-[10px] text-gray-400 hover:underline shrink-0"
                >
                  Reset Test
                </button>
              </div>
            ) : (
              <div className="glass-card bg-amber-950/40 border-amber-500/40 p-4 rounded-2xl flex items-center justify-between gap-3 text-xs animate-fade-in shadow-lg">
                <div className="flex items-center gap-2.5">
                  <Flame className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <p className="font-bold text-white">Fresh Streak Started Today (Day 12)! 🌱</p>
                    <p className="text-amber-200">
                      Your previous record of <strong className="text-amber-300">10 Days 🏆</strong> remains saved. Finish Day 12 to start your new streak flame!
                    </p>
                  </div>
                </div>
                <button 
                  onClick={() => setStreakMode('BROKEN')}
                  className="text-[10px] text-gray-400 hover:underline shrink-0"
                >
                  Reset Test
                </button>
              </div>
            )
          )}

          {/* Completed 60 Days Banner */}
          {isCompleted && (
            <div className="glass-card bg-emerald-950/40 border-emerald-500/50 p-5 space-y-3 animate-fade-in text-center">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                <Award className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-black text-white font-heading">CONGRATULATIONS! 60-DAY CHALLENGE COMPLETED 🎉</h2>
              <p className="text-xs text-emerald-300 max-w-md mx-auto">
                You have built 60 projects, maintained non-stop consistency, and earned your cryptographic certificate.
              </p>
              <button onClick={openCertModal} className="btn-primary text-sm py-2.5 px-6">
                View & Share Official Certificate
              </button>
            </div>
          )}

          {/* Header Profile & Dynamic Streak Bar */}
          <div className="glass-card p-5 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="relative">
                  {!isLinked ? (
                    <div className="w-14 h-14 rounded-2xl bg-slate-800 border-2 border-dashed border-amber-500/50 flex items-center justify-center text-amber-400">
                      <UserX className="w-6 h-6" />
                    </div>
                  ) : (
                    <img
                      src={student.avatar}
                      alt={student.name}
                      className="w-14 h-14 rounded-2xl object-cover border-2 border-orange-500/40 shadow-md"
                    />
                  )}
                </div>

                <div>
                  <div className="flex items-center gap-2">
                    <h1 className="text-xl font-bold text-white font-heading">
                      {!isLinked ? "Unregistered Learner" : student.name}
                    </h1>
                    <span className="text-xs px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20 font-bold">
                      {!isLinked ? "Guest Session" : student.college}
                    </span>
                  </div>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Track: <span className="text-gray-200 font-medium">{student.track}</span>
                    {!isLinked && (
                      <span className="ml-2 text-amber-400 font-bold cursor-pointer hover:underline" onClick={openLinkModal}>
                        (Link Git & LinkedIn)
                      </span>
                    )}
                  </p>
                </div>
              </div>

              {/* Current Streak & Highest Record Pill */}
              <div className="grid grid-cols-2 gap-2 w-full sm:flex sm:items-center sm:gap-3 sm:w-auto">
                <div 
                  onClick={!isLinked ? openLinkModal : streakMode === 'BROKEN' ? () => setStreakMode('REVIVED') : undefined}
                  className={`glass-card p-2.5 sm:p-3 flex items-center gap-2 transition ${
                    !isLinked
                      ? 'bg-amber-500/10 border-amber-500/40 cursor-pointer hover:border-amber-500/70'
                      : streakMode === 'BROKEN' 
                        ? 'bg-red-500/15 border-red-500/50 cursor-pointer hover:border-red-500/80 animate-pulse' 
                        : 'bg-orange-500/10 border-orange-500/30'
                  }`}
                  title={!isLinked ? "Click to link GitHub & LinkedIn" : streakMode === 'BROKEN' ? "Click to use Streak Freeze and revive streak to 11 Days!" : undefined}
                >
                  <Flame className={`w-5 h-5 sm:w-6 sm:h-6 shrink-0 ${!isLinked ? 'text-amber-500' : streakMode === 'BROKEN' ? 'text-red-400' : 'text-orange-500 flame-animated'}`} />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center justify-between gap-1">
                      <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-semibold truncate">Streak</p>
                      {isLinked && (
                        <span className="text-[8px] sm:text-[9px] px-1 rounded bg-amber-500/20 text-amber-300 font-bold font-mono">
                          {maxStreakRecord}d 🏆
                        </span>
                      )}
                    </div>
                    <p className={`text-xs sm:text-base font-black font-heading truncate ${!isLinked ? 'text-amber-400' : streakMode === 'BROKEN' ? 'text-red-400' : 'text-orange-400'}`}>
                      {!isLinked ? "LOCKED 🔒" : `${streakDays} DAYS ${streakMode === 'BROKEN' ? '⚠️' : '🔥'}`}
                    </p>
                  </div>
                </div>

                <div 
                  onClick={openReadinessModal}
                  className="glass-card p-2.5 sm:p-3 flex items-center gap-2 bg-indigo-500/10 border-indigo-500/30 cursor-pointer hover:border-indigo-500/60 transition"
                  title="Click to view Readiness Score Breakdown"
                >
                  <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 shrink-0" />
                  <div className="min-w-0 flex-1">
                    <p className="text-[9px] sm:text-[10px] text-gray-400 uppercase font-semibold truncate">Readiness</p>
                    {(() => {
                      let streakScoreFactor = 15;
                      if (!isLinked) streakScoreFactor = 0;
                      else if (streakMode === 'BROKEN') streakScoreFactor = 0;
                      else if (streakMode === 'FRESH') streakScoreFactor = 2;
                      else if (streakMode === 'REVIVED') streakScoreFactor = 13;
                      else if (streakMode === 'SUBMITTED_WITH_FREEZE') streakScoreFactor = 15;
                      else if (streakMode === 'SUBMITTED_WITHOUT_FREEZE') streakScoreFactor = 3;

                      const dynamicRecruiterReadiness = !isLinked ? 5 : (80 + streakScoreFactor);
                      return <p className="text-xs sm:text-base font-black text-indigo-300 font-heading">{dynamicRecruiterReadiness}%</p>;
                    })()}
                  </div>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div className="space-y-1.5 pt-2">
              <div className="flex justify-between text-xs">
                <span className="text-gray-300 font-semibold">Overall Challenge Progress</span>
                {isLinked ? (
                  <span className="text-orange-400 font-bold">Day {completedDays} / 60 ({progressPercent}%)</span>
                ) : (
                  <span className="text-amber-400 font-bold flex items-center gap-1">
                    <Lock className="w-3 h-3 text-amber-400" /> Locked (Unregistered Session)
                  </span>
                )}
              </div>
              <div className={`progress-bar-bg ${!isLinked ? 'opacity-30' : ''}`}>
                <div className="progress-bar-fill" style={{ width: `${!isLinked ? 0 : progressPercent}%` }}></div>
              </div>
            </div>
          </div>

          {/* Momentum Meter & Quick Action Toolbar */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Dynamic Momentum Meter */}
            <div className="glass-card p-3.5 sm:p-4 flex items-center gap-3 bg-gradient-to-r from-orange-950/30 to-slate-900 border-orange-500/30">
              <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                <Activity className="w-5 h-5" />
              </div>
              <div className="min-w-0">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">Momentum Meter</p>
                <p className="text-xs font-bold text-orange-300 truncate">
                  {isBrokenStreak 
                    ? '⚠️ Momentum Interrupted (Streak 0d)' 
                    : `🔥 ${Math.round((streakDays / 11) * 100)}% High Velocity (${streakDays} Active Days)`}
                </p>
              </div>
            </div>

            {/* Quick Actions Bar */}
            <div className="glass-card p-3.5 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2.5">
              <button
                onClick={openCurriculumModal}
                className="btn-secondary w-full sm:flex-1 text-xs py-2 px-3 justify-center gap-1.5"
              >
                <Calendar className="w-4 h-4 text-orange-400" /> View Previous Days
              </button>
              <Link
                to="/day/12"
                className="btn-primary w-full sm:flex-1 text-xs py-2 px-3 justify-center gap-1.5"
              >
                Continue Today <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

          </div>

          {/* TODAY'S CHALLENGE HERO CARD */}
          <section className="glass-card p-5 sm:p-6 border-2 border-orange-500/40 bg-gradient-to-r from-slate-900 via-slate-900 to-orange-950/30 space-y-4">
            
            {/* In-Flow Header for TODAY'S TASK Badge & Focus View Button */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-1 border-b border-white/10">
              <span className="pill-badge pill-orange">
                <Flame className="w-3.5 h-3.5 text-orange-400" /> TODAY'S TASK
              </span>

              <button
                onClick={() => setIsFocusMode(!isFocusMode)}
                className="p-1.5 px-2.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-300 text-xs flex items-center gap-1.5 border border-white/10 transition"
                title="Toggle Focus Mode"
              >
                <Eye className="w-3.5 h-3.5 text-indigo-400" />
                <span>{isFocusMode ? 'Normal View' : 'Focus View'}</span>
              </button>
            </div>

            <div className="space-y-1">
              <p className="text-xs text-orange-400 font-bold tracking-wider uppercase font-heading">
                Day 12 of 60 • {MOCK_DAY_12_CHALLENGE.difficulty}
              </p>
              <h2 className="text-2xl sm:text-3xl font-black text-white font-heading">
                {MOCK_DAY_12_CHALLENGE.title}
              </h2>
              <p className="text-xs sm:text-sm text-gray-300 max-w-xl leading-relaxed">
                {MOCK_DAY_12_CHALLENGE.description}
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 border-t border-white/10">
              <div>⏱️ Est. Time: <strong className="text-white">{MOCK_DAY_12_CHALLENGE.estTime}</strong></div>
              <div>🏆 XP Reward: <strong className="text-amber-400">+{MOCK_DAY_12_CHALLENGE.xpReward} XP</strong></div>
              <div>🎖️ Badge Unlock: <strong className="text-purple-400">{MOCK_DAY_12_CHALLENGE.badgeUnlock}</strong></div>
            </div>

            <div className="pt-2">
              <Link to="/day/12" className="btn-primary w-full sm:w-auto text-sm sm:text-base py-3 px-6 justify-center">
                Continue Today's Challenge <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </section>

          {/* Hide lower details if Focus Mode is toggled ON */}
          {!isFocusMode && (
            <>
              {/* GitHub-style 60-Day Contribution Heatmap Mini Calendar */}
              <section className="glass-card p-5 space-y-3 relative overflow-hidden border border-white/10 min-h-[230px] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <GitCommit className="w-5 h-5 text-emerald-400" />
                      <h3 className="font-bold text-white text-sm font-heading">60-Day Activity Heatmap</h3>
                    </div>
                    <span className="text-xs text-gray-400">
                      {!isLinked ? '🔒 Locked (0/60 Days)' : `${completedDays} / 60 Days Active`}
                    </span>
                  </div>

                  <p className="text-xs text-gray-400 mt-1">Visual proof of your daily GitHub commits over the 60-day challenge.</p>
                </div>

                <div className="pt-1">
                  <div className={`heatmap-grid pt-2 transition-all ${!isLinked ? 'filter blur-[3px] opacity-25 pointer-events-none' : ''}`}>
                    {[...Array(60)].map((_, idx) => {
                      const dayNum = idx + 1;
                      const isDone = isLinked && dayNum <= completedDays;
                      const isToday = isLinked && dayNum === 12 && !isCompleted;
                      return (
                        <div
                          key={idx}
                          title={`Day ${dayNum}: ${isDone ? 'Completed Commit' : 'Pending'}`}
                          className={`heatmap-cell ${isDone ? 'completed' : ''} ${isToday ? 'today' : ''}`}
                        ></div>
                      );
                    })}
                  </div>
                </div>

                {/* Lock Overlay for Unregistered Users */}
                {!isLinked && (
                  <div className="absolute inset-0 bg-slate-950/90 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-4 text-center space-y-2.5 z-20 border border-amber-500/40 shadow-2xl">
                    <div className="w-10 h-10 rounded-2xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-lg shrink-0">
                      <Lock className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="font-black text-white text-sm font-heading tracking-wide">
                        Commit Activity Heatmap Locked 🔒
                      </h4>
                      <p className="text-xs text-amber-200/90 max-w-xs mt-1 leading-relaxed">
                        Unregistered users cannot record daily contribution graphs. Link your accounts to start your 60-day commit heatmap!
                      </p>
                    </div>
                    <button
                      onClick={openLinkModal}
                      className="btn-primary text-xs py-2 px-4 bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 flex items-center gap-1.5 shadow-md shrink-0 cursor-pointer"
                    >
                      <Flame className="w-4 h-4 text-white" />
                      <span>Link Git & LinkedIn to Unlock Heatmap</span>
                    </button>
                  </div>
                )}
              </section>

              {/* Grid Layout: Achievements & Leaderboard */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                
                {/* Achievements & Badges Showcase */}
                <section className="glass-card p-5 space-y-4 relative overflow-hidden border border-white/10">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Trophy className="w-5 h-5 text-amber-400" />
                      <h3 className="font-bold text-white text-sm font-heading">Achievements & Badges</h3>
                    </div>
                    <span className="text-xs text-amber-400 font-bold">
                      {!isLinked ? '🔒 Locked' : completedDays === 0 ? '0 Unlocked' : '3 Unlocked'}
                    </span>
                  </div>

                  <div className="relative pt-1">
                    <div className={`grid grid-cols-2 gap-3 transition-all ${!isLinked ? 'filter blur-[3px] opacity-20 pointer-events-none' : ''}`}>
                      {MOCK_ACHIEVEMENTS.map((badge) => {
                        const isUnlocked = completedDays > 0 && badge.unlocked;
                        return (
                          <div
                            key={badge.id}
                            className={`p-3 rounded-xl border space-y-1 transition ${
                              isUnlocked
                                ? 'bg-white/5 border-amber-500/30'
                                : 'bg-black/20 border-white/5 opacity-50'
                            }`}
                          >
                            <div className="flex items-center justify-between">
                              <span className="text-lg">
                                {badge.id === 'first_commit' && '🚀'}
                                {badge.id === 'streak_7' && '🔥'}
                                {badge.id === 'security_champ' && '🛡️'}
                                {badge.id === 'halfway' && '🏆'}
                                {badge.id === 'portfolio_god' && '💼'}
                                {badge.id === 'champ_60' && '👑'}
                              </span>
                              {isUnlocked ? (
                                <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                              ) : (
                                <Lock className="w-3.5 h-3.5 text-gray-500" />
                              )}
                            </div>
                            <p className="font-bold text-xs text-white">{badge.title}</p>
                            <p className="text-[10px] text-gray-400 leading-tight">{badge.description}</p>
                          </div>
                        );
                      })}
                    </div>

                    {/* Lock Overlay for Unregistered Users */}
                    {!isLinked && (
                      <div className="absolute inset-0 bg-slate-950/85 backdrop-blur-sm rounded-xl flex flex-col items-center justify-center p-3 text-center space-y-2 z-10 border border-amber-500/40 shadow-2xl">
                        <div className="w-8 h-8 rounded-xl bg-amber-500/20 text-amber-400 border border-amber-500/40 flex items-center justify-center shadow-lg">
                          <Lock className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="font-extrabold text-white text-xs font-heading">
                            Badges & Certificates Locked 🔒
                          </h4>
                          <p className="text-[10px] text-amber-200/90 mt-0.5 leading-tight max-w-[200px]">
                            Unregistered users cannot earn badges. Link GitHub & LinkedIn to unlock rewards!
                          </p>
                        </div>
                        <button
                          onClick={openLinkModal}
                          className="btn-primary text-[10px] py-1.5 px-3 bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 flex items-center gap-1 shadow-md"
                        >
                          <Flame className="w-3.5 h-3.5 text-white" />
                          <span>Link Git & LinkedIn</span>
                        </button>
                      </div>
                    )}
                  </div>
                </section>

                {/* Leaderboard Snippet */}
                <section className="glass-card p-5 space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div className="flex items-center gap-2">
                      <Award className="w-5 h-5 text-purple-400" />
                      <h3 className="font-bold text-white text-sm font-heading">Student Leaderboard</h3>
                    </div>
                    <span className={`text-xs font-semibold ${!isLinked ? 'text-amber-400 font-bold' : 'text-purple-300'}`}>
                      {!isLinked ? '🔒 Unranked' : student.topPercentile}
                    </span>
                  </div>

                  <div className="space-y-2">
                    {MOCK_LEADERBOARD.map((item) => {
                      if (item.isUser && !isLinked) {
                        return (
                          <div
                            key="unlinked_user"
                            onClick={openLinkModal}
                            className="flex items-center justify-between p-2.5 rounded-xl border text-xs bg-amber-500/10 border-amber-500/30 text-amber-300 font-medium cursor-pointer hover:bg-amber-500/20 transition"
                            title="Click to link GitHub & LinkedIn to join student leaderboard"
                          >
                            <div className="flex items-center gap-2.5">
                              <span className="w-5 text-center font-bold text-gray-500">#-</span>
                              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400 font-bold text-xs">
                                ?
                              </div>
                              <div>
                                <p className="text-white font-bold">Unlinked Student (You)</p>
                                <p className="text-[10px] text-amber-300/80">Link Git & LinkedIn to join rank</p>
                              </div>
                            </div>

                            <div className="text-right">
                              <span className="text-[10px] font-bold bg-amber-500/20 px-2 py-0.5 rounded text-amber-300">
                                🔒 Unranked
                              </span>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <div
                          key={item.rank}
                          className={`flex items-center justify-between p-2.5 rounded-xl border text-xs ${
                            item.isUser && isLinked
                              ? 'bg-orange-500/15 border-orange-500/40 font-bold'
                              : 'bg-white/5 border-white/5'
                          }`}
                        >
                          <div className="flex items-center gap-2.5">
                            <span className={`w-5 text-center font-bold ${item.rank <= 3 ? 'text-amber-400' : 'text-gray-400'}`}>
                              #{item.rank}
                            </span>
                            <img src={item.avatar} alt={item.name} className="w-7 h-7 rounded-full object-cover" />
                            <div>
                              <p className="text-white font-medium">{item.name}</p>
                              <p className="text-[10px] text-gray-400">{item.college}</p>
                            </div>
                          </div>

                          <div className="text-right">
                            <p className="text-orange-400 font-bold flex items-center justify-end gap-1">
                              <Flame className="w-3 h-3" /> {item.streak}d
                            </p>
                            <p className="text-[10px] text-gray-400">{item.xp} XP</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </section>

              </div>

              {/* Daily Motivation Quote */}
              <section className="glass-card p-4 flex items-start gap-3 bg-gradient-to-r from-purple-950/30 to-slate-900 border-purple-500/30">
                <Quote className="w-8 h-8 text-purple-400 shrink-0 mt-0.5" />
                <div>
                  <p className="text-xs sm:text-sm text-gray-200 italic font-medium">"{randomQuote.quote}"</p>
                  <p className="text-[10px] text-purple-400 font-bold mt-1">— {randomQuote.author}</p>
                </div>
              </section>

              {/* Recent Submissions Feed */}
              <section className="glass-card p-5 space-y-3">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <h3 className="font-bold text-white text-sm font-heading flex items-center gap-2">
                    <Users className="w-4 h-4 text-blue-400" /> Recent Student Submissions
                  </h3>
                  <span className="text-[10px] text-emerald-400 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5" /> GitHub Verified
                  </span>
                </div>

                <div className="space-y-2.5">
                  {MOCK_RECENT_SUBMISSIONS.map((sub) => (
                    <div key={sub.id} className="p-3 rounded-xl bg-white/5 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-3">
                        <img src={sub.avatar} alt={sub.student} className="w-8 h-8 rounded-full object-cover" />
                        <div>
                          <p className="font-bold text-white">{sub.student}</p>
                          <p className="text-[10px] text-gray-400">
                            Day {sub.day}: {sub.taskTitle} • <span className="text-gray-500">{sub.timeAgo}</span>
                          </p>
                        </div>
                      </div>

                      <div className="flex items-center gap-2">
                        <a href={sub.githubCommit} target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-md bg-white/5 hover:bg-white/10 text-gray-300 text-[11px] flex items-center gap-1">
                          <GitCommit className="w-3 h-3 text-emerald-400" /> Commit
                        </a>
                        <a href={sub.linkedinPost} target="_blank" rel="noreferrer" className="px-2.5 py-1 rounded-md bg-blue-500/10 hover:bg-blue-500/20 text-blue-300 text-[11px] flex items-center gap-1">
                          <Linkedin className="w-3 h-3 text-blue-400" /> LinkedIn
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            </>
          )}

        </div>

      </div>

    </div>
  );
}
