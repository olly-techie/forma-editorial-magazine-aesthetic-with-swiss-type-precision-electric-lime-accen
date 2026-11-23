import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomeView from './pages/HomeView';
import WorkView from './pages/WorkView';
import StudioView from './pages/StudioView';
import ExpertiseView from './pages/ExpertiseView';
import ContactView from './pages/ContactView';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0B0D0E] text-[#F4F2ED] flex flex-col justify-between selection:bg-[#C6FF3D] selection:text-[#0B0D0E]">
      <Navbar />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomeView />} />
          <Route path="/work" element={<WorkView />} />
          <Route path="/studio" element={<StudioView />} />
          <Route path="/expertise" element={<ExpertiseView />} />
          <Route path="/contact" element={<ContactView />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

import "./plorpy/PlorpyBadge";
