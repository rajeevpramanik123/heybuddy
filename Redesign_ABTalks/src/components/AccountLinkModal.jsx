import React, { useState } from 'react';
import { 
  GitCommit, 
  ShieldCheck, 
  Flame, 
  ArrowRight, 
  X, 
  CheckCircle2, 
  UserCheck, 
  UserX,
  AlertCircle
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Linkedin } from './Icons';

export default function AccountLinkModal({
  isOpen,
  onClose,
  onCompleteLinking,
  onContinueAsGuest
}) {
  const navigate = useNavigate();
  const [step, setStep] = useState('choice'); // 'choice' | 'inputs'
  const [githubHandle, setGithubHandle] = useState('');
  const [linkedinUrl, setLinkedinUrl] = useState('');
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleStartLinking = () => {
    setStep('inputs');
    setError('');
  };

  const handleSubmitLinking = (e) => {
    e.preventDefault();
    if (!githubHandle.trim()) {
      setError('Please enter your GitHub username.');
      return;
    }
    if (!linkedinUrl.trim()) {
      setError('Please enter your LinkedIn profile URL.');
      return;
    }
    
    // Success: Pass data upstream to register user
    onCompleteLinking({
      github: githubHandle.trim().replace('@', ''),
      linkedin: linkedinUrl.trim(),
      linkedAt: new Date().toISOString()
    });
    
    // Reset state & close
    setStep('choice');
    setGithubHandle('');
    setLinkedinUrl('');
    setError('');
    navigate('/dashboard');
  };

  const handleGuestChoice = () => {
    onContinueAsGuest();
    setStep('choice');
    onClose();
    navigate('/guest-dashboard');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in">
      <div className="relative w-full max-w-lg glass-card border border-white/20 p-6 md:p-8 space-y-6 shadow-2xl rounded-3xl overflow-hidden bg-slate-900/95">
        
        {/* Decorative Top Gradient bar */}
        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-orange-500 via-amber-500 to-purple-500"></div>

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-gray-400 hover:text-white transition"
        >
          <X className="w-4 h-4" />
        </button>

        {step === 'choice' ? (
          /* STEP 1: CHOICE BETWEEN LINKING VS GUEST */
          <div className="space-y-6">
            <div className="text-center space-y-2">
              <div className="w-14 h-14 rounded-2xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center mx-auto text-orange-400">
                <Flame className="w-8 h-8 flame-animated" />
              </div>
              <h3 className="text-2xl font-black font-heading text-white">
                Start Your 60-Day Streak
              </h3>
              <p className="text-sm text-gray-300">
                How would you like to proceed with your learning journey?
              </p>
            </div>

            {/* Option A: Link Accounts */}
            <div 
              onClick={handleStartLinking}
              className="group cursor-pointer p-4 rounded-2xl bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-transparent border border-orange-500/30 hover:border-orange-500/70 transition space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-orange-500 text-white flex items-center justify-center font-bold">
                    <UserCheck className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base text-white group-hover:text-orange-400 transition">
                      Link GitHub & LinkedIn
                    </h4>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                      Recommended
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-orange-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-gray-300 pl-10">
                Records daily streaks 🔥, unlocks recruiter readiness scores, and generates cryptographically verified certificates.
              </p>
            </div>

            {/* Option B: Continue as Unregistered / Guest */}
            <div 
              onClick={handleGuestChoice}
              className="group cursor-pointer p-4 rounded-2xl bg-white/5 border border-white/10 hover:border-white/25 transition space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-xl bg-slate-700 text-gray-300 flex items-center justify-center">
                    <UserX className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-bold text-base text-gray-200 group-hover:text-white transition">
                      Continue as Unregistered Learner
                    </h4>
                    <span className="text-[10px] font-medium text-gray-400">
                      No Account Linking Needed
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-gray-400 group-hover:translate-x-1 transition-transform" />
              </div>
              <p className="text-xs text-gray-400 pl-10">
                You can complete tasks, but your streak will <strong>NOT</strong> be recorded. You can link your accounts anytime later to start a fresh streak.
              </p>
            </div>

            <div className="pt-2 text-center">
              <span className="text-[11px] text-gray-400 flex items-center justify-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> OAuth 2.0 Secure • No password required
              </span>
            </div>
          </div>
        ) : (
          /* STEP 2: INPUT GITHUB AND LINKEDIN DETAILS */
          <form onSubmit={handleSubmitLinking} className="space-y-5">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div>
                <h3 className="text-xl font-extrabold text-white font-heading">
                  Connect Profile Accounts
                </h3>
                <p className="text-xs text-gray-400">Link accounts to activate streak tracking</p>
              </div>
              <button
                type="button"
                onClick={() => setStep('choice')}
                className="text-xs text-orange-400 hover:underline"
              >
                ← Back
              </button>
            </div>

            {error && (
              <div className="p-3 rounded-xl bg-red-500/15 border border-red-500/30 text-red-300 text-xs flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                <span>{error}</span>
              </div>
            )}

            {/* GitHub Username Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-300 flex items-center gap-1.5">
                <GitCommit className="w-4 h-4 text-orange-400" /> GitHub Username
              </label>
              <input
                type="text"
                placeholder="e.g. aditi-ansh or octocat"
                value={githubHandle}
                onChange={(e) => setGithubHandle(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
              />
              <p className="text-[10px] text-gray-400">Used to verify daily project commits.</p>
            </div>

            {/* LinkedIn Profile Input */}
            <div className="space-y-1.5">
              <label className="block text-xs font-bold text-gray-300 flex items-center gap-1.5">
                <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn Profile URL
              </label>
              <input
                type="text"
                placeholder="e.g. linkedin.com/in/aditi-ansh"
                value={linkedinUrl}
                onChange={(e) => setLinkedinUrl(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white text-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition"
              />
              <p className="text-[10px] text-gray-400">Used to publish proof-of-work updates for recruiters.</p>
            </div>

            {/* Submit CTA */}
            <div className="pt-2 space-y-2">
              <button
                type="submit"
                className="btn-primary w-full py-3 text-sm flex items-center justify-center gap-2"
              >
                <CheckCircle2 className="w-4 h-4" />
                <span>Link & Start Fresh Streak Today</span>
              </button>

              <button
                type="button"
                onClick={handleGuestChoice}
                className="w-full py-2 text-xs text-gray-400 hover:text-gray-200 transition"
              >
                Skip for now (Continue as Unregistered)
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
