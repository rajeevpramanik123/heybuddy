import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Home, LayoutDashboard, Calendar, ShieldCheck } from 'lucide-react';
import { Github, Linkedin } from './Icons';

export default function Footer() {
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Desktop & Standard Footer */}
      <footer className="mt-auto border-t border-white/10 bg-slate-950/80 backdrop-blur-md pt-10 pb-16 px-4">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          
          <div className="space-y-3 md:col-span-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-orange-500 flex items-center justify-center">
                <Flame className="w-5 h-5 text-white" />
              </div>
              <span className="font-extrabold text-xl text-white font-heading">
                AB<span className="text-orange-500">Talks</span> 60-Day Challenge
              </span>
            </div>
            <p className="text-sm text-gray-400 max-w-md">
              A high-discipline, project-first coding bootcamp designed for Indian college students.
              Commit code daily, build a public portfolio, and become recruiter-ready in 60 days.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-emerald-400 bg-emerald-500/10 px-3 py-1.5 rounded-full border border-emerald-500/20">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Encrypted SHA-256 Certificates & OAuth Verification</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3">Routes</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link to="/" className="hover:text-orange-400 transition">Landing Page (/)</Link>
              </li>
              <li>
                <Link to="/dashboard" className="hover:text-orange-400 transition">Dashboard (/dashboard)</Link>
              </li>
              <li>
                <Link to="/day/12" className="hover:text-orange-400 transition">Day 12 Challenge (/day/12)</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-3">Community</h4>
            <div className="flex flex-col space-y-2 text-sm text-gray-400">
              <a href="https://github.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
                <Github className="w-4 h-4 text-gray-400" /> GitHub Organization
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="flex items-center gap-2 hover:text-white transition">
                <Linkedin className="w-4 h-4 text-blue-400" /> LinkedIn Student Network
              </a>
            </div>
          </div>

        </div>

        <div className="max-w-6xl mx-auto mt-8 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-xs text-gray-500">
          <p>© 2026 ABTalks 60-Day Challenge. Designed Mobile-First for 390px Viewports.</p>
          <p className="mt-2 sm:mt-0">Built with Vite, React & Anti-Cheat Security Architecture</p>
        </div>
      </footer>

      {/* Floating Bottom Navigation for Mobile (Target 390px Viewports) */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-xl border-t border-white/10 px-6 py-2 flex items-center justify-around">
        <Link
          to="/"
          className={`flex flex-col items-center gap-1 text-xs font-semibold ${
            isActive('/') ? 'text-orange-500' : 'text-gray-400'
          }`}
        >
          <Home className="w-5 h-5" />
          <span>Home</span>
        </Link>
        <Link
          to="/dashboard"
          className={`flex flex-col items-center gap-1 text-xs font-semibold ${
            isActive('/dashboard') ? 'text-orange-500' : 'text-gray-400'
          }`}
        >
          <LayoutDashboard className="w-5 h-5" />
          <span>Dashboard</span>
        </Link>
        <Link
          to="/day/12"
          className={`flex flex-col items-center gap-1 text-xs font-semibold ${
            isActive('/day/12') ? 'text-orange-500' : 'text-gray-400'
          }`}
        >
          <Calendar className="w-5 h-5" />
          <span>Day 12</span>
        </Link>
      </div>
    </>
  );
}
