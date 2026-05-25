import React from 'react';
import Navbar from './Navbar';
import Button from './Button';

const TrustedLogo = ({ src, name }: { src: string; name: string }) => (
  <div className="flex items-center gap-1 opacity-70">
    <img src={src} alt={name} className="h-[12px] w-auto" />
    <span className="text-[10px] font-medium tracking-[0.1em] uppercase" style={{ color: '#586E84' }}>{name}</span>
  </div>
);

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ background: '#07090f', fontFamily: "'Sora', sans-serif", minHeight: '100vh' }}
    >

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
          <div className="relative" style={{ width: 680, height: 460 }}>
            {/* Blue glow — centered behind composite */}
            <div
              className="absolute pointer-events-none z-0"
              style={{
                top: '55%',
                left: '55%',
                transform: 'translate(-50%, -50%)',
                width: 560,
                height: 560,
                background: 'radial-gradient(ellipse at center, rgba(0,180,253,0.3) 0%, rgba(0,58,206,0.4) 40%, transparent 70%)',
              }}
            />
            {/* Girl photo — main card */}
            <img
              src="/assets/girl.png"
              alt="Person using banking app"
              className="absolute rounded-2xl object-cover object-center z-10"
              style={{ left: 120, top: 30, width: 400, height: 320 }}
            />
            {/* Dashboard / total card — top right, overlapping photo */}
            <img
              src="/assets/total.png"
              alt="Total balance"
              className="absolute z-20"
              style={{ right: 0, top: 25, width: 240, filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
            />
            {/* Recent activity card — bottom left, extends below photo */}
            <img
              src="/assets/recent.png"
              alt="Recent activity"
              className="absolute z-20"
              style={{ left: 0, top: 190, width: 270, filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
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
        <div className="flex items-center gap-5 flex-wrap">
          <TrustedLogo src="/shells.svg" name="Shells" />
          <TrustedLogo src="/smart.svg" name="SmartFinder" />
          <TrustedLogo src="/zommer.svg" name="Zoomerr" />
          <TrustedLogo src="/art.svg" name="ArtVenue" />
          <TrustedLogo src="/kontra.svg" name="kontrastr" />
          <TrustedLogo src="/waves.svg" name="WavesMarathon" />
        </div>
      </div>
    </section>
  );
}
