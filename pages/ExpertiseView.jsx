import React, { useState } from 'react';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ExpertiseView() {
  const [activeIndex, setActiveIndex] = useState(0);

  const services = [
    {
      title: 'DIGITAL EXPERIENCES',
      number: '01',
      desc: 'Immersive WebGL environments, high-performance web apps, spatial audio integration, and custom interactive storytelling crafted for elite brands.',
      deliverables: ['Custom WebGL Shaders', 'Spatial Audio Systems', 'High-Performance React Apps', 'Accessibility Compliance']
    },
    {
      title: 'BRAND IDENTITY',
      number: '02',
      desc: 'Uncompromising visual systems, bespoke typography design, comprehensive design systems, and rigorous guidelines that withstand market shifts.',
      deliverables: ['Visual Strategy & Positioning', 'Bespoke Typography', 'Design Systems (Figma / Code)', 'Brand Architecture']
    },
    {
      title: 'CREATIVE DEVELOPMENT',
      number: '03',
      desc: 'Technical architecture, robust frontend engineering, headless CMS integration, and lightning-fast deployment pipelines built for longevity.',
      deliverables: ['Frontend Architecture', 'Headless CMS Integration', 'Micro-Interactions & Animation', 'Performance Optimization']
    },
    {
      title: 'ART DIRECTION',
      number: '04',
      desc: 'Comprehensive visual direction across photography, 3D CGI production, editorial design, and campaign execution for digital-first products.',
      deliverables: ['3D CGI & Motion Direction', 'Editorial Photography', 'Campaign Art Direction', 'Video Production Oversight']
    }
  ];

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="border-b border-[#23272A] pb-16 mb-16">
        <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase block mb-3">CAPABILITIES / EXPERTISE</span>
        <h1 className="text-5xl md:text-7xl font-light tracking-tighter text-[#F4F2ED] max-w-4xl mb-6">
          DISCIPLINED CRAFT, UNBOUNDED EXECUTION.
        </h1>
        <p className="text-lg text-[#8E9396] max-w-2xl leading-relaxed">
          We operate at the intersection of design and advanced technology. Every discipline is executed with absolute senior-level ownership.
        </p>
      </div>

      <div className="border-t border-[#23272A]">
        {services.map((service, idx) => {
          const isOpen = activeIndex === idx;
          return (
            <div
              key={service.number}
              className="border-b border-[#23272A] py-8 transition-colors hover:bg-[#141719]/40 px-4 cursor-pointer"
              onClick={() => setActiveIndex(isOpen ? null : idx)}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-8">
                  <span className="text-sm font-mono text-[#C6FF3D]">{service.number}</span>
                  <h2 className="text-2xl md:text-4xl font-light tracking-tight text-[#F4F2ED]">
                    {service.title}
                  </h2>
                </div>
                <button className="p-2 text-[#F4F2ED]">
                  {isOpen ? <Minus className="w-6 h-6 text-[#C6FF3D]" /> : <Plus className="w-6 h-6 text-[#8E9396]" />}
                </button>
              </div>

              {isOpen && (
                <div className="mt-8 grid grid-cols-1 md:grid-cols-12 gap-8 pl-12 md:pl-16 pr-4 animate-fadeIn">
                  <div className="md:col-span-7">
                    <p className="text-[#8E9396] text-base leading-relaxed mb-6">
                      {service.desc}
                    </p>
                    <Link
                      to="/contact"
                      className="inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-[#C6FF3D] hover:underline"
                    >
                      Inquire about {service.title.toLowerCase()} <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="md:col-span-5 bg-[#0B0D0E] border border-[#23272A] p-6">
                    <span className="text-xs font-mono text-[#8E9396] uppercase block mb-4">Key Deliverables</span>
                    <ul className="flex flex-col gap-2">
                      {service.deliverables.map((item, i) => (
                        <li key={i} className="text-xs font-mono text-[#F4F2ED] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-[#C6FF3D]"></span> {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}