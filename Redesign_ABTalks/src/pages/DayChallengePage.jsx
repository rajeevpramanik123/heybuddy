import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  Flame, 
  Clock, 
  CheckCircle2, 
  Send, 
  ExternalLink, 
  Code2, 
  BookOpen, 
  ShieldCheck, 
  CheckSquare, 
  ArrowLeft,
  AlertCircle
} from 'lucide-react';
import { Github, Linkedin } from '../components/Icons';
import LiveKanbanSandbox from '../components/LiveKanbanSandbox';
import { MOCK_DAY_12_CHALLENGE } from '../data/mockData';

export default function DayChallengePage({ 
  student, 
  userAuth, 
  onSubmissionComplete, 
  openSecurityModal, 
  openLinkModal,
  streakMode = 'BROKEN',
  setStreakMode = () => {}
}) {
  // Submission Form State
  const [githubRepo, setGithubRepo] = useState('');
  const [commitSha, setCommitSha] = useState('');
  const [linkedinPost, setLinkedinPost] = useState('');
  
  // Checklist State
  const [checkedItems, setCheckedItems] = useState([1, 2]); // Initial completed items by ID
  const [submissionStatus, setSubmissionStatus] = useState('UNSUBMITTED'); // 'UNSUBMITTED' | 'SUBMITTING' | 'VERIFIED'
  const [errorMessage, setErrorMessage] = useState('');

  const toggleChecklist = (id) => {
    if (checkedItems.includes(id)) {
      setCheckedItems(checkedItems.filter(item => item !== id));
    } else {
      setCheckedItems([...checkedItems, id]);
    }
  };

  const isFreezeActive = streakMode === 'REVIVED' || streakMode === 'SUBMITTED_WITH_FREEZE';

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setErrorMessage('');

    // Input sanitization & simple URL validation
    if (!githubRepo.trim() || !githubRepo.includes('github.com')) {
      setErrorMessage('Please enter a valid GitHub Repository URL (e.g., https://github.com/username/repo)');
      return;
    }
    if (!commitSha.trim() || commitSha.trim().length < 7) {
      setErrorMessage('Please enter a valid GitHub Commit SHA hash (minimum 7 characters)');
      return;
    }
    if (!linkedinPost.trim() || !linkedinPost.includes('linkedin.com')) {
      setErrorMessage('Please enter a valid LinkedIn Post URL');
      return;
    }

    // Simulate OAuth & Commit verification
    setSubmissionStatus('SUBMITTING');

    setTimeout(() => {
      setSubmissionStatus('VERIFIED');
      onSubmissionComplete();

      // Trigger Confetti Celebration 🎉
      confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 }
      });
    }, 1200);
  };

  const isLinked = userAuth ? userAuth.isLinked : true;

  return (
    <div className="space-y-6 py-6 px-4">
      
      {/* Unregistered User Notice */}
      {!isLinked && (
        <div className="glass-card bg-amber-950/60 border-amber-500/50 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs animate-fade-in">
          <div className="flex items-center gap-2">
            <Flame className="w-5 h-5 text-amber-400 shrink-0" />
            <p className="text-amber-200">
              <strong>Unregistered Mode:</strong> You can complete this task, but your daily streak flame will <strong>NOT</strong> be recorded until you link GitHub & LinkedIn.
            </p>
          </div>
          <button 
            onClick={openLinkModal}
            className="btn-primary text-xs py-1.5 px-3 bg-gradient-to-r from-orange-500 to-amber-500 shrink-0"
          >
            Link Git & LinkedIn Now
          </button>
        </div>
      )}

      {/* Back Navigation Bar */}
      <div className="flex items-center justify-between">
        <Link to={isLinked ? "/dashboard" : "/guest-dashboard"} className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <span className={`text-xs font-bold flex items-center gap-1 ${
          submissionStatus === 'VERIFIED' ? 'text-emerald-400' : 'text-orange-400'
        }`}>
          {submissionStatus === 'VERIFIED' ? (
            <>
              <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Day 12 Completed 🎉
            </>
          ) : (
            <>
              <Flame className="w-4 h-4" /> Day 12 of 60
            </>
          )}
        </span>
      </div>

      {/* Challenge Header Card (Updates dynamically when verified!) */}
      <section className={`glass-card p-6 space-y-4 border-2 transition-all ${
        submissionStatus === 'VERIFIED'
          ? 'border-emerald-500/50 bg-emerald-950/20 shadow-xl'
          : 'border-orange-500/30'
      }`}>
        <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-3">
          {submissionStatus === 'VERIFIED' ? (
            <span className="pill-badge pill-emerald font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> DAY 12 COMPLETED & VERIFIED 🎉
            </span>
          ) : (
            <span className="pill-badge pill-orange font-bold">
              🔥 DAY 12 CHALLENGE
            </span>
          )}

          <span className="pill-badge pill-purple font-bold">
            {MOCK_DAY_12_CHALLENGE.difficulty} Level
          </span>
        </div>

        <div className="space-y-2">
          <h1 className="text-2xl sm:text-3xl font-black text-white font-heading">
            {MOCK_DAY_12_CHALLENGE.title}
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            {MOCK_DAY_12_CHALLENGE.description}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-gray-400 pt-2 border-t border-white/10">
          <div className="flex items-center gap-1">
            <Clock className="w-4 h-4 text-orange-400" />
            <span>Est. Time: <strong className="text-white">{MOCK_DAY_12_CHALLENGE.estTime}</strong></span>
          </div>
          <div>
            <span>XP Reward: <strong className="text-amber-400">+{MOCK_DAY_12_CHALLENGE.xpReward} XP</strong></span>
          </div>
          <div>
            <span>Badge Unlock: <strong className="text-purple-400">{MOCK_DAY_12_CHALLENGE.badgeUnlock}</strong></span>
          </div>
          {submissionStatus === 'VERIFIED' && (
            <div className="text-emerald-400 font-bold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4" /> Status: Verified ✓
            </div>
          )}
        </div>
      </section>

      {/* Interactive Live Kanban Sandbox Widget */}
      <LiveKanbanSandbox />

      {/* Learning Objectives & Requirements */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        
        {/* Objectives */}
        <section className="glass-card p-5 space-y-3">
          <h3 className="font-bold text-white text-sm font-heading flex items-center gap-2">
            <Code2 className="w-4 h-4 text-orange-400" /> Learning Objectives
          </h3>
          <ul className="space-y-2 text-xs text-gray-300">
            {(MOCK_DAY_12_CHALLENGE.learningObjectives || []).map((obj, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-orange-400 font-bold">•</span>
                <span>{obj}</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Requirements */}
        <section className="glass-card p-5 space-y-3">
          <h3 className="font-bold text-white text-sm font-heading flex items-center gap-2">
            <CheckSquare className="w-4 h-4 text-emerald-400" /> Requirements Checklist
          </h3>
          <ul className="space-y-2 text-xs text-gray-300">
            {(MOCK_DAY_12_CHALLENGE.requirements || []).map((req, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-emerald-400 font-bold">✓</span>
                <span>{req}</span>
              </li>
            ))}
          </ul>
        </section>

      </div>

      {/* Step-by-Step Interactive Implementation Checklist */}
      <section className="glass-card p-5 space-y-4">
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <h3 className="font-bold text-white text-sm font-heading flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-400" /> Interactive Step-by-Step Guide
          </h3>
          <span className="text-xs text-emerald-400 font-semibold">
            {checkedItems.length} / {(MOCK_DAY_12_CHALLENGE.checklist || []).length} Done
          </span>
        </div>

        <div className="space-y-2">
          {(MOCK_DAY_12_CHALLENGE.checklist || []).map((item) => {
            const isChecked = checkedItems.includes(item.id);
            return (
              <div
                key={item.id}
                onClick={() => toggleChecklist(item.id)}
                className={`p-3 rounded-xl border flex items-center gap-3 cursor-pointer transition ${
                  isChecked
                    ? 'bg-emerald-500/10 border-emerald-500/30 text-white'
                    : 'bg-white/5 border-white/5 text-gray-300 hover:bg-white/10'
                }`}
              >
                <div className={`w-5 h-5 rounded-md flex items-center justify-center border transition ${
                  isChecked ? 'bg-emerald-500 border-emerald-400 text-white' : 'border-gray-500 bg-black/20'
                }`}>
                  {isChecked && <CheckCircle2 className="w-3.5 h-3.5" />}
                </div>

                <span className="text-xs font-medium flex-1">{item.text}</span>
              </div>
            );
          })}
        </div>
      </section>

      {/* Resource Links */}
      <section className="glass-card p-5 space-y-3">
        <h3 className="font-bold text-white text-sm font-heading flex items-center gap-2">
          <BookOpen className="w-4 h-4 text-blue-400" /> Recommended Learning Resources
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {(MOCK_DAY_12_CHALLENGE.resources || []).map((res, idx) => (
            <a
              key={idx}
              href={res.url}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-white/5 hover:bg-white/10 border border-white/5 flex items-center justify-between text-xs text-gray-300 hover:text-white transition"
            >
              <span>{res.title}</span>
              <ExternalLink className="w-3.5 h-3.5 text-gray-400" />
            </a>
          ))}
        </div>
      </section>

      {/* PROOF OF WORK SUBMISSION FORM */}
      <section className="glass-card p-6 space-y-5 border-2 border-emerald-500/40 bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/20">
        
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 border-b border-white/10 pb-4">
          <div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-emerald-400" />
              <h2 className="text-xl font-bold text-white font-heading">Submit Proof of Work</h2>
            </div>
            <p className="text-xs text-gray-400 mt-0.5">
              Paste your daily GitHub Commit & LinkedIn Post to maintain your streak flame 🔥
            </p>
          </div>

          <button
            onClick={openSecurityModal}
            className="text-xs text-amber-400 hover:underline flex items-center gap-1 font-semibold bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20"
          >
            🛡️ Security Architecture (Roadmap V2) →
          </button>
        </div>

        {/* Dynamic Verification & Live Stats Change Summary Card */}
        {submissionStatus === 'VERIFIED' && (
          <div className="p-5 rounded-2xl bg-gradient-to-r from-emerald-950/80 via-slate-900 to-emerald-950/80 border-2 border-emerald-500/60 text-white space-y-4 shadow-2xl animate-fade-in">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold font-heading text-white">Day 12 Task Verified & Locked! 🎉</h3>
                  <p className="text-xs text-emerald-300">
                    {isFreezeActive 
                      ? "Streak Freeze applied & Day 12 task verified successfully."
                      : "Fresh Streak Started! Day 12 task submitted as Day 1 of new streak flame."}
                  </p>
                </div>
              </div>
              <span className="pill-badge pill-emerald font-bold">+150 XP</span>
            </div>

            {/* Live Metric Changes Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">Active Streak</p>
                <p className="text-xl font-black text-orange-400 font-heading">
                  {isFreezeActive ? "12 DAYS 🔥" : "1 DAY 🔥"}
                </p>
                <p className="text-[9px] text-emerald-400 font-bold">
                  {isFreezeActive ? "+1 Day Boost" : "New Streak Started"}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">Highest Record</p>
                <p className="text-xl font-black text-amber-300 font-heading">
                  {isFreezeActive ? "12 DAYS 🏆" : "10 DAYS 🏆"}
                </p>
                <p className="text-[9px] text-amber-300 font-bold">
                  {isFreezeActive ? "New Max Record!" : "Prior Max Preserved"}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">Total XP</p>
                <p className="text-xl font-black text-purple-400 font-heading">{(student?.xp || 1420) + 150} XP</p>
                <p className="text-[9px] text-purple-300 font-bold">+150 XP</p>
              </div>

              <div className="p-3 rounded-xl bg-white/5 border border-white/10 space-y-0.5">
                <p className="text-[10px] text-gray-400 uppercase font-semibold">Recruiter Score</p>
                <p className="text-xl font-black text-indigo-300 font-heading">
                  {isLinked ? (isFreezeActive ? 95 : 83) : 5}%
                </p>
                <p className="text-[9px] text-indigo-300 font-bold">
                  {isFreezeActive ? "Max Streak Boost (95%)" : "Fresh Streak Base (83%)"}
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
              <p className="text-xs text-gray-300">Your GitHub commit SHA & LinkedIn proof are cryptographically signed.</p>
              <Link to="/dashboard" className="btn-primary w-full sm:w-auto text-xs py-2.5 px-5 bg-gradient-to-r from-emerald-600 to-orange-600 font-bold">
                View Dashboard & Updated Heatmap →
              </Link>
            </div>
          </div>
        )}

        {isLinked && !isFreezeActive && submissionStatus !== 'VERIFIED' && (
          <div className="p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <Flame className="w-4 h-4 text-amber-400 shrink-0" />
              <span>
                Streak Freeze not activated. Submitting today's task will start your new streak flame from <strong>Day 1 🔥</strong> (preserving your prior record of <strong>10 Days 🏆</strong>).
              </span>
            </div>
            <Link
              to="/dashboard"
              onClick={() => setStreakMode('REVIVED')}
              className="text-[11px] font-bold text-orange-400 hover:underline shrink-0 bg-orange-500/20 px-2.5 py-1 rounded-lg border border-orange-500/30"
            >
              🛡️ Activate Freeze (Revive 11d)
            </Link>
          </div>
        )}

        {errorMessage && (
          <div className="p-3 rounded-xl bg-red-500/20 border border-red-500/40 text-red-300 text-xs flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
            <span>{errorMessage}</span>
          </div>
        )}

        {/* Submission Form Inputs */}
        <form onSubmit={handleFormSubmit} className="space-y-4">
          
          {/* GitHub Repo URL */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300 flex items-center gap-1.5">
              <Github className="w-4 h-4 text-gray-400" /> GitHub Repository URL *
            </label>
            <input
              type="text"
              required
              value={githubRepo}
              onChange={(e) => setGithubRepo(e.target.value)}
              placeholder="https://github.com/your-username/day12-kanban-board"
              className="w-full bg-black/40 border border-white/10 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition"
              disabled={submissionStatus === 'VERIFIED'}
            />
          </div>

          {/* GitHub Commit SHA */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300 flex items-center gap-1.5">
              <Code2 className="w-4 h-4 text-emerald-400" /> GitHub Commit SHA Hash *
            </label>
            <input
              type="text"
              required
              value={commitSha}
              onChange={(e) => setCommitSha(e.target.value)}
              placeholder="e.g. a1b2c3d4e5f67890 (Used for OAuth Anti-Cheat Verification)"
              className="w-full bg-black/40 border border-white/10 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white outline-none font-mono transition"
              disabled={submissionStatus === 'VERIFIED'}
            />
          </div>

          {/* LinkedIn Post URL */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-300 flex items-center gap-1.5">
              <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn Post URL *
            </label>
            <input
              type="text"
              required
              value={linkedinPost}
              onChange={(e) => setLinkedinPost(e.target.value)}
              placeholder="https://www.linkedin.com/posts/yourname_abtalks60day-day12-activity-..."
              className="w-full bg-black/40 border border-white/10 focus:border-emerald-500 rounded-xl px-4 py-2.5 text-xs text-white outline-none transition"
              disabled={submissionStatus === 'VERIFIED'}
            />
          </div>

          {/* Submit Button */}
          <div className="pt-2 flex items-center justify-between">
            <div className="text-[11px] text-gray-400 flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Safe SSL Encrypted
            </div>

            <button
              type="submit"
              disabled={submissionStatus === 'SUBMITTING' || submissionStatus === 'VERIFIED'}
              className="btn-primary py-3 px-6 text-xs bg-gradient-to-r from-emerald-600 to-orange-600 hover:from-emerald-500 hover:to-orange-500 disabled:opacity-50"
            >
              {submissionStatus === 'SUBMITTING' ? (
                <span>Syncing GitHub OAuth...</span>
              ) : submissionStatus === 'VERIFIED' ? (
                <span>Completed & Verified ✓</span>
              ) : (
                <span className="flex items-center gap-1.5">
                  <Send className="w-4 h-4" /> Submit Day 12 & Lock Flame
                </span>
              )}
            </button>
          </div>

        </form>

      </section>

    </div>
  );
}
