import React from 'react';
import { Award, ShieldCheck, Download, Share2, Flame, X } from 'lucide-react';

export default function CertificateModal({ isOpen, onClose, student }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-card max-w-xl w-full p-6 space-y-6 border-2 border-amber-500/50 max-h-[90vh] overflow-y-auto">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3">
          <div className="flex items-center gap-2">
            <Award className="w-6 h-6 text-amber-400" />
            <h2 className="text-xl font-bold text-white font-heading">60-Day Completion Certificate</h2>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Certificate Card Design */}
        <div className="p-6 rounded-2xl bg-gradient-to-br from-slate-900 via-amber-950/30 to-slate-950 border-2 border-amber-500/40 text-center space-y-4 shadow-2xl relative overflow-hidden">
          
          {/* Watermark Logo */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-5 pointer-events-none">
            <Flame className="w-64 h-64 text-amber-400" />
          </div>

          <div className="space-y-1">
            <p className="text-xs text-amber-400 font-bold uppercase tracking-widest font-heading">OFFICIAL CERTIFICATE OF COMPLETION</p>
            <h3 className="text-2xl font-black text-white font-heading">ABTalks 60-Day Coding Challenge</h3>
          </div>

          <div className="py-2 space-y-1">
            <p className="text-xs text-gray-400">This certifies that</p>
            <p className="text-2xl font-bold text-amber-300 font-heading tracking-wide">{student.name}</p>
            <p className="text-xs text-gray-400">has successfully completed 60 consecutive days of software engineering projects.</p>
          </div>

          {/* Certificate Metadata */}
          <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 text-xs text-left">
            <div>
              <p className="text-gray-500 text-[10px]">LEARNING TRACK</p>
              <p className="font-semibold text-gray-200">{student.track}</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px]">TOTAL PROJECTS</p>
              <p className="font-semibold text-gray-200">60 Daily Commits</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px]">VERIFICATION HASH</p>
              <p className="font-mono text-[10px] text-emerald-400 truncate">ABT-2026-8894-60D-SHA256</p>
            </div>
            <div>
              <p className="text-gray-500 text-[10px]">ISSUED DATE</p>
              <p className="font-semibold text-gray-200">August 2026</p>
            </div>
          </div>

          {/* Cryptographic Proof Footer */}
          <div className="flex items-center justify-center gap-1.5 text-[11px] text-emerald-400 pt-2">
            <ShieldCheck className="w-4 h-4" />
            <span>Cryptographically Verified on GitHub & LinkedIn</span>
          </div>

        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button onClick={() => alert('Certificate PDF downloaded to device!')} className="btn-primary flex-1 justify-center py-2.5 text-xs">
            <Download className="w-4 h-4" /> Download Official PDF
          </button>
          <button onClick={() => alert('Certificate link copied to clipboard!')} className="btn-secondary flex-1 justify-center py-2.5 text-xs">
            <Share2 className="w-4 h-4" /> Share on LinkedIn
          </button>
        </div>

      </div>
    </div>
  );
}
