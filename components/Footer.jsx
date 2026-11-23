import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#0B0D0E] border-t border-[#23272A] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 pb-16 border-b border-[#23272A]">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase block mb-4">Creative Technology Studio</span>
            <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#F4F2ED] max-w-lg">
              Crafting digital reality for ambitious brands.
            </h2>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase">Navigation</span>
            <Link to="/work" className="text-sm text-[#F4F2ED]/80 hover:text-[#C6FF3D] transition-colors">Selected Work</Link>
            <Link to="/studio" className="text-sm text-[#F4F2ED]/80 hover:text-[#C6FF3D] transition-colors">The Studio</Link>
            <Link to="/expertise" className="text-sm text-[#F4F2ED]/80 hover:text-[#C6FF3D] transition-colors">Expertise</Link>
            <Link to="/contact" className="text-sm text-[#F4F2ED]/80 hover:text-[#C6FF3D] transition-colors">Contact & Inquiries</Link>
          </div>
          <div className="lg:col-span-3 flex flex-col gap-4">
            <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase">Connect</span>
            <a href="https://twitter.com" target="_blank" rel="noreferrer" className="text-sm text-[#F4F2ED]/80 hover:text-[#C6FF3D] transition-colors inline-flex items-center gap-1">Twitter / X <ArrowUpRight className="w-3 h-3" /></a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="text-sm text-[#F4F2ED]/80 hover:text-[#C6FF3D] transition-colors inline-flex items-center gap-1">Instagram <ArrowUpRight className="w-3 h-3" /></a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-sm text-[#F4F2ED]/80 hover:text-[#C6FF3D] transition-colors inline-flex items-center gap-1">LinkedIn <ArrowUpRight className="w-3 h-3" /></a>
            <a href="https://github.com/olly-techie" target="_blank" rel="noreferrer" className="text-sm text-[#F4F2ED]/80 hover:text-[#C6FF3D] transition-colors inline-flex items-center gap-1">GitHub <ArrowUpRight className="w-3 h-3" /></a>
          </div>
        </div>
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E9396] font-mono">
          <div>© {new Date().getFullYear()} FORMA STUDIO INC. ALL RIGHTS RESERVED.</div>
          <div className="flex gap-6">
            <span>TOKYO / BERLIN / NEW YORK</span>
            <span>UTC+9</span>
          </div>
        </div>
      </div>
    </footer>
  );
}