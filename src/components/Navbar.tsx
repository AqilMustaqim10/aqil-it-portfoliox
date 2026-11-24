import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Moon, Sun } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

interface NavbarProps {
  activeSection: string;
  darkMode: boolean;
  onToggleTheme: () => void;
}

export function Navbar({ activeSection, darkMode, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Selected Work', href: '#work' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'About & Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#faf9f6]/90 backdrop-blur-md border-b border-slate-200/80 shadow-xs py-3.5'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          className="group flex items-center gap-2.5 focus:outline-hidden focus:ring-2 focus:ring-blue-600 rounded-sm"
        >
          <div className="w-8 h-8 rounded-md bg-blue-600 text-white font-semibold flex items-center justify-center text-sm tracking-wide shadow-xs group-hover:bg-blue-700 transition-colors">
            AQ
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-slate-900 tracking-tight text-base sm:text-lg">
              {portfolioData.profile.name}
            </span>
            <span className="text-xs text-slate-500 font-medium -mt-1">
              {portfolioData.profile.title}
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.substring(1);
            return (
              <a
                key={link.name}
                href={link.href}
                className={`text-sm font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-blue-600 rounded-sm py-1 relative ${
                  isActive
                    ? 'text-blue-600 font-semibold'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                {link.name}
                {isActive && (
                  <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-600 rounded-full" />
                )}
              </a>
            );
          })}
        </nav>

        {/* Action Button */}
        <div className="hidden md:flex items-center gap-3">
          {portfolioData.profile.showResumeButton && portfolioData.profile.resumeUrl && (
            <a
              href={portfolioData.profile.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-700 bg-white border border-slate-300 px-3.5 py-2 rounded-md hover:border-slate-400 hover:text-slate-900 transition-all shadow-2xs focus:outline-hidden focus:ring-2 focus:ring-blue-600"
            >
              <span>Résumé</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-slate-400" />
            </a>
          )}
          <a
            href="#contact"
            className="inline-flex items-center text-xs font-medium text-white bg-blue-600 px-4 py-2 rounded-md hover:bg-blue-700 transition-colors shadow-xs focus:outline-hidden focus:ring-2 focus:ring-blue-600"
          >
            Get in Touch
          </a>
        </div>

        <div className="flex items-center gap-1 md:contents">
        <button type="button" onClick={onToggleTheme}
          aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
          className="theme-toggle p-2 rounded-md text-slate-700 hover:text-blue-600 focus:outline-hidden focus:ring-2 focus:ring-blue-600">
          {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-700 hover:text-slate-900 focus:outline-hidden focus:ring-2 focus:ring-blue-600 rounded-md"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#faf9f6] border-b border-slate-200 shadow-lg px-6 py-5 flex flex-col gap-4 animate-in fade-in slide-in-from-top-2 duration-200">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-700 hover:text-blue-600 py-2 border-b border-slate-100 last:border-0"
            >
              {link.name}
            </a>
          ))}
          <div className="flex items-center gap-3 pt-2">
            {portfolioData.profile.showResumeButton && portfolioData.profile.resumeUrl && (
              <a
                href={portfolioData.profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 text-center py-2.5 text-sm font-medium text-slate-700 bg-white border border-slate-300 rounded-md shadow-2xs"
              >
                Download Résumé
              </a>
            )}
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex-1 text-center py-2.5 text-sm font-medium text-white bg-blue-600 rounded-md shadow-xs"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
