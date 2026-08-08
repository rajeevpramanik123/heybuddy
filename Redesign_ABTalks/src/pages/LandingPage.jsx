import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { 
  Flame, 
  ArrowRight, 
  Code2, 
  Briefcase, 
  GitCommit, 
  ShieldCheck,
  Brain,
  Cloud,
  ChevronRight,
  Star,
  LogIn,
  Loader2
} from 'lucide-react';
import { Linkedin } from '../components/Icons';
import { TRACKS_DATA } from '../data/mockData';

export default function LandingPage({ openLinkModal, userAuth }) {
  const navigate = useNavigate();

  const handleStartChallenge = () => {
    openLinkModal();
  };

  return (
    <div className="space-y-16 py-6 px-4">

      {/* Hero Section */}
      <section className="text-center space-y-6 pt-6 pb-10 relative">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wide">
          <Flame className="w-4 h-4 text-orange-500 flame-animated" />
          <span>India's #1 Coding Challenge for College Students</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black font-heading leading-tight max-w-3xl mx-auto">
          Transform Your Coding Skills in <span className="gradient-text-fire">60 Days</span>.
        </h1>

        <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto font-normal">
          Build 60 real projects. Push daily GitHub commits. Publish LinkedIn proof. Become recruiter-ready before graduation.
        </p>

        {/* Motivational Graphic Mockup */}
        <div className="max-w-md mx-auto relative group">
          <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
          <div className="relative glass-card p-5 border border-white/15 text-left space-y-3">
            <div className="flex items-center justify-between border-b border-white/10 pb-3">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
                <span className="text-xs font-mono text-gray-400 ml-2">day_12_kanban.js</span>
              </div>
              <span className="text-xs font-bold text-orange-400 flex items-center gap-1">
                <Flame className="w-3.5 h-3.5" /> 🔥 12 Day Streak
              </span>
            </div>
            
            <div className="space-y-1.5 font-mono text-xs text-gray-300">
              <p className="text-emerald-400">✓ git add . && git commit -m "Day 12 Kanban Done"</p>
              <p className="text-blue-400">✓ Syncing commit to ABTalks Anti-Cheat OAuth...</p>
              <p className="text-gray-400">→ XP Earned: +150 | Recruiter Readiness: 68%</p>
            </div>

            <div className="pt-2 flex items-center justify-between text-xs">
              <span className="text-gray-400">Overall Progress: 12/60 Days</span>
              <span className="font-bold text-emerald-400">Top 18% Rank</span>
            </div>
          </div>
        </div>

        {/* Primary CTA Buttons */}
        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
          <button 
            onClick={handleStartChallenge} 
            className="btn-primary w-full sm:w-auto text-lg px-8 py-3.5 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Start 60-Day Challenge</span> <ArrowRight className="w-5 h-5" />
          </button>
          <button
            onClick={handleStartChallenge}
            className="btn-secondary w-full sm:w-auto text-base px-6 py-3 flex items-center justify-center gap-2 cursor-pointer"
          >
            <span>Get Started</span>
          </button>
        </div>

        {/* Security Assurance Badge */}
        <div className="inline-flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>OAuth Verified GitHub Commits & Cryptographic Certificates</span>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="space-y-8">
        <div className="text-center space-y-2">
          <h2 className="text-2xl sm:text-3xl font-extrabold font-heading">
            Why Join the ABTalks Challenge?
          </h2>
          <p className="text-gray-400 text-sm max-w-md mx-auto">
            College lectures teach theory. ABTalks builds daily engineering discipline.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="glass-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-orange-500/15 border border-orange-500/30 flex items-center justify-center text-orange-400">
              <Briefcase className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading">Build 60 Portfolio Projects</h3>
            <p className="text-xs text-gray-300">
              Stop submitting generic clones. Graduate with 60 distinct, portfolio-ready projects hosted on GitHub.
            </p>
          </div>

          <div className="glass-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
              <GitCommit className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading">Green GitHub Graph</h3>
            <p className="text-xs text-gray-300">
              Showcase 60 straight days of active commits. Prove your consistency to recruiters looking at your profile.
            </p>
          </div>

          <div className="glass-card space-y-3">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400">
              <Linkedin className="w-5 h-5" />
            </div>
            <h3 className="text-lg font-bold font-heading">LinkedIn Visibility</h3>
            <p className="text-xs text-gray-300">
              Post daily proof of work. Get noticed by tech recruiters, hiring managers, and founders on LinkedIn.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Timeline */}
      <section className="glass-card p-6 md:p-8 space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold font-heading">How It Works</h2>
          <p className="text-gray-400 text-xs sm:text-sm">4 simple daily steps to transform your career</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 relative">
          
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 relative">
            <div className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center">1</div>
            <h4 className="font-bold text-sm font-heading">Choose Track</h4>
            <p className="text-xs text-gray-400">Select Web Dev, AI/ML, or DevOps roadmap tailored to your target role.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 relative">
            <div className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center">2</div>
            <h4 className="font-bold text-sm font-heading">Build Daily</h4>
            <p className="text-xs text-gray-400">Spend 30-45 minutes completing today's coding task after college.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 relative">
            <div className="w-7 h-7 rounded-full bg-orange-500 text-white font-bold text-xs flex items-center justify-center">3</div>
            <h4 className="font-bold text-sm font-heading">Submit Proof</h4>
            <p className="text-xs text-gray-400">Push your GitHub commit SHA and paste your LinkedIn post link.</p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-xl p-4 space-y-2 relative">
            <div className="w-7 h-7 rounded-full bg-emerald-500 text-white font-bold text-xs flex items-center justify-center">4</div>
            <h4 className="font-bold text-sm font-heading">Complete 60 Days</h4>
            <p className="text-xs text-gray-400">Unlock your cryptographically verified SHA-256 certificate for recruiters.</p>
          </div>

        </div>
      </section>

      {/* Track Selector Preview */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold font-heading">Choose Your Learning Track</h2>
          <p className="text-gray-400 text-xs sm:text-sm">Curated roadmaps designed for real industry requirements</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TRACKS_DATA.map((track) => (
            <div key={track.id} className="glass-card space-y-4 hover:border-orange-500/40">
              <div className="flex items-center justify-between">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-orange-400">
                  {track.id === 'fullstack' && <Code2 className="w-5 h-5" />}
                  {track.id === 'aiml' && <Brain className="w-5 h-5" />}
                  {track.id === 'devops' && <Cloud className="w-5 h-5" />}
                </div>

                {track.popular && (
                  <span className="px-2.5 py-0.5 rounded-full bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider">
                    Most Popular
                  </span>
                )}
              </div>

              <div>
                <h3 className="font-bold text-lg font-heading">{track.title}</h3>
                <p className="text-xs text-gray-400">{track.projects} • {track.students}</p>
              </div>

              <button 
                onClick={openLinkModal} 
                className="btn-secondary w-full text-xs py-2 justify-between flex items-center cursor-pointer"
              >
                <span>Explore Curriculum</span> <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Challenge Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
        <div className="glass-card p-4 space-y-1">
          <p className="text-3xl font-black text-orange-400 font-heading">10,000+</p>
          <p className="text-xs text-gray-400 font-medium">Active Students</p>
        </div>
        <div className="glass-card p-4 space-y-1">
          <p className="text-3xl font-black text-emerald-400 font-heading">250,000+</p>
          <p className="text-xs text-gray-400 font-medium">GitHub Commits</p>
        </div>
        <div className="glass-card p-4 space-y-1">
          <p className="text-3xl font-black text-purple-400 font-heading">60 Days</p>
          <p className="text-xs text-gray-400 font-medium">Structured Challenge</p>
        </div>
        <div className="glass-card p-4 space-y-1">
          <p className="text-3xl font-black text-blue-400 font-heading">94%</p>
          <p className="text-xs text-gray-400 font-medium">Recruiter Placement</p>
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="space-y-6">
        <div className="text-center space-y-2">
          <h2 className="text-2xl font-extrabold font-heading">Student Success Stories</h2>
          <p className="text-gray-400 text-xs sm:text-sm">Real feedback from college students across India</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="glass-card space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-gray-300 italic">
              "The 60-day challenge turned my GitHub profile from empty to green. Tech recruiters reached out on LinkedIn because of my daily project posts!"
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              <img
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=100&q=80"
                alt="Priya"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-xs text-white">Priya Nair</p>
                <p className="text-[10px] text-gray-400">SDE-1 at Amazon • IIT Delhi '25</p>
              </div>
            </div>
          </div>

          <div className="glass-card space-y-3">
            <div className="flex items-center gap-1 text-amber-400">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </div>
            <p className="text-xs text-gray-300 italic">
              "I used to quit every coding course on day 4. The streak flame 🔥 and community leaderboard on ABTalks kept me motivated until Day 60."
            </p>
            <div className="flex items-center gap-3 pt-2 border-t border-white/5">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=100&q=80"
                alt="Rohan"
                className="w-8 h-8 rounded-full object-cover"
              />
              <div>
                <p className="font-bold text-xs text-white">Rohan Verma</p>
                <p className="text-[10px] text-gray-400">Fullstack Intern • BITS Pilani '26</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Sticky CTA */}
      <section className="glass-card p-8 text-center space-y-4 bg-gradient-to-r from-orange-950/40 via-slate-900 to-purple-950/40 border-orange-500/30">
        <h2 className="text-3xl font-black font-heading">Ready to Start Your 60-Day Streak?</h2>
        <p className="text-gray-300 text-sm max-w-md mx-auto">
          No payments. No fluff. Just daily projects, GitHub commits, and career momentum.
        </p>
        <button 
          onClick={openLinkModal} 
          className="btn-primary inline-flex text-base px-8 py-3.5 flex items-center justify-center gap-2 cursor-pointer"
        >
          <span>Join the Challenge Now</span> <ArrowRight className="w-5 h-5" />
        </button>
      </section>

    </div>
  );
}
