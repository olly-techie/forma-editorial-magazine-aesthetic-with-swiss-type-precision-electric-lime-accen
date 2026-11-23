import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function StudioView() {
  const team = [
    { name: 'KENJI SATO', role: 'Founder & Executive Creative Director', image: 'https://picsum.photos/seed/team1/600/800' },
    { name: 'ELENA VANCE', role: 'Partner & Head of Creative Technology', image: 'https://picsum.photos/seed/team2/600/800' },
    { name: 'MARCUS LIND', role: 'Design Director & Typography Lead', image: 'https://picsum.photos/seed/team3/600/800' },
    { name: 'SOFIA ALVAREZ', role: 'Principal Interaction Engineer', image: 'https://picsum.photos/seed/team4/600/800' },
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="border-b border-[#23272A] pb-16 mb-20">
        <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase block mb-3">THE STUDIO / ETHOS</span>
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-[#F4F2ED] max-w-5xl mb-8">
          WE BELIEVE IN FORM DRIVEN BY PURPOSE.
        </h1>
        <p className="text-lg text-[#8E9396] max-w-2xl leading-relaxed">
          FORMA was founded on a singular premise: that the digital web has become overly homogenized. We build defiant, high-performance digital artifacts for brands that refuse to blend in.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
        <div className="lg:col-span-7 relative aspect-[16/10] overflow-hidden border border-[#23272A]">
          <img
            src="https://picsum.photos/seed/studioforma/1200/800"
            alt="Studio Workspace"
            className="w-full h-full object-cover filter grayscale contrast-125"
           width="1200" height="675" loading="lazy" />
        </div>
        <div className="lg:col-span-5 flex flex-col gap-6">
          <span className="text-xs font-mono text-[#C6FF3D] uppercase">01 / PRECISION & SOUL</span>
          <h3 className="text-3xl font-light tracking-tight text-[#F4F2ED]">Engineering meets raw aesthetic reduction.</h3>
          <p className="text-[#8E9396] text-sm leading-relaxed">
            We do not rely on standard frameworks or bloated templates. Every project is conceived from a blank canvas, tuned for optimal performance, accessibility, and visual resonance.
          </p>
          <div className="grid grid-cols-2 gap-6 pt-4 border-t border-[#23272A]">
            <div>
              <span className="text-2xl font-mono text-[#F4F2ED] font-bold block">TOKYO</span>
              <span className="text-xs font-mono text-[#8E9396]">Design & R&D Lab</span>
            </div>
            <div>
              <span className="text-2xl font-mono text-[#F4F2ED] font-bold block">BERLIN</span>
              <span className="text-xs font-mono text-[#8E9396]">Engineering Hub</span>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-[#23272A] pt-20">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase block mb-2">LEADERSHIP</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#F4F2ED]">The Minds Behind FORMA</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member) => (
            <div key={member.name} className="flex flex-col gap-4">
              <div className="aspect-[3/4] overflow-hidden bg-[#141719] border border-[#23272A]">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover filter grayscale contrast-125 hover:scale-105 transition-transform duration-500"
                 width="1200" height="675" loading="lazy" />
              </div>
              <div>
                <h3 className="text-lg font-medium text-[#F4F2ED]">{member.name}</h3>
                <p className="text-xs font-mono text-[#8E9396] mt-1">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="mt-32 p-12 bg-[#141719] border border-[#23272A] flex flex-col md:flex-row items-center justify-between gap-8">
        <div>
          <span className="text-xs font-mono text-[#C6FF3D] uppercase block mb-2">CAREERS & COLLABORATION</span>
          <h3 className="text-3xl font-light text-[#F4F2ED]">Want to build the future with us?</h3>
        </div>
        <Link
          to="/contact"
          className="px-6 py-3 bg-[#C6FF3D] text-[#0B0D0E] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#b0e62e] transition-colors"
        >
          Get in touch <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}