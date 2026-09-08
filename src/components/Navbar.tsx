import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Calendar, 
  Phone, 
  Compass, 
  ChevronRight,
  Instagram,
  Linkedin
} from 'lucide-react';
import { STUDIO_INFO } from '../data/mockData';

interface NavbarProps {
  onOpenSchedule: () => void;
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSchedule, activeSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfólio', href: '#portfolio' },
    { label: 'O Escritório', href: '#sobre' },
    { label: 'Agendamento', href: '#agendamento' },
    { label: 'Blog & Tendências', href: '#blog' },
    { label: 'Depoimentos', href: '#depoimentos' },
    { label: 'Localização', href: '#localizacao' },
    { label: 'Contato', href: '#contato' },
  ];

  return (
    <header 
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#FAF9F7]/95 backdrop-blur-md border-b border-[#E8E5DF] py-3.5 shadow-xs' 
          : 'bg-[#FAF9F7]/80 backdrop-blur-xs py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <a 
            id="brand-logo-link"
            href="#" 
            className="flex items-center gap-3 group focus:outline-hidden"
          >
            <div className="w-10 h-10 bg-[#1D1E1C] flex items-center justify-center text-[#FAF9F7] rounded-xs transition-transform duration-300 group-hover:scale-105">
              <Compass className="w-5 h-5 text-[#C48B5E]" strokeWidth={1.8} />
            </div>
            <div className="flex flex-col">
              <span className="font-serif-display text-xl sm:text-2xl font-semibold tracking-wider text-[#1D1E1C] uppercase leading-none">
                Liselane
              </span>
              <span className="text-[10px] tracking-[0.25em] text-[#78756F] uppercase font-sans-body mt-1">
                Arquitetura e design
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs tracking-wider uppercase font-medium text-[#52504B] hover:text-[#1D1E1C] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1.5px] after:bg-[#C48B5E] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Actions: Phone & Primary CTA */}
          <div className="hidden md:flex items-center gap-4">
            <a 
              href="tel:+5531991476644"
              className="text-xs text-[#52504B] hover:text-[#1D1E1C] flex items-center gap-1.5 transition-colors"
              title="Fale Conosco"
            >
              <Phone className="w-3.5 h-3.5 text-[#C48B5E]" />
              <span className="font-medium">31 99147-6644</span>
            </a>

            <button
              id="nav-cta-schedule"
              onClick={onOpenSchedule}
              className="px-4 py-2.5 bg-[#1D1E1C] hover:bg-[#2D2E2B] text-[#FAF9F7] text-xs uppercase tracking-wider font-semibold rounded-xs transition-all duration-200 flex items-center gap-2 shadow-xs hover:shadow-md cursor-pointer"
            >
              <Calendar className="w-3.5 h-3.5 text-[#C48B5E]" />
              <span>Agendar Reunião</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenSchedule}
              className="p-2 bg-[#1D1E1C] text-[#FAF9F7] rounded-xs text-xs flex items-center gap-1 sm:hidden"
              aria-label="Agendar"
            >
              <Calendar className="w-4 h-4 text-[#C48B5E]" />
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#1D1E1C] hover:bg-[#EFECE6] rounded-xs transition-colors"
              aria-label="Abrir Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div 
          id="mobile-menu-drawer"
          className="lg:hidden bg-[#FAF9F7] border-b border-[#E8E5DF] px-6 py-6 space-y-4 shadow-xl animate-in fade-in slide-in-from-top-4 duration-200"
        >
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm font-medium uppercase tracking-wider text-[#3D3B37] hover:text-[#C48B5E] py-2 border-b border-[#F0ECE5] flex items-center justify-between"
              >
                <span>{link.label}</span>
                <ChevronRight className="w-4 h-4 text-[#A8A59E]" />
              </a>
            ))}
          </div>

          <div className="pt-4 flex flex-col gap-3">
            <button
              id="mobile-nav-cta-schedule"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenSchedule();
              }}
              className="w-full py-3 bg-[#1D1E1C] text-[#FAF9F7] text-xs uppercase tracking-wider font-semibold rounded-xs flex items-center justify-center gap-2"
            >
              <Calendar className="w-4 h-4 text-[#C48B5E]" />
              <span>Agendar Reunião Online ou Presencial</span>
            </button>
            
            <div className="flex items-center justify-between pt-3 text-xs text-[#78756F]">
              <span>Contagem - MG</span>
              <div className="flex gap-3">
                <a href={STUDIO_INFO.social[0].url} target="_blank" rel="noreferrer" className="text-[#3D3B37] hover:text-[#C48B5E]">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href={STUDIO_INFO.social[2].url} target="_blank" rel="noreferrer" className="text-[#3D3B37] hover:text-[#C48B5E]">
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
