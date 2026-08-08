import React from 'react';
import { ShieldCheck, Lock, Key, Server, Cpu, CheckCircle2, X, Clock, Sparkles } from 'lucide-react';

export default function SecurityModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="bg-slate-900 border border-amber-500/30 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto p-6 shadow-2xl relative text-white">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white bg-white/5 hover:bg-white/10 w-8 h-8 rounded-full flex items-center justify-center transition"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 mb-4 border-b border-white/10 pb-4">
          <div className="w-12 h-12 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400">
            <ShieldCheck className="w-7 h-7" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-bold font-heading">Security & Anti-Hacking System</h3>
              <span className="px-2 py-0.5 rounded-full bg-amber-500/20 border border-amber-500/40 text-amber-300 text-[10px] font-bold uppercase tracking-wider flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-amber-400" /> Coming Soon
              </span>
            </div>
            <p className="text-xs text-amber-400 font-semibold">Tamper-Proof Streak & Certificate Infrastructure (Roadmap V2)</p>
          </div>
        </div>

        {/* Future Implementation Roadmap Notice */}
        <div className="mb-5 p-3.5 rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-200 text-xs flex items-start gap-2.5">
          <Clock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <p>
            <strong>Upcoming Infrastructure Feature:</strong> The 5 security modules below represent our upcoming tamper-proof production architecture, scheduled for full backend rollout in the next release.
          </p>
        </div>

        {/* Security Modules */}
        <div className="space-y-4">
          
          {/* Module 1: OAuth & Commit Proof */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 relative">
            <div className="flex items-center justify-between gap-2 text-orange-400 font-semibold text-sm mb-1.5">
              <span className="flex items-center gap-2">
                <Key className="w-4 h-4" />
                1. OAuth 2.0 & Commit SHA Verification
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                To Be Implemented
              </span>
            </div>
            <p className="text-xs text-gray-300">
              Submissions undergo direct API validation against GitHub's REST/GraphQL API. The system verifies commit timestamp, author handle, and diff payload to ensure code was genuinely written on that challenge day.
            </p>
          </div>

          {/* Module 2: Anti-Duplicate & Anti-Cheat */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 relative">
            <div className="flex items-center justify-between gap-2 text-indigo-400 font-semibold text-sm mb-1.5">
              <span className="flex items-center gap-2">
                <Lock className="w-4 h-4" />
                2. Anti-Duplicate & Plagiarism Fingerprinting
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                To Be Implemented
              </span>
            </div>
            <p className="text-xs text-gray-300">
              GitHub repository links and LinkedIn URLs are hashed and indexed in real-time. If two students submit identical repository commits or reused links, the system flags the submission for review.
            </p>
          </div>

          {/* Module 3: XSS & Input Sanitization */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 relative">
            <div className="flex items-center justify-between gap-2 text-emerald-400 font-semibold text-sm mb-1.5">
              <span className="flex items-center gap-2">
                <Cpu className="w-4 h-4" />
                3. Frontend XSS & CSP Defense
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                To Be Implemented
              </span>
            </div>
            <p className="text-xs text-gray-300">
              All URL parameters and input fields are validated with strict regex patterns and sanitized via DOM escaping. Content Security Policy (CSP) headers prohibit inline script execution or unauthorized external domain requests.
            </p>
          </div>

          {/* Module 4: Rate Limiting */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 relative">
            <div className="flex items-center justify-between gap-2 text-cyan-400 font-semibold text-sm mb-1.5">
              <span className="flex items-center gap-2">
                <Server className="w-4 h-4" />
                4. API Rate Limiting & Bot Prevention
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                To Be Implemented
              </span>
            </div>
            <p className="text-xs text-gray-300">
              Token-bucket rate limiting restricts submission frequency to prevent automated streak-farming bots from flooding the leaderboard or faking 60 days of progress.
            </p>
          </div>

          {/* Module 5: Cryptographic Certificates */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 relative">
            <div className="flex items-center justify-between gap-2 text-purple-400 font-semibold text-sm mb-1.5">
              <span className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                5. SHA-256 Signed Certificates
              </span>
              <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-amber-500/15 text-amber-300 border border-amber-500/30">
                To Be Implemented
              </span>
            </div>
            <p className="text-xs text-gray-300">
              Upon finishing all 60 days, student certificates receive an immutable cryptographic HMAC SHA-256 hash stamp. Recruiters can verify authenticity at <code className="text-purple-300">/verify/:certId</code>.
            </p>
          </div>

        </div>

        {/* Modal Action */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="btn-primary w-full sm:w-auto text-sm py-2.5 px-5 bg-gradient-to-r from-amber-600 to-orange-600"
          >
            Got It! Close Roadmap Brief
          </button>
        </div>

      </div>
    </div>
  );
}
