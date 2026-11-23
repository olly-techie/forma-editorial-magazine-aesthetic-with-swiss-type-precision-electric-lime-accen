import React, { useState } from 'react';
import { Filter } from 'lucide-react';

export default function WorkView() {
  const [filter, setFilter] = useState('ALL');

  const projects = [
    {
      id: 'chronos',
      title: 'CHRONOS KINETICS',
      category: 'Interactive WebGL',
      year: '2026',
      image: 'https://picsum.photos/seed/forma1/1200/800',
      desc: 'Spatial audio and real-time WebGL timepieces for next-gen collectors.'
    },
    {
      id: 'aurora',
      title: 'AURORA OS',
      category: 'Brand Identity',
      year: '2025',
      image: 'https://picsum.photos/seed/forma2/1200/800',
      desc: 'Complete architectural design system and typography suite for autonomous hardware.'
    },
    {
      id: 'monolith',
      title: 'MONOLITH ARCHIVE',
      category: 'Creative Development',
      year: '2025',
      image: 'https://picsum.photos/seed/forma3/1200/800',
      desc: 'Immersive digital exhibition platform for brutalist architecture photography.'
    },
    {
      id: 'vesper',
      title: 'VESPER LABS',
      category: 'Art Direction',
      year: '2026',
      image: 'https://picsum.photos/seed/forma4/1200/800',
      desc: 'E-commerce experience and editorial art direction for independent perfumery.'
    },
    {
      id: 'kroma',
      title: 'KROMA DYNAMICS',
      category: 'Interactive WebGL',
      year: '2024',
      image: 'https://picsum.photos/seed/forma5/1200/800',
      desc: 'Color synthesis engine and generative shader toolkit for creative coders.'
    },
    {
      id: 'syntax',
      title: 'SYNTAX STUDIO',
      category: 'Brand Identity',
      year: '2024',
      image: 'https://picsum.photos/seed/forma6/1200/800',
      desc: 'Minimalist brand identity and type specimen site for a cryptographic lab.'
    }
  ];

  const filteredProjects = filter === 'ALL' 
    ? projects 
    : projects.filter(p => p.category.toUpperCase().includes(filter));

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="border-b border-[#23272A] pb-12 mb-12">
        <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase block mb-3">ARCHIVE / 2024-2026</span>
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-[#F4F2ED] mb-8">
          SELECTED WORKS
        </h1>
        
        <div className="flex flex-wrap items-center gap-3 pt-4">
          <span className="text-xs font-mono text-[#8E9396] mr-2 flex items-center gap-1">
            <Filter className="w-3 h-3" /> FILTER:
          </span>
          {['ALL', 'WEBGL', 'BRAND', 'ART DIRECTION'].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 text-xs font-mono uppercase tracking-wider transition-colors border ${
                filter === cat
                  ? 'bg-[#C6FF3D] text-[#0B0D0E] border-[#C6FF3D] font-bold'
                  : 'bg-[#141719] text-[#F4F2ED] border-[#23272A] hover:border-[#8E9396]'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {filteredProjects.map((p, idx) => (
          <div key={p.id} className={`group flex flex-col gap-6 ${idx % 2 === 1 ? 'md:translate-y-20' : ''}`}>
            <div className="relative aspect-[16/10] overflow-hidden bg-[#141719] border border-[#23272A]">
              <img
                src={p.image}
                alt={p.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125"
               width="1200" height="675" loading="lazy" />
              <div className="absolute top-4 right-4 bg-[#0B0D0E]/90 backdrop-blur border border-[#23272A] px-3 py-1 text-xs font-mono text-[#F4F2ED]">
                {p.year}
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-start">
                <h3 className="text-2xl font-light tracking-tight text-[#F4F2ED] group-hover:text-[#C6FF3D] transition-colors">
                  {p.title}
                </h3>
                <span className="text-xs font-mono text-[#C6FF3D] uppercase">{p.category}</span>
              </div>
              <p className="text-[#8E9396] text-sm leading-relaxed max-w-lg">
                {p.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}