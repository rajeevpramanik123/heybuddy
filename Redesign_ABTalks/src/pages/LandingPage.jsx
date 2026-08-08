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
import { TRACKS_DATA, MOCK_STUDENT } from '../data/mockData';

export default function LandingPage({ openLinkModal, userAuth, student }) {
  const navigate = useNavigate();
  const currentStudent = student || MOCK_STUDENT;
  const isLinked = userAuth ? userAuth.isLinked : false;

  const handleStartChallenge = () => {
    openLinkModal();
  };

  return (
    <div className="space-y-16 py-6 px-4">

      {/* Hero Section */}
      <section className="pt-6 pb-10 relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Headline, Description & CTAs */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 text-xs font-extrabold uppercase tracking-wide">
              <Flame className="w-4 h-4 text-orange-500 flame-animated" />
              <span>India's #1 Coding Challenge for College Students</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-heading leading-tight">
              Transform Your Coding Skills in <span className="gradient-text-fire">60 Days</span>.
            </h1>

            <p className="text-gray-300 text-base sm:text-lg max-w-xl mx-auto lg:mx-0 font-normal leading-relaxed">
              Build real projects. Push daily GitHub commits. Publish LinkedIn proof. Become recruiter-ready before graduation.
            </p>

            {/* Hero Security Badge */}
            <div className="pt-2 flex items-center justify-center lg:justify-start">
              <div className="inline-flex items-center gap-1.5 text-xs text-amber-300 bg-amber-500/10 px-3.5 py-2 rounded-full border border-amber-500/20 shrink-0">
                <ShieldCheck className="w-4 h-4 text-amber-400" />
                <span>Verification & Security (Upcoming V2)</span>
              </div>
            </div>

            {/* Quick Proof Highlights Row */}
            <div className="pt-4 grid grid-cols-3 gap-3 border-t border-white/10 text-xs text-gray-300 text-center lg:text-left">
              <div className="space-y-0.5">
                <p className="font-bold text-white text-sm font-heading">60 Days</p>
                <p className="text-[11px] text-gray-400">Structured Curriculum</p>
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-emerald-400 text-sm font-heading">Daily Git</p>
                <p className="text-[11px] text-gray-400">Public Commit Proof</p>
              </div>
              <div className="space-y-0.5">
                <p className="font-bold text-amber-300 text-sm font-heading">Portfolio</p>
                <p className="text-[11px] text-gray-400">Recruiter Verified</p>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic ABTalks Student Card */}
          <div className="lg:col-span-5 w-full max-w-md mx-auto lg:max-w-none relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-orange-600 to-purple-600 rounded-3xl blur opacity-30 group-hover:opacity-60 transition duration-500"></div>
            <div className="relative glass-card p-6 border border-white/15 text-left space-y-4 shadow-xl">
              
              {!isLinked ? (
                /* State 1: Unregistered User (Welcoming Empty State) */
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-amber-500/20 text-amber-300 font-extrabold text-[10px] uppercase tracking-wider border border-amber-500/30">
                      WELCOME TO ABTALKS
                    </span>
                    <span className="text-xs text-gray-400 font-medium">
                      Guest Mode
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white font-heading">
                      Ready to build 60 projects in 60 days?
                    </h3>
                    <p className="text-xs text-gray-300 leading-relaxed">
                      Link your GitHub & LinkedIn to track your daily streak, push verified code, earn achievements, and unlock recruiter recommendations.
                    </p>
                  </div>

                  <button
                    onClick={openLinkModal}
                    className="w-full btn-primary py-3 text-xs flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 font-bold hover:brightness-110 shadow-lg cursor-pointer"
                  >
                    <span>Start My 60-Day Journey</span> <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              ) : (
                /* State 2: Registered User (Mock Streak, Progress, Submissions, & Rank) */
                <>
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 text-emerald-300 font-extrabold text-[10px] uppercase tracking-wider border border-emerald-500/30">
                      CHALLENGE COMPLETE
                    </span>
                    <span className="text-xs font-bold text-orange-400 flex items-center gap-1 font-heading">
                      <Flame className="w-3.5 h-3.5 text-orange-500" /> 🔥 {currentStudent.streak}-day learning streak
                    </span>
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="text-base font-bold text-white font-heading">
                      Today's project has been shipped.
                    </h3>
                    <div className="space-y-1 text-xs font-medium">
                      <div className="flex items-center gap-2 text-emerald-400">
                        <span>✓ GitHub proof submitted</span>
                      </div>
                      <div className="flex items-center gap-2 text-blue-400">
                        <span>✓ LinkedIn proof submitted</span>
                      </div>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-xs text-gray-300">
                    <span>Progress: {currentStudent.completedDays}/{currentStudent.totalDays} Days</span>
                    <span className="text-amber-300 font-bold">Rank #{currentStudent.rank} ({currentStudent.topPercentile})</span>
                  </div>
                </>
              )}

            </div>
          </div>

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
