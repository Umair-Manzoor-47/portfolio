import React, { useState } from 'react';
import { Linkedin, Github, Mail, Menu, X, Check } from 'lucide-react';

export type ViewType = 'home' | 'projects' | 'resume' | 'project-detail';

interface NavbarProps {
  currentView: ViewType;
  onNavigate: (view: 'home' | 'projects' | 'resume') => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  const handleEmailClick = (e: React.MouseEvent) => {
    e.preventDefault();
    // Copy to clipboard for instant access
    if (navigator.clipboard) {
      navigator.clipboard.writeText('umairmanzoor546@gmail.com').catch(() => {});
    }
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 3500);

    // Also trigger mailto protocol
    window.location.href = 'mailto:umairmanzoor546@gmail.com';
  };

  return (
    <header className="w-full bg-white border-b border-neutral-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 h-20 flex items-center justify-between">
        
        {/* Left Nav Links (Davis Ryan style with active underline) */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-800">
          <button
            onClick={() => onNavigate('home')}
            className={`transition-colors hover:text-black ${
              currentView === 'home' ? 'font-bold text-black border-b-2 border-black pb-0.5' : ''
            }`}
          >
            Home
          </button>
          <button
            onClick={() => onNavigate('resume')}
            className={`transition-colors hover:text-black ${
              currentView === 'resume' ? 'font-bold text-black border-b-2 border-black pb-0.5' : ''
            }`}
          >
            Resume
          </button>
          <button
            onClick={() => onNavigate('projects')}
            className={`transition-colors hover:text-black ${
              currentView === 'projects' || currentView === 'project-detail'
                ? 'font-bold text-black border-b-2 border-black pb-0.5'
                : ''
            }`}
          >
            Projects
          </button>
        </nav>

        {/* Center Title (Davis Ryan style) */}
        <div className="text-center">
          <button
            onClick={() => onNavigate('home')}
            className="text-base sm:text-lg font-bold text-neutral-900 tracking-tight hover:opacity-85 transition-opacity"
          >
            Umair Manzoor's Portfolio
          </button>
        </div>

        {/* Right Social Icons */}
        <div className="hidden md:flex items-center gap-4 text-neutral-700 relative">
          <a
            href="https://www.linkedin.com/in/umair-manzoor/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-5 h-5 fill-current" />
          </a>
          <a
            href="https://github.com/Umair-Manzoor-47"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-black transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5 fill-current" />
          </a>
          
          {/* Email button with reliable click & copy handler */}
          <button
            onClick={handleEmailClick}
            className="hover:text-black transition-colors p-1 rounded hover:bg-neutral-100"
            aria-label="Email umairmanzoor546@gmail.com"
            title="Send email or copy address"
          >
            <Mail className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile menu toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-neutral-800 hover:text-black"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Floating Toast Notification when email is clicked */}
      {emailCopied && (
        <div className="fixed top-24 right-6 z-50 bg-[#1D2B44] text-white text-xs font-medium px-4 py-2.5 rounded-lg shadow-xl flex items-center gap-2 animate-in fade-in slide-in-from-top-2 border border-neutral-700">
          <Check className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>Email copied to clipboard: <strong>umairmanzoor546@gmail.com</strong></span>
        </div>
      )}

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden px-6 py-4 bg-white border-b border-neutral-200 space-y-3 text-sm font-medium">
          <button
            onClick={() => {
              onNavigate('home');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-neutral-800 hover:text-black"
          >
            Home
          </button>
          <button
            onClick={() => {
              onNavigate('resume');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-neutral-800 hover:text-black"
          >
            Resume
          </button>
          <button
            onClick={() => {
              onNavigate('projects');
              setMobileMenuOpen(false);
            }}
            className="block w-full text-left py-2 text-neutral-800 hover:text-black"
          >
            Projects
          </button>
          <div className="pt-3 border-t border-neutral-100 flex items-center gap-5 text-neutral-700">
            <a href="https://www.linkedin.com/in/umair-manzoor/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5" />
            </a>
            <a href="https://github.com/Umair-Manzoor-47" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5" />
            </a>
            <button
              onClick={handleEmailClick}
              className="hover:text-black transition-colors"
              aria-label="Email umairmanzoor546@gmail.com"
            >
              <Mail className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
