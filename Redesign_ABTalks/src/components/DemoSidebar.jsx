import React, { useState } from 'react';
import { 
  Sparkles, 
  Flame, 
  ShieldAlert, 
  Award, 
  Eye, 
  ShieldCheck, 
  UserX, 
  Calendar,
  ChevronRight,
  ChevronDown,
  ChevronUp,
  Lock
} from 'lucide-react';

export default function DemoSidebar({
  studentState,
  setStudentState,
  isFocusMode,
  setIsFocusMode,
  openSecurityModal,
  openCertModal,
  openCurriculumModal,
  completedDays = 12,
  isLinked = true,
  openLinkModal
}) {
  const [mobileExpanded, setMobileExpanded] = useState(false);
  const [lockedNotice, setLockedNotice] = useState('');

  const is60DaysUnlocked = isLinked && completedDays >= 60;

  const handleCompleted60Click = () => {
    if (!isLinked) {
      setLockedNotice('🔒 Account Unlinked: Link GitHub & LinkedIn to record 60-day progress!');
      setTimeout(() => setLockedNotice(''), 4000);
      if (openLinkModal) openLinkModal();
      return;
    }

    if (completedDays < 60) {
      setLockedNotice(`🔒 Locked (${completedDays}/60 Days Completed): Finish all 60 days to unlock certificate!`);
      setTimeout(() => setLockedNotice(''), 4000);
      return;
    }

    setStudentState('COMPLETED_60');
    openCertModal();
  };

  return (
    <div className="glass-card border-2 border-orange-500/30 p-3.5 space-y-3 text-xs text-white shadow-xl bg-slate-900/90 backdrop-blur-xl">
      
      {/* Sidebar Header with Mobile Toggle */}
      <div className="flex items-center justify-between border-b border-white/10 pb-2.5">
        <div className="flex items-center gap-2 font-bold font-heading text-sm text-orange-400">
          <Sparkles className="w-4 h-4 text-orange-400" />
          <span>Demo Edge Controls</span>
        </div>
        
        {/* Mobile Expand / Collapse Button (<md viewports) */}
        <button
          onClick={() => setMobileExpanded(!mobileExpanded)}
          className="md:hidden px-2.5 py-1 rounded-full bg-orange-500/20 text-orange-300 text-[10px] font-bold flex items-center gap-1 border border-orange-500/30"
        >
          <span>{mobileExpanded ? "Hide Controls" : "Test Edge Cases"}</span>
          {mobileExpanded ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
        </button>

        {/* Desktop Badge */}
        <span className="hidden md:inline-block text-[10px] bg-orange-500/20 text-orange-300 px-2 py-0.5 rounded-full font-mono font-bold">
          Evaluator Panel
        </span>
      </div>

      {/* Control Panel Body (Always visible on desktop md+, collapsible on mobile <md) */}
      <div className={`${mobileExpanded ? 'block' : 'hidden md:block'} space-y-3 animate-fade-in`}>
        
        <p className="text-[11px] text-gray-400 leading-snug">
          Select a student state to evaluate edge cases on mobile (390px) & desktop:
        </p>

        {lockedNotice && (
          <div className="p-2 rounded-lg bg-amber-500/20 border border-amber-500/40 text-amber-200 text-[10px] font-semibold animate-fade-in">
            {lockedNotice}
          </div>
        )}

        {/* Vertical Edge Case Options List */}
        <div className="space-y-1.5">
          
          {/* Standard Active Day 12 */}
          <button
            onClick={() => setStudentState('ACTIVE_DAY12')}
            className={`w-full p-2.5 rounded-xl text-left font-semibold flex items-center gap-2.5 transition ${
              studentState === 'ACTIVE_DAY12'
                ? 'bg-orange-500 text-white shadow-md'
                : 'bg-white/5 hover:bg-white/10 text-gray-300'
            }`}
          >
            <Flame className="w-4 h-4 text-orange-300 shrink-0" />
            <div>
              <p className="text-xs font-bold">Active Session (Day 12)</p>
              <p className="text-[10px] opacity-80 font-normal">Active streak & streak freezes</p>
            </div>
          </button>

          {/* Completed 60 Days (Locked until 60 days completed by learner) */}
          <button
            onClick={handleCompleted60Click}
            className={`w-full p-2.5 rounded-xl text-left font-semibold flex items-center justify-between transition ${
              is60DaysUnlocked && studentState === 'COMPLETED_60'
                ? 'bg-emerald-600 text-white shadow-md'
                : is60DaysUnlocked
                  ? 'bg-white/5 hover:bg-white/10 text-gray-300'
                  : 'bg-slate-800/80 border border-white/5 text-gray-400 cursor-not-allowed opacity-75'
            }`}
            title={!is60DaysUnlocked ? `Locked until learner completes 60 days (${completedDays}/60)` : "View Certificate"}
          >
            <div className="flex items-center gap-2.5">
              {is60DaysUnlocked ? (
                <Award className="w-4 h-4 text-emerald-300 shrink-0" />
              ) : (
                <Lock className="w-4 h-4 text-amber-400 shrink-0" />
              )}
              <div>
                <p className="text-xs font-bold flex items-center gap-1">
                  <span>Completed (60 Days)</span>
                  {!is60DaysUnlocked && <span className="text-[9px] text-amber-400 font-extrabold font-mono">🔒 LOCKED</span>}
                </p>
                <p className="text-[10px] opacity-80 font-normal">
                  {!is60DaysUnlocked ? `${completedDays}/60 Days Completed` : "View Certificate"}
                </p>
              </div>
            </div>
          </button>
        </div>

        {/* Quick Utility Actions */}
        <div className="pt-2.5 border-t border-white/10 space-y-1.5">
          <button
            onClick={openCurriculumModal}
            className="w-full p-2.5 rounded-xl bg-white/5 hover:bg-white/10 text-left font-semibold flex items-center justify-between text-gray-300"
          >
            <span className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-orange-400" /> View 60 Days
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-gray-500" />
          </button>

          <button
            onClick={() => setIsFocusMode(!isFocusMode)}
            className={`w-full p-2.5 rounded-xl text-left font-semibold flex items-center justify-between transition ${
              isFocusMode ? 'bg-indigo-600 text-white' : 'bg-white/5 hover:bg-white/10 text-gray-300'
            }`}
          >
            <span className="flex items-center gap-2">
              <Eye className="w-4 h-4" /> Focus Mode
            </span>
            <span className="text-[10px] font-bold uppercase">{isFocusMode ? 'ON' : 'OFF'}</span>
          </button>

          <button
            onClick={openSecurityModal}
            className="w-full p-2.5 rounded-xl bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 text-left flex items-center justify-between"
          >
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Security Brief
            </span>
            <ChevronRight className="w-3.5 h-3.5 text-emerald-400" />
          </button>
        </div>

      </div>

    </div>
  );
}
