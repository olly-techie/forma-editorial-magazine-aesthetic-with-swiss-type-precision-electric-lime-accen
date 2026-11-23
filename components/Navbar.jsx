import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { name: 'Work', path: '/work' },
    { name: 'Studio', path: '/studio' },
    { name: 'Expertise', path: '/expertise' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#0B0D0E]/90 backdrop-blur-md border-b border-[#23272A]">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter uppercase flex items-center gap-2">
          <span className="inline-block w-3 h-3 bg-[#C6FF3D]"></span>
          FORMA
        </Link>

        <nav className="hidden md:flex items-center gap-10">
          {links.map((link) => {
            const active = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`text-sm tracking-widest uppercase transition-colors hover:text-[#C6FF3D] ${
                  active ? 'text-[#C6FF3D] font-semibold' : 'text-[#F4F2ED]/80'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link
            to="/contact"
            className="group relative inline-flex items-center gap-2 px-5 py-2.5 bg-[#C6FF3D] text-[#0B0D0E] text-xs font-bold uppercase tracking-wider overflow-hidden transition-transform active:scale-95"
          >
            <span>proceed</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-[#F4F2ED] focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 w-full bg-[#0B0D0E] border-b border-[#23272A] px-6 py-8 flex flex-col gap-6">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="text-2xl font-light tracking-tight text-[#F4F2ED] hover:text-[#C6FF3D]"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-4 inline-flex items-center justify-center gap-2 w-full py-4 bg-[#C6FF3D] text-[#0B0D0E] text-sm font-bold uppercase"
          >
            proceed <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      )}
    </header>
  );
}