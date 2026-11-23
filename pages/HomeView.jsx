import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ArrowUpRight, Sparkles } from 'lucide-react';

export default function HomeView() {
  const projects = [
    {
      id: 'chronos',
      title: 'CHRONOS KINETICS',
      category: 'Interactive WebGL / Spatial Audio',
      year: '2026',
      image: 'https://picsum.photos/seed/forma1/1200/800'
    },
    {
      id: 'aurora',
      title: 'AURORA OS',
      category: 'Brand Identity & Design System',
      year: '2025',
      image: 'https://picsum.photos/seed/forma2/1200/800'
    },
    {
      id: 'monolith',
      title: 'MONOLITH ARCHIVE',
      category: 'Creative Development',
      year: '2025',
      image: 'https://picsum.photos/seed/forma3/1200/800'
    },
    {
      id: 'vesper',
      title: 'VESPER LABS',
      category: 'Art Direction & E-Commerce',
      year: '2026',
      image: 'https://picsum.photos/seed/forma4/1200/800'
    }
  ];

  return (
    <div className="pt-20">
      <section className="min-h-[90vh] flex flex-col justify-between max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end">
          <div className="lg:col-span-9">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#141719] border border-[#23272A] text-xs font-mono text-[#C6FF3D] mb-6">
              <Sparkles className="w-3.5 h-3.5" /> AWARD-WINNING DIGITAL PRACTICE — EST. 2021
            </div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black tracking-tighter uppercase leading-[0.95] text-[#F4F2ED]">
              WE MAKE DIGITAL <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F4F2ED] via-[#8E9396] to-[#C6FF3D]">
                FEEL DIFFERENT.
              </span>
            </h1>
          </div>
          <div className="lg:col-span-3 flex flex-col justify-between h-full pb-2">
            <p className="text-[#8E9396] text-sm leading-relaxed mb-6">
              FORMA is an independent creative technology studio building uncompromising web experiences, spatial systems, and brand architectures.
            </p>
            <Link
              to="/work"
              className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C6FF3D] hover:underline"
            >
              Explore selected works <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        <div className="mt-12 relative w-full h-[55vh] overflow-hidden border border-[#23272A] group">
          <img
            src="https://picsum.photos/seed/formahero/1600/900"
            alt="Forma Hero Visual"
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 brightness-90"
           width="1200" height="675" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B0D0E] via-transparent to-transparent opacity-80"></div>
          <div className="absolute bottom-8 left-8 right-8 flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <span className="text-xs font-mono text-[#C6FF3D] block mb-1">FEATURED CASE STUDY</span>
              <h3 className="text-2xl font-light tracking-tight text-[#F4F2ED]">Chronos Kinetics — 04.2026 Release</h3>
            </div>
            <Link
              to="/work"
              className="px-4 py-2 bg-[#F4F2ED] text-[#0B0D0E] text-xs font-bold uppercase tracking-wider flex items-center gap-2 hover:bg-[#C6FF3D] transition-colors"
            >
              View case study <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-24 border-t border-[#23272A]">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase block mb-2">CURATED ARCHIVE</span>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-[#F4F2ED]">Selected Work</h2>
          </div>
          <Link
            to="/work"
            className="text-xs font-mono tracking-widest text-[#C6FF3D] hover:underline inline-flex items-center gap-1"
          >
            View all 14 projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, idx) => (
            <Link
              to="/work"
              key={p.id}
              className={`group flex flex-col gap-4 ${
                idx % 2 === 1 ? 'md:translate-y-16' : ''
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-[#141719] border border-[#23272A]">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale contrast-110"
                 width="1200" height="675" loading="lazy" />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-transparent transition-colors"></div>
                <div className="absolute top-4 right-4 bg-[#0B0D0E]/80 backdrop-blur border border-[#23272A] px-3 py-1 text-xs font-mono text-[#F4F2ED]">
                  {p.year}
                </div>
              </div>
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-medium tracking-tight text-[#F4F2ED] group-hover:text-[#C6FF3D] transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-xs font-mono text-[#8E9396] mt-1">{p.category}</p>
                </div>
                <ArrowUpRight className="w-5 h-5 text-[#8E9396] group-hover:text-[#C6FF3D] transition-colors" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-[#141719] border-y border-[#23272A] py-28 my-20">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-6">
            <span className="text-xs font-mono tracking-widest text-[#C6FF3D] uppercase block mb-4">PHILOSOPHY</span>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#F4F2ED] leading-snug mb-8">
              We reject template mechanics in favor of bespoke digital tactile experiences.
            </h2>
            <p className="text-[#8E9396] text-base leading-relaxed mb-8">
              Every interaction is an opportunity to evoke emotion. We combine rigorous engineering execution with avant-garde visual systems to set brands apart in crowded markets.
            </p>
            <Link
              to="/studio"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#F4F2ED] text-[#0B0D0E] text-xs font-bold uppercase tracking-wider hover:bg-[#C6FF3D] transition-colors"
            >
              About the Studio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="lg:col-span-6 grid grid-cols-2 gap-4">
            <div className="p-8 bg-[#0B0D0E] border border-[#23272A] flex flex-col justify-between h-48">
              <span className="text-3xl md:text-5xl font-mono font-bold text-[#C6FF3D]">100%</span>
              <span className="text-xs font-mono text-[#8E9396] uppercase">Custom Code & Motion</span>
            </div>
            <div className="p-8 bg-[#0B0D0E] border border-[#23272A] flex flex-col justify-between h-48">
              <span className="text-3xl md:text-5xl font-mono font-bold text-[#F4F2ED]">34</span>
              <span className="text-xs font-mono text-[#8E9396] uppercase">Global Design Awards</span>
            </div>
            <div className="p-8 bg-[#0B0D0E] border border-[#23272A] flex flex-col justify-between h-48">
              <span className="text-3xl md:text-5xl font-mono font-bold text-[#F4F2ED]">04</span>
              <span className="text-xs font-mono text-[#8E9396] uppercase">Continents Served</span>
            </div>
            <div className="p-8 bg-[#0B0D0E] border border-[#23272A] flex flex-col justify-between h-48">
              <span className="text-3xl md:text-5xl font-mono font-bold text-[#C6FF3D]">0</span>
              <span className="text-xs font-mono text-[#8E9396] uppercase">Templates Used</span>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-28 text-center">
        <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase block mb-4">START A CONVERSATION</span>
        <h2 className="text-4xl md:text-7xl font-light tracking-tighter text-[#F4F2ED] mb-8 max-w-4xl mx-auto">
          HAVE SOMETHING IMPOSSIBLE IN MIND?
        </h2>
        <Link
          to="/contact"
          className="inline-flex items-center gap-3 px-8 py-4 bg-[#C6FF3D] text-[#0B0D0E] text-sm font-bold uppercase tracking-wider hover:bg-[#b0e62e] transition-colors"
        >
          Let's talk project <ArrowUpRight className="w-5 h-5" />
        </Link>
      </section>
    </div>
  );
}