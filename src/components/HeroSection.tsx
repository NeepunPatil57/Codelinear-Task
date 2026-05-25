import React from 'react';
import Navbar from './Navbar';
import Button from './Button';

const TrustedLogo = ({ icon, name }: { icon: React.ReactNode; name: string }) => (
  <div className="flex items-center gap-2 opacity-40 hover:opacity-65 transition-opacity cursor-pointer">
    {icon}
    <span className="text-white text-[11px] font-medium tracking-[0.1em] uppercase">{name}</span>
  </div>
);

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#07090f', fontFamily: "'Sora', sans-serif", minHeight: '100vh' }}
    >
      {/* Blue radial glow — top right */}
      <div
        className="absolute pointer-events-none"
        style={{
          top: -100,
          right: -100,
          width: 800,
          height: 800,
          background: 'radial-gradient(ellipse at center, rgba(25,70,210,0.45) 0%, rgba(30,80,220,0.18) 40%, transparent 72%)',
        }}
      />

      {/* ── Navbar ── */}
      <Navbar />

      {/* ── Hero ── */}
      <div
        className="relative z-10 flex items-center w-full px-16"
        style={{ paddingTop: 80, paddingBottom: 60, maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left copy */}
        <div className="flex-1 space-y-6 pr-8">
          <h1
            className="text-white font-semibold leading-[1.08]"
            style={{ fontSize: 56, letterSpacing: '-1px' }}
          >
            The new foundation<br />of modern banking
          </h1>
          <p className="text-white/70 text-[15px] leading-[1.65]" style={{ maxWidth: 390, fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}>
            We drive innovation and growth, provide seamless
            customer experience and operational excellence
          </p>
          <div className="flex gap-4 pt-3">
            <Button variant="primary">Request Demo</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>

        {/* Right mockup */}
        <div className="flex-1 flex justify-center items-center">
          {/* Composite container — all cards positioned relative to this */}
          <div className="relative" style={{ width: 580, height: 400 }}>
            {/* Girl photo — main card */}
            <img
              src="/assets/girl.png"
              alt="Person using banking app"
              className="absolute rounded-2xl object-cover object-center"
              style={{ left: 90, top: 20, width: 390, height: 310 }}
            />
            {/* Dashboard / total card — top right, overlapping photo */}
            <img
              src="/assets/total.png"
              alt="Total balance"
              className="absolute z-20"
              style={{ right: 0, top: 0, width: 210, filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
            />
            {/* Recent activity card — bottom left, overlapping photo */}
            <img
              src="/assets/recent.png"
              alt="Recent activity"
              className="absolute z-20"
              style={{ left: 0, bottom: 0, width: 260, filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
            />
          </div>
        </div>
      </div>

      {/* ── Trusted By ── */}
      <div
        className="relative z-10 w-full px-16"
        style={{ paddingBottom: 56, maxWidth: 1400, margin: '0 auto' }}
      >
        <p className="text-white/35 text-[11px] tracking-[0.14em] uppercase mb-5">Trusted By:</p>
        <div className="flex items-center gap-9 flex-wrap">
          <TrustedLogo name="Shells" icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7.5" stroke="white" strokeWidth="1.2" />
              <path d="M5 9C5 7 6.8 5.5 9 5.5C11.2 5.5 13 7 13 9" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
              <path d="M6.5 11C6.5 10 7.6 9.5 9 9.5C10.4 9.5 11.5 10 11.5 11" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </svg>
          } />
          <TrustedLogo name="SmartFinder" icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="10" cy="8" r="5" stroke="white" strokeWidth="1.2" />
              <path d="M3 15L7 11" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          } />
          <TrustedLogo name="Zoomerr" icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="2" y="2" width="14" height="14" rx="3" stroke="white" strokeWidth="1.2" />
              <circle cx="9" cy="9" r="3" stroke="white" strokeWidth="1.2" />
              <circle cx="9" cy="9" r="1" fill="white" />
            </svg>
          } />
          <TrustedLogo name="ArtVenue" icon={
            <svg width="20" height="18" viewBox="0 0 20 18" fill="none">
              <path d="M1 14L5 7L9 12.5L13 5L18 14" stroke="white" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          } />
          <TrustedLogo name="kontrastr" icon={
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <circle cx="9" cy="9" r="7" stroke="white" strokeWidth="1.2" />
              <path d="M9 2A7 7 0 0 1 9 16Z" fill="white" fillOpacity="0.55" />
            </svg>
          } />
          <TrustedLogo name="WavesMarathon" icon={
            <svg width="26" height="18" viewBox="0 0 26 18" fill="none">
              <path d="M1 9C3 5 5 5 7 9C9 13 11 13 13 9C15 5 17 5 19 9C21 13 23 13 25 9" stroke="white" strokeWidth="1.2" strokeLinecap="round" fill="none" />
            </svg>
          } />
        </div>
      </div>
    </section>
  );
}
