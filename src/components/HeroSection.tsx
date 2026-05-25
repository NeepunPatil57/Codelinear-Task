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
        className="relative z-10 flex flex-col lg:flex-row items-center w-full px-6 md:px-12 lg:px-16"
        style={{ paddingTop: 60, paddingBottom: 40, maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left copy */}
        <div className="w-full lg:flex-1 space-y-5 lg:space-y-6 lg:pr-8 text-center lg:text-left">
          <h1
            className="text-white font-semibold leading-[1.08]"
            style={{ fontSize: 'clamp(32px, 5vw, 56px)', letterSpacing: '-1px' }}
          >
            The new foundation<br />of modern banking
          </h1>
          <p
            className="text-white/70 text-[14px] md:text-[15px] leading-[1.65] mx-auto lg:mx-0"
            style={{ maxWidth: 390, fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            We drive innovation and growth, provide seamless
            customer experience and operational excellence
          </p>
          <div className="flex gap-4 pt-2 justify-center lg:justify-start">
            <Button variant="primary">Request Demo</Button>
            <Button variant="outline">Contact Us</Button>
          </div>
        </div>

        {/* Right mockup */}
        <div className="w-full lg:flex-1 flex justify-center items-center mt-12 lg:mt-0">
          {/* Outer wrapper scales the fixed-pixel mockup down on smaller screens */}
          <div
            className="relative"
            style={{ width: 680, height: 460 }}
          >
            {/* Responsive scale wrapper */}
            <div
              className="absolute inset-0"
              style={{
                transform: 'scale(var(--mockup-scale, 1))',
                transformOrigin: 'center center',
              }}
            >
              {/* Blue glow — behind composite */}
              <div
                className="absolute pointer-events-none z-0"
                style={{
                  top: '55%',
                  left: '55%',
                  transform: 'translate(-50%, -50%)',
                  width: 560,
                  height: 560,
                  background: 'radial-gradient(circle at center, rgba(0,58,206,0.8) 0%, rgba(0,58,206,0.15) 55%, transparent 75%)',
                }}
              />
              {/* Girl photo */}
              <img
                src="/assets/girl.png"
                alt="Person using banking app"
                className="absolute rounded-3xl object-cover object-center z-10"
                style={{ left: 200, top: 90, width: 400, height: 320 }}
              />
              {/* Dashboard card */}
              <img
                src="/assets/total.png"
                alt="Total balance"
                className="absolute z-20"
                style={{ right: 0, top: 85, width: 240, filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
              />
              {/* Recent activity card */}
              <img
                src="/assets/recent.png"
                alt="Recent activity"
                className="absolute z-20"
                style={{ left: 80, top: 250, width: 270, filter: 'drop-shadow(0 8px 32px rgba(0,0,0,0.4))' }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* ── Trusted By ── */}
      <div
        className="relative z-10 w-full px-6 md:px-12 lg:px-16"
        style={{ paddingBottom: 48, maxWidth: 1400, margin: '0 auto' }}
      >
        <p className="text-white/35 text-[11px] tracking-[0.14em] uppercase mb-5 text-center lg:text-left">Trusted By:</p>
        <div className="flex items-center gap-5 flex-wrap justify-center lg:justify-start">
          <TrustedLogo src="/shells.svg" name="Shells" />
          <TrustedLogo src="/smart.svg" name="SmartFinder" />
          <TrustedLogo src="/zommer.svg" name="Zoomerr" />
          <TrustedLogo src="/art.svg" name="ArtVenue" />
          <TrustedLogo src="/kontra.svg" name="kontrastr" />
          <TrustedLogo src="/waves.svg" name="WavesMarathon" />
        </div>
      </div>

      {/* Responsive mockup scale via CSS custom property */}
      <style>{`
        @media (max-width: 400px)  { :root { --mockup-scale: 0.42; } }
        @media (min-width: 401px) and (max-width: 540px)  { :root { --mockup-scale: 0.52; } }
        @media (min-width: 541px) and (max-width: 767px)  { :root { --mockup-scale: 0.65; } }
        @media (min-width: 768px) and (max-width: 1023px) { :root { --mockup-scale: 0.75; } }
        @media (min-width: 1024px) { :root { --mockup-scale: 1; } }
      `}</style>
    </section>
  );
}
