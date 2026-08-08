import React from 'react';
import { Sparkles, UserPlus, Flame, ShieldAlert, Award, Eye, ShieldCheck, UserX } from 'lucide-react';

export default function DemoToolbar({
  studentState,
  setStudentState,
  isFocusMode,
  setIsFocusMode,
  openSecurityModal,
  openCertModal,
  openCurriculumModal
}) {
  return (
    <div className="bg-slate-900/95 backdrop-blur-xl border-b border-orange-500/20 px-3 py-1.5 text-xs flex items-center justify-between text-gray-300 overflow-x-auto gap-2 shadow-sm">
      <div className="flex items-center gap-1.5 shrink-0">
        <Sparkles className="w-3.5 h-3.5 text-orange-400" />
        <span className="font-bold text-white uppercase tracking-wider text-[11px]">Demo Edge Cases:</span>
      </div>

      <div className="flex items-center gap-1.5 shrink-0">
        <button
          onClick={() => setStudentState('ACTIVE_DAY12')}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
            studentState === 'ACTIVE_DAY12'
              ? 'bg-orange-500 text-white shadow-sm'
              : 'bg-white/5 hover:bg-white/10 text-gray-300'
          }`}
        >
          <Flame className="w-3 h-3 text-orange-300" />
          Active Session
        </button>

        {/* New Student */}
        <button
          onClick={() => setStudentState('NEW_STUDENT')}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
            studentState === 'NEW_STUDENT'
              ? 'bg-blue-600 text-white shadow-sm'
              : 'bg-white/5 hover:bg-white/10 text-gray-300'
          }`}
        >
          <UserPlus className="w-3 h-3 text-blue-200" />
          New Student
        </button>

        {/* Empty Profile */}
        <button
          onClick={() => setStudentState('EMPTY_PROFILE')}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
            studentState === 'EMPTY_PROFILE'
              ? 'bg-amber-600 text-white shadow-sm'
              : 'bg-white/5 hover:bg-white/10 text-gray-300'
          }`}
        >
          <UserX className="w-3 h-3 text-amber-200" />
          Empty Profile
        </button>

        {/* Broken Streak */}
        <button
          onClick={() => setStudentState('BROKEN_STREAK')}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
            studentState === 'BROKEN_STREAK'
              ? 'bg-red-600 text-white shadow-sm'
              : 'bg-white/5 hover:bg-white/10 text-gray-300'
          }`}
        >
          <ShieldAlert className="w-3 h-3 text-red-300" />
          Broken Streak
        </button>

        {/* Completed 60 Days */}
        <button
          onClick={() => {
            setStudentState('COMPLETED_60');
            openCertModal();
          }}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
            studentState === 'COMPLETED_60'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-white/5 hover:bg-white/10 text-gray-300'
          }`}
        >
          <Award className="w-3 h-3 text-emerald-300" />
          Completed (60 Days)
        </button>
      </div>

      <div className="flex items-center gap-2 shrink-0 border-l border-white/10 pl-2">
        {/* View Previous Days Curriculum */}
        <button
          onClick={openCurriculumModal}
          className="px-2.5 py-1 rounded-full bg-white/5 hover:bg-white/10 text-gray-300 font-semibold flex items-center gap-1 text-xs"
        >
          <span>📜 View 60 Days</span>
        </button>

        {/* Focus Mode */}
        <button
          onClick={() => setIsFocusMode(!isFocusMode)}
          className={`px-2.5 py-1 rounded-full text-xs font-semibold flex items-center gap-1 transition ${
            isFocusMode ? 'bg-indigo-600 text-white' : 'bg-white/5 text-gray-400 hover:text-white'
          }`}
        >
          <Eye className="w-3 h-3" />
          {isFocusMode ? 'Focus Mode On' : 'Focus Mode'}
        </button>

        {/* Security Info Modal Trigger */}
        <button
          onClick={openSecurityModal}
          className="px-2.5 py-1 rounded-full bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 font-bold border border-emerald-500/30 flex items-center gap-1 text-xs"
        >
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          Security Architecture
        </button>
      </div>
    </div>
  );
}
