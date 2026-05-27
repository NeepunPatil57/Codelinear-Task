import { useRef, useState } from 'react';
import Button from './Button';

/* ── Ticker ── */
const TickerStar = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="flex-shrink-0">
    <path d="M7 1V13M1 7H13M2.5 2.5L11.5 11.5M11.5 2.5L2.5 11.5" stroke="#1a2a4a" strokeWidth="1.3" strokeLinecap="round"/>
  </svg>
);

const tickerItems = ['N7', 'Say 👋 to the new way of banking', 'CB7', 'Say 👋 to the new way of banking'];

const Ticker = () => (
  <div className="w-full overflow-hidden py-3" style={{ background: '#dde8f5', borderBottom: '1px solid rgba(0,0,0,0.06)' }}>
    <div className="flex gap-6 animate-ticker whitespace-nowrap" style={{ width: 'max-content' }}>
      {[...Array(4)].flatMap(() =>
        tickerItems.map((item, i) => (
          <span key={`${item}-${i}-${Math.random()}`} className="flex items-center gap-3">
            <TickerStar />
            <span className="text-[14px] tracking-[0.14em] uppercase font-medium" style={{ color: '#1a2a4a', fontFamily: "'Chivo Mono', monospace" }}>
              {item}
            </span>
          </span>
        ))
      )}
    </div>
    <style>{`
      @keyframes ticker { from { transform: translateX(0) } to { transform: translateX(-50%) } }
      .animate-ticker { animation: ticker 28s linear infinite; }
    `}</style>
  </div>
);

/* ── Phone Mockups ── */
const PhoneMockup = ({ width = 220, height = 450, style }: { width?: number; height?: number; style?: React.CSSProperties }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const onMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const dx = (e.clientX - (rect.left + rect.width  / 2)) / (rect.width  / 2);
    const dy = (e.clientY - (rect.top  + rect.height / 2)) / (rect.height / 2);
    setTilt({ x: dy * -12, y: dx * 12 });
  };

  const onLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <div
      ref={ref}
      className="relative mx-auto cursor-pointer"
      style={{ width, height, perspective: 800, ...style }}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
    >
      <img
        src="/assets/iPhone.png"
        alt="Banking app on iPhone"
        className="w-full h-full object-contain"
        style={{
          filter: 'drop-shadow(0 24px 48px rgba(0,58,206,0.22))',
          transform: `rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: tilt.x === 0 && tilt.y === 0
            ? 'transform 0.6s cubic-bezier(0.23, 1, 0.32, 1)'
            : 'transform 0.08s linear',
          transformStyle: 'preserve-3d',
          willChange: 'transform',
        }}
      />
    </div>
  );
};

/* ── Check bullet ── */
const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-center gap-2.5">
    <img src="/tick.svg" width={26} height={26} alt="check" className="flex-shrink-0" />
    <span className="text-[12px] md:text-[13px] leading-[1.6]" style={{ color: '#334155', fontFamily: "'Archivo', sans-serif" }}>
      {text}
    </span>
  </div>
);

const LearnMoreLink = () => (
  <button
    className="flex items-center gap-1.5 text-[13px] tracking-[0.16em] uppercase transition-opacity hover:opacity-70 self-start"
    style={{ color: '#00B4FD', fontFamily: "'Chivo Mono Medium', monospace", fontWeight: 400, textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#00B4FD99' }}
  >
    Learn More
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7H12M8 3L12 7L8 11" stroke="#00B4FD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

/* ── Section ── */
export default function DigitalBankingSection() {
  return (
    <div style={{ background: '#edf2fb', fontFamily: "'Sora', sans-serif" }}>
      <Ticker />

      {/* ── Block 1: Digital banking out-of-the-box ── */}
      <div className="relative overflow-hidden">
      <img
        src="/N7.svg"
        alt=""
        aria-hidden="true"
        className="absolute select-none pointer-events-none"
        style={{ top: '45%', left: '43%', transform: 'translate(-50%, -50%)', height: '55%', width: 'auto', opacity: 0.3 }}
      />
      <div
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-12 md:py-16 lg:py-20 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4 items-center"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left */}
        <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <h2
            className="leading-[1.15]"
            style={{ fontSize: 'clamp(36px, 5vw, 58px)', color: '#0f1f3d', letterSpacing: '-1px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            Digital banking out-of-the-box
          </h2>
          <p className="text-[13px] leading-[1.7]" style={{ color: '#64748b', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}>
            N7 helps your financial institution improve the client experience,<br />automate and optimize procedures
          </p>
          <div className="flex flex-col items-start gap-3">
            <Button variant="primary">Request Demo</Button>
            <LearnMoreLink />
          </div>
        </div>

        {/* Center phone */}
        <div className="flex justify-center" style={{ marginLeft: '-40px', marginTop: '70px' }}><PhoneMockup /></div>

        {/* Right features */}
        <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start" style={{ marginLeft: '-30px' }}>
          <h3 className="text-[20px] md:text-[22px] leading-[1.2]" style={{ color: '#0f1f3d', fontFamily: "'Archivo', sans-serif", fontWeight: 600 }}>
            Fully compliant with regulatory requirement
          </h3>
          <p className="text-[13px] md:text-[14px] leading-[1.7]" style={{ color: '#64748b', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}>
            The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational-risk protocols and procedures.
          </p>
          <div className="flex flex-col gap-3 text-left mt-4">
            {['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'].map(f => (
              <CheckItem key={f} text={f} />
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* ── Block 2: No legacy IT systems ── */}
      <div className="relative overflow-hidden">
      <img
        src="/spin.svg"
        alt=""
        aria-hidden="true"
        className="absolute select-none pointer-events-none"
        style={{ top: '50%', left: '8%', transform: 'translate(-50%, -50%)', height: '130%', width: 'auto', opacity: 1 }}
      />
      <div
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center lg:justify-end"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left features */}
        <div className="w-full lg:w-[340px] lg:flex-shrink-0 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
          <h2
            className="leading-[1.15]"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: '#0f1f3d', letterSpacing: '-0.4px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            No legacy IT systems
          </h2>
          <p className="text-[13px] leading-[1.7]" style={{ color: '#64748b', fontFamily: "'Archivo', sans-serif" }}>
            Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
          </p>
          <div className="flex flex-col gap-3 text-left">
            {['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'].map(f => (
              <CheckItem key={f} text={f} />
            ))}
          </div>
        </div>

        {/* Right phone */}
        <div className="w-full lg:w-auto flex justify-center order-1 lg:order-2"><PhoneMockup /></div>
      </div>
      </div>

      {/* ── Block 3: No traditional branches ── */}
      <div className="relative overflow-hidden">
      <img
        src="/7.svg"
        alt=""
        aria-hidden="true"
        className="absolute select-none pointer-events-none"
        style={{ top: '90%', right: '5%', transform: 'translateY(-50%)', height: '150%', width: 'auto', opacity: 1 }}
      />
      <div
        className="relative z-10 w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Empty left col — aligns phone with block 1 center phone */}
        <div className="hidden lg:block" />

        {/* Center phone */}
        <div className="flex justify-center" style={{ marginLeft: '-40px', marginTop: '70px' }}><PhoneMockup /></div>

        {/* Right features */}
        <div className="w-full flex flex-col gap-5 text-center lg:text-left items-center lg:items-start" style={{ marginLeft: '-40px', marginTop: '90px' }}>
          <h2
            className="leading-[1.15]"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: '#0f1f3d', letterSpacing: '-0.4px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            No traditional branches
          </h2>
          <p className="text-[13px] leading-[1.7]" style={{ color: '#64748b', fontFamily: "'Archivo', sans-serif", maxWidth: 360 }}>
            Our Digital Banking out of the box helps you to accelerate innovation while reducing risks and optimising operational costs for a seamless branch-free experience.
          </p>
          <div className="flex flex-col gap-3 text-left">
            {['Branchless & Paperless Banking', 'Digital Transformation Capability', 'Optimized, Adaptable and Scalable'].map(f => (
              <CheckItem key={f} text={f} />
            ))}
          </div>
        </div>
      </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        <div
          className="relative overflow-hidden rounded-2xl px-8 md:px-12 lg:px-16 py-14 md:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0"
          style={{ background: '#060c18', border: '1px solid rgba(0,140,255,0.15)' }}
        >
          {/* N7 SVG watermark */}
          <img
            src="/N7.svg"
            alt=""
            aria-hidden="true"
            className="absolute select-none pointer-events-none"
            style={{ top: '50%', right: '-2%', transform: 'translateY(-50%)', height: '100%', width: 'auto', opacity: 0.7 }}
          />
          <div className="relative z-10 flex flex-col gap-5 lg:max-w-[50%]">
            <h2
              className="text-white leading-[1.15]"
              style={{ fontSize: 'clamp(24px, 3.2vw, 42px)', letterSpacing: '-0.5px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
            >
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-[13px] md:text-[14px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Archivo', sans-serif" }}>
              N7 helps your financial institution improve the client experience,<br />automate and optimize procedures, simplify banking operations.
            </p>
          </div>
          <div className="relative z-10 flex flex-col lg:flex-row gap-4 lg:ml-auto items-center w-full lg:w-auto">
            <Button variant="outline" className="w-[240px] lg:w-auto text-center">Contact Us</Button>
            <Button variant="primary" className="w-[240px] lg:w-auto text-center">Request Demo</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
