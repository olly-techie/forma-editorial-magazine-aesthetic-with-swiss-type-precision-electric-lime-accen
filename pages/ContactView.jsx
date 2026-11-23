import React, { useState } from 'react';
import { Check, AlertCircle } from 'lucide-react';

export default function ContactView() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    budget: '$50k - $100k',
    service: 'Digital Experiences',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setError('Please complete all required fields.');
      return;
    }
    setError('');
    setSubmitted(true);
    try {
      const saved = JSON.parse(localStorage.getItem('forma_inquiries') || '[]');
      localStorage.setItem('forma_inquiries', JSON.stringify([...saved, { ...formData, date: new Date().toISOString() }]));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="pt-32 pb-24 max-w-7xl mx-auto px-6">
      <div className="border-b border-[#23272A] pb-16 mb-16">
        <span className="text-xs font-mono tracking-widest text-[#8E9396] uppercase block mb-3">INQUIRIES / CONTACT</span>
        <h1 className="text-5xl md:text-8xl font-light tracking-tighter text-[#F4F2ED] max-w-4xl">
          HAVE SOMETHING IMPOSSIBLE IN MIND?
        </h1>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
        <div className="lg:col-span-5 flex flex-col justify-between gap-12">
          <div className="flex flex-col gap-8">
            <div>
              <span className="text-xs font-mono text-[#8E9396] uppercase block mb-2">DIRECT INQUIRIES</span>
              <a href="mailto:studio@forma.tech" className="text-xl md:text-2xl font-light text-[#F4F2ED] hover:text-[#C6FF3D] transition-colors">
                studio@forma.tech
              </a>
            </div>
            <div>
              <span className="text-xs font-mono text-[#8E9396] uppercase block mb-2">HEADQUARTERS</span>
              <p className="text-[#F4F2ED] text-sm leading-relaxed">
                Minami-Aoyama, Minato-ku<br />
                Tokyo 107-0062 Japan
              </p>
            </div>
            <div>
              <span className="text-xs font-mono text-[#8E9396] uppercase block mb-2">RESPONSE TIME</span>
              <p className="text-[#F4F2ED] text-sm">
                We review inquiries daily. Expect a response within 24 hours.
              </p>
            </div>
          </div>

          <div className="p-6 bg-[#141719] border border-[#23272A]">
            <span className="text-xs font-mono text-[#C6FF3D] uppercase block mb-2">NEW PROJECT AVAILABILITY</span>
            <p className="text-xs text-[#8E9396] leading-relaxed">
              Currently accepting select partnerships for Q3/Q4 2026.
            </p>
          </div>
        </div>

        <div className="lg:col-span-7 bg-[#141719] border border-[#23272A] p-8 md:p-12">
          {submitted ? (
            <div className="py-20 flex flex-col items-center justify-center text-center gap-6">
              <div className="w-16 h-16 rounded-full bg-[#C6FF3D] text-[#0B0D0E] flex items-center justify-center">
                <Check className="w-8 h-8" />
              </div>
              <h3 className="text-3xl font-light text-[#F4F2ED]">Inquiry Received.</h3>
              <p className="text-[#8E9396] text-sm max-w-md">
                Thank you, {formData.name}. Our managing director will reach out to {formData.email} shortly.
              </p>
              <button
                onClick={() => {
                  setSubmitted(false);
                  setFormData({ name: '', email: '', budget: '$50k - $100k', service: 'Digital Experiences', message: '' });
                }}
                className="mt-4 px-6 py-3 bg-[#F4F2ED] text-[#0B0D0E] text-xs font-bold uppercase tracking-wider"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-6">
              {error && (
                <div className="p-4 bg-red-950/40 border border-red-900/50 text-red-200 text-xs font-mono flex items-center gap-2">
                  <AlertCircle className="w-4 h-4" /> {error}
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-[#8E9396] uppercase">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Kenji Sato"
                    className="bg-[#0B0D0E] border border-[#23272A] px-4 py-3 text-[#F4F2ED] text-sm focus:outline-none focus:border-[#C6FF3D]"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-[#8E9396] uppercase">Email Address *</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="kenji@example.com"
                    className="bg-[#0B0D0E] border border-[#23272A] px-4 py-3 text-[#F4F2ED] text-sm focus:outline-none focus:border-[#C6FF3D]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-[#8E9396] uppercase">Primary Service</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="bg-[#0B0D0E] border border-[#23272A] px-4 py-3 text-[#F4F2ED] text-sm focus:outline-none focus:border-[#C6FF3D]"
                  >
                    <option>Digital Experiences</option>
                    <option>Brand Identity</option>
                    <option>Creative Development</option>
                    <option>Art Direction</option>
                  </select>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-xs font-mono text-[#8E9396] uppercase">Estimated Budget</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                    className="bg-[#0B0D0E] border border-[#23272A] px-4 py-3 text-[#F4F2ED] text-sm focus:outline-none focus:border-[#C6FF3D]"
                  >
                    <option>$30k - $50k</option>
                    <option>$50k - $100k</option>
                    <option>$100k - $250k</option>
                    <option>$250k+</option>
                  </select>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-xs font-mono text-[#8E9396] uppercase">Project Details *</label>
                <textarea
                  rows="5"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell us about your goals, timeline, and vision..."
                  className="bg-[#0B0D0E] border border-[#23272A] p-4 text-[#F4F2ED] text-sm focus:outline-none focus:border-[#C6FF3D]"
                ></textarea>
              </div>

              <button
                type="submit"
                className="mt-4 w-full py-4 bg-[#C6FF3D] text-[#0B0D0E] text-xs font-bold uppercase tracking-wider flex items-center justify-center gap-2 hover:bg-[#b0e62e] transition-colors"
              >
                <span>Submit inquiry</span>
                <span className="text-sm">→</span>
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}