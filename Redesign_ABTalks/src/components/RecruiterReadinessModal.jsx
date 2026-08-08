import React from 'react';
import { Briefcase, CheckCircle2, TrendingUp, X, ShieldCheck, Flame, ShieldAlert, UserX, AlertCircle } from 'lucide-react';

export default function RecruiterReadinessModal({ isOpen, onClose, student, userAuth, streakMode = 'BROKEN' }) {
  if (!isOpen) return null;

  const isLinked = userAuth ? userAuth.isLinked : true;

  // Dynamic evaluation of streak consistency factor
  let streakPoints = 15;
  let streakDesc = '🔥 Non-stop 12-day active streak maintained without missing deadlines.';

  if (!isLinked) {
    streakPoints = 0;
    streakDesc = '🔒 Streak unrecorded for unregistered guest session. Link Git & LinkedIn to record score.';
  } else if (streakMode === 'BROKEN') {
    streakPoints = 0;
    streakDesc = '⚠️ Yesterday (Day 11) missed! Streak dropped to 0 days. Use 1 Free Streak Freeze to revive points.';
  } else if (streakMode === 'FRESH') {
    streakPoints = 2;
    streakDesc = '🌱 Fresh streak started (0 days active today). Prior max record of 10 days preserved.';
  } else if (streakMode === 'REVIVED') {
    streakPoints = 13;
    streakDesc = '🛡️ Streak Freeze Shield active — 11-day streak protected & revived from deadline drop.';
  } else if (streakMode === 'SUBMITTED_WITH_FREEZE') {
    streakPoints = 15;
    streakDesc = '🔥 Non-stop 12-day active streak maintained (Revived & protected via Streak Freeze).';
  } else if (streakMode === 'SUBMITTED_WITHOUT_FREEZE') {
    streakPoints = 3;
    streakDesc = '🌱 Fresh streak started (1-day active flame). Prior max record of 10 days preserved.';
  }

  const metrics = [
    { 
      label: 'GitHub Commit Quality', 
      points: isLinked ? 30 : 0, 
      max: 30, 
      desc: isLinked ? '60 daily commits with detailed commit messages & clean code' : '🔒 GitHub commits unverified (Account unlinked)' 
    },
    { 
      label: 'Social Proof & LinkedIn', 
      points: isLinked ? 25 : 0, 
      max: 25, 
      desc: isLinked ? 'Public LinkedIn posts with video/screenshot evidence' : '🔒 LinkedIn proof unlinked' 
    },
    { 
      label: 'Code Complexity & Stack', 
      points: isLinked ? 20 : 5, 
      max: 25, 
      desc: isLinked ? 'Full-stack React, Tailwind CSS, API integration, State management' : 'Basic single-file sandbox' 
    },
    { 
      label: 'Streak Consistency', 
      points: streakPoints, 
      max: 15, 
      desc: streakDesc
    },
    { 
      label: 'Anti-Cheat SHA Verification', 
      points: isLinked ? 5 : 0, 
      max: 5, 
      desc: isLinked ? 'Verified OAuth 2.0 GitHub commit author proof' : '🔒 OAuth unverified' 
    },
  ];

  const totalScore = metrics.reduce((acc, m) => acc + m.points, 0);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-card max-w-lg w-full p-6 space-y-5 border-2 border-indigo-500/40 max-h-[90vh] overflow-y-auto bg-slate-900/95 shadow-2xl">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-4">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center">
              <Briefcase className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white font-heading">Recruiter Readiness Breakdown</h2>
              <p className="text-xs text-gray-400">Score algorithm evaluated for SDE hiring managers</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Score Gauge Banner */}
        <div className="p-4 rounded-2xl bg-gradient-to-r from-indigo-950/60 via-slate-900 to-purple-950/60 border border-indigo-500/30 flex items-center justify-between">
          <div>
            <p className="text-xs text-indigo-300 font-bold uppercase tracking-wider">Overall Score</p>
            <p className="text-3xl font-black text-white font-heading">{totalScore} / 100</p>
            <p className="text-xs text-emerald-400 font-semibold flex items-center gap-1 mt-0.5">
              <TrendingUp className="w-3.5 h-3.5" /> {totalScore >= 80 ? 'High Employability Range (Top 18%)' : totalScore >= 60 ? 'Moderate Employability Range' : 'Unregistered / Low Range'}
            </p>
          </div>
          <div className="w-16 h-16 rounded-full border-4 border-indigo-500 flex items-center justify-center font-black text-lg text-indigo-300 font-heading bg-indigo-500/10 shadow-lg">
            {totalScore}%
          </div>
        </div>

        {/* Detailed Metric List */}
        <div className="space-y-3">
          <h3 className="font-bold text-xs text-gray-300 uppercase tracking-wider">Evaluation Factors</h3>
          {metrics.map((m, idx) => (
            <div key={idx} className="p-3 rounded-xl bg-white/5 border border-white/5 space-y-1.5 text-xs">
              <div className="flex items-center justify-between font-semibold">
                <span className="text-white flex items-center gap-1.5">
                  {m.points > 0 ? (
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <AlertCircle className="w-4 h-4 text-amber-400" />
                  )}
                  <span>{m.label}</span>
                </span>
                <span className={`font-bold ${m.points === m.max ? 'text-emerald-400' : m.points > 0 ? 'text-indigo-300' : 'text-amber-400'}`}>
                  {m.points}/{m.max} pts
                </span>
              </div>
              <p className="text-[11px] text-gray-400 leading-tight">{m.desc}</p>
              <div className="progress-bar-bg h-1.5">
                <div 
                  className={`progress-bar-fill h-1.5 ${
                    m.points === m.max 
                      ? 'bg-gradient-to-r from-indigo-500 to-emerald-400' 
                      : m.points > 0 
                        ? 'bg-gradient-to-r from-indigo-500 to-amber-400' 
                        : 'bg-amber-500/40'
                  }`} 
                  style={{ width: `${(m.points / m.max) * 100}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        {/* Recruiter Guarantee Footer */}
        <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center gap-2.5 text-xs text-emerald-300">
          <ShieldCheck className="w-5 h-5 shrink-0 text-emerald-400" />
          <p className="text-[11px]">Directly verifiable by recruiters via GitHub commits & LinkedIn submission hashes.</p>
        </div>

      </div>
    </div>
  );
}
