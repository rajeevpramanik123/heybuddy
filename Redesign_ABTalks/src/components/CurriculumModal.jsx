import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Calendar, CheckCircle2, Lock, ArrowRight, X, Clock } from 'lucide-react';
import { FULL_60_DAYS_CURRICULUM } from '../data/mockData';

export default function CurriculumModal({ isOpen, onClose }) {
  const [selectedPhase, setSelectedPhase] = useState('ALL');

  if (!isOpen) return null;

  const phases = [
    { key: 'ALL', label: 'All 60 Days' },
    { key: 'Foundation', label: 'Phase 1: Foundation (Days 1-15)' },
    { key: 'Intermediate', label: 'Phase 2: State & APIs (Days 16-35)' },
    { key: 'Advanced', label: 'Phase 3: Production Apps (Days 36-60)' },
  ];

  const filteredCurriculum = selectedPhase === 'ALL'
    ? FULL_60_DAYS_CURRICULUM
    : FULL_60_DAYS_CURRICULUM.filter(d => d.phase.includes(selectedPhase));

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div className="glass-card max-w-3xl w-full p-6 space-y-5 border-2 border-orange-500/40 max-h-[90vh] flex flex-col">
        
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 pb-3 shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-white font-heading">60-Day Full Curriculum Roadmap</h2>
              <p className="text-xs text-gray-400">Browse all 60 hands-on daily engineering projects</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1 rounded-lg bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Phase Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-1 shrink-0 scrollbar-none">
          {phases.map(p => (
            <button
              key={p.key}
              onClick={() => setSelectedPhase(p.key)}
              className={`px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                selectedPhase === p.key
                  ? 'bg-orange-500 text-white shadow-md'
                  : 'bg-white/5 text-gray-300 hover:bg-white/10'
              }`}
            >
              {p.label}
            </button>
          ))}
        </div>

        {/* 60 Days Scrollable Grid */}
        <div className="flex-1 overflow-y-auto space-y-2.5 pr-1">
          {filteredCurriculum.map((day) => {
            const isDone = day.status === 'completed';
            const isToday = day.status === 'today';
            return (
              <div
                key={day.day}
                className={`p-3.5 rounded-xl border flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs transition ${
                  isToday
                    ? 'bg-orange-500/15 border-orange-500/50 shadow-md'
                    : isDone
                    ? 'bg-white/5 border-emerald-500/30'
                    : 'bg-black/20 border-white/5 opacity-70'
                }`}
              >
                <div className="flex items-start sm:items-center gap-3">
                  <div className={`w-8 h-8 rounded-lg font-bold text-xs flex items-center justify-center shrink-0 ${
                    isToday ? 'bg-orange-500 text-white' : isDone ? 'bg-emerald-500/20 text-emerald-300' : 'bg-slate-800 text-gray-400'
                  }`}>
                    {day.day}
                  </div>

                  <div>
                    <div className="flex items-center gap-2">
                      <p className="font-bold text-white text-sm">{day.title}</p>
                      <span className="text-[10px] px-2 py-0.5 rounded bg-white/10 text-gray-300">
                        {day.difficulty}
                      </span>
                    </div>
                    <p className="text-gray-400 text-xs mt-0.5">{day.desc}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 shrink-0 justify-between sm:justify-end border-t sm:border-0 border-white/5 pt-2 sm:pt-0">
                  <span className="text-gray-400 text-[11px] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-gray-500" /> {day.estTime}
                  </span>

                  {isToday ? (
                    <Link
                      to="/day/12"
                      onClick={onClose}
                      className="btn-primary text-[11px] py-1.5 px-3"
                    >
                      Active Task <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  ) : isDone ? (
                    <span className="text-emerald-400 font-bold text-[11px] flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Completed
                    </span>
                  ) : (
                    <span className="text-gray-500 text-[11px] flex items-center gap-1">
                      <Lock className="w-3.5 h-3.5" /> Locked
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
  );
}
