// src/app/page.tsx
'use client';

import { useState } from 'react';
import HeroSection from '@/components/hero-section';
import CameraSection from '@/components/camera-section';
import StabilityCards from '@/components/stability-cards';
import AttackModeCard from '@/components/attack-mode-card';
import { TracingBeamDemo } from '@/components/tracing-beam';
import { GlobeWorldMap } from '@/components/globe-map';
import Footer from '@/components/footer';
import LatentCard from '@/components/latent-card';

export default function Home() {
  const [showCamera, setShowCamera] = useState(false);
  
  return (
    <main className="min-h-screen bg-gradient-to-br from-red-900 to-pink-800">
      {!showCamera ? (
        <>
          <HeroSection onSearch={() => setShowCamera(true)} />
          <section className="container mx-auto px-4 py-16">
          <TracingBeamDemo/>
            <h2 className="text-3xl font-bold text-center mb-12 text-neutral-50 mt-10">
              Why Choose 100xHookUps?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 mt-10">
              {/* Feature cards */}
              <div className="bg-pink-300 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Real Connections</h3>
                <p>Find genuine partners who share your values and goals.</p>
              </div>
              <div className="bg-pink-300 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Safe & Secure</h3>
                <p>Your privacy and security are our top priorities.</p>
              </div>
              <div className="bg-pink-300 rounded-xl p-6 shadow-lg">
                <h3 className="text-xl font-semibold mb-4">Smart Matching</h3>
                <p>Our algorithm helps you find your perfect match.</p>
              </div>
            </div>
           <GlobeWorldMap/>
         
          </section>
          <Footer/>
        </>
      ) : (
        <>
          <CameraSection />
          <div className="container mx-auto px-4 py-16">
            <h2 className="text-3xl font-bold text-center mb-8">
              Set Real Goals Instead 🎯
            </h2>
            <StabilityCards />
            <AttackModeCard />
            <LatentCard/>
            
          </div>
          <Footer/>
        </>
      )}
    </main>
  );
}