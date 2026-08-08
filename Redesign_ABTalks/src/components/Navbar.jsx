import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Flame, ShieldCheck, Moon, Sun, Menu, X, Code2, UserCheck, UserX, Lock } from 'lucide-react';

export default function Navbar({ student, userAuth, openLinkModal, isNightMode, setIsNightMode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  const isLinked = userAuth?.isLinked;

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/90 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        
        {/* Brand Logo */}
        <Link to="/" className="flex items-center gap-2 text-decoration-none group">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-orange-600 to-amber-500 flex items-center justify-center shadow-lg shadow-orange-500/20 group-hover:scale-105 transition-transform">
            <Flame className="w-5.5 h-5.5 text-white flame-animated" />
          </div>
          <div>
            <span className="font-extrabold text-xl tracking-tight text-white font-heading">
              AB<span className="text-orange-500">Talks</span>
            </span>
            <span className="hidden sm:inline-block ml-2 text-xs font-semibold px-2 py-0.5 rounded-full bg-orange-500/10 text-orange-400 border border-orange-500/20">
              60-Day Challenge
            </span>
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-white/5 p-1 rounded-full border border-white/10">
          <Link
            to="/"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              isActive('/') 
                ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/30' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Overview
          </Link>

          <Link
            to={!userAuth?.hasChosenPath ? '#' : isLinked ? "/dashboard" : "/guest-dashboard"}
            onClick={(e) => {
              if (!userAuth?.hasChosenPath) {
                e.preventDefault();
                openLinkModal();
              }
            }}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
              (isActive('/dashboard') || isActive('/guest-dashboard')) 
                ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/30' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            Dashboard
            {userAuth?.hasChosenPath && !isLinked && (
              <span className="text-[10px] bg-amber-500/30 text-amber-300 font-bold px-1.5 py-0.2 rounded">
                Guest
              </span>
            )}
          </Link>

          <Link
            to="/day/12"
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all flex items-center gap-1.5 ${
              isActive('/day/12') 
                ? 'bg-orange-500 text-white font-semibold shadow-md shadow-orange-500/30' 
                : 'text-gray-300 hover:text-white hover:bg-white/5'
            }`}
          >
            <Code2 className="w-4 h-4 text-orange-300" />
            Task
          </Link>
        </nav>

        {/* Actions & Profile Pills */}
        <div className="flex items-center gap-2">
          
          {/* On Landing Page: Render a clean Get Started CTA button */}
          {location.pathname === '/' ? (
            <button
              onClick={openLinkModal}
              className="px-4 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:brightness-110 text-white font-extrabold text-xs shadow-md shadow-orange-500/20 transition flex items-center gap-1"
            >
              <span>Get Started</span>
            </button>
          ) : (
            /* On Dashboard & Task pages: Render user state pills (Linked, Streak, Verified) */
            <>
              {/* Account Status / Link CTA Button */}
              {isLinked ? (
                <button
                  onClick={openLinkModal}
                  className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/30 text-emerald-300 font-semibold text-xs transition"
                  title="Click to view or edit linked accounts"
                >
                  <UserCheck className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Linked (@{userAuth.github || 'student'})</span>
                </button>
              ) : (
                <button
                  onClick={openLinkModal}
                  className="hidden lg:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 text-white font-extrabold text-xs shadow-md shadow-orange-500/20 hover:brightness-110 transition"
                >
                  <UserX className="w-3.5 h-3.5" />
                  <span>Link Git & LinkedIn</span>
                </button>
              )}

              {/* Streak Counter Pill */}
              {isLinked ? (
                <Link to="/dashboard" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-orange-500/15 border border-orange-500/30 text-orange-400 font-bold text-sm shadow-sm hover:bg-orange-500/25 transition">
                  <Flame className="w-4 h-4 text-orange-500 flame-animated" />
                  <span>{student.streak} Days</span>
                </Link>
              ) : (
                <button 
                  onClick={openLinkModal}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800 border border-amber-500/40 text-amber-400 font-bold text-xs shadow-sm hover:bg-slate-700 transition"
                  title="Streak not recorded for unregistered users. Click to link accounts!"
                >
                  <Lock className="w-3.5 h-3.5 text-amber-400" />
                  <span>Streak Locked 🔒</span>
                </button>
              )}

              {/* Security Shield Indicator */}
              <div 
                onClick={openLinkModal}
                title={isLinked ? "GitHub SHA Verification (Upcoming V2 Roadmap)" : "Click to link accounts"} 
                className={`hidden sm:flex items-center gap-1 px-2.5 py-1 rounded-full text-xs font-semibold cursor-pointer ${
                  isLinked 
                    ? 'bg-emerald-500/10 border border-emerald-500/20 text-emerald-400' 
                    : 'bg-amber-500/10 border border-amber-500/20 text-amber-400'
                }`}
              >
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{isLinked ? "Verified" : "Unlinked"}</span>
              </div>
            </>
          )}

          {/* Night Mode Toggle */}
          <button
            onClick={() => setIsNightMode(!isNightMode)}
            className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 flex items-center justify-center text-gray-300 hover:text-white transition"
            title="Toggle Night Mode"
          >
            {isNightMode ? <Sun className="w-4.5 h-4.5 text-amber-400" /> : <Moon className="w-4.5 h-4.5 text-indigo-300" />}
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-300"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-xl border-b border-white/10 px-4 py-4 space-y-2">
          <Link
            to="/"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-semibold ${
              isActive('/') ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            Landing Overview
          </Link>
          <Link
            to={isLinked ? "/dashboard" : "/guest-dashboard"}
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-semibold ${
              (isActive('/dashboard') || isActive('/guest-dashboard')) ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            {isLinked ? "Student Dashboard" : "Guest Dashboard (Unregistered)"}
          </Link>
          <Link
            to="/day/12"
            onClick={() => setMobileMenuOpen(false)}
            className={`block px-4 py-2.5 rounded-xl text-base font-semibold ${
              isActive('/day/12') ? 'bg-orange-500 text-white' : 'text-gray-300 hover:bg-white/5'
            }`}
          >
            Task
          </Link>
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              openLinkModal();
            }}
            className="w-full text-left px-4 py-2.5 rounded-xl text-base font-semibold text-orange-400 bg-orange-500/10 flex items-center gap-2"
          >
            {isLinked ? <UserCheck className="w-5 h-5" /> : <UserX className="w-5 h-5" />}
            <span>{isLinked ? "Manage Linked Accounts" : "Link GitHub & LinkedIn Now"}</span>
          </button>
        </div>
      )}
    </header>
  );
}
