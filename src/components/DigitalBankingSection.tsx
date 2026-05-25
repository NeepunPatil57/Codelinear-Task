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
            <span className="text-[11px] tracking-[0.14em] uppercase font-medium" style={{ color: '#1a2a4a', fontFamily: "'Chivo Mono', monospace" }}>
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
const PhoneMockup = ({ style }: { style?: React.CSSProperties }) => (
  <div className="relative mx-auto" style={{ width: 220, height: 450, ...style }}>
    <img
      src="/assets/iPhone.png"
      alt="Banking app on iPhone"
      className="w-full h-full object-contain"
      style={{ filter: 'drop-shadow(0 24px 48px rgba(0,58,206,0.22))' }}
    />
  </div>
);

/* ── Check bullet ── */
const CheckItem = ({ text }: { text: string }) => (
  <div className="flex items-start gap-2.5">
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
      <circle cx="8" cy="8" r="8" fill="#003ACE" fillOpacity="0.15"/>
      <path d="M4.5 8L7 10.5L11.5 6" stroke="#003ACE" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
    <span className="text-[12px] md:text-[13px] leading-[1.6]" style={{ color: '#334155', fontFamily: "'Archivo', sans-serif" }}>
      {text}
    </span>
  </div>
);

const LearnMoreLink = () => (
  <button
    className="flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase transition-opacity hover:opacity-70 self-start"
    style={{ color: '#003ACE', fontFamily: "'Chivo Mono', monospace" }}
  >
    Learn More
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7H12M8 3L12 7L8 11" stroke="#003ACE" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

/* ── Section ── */
export default function DigitalBankingSection() {
  return (
    <div style={{ background: '#edf2fb', fontFamily: "'Sora', sans-serif" }}>
      <Ticker />

      {/* ── Block 1: Digital banking out-of-the-box ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-8 items-center"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left */}
        <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <h2
            className="font-semibold leading-[1.15]"
            style={{ fontSize: 'clamp(24px, 3vw, 36px)', color: '#0f1f3d', letterSpacing: '-0.4px' }}
          >
            Digital banking out-of-the-box
          </h2>
          <p className="text-[13px] leading-[1.7]" style={{ color: '#64748b', fontFamily: "'Archivo', sans-serif", maxWidth: 280 }}>
            N7 helps your financial institution improve the client experience, automate and optimize procedures
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-3">
            <button
              className="text-white text-[10px] tracking-[0.16em] uppercase px-6 py-3 transition-all"
              style={{ borderRadius: 10, fontFamily: "'Chivo Mono', monospace", background: 'linear-gradient(90deg,#00B4FD,#003ACE)' }}
            >
              Request Demo
            </button>
            <LearnMoreLink />
          </div>
        </div>

        {/* Center phone */}
        <div className="flex justify-center"><PhoneMockup /></div>

        {/* Right features */}
        <div className="flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <h3 className="font-semibold text-[16px] md:text-[18px]" style={{ color: '#0f1f3d' }}>
            Fully compliant with regulatory requirement
          </h3>
          <p className="text-[12px] md:text-[13px] leading-[1.7]" style={{ color: '#64748b', fontFamily: "'Archivo', sans-serif" }}>
            The governance of risk management with regulations is achieved by our risk management framework that is fully integrated to work with digital bank's operational risk protocols and procedures.
          </p>
          <div className="flex flex-col gap-3 text-left">
            {['Pre-integrated Security System', 'Fully Compliant With Regulatory Requirement', 'Digitally Connected Core'].map(f => (
              <CheckItem key={f} text={f} />
            ))}
          </div>
        </div>
      </div>

      {/* ── Block 2: No legacy IT systems ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left features */}
        <div className="w-full lg:flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start order-2 lg:order-1">
          <h2
            className="font-semibold leading-[1.15]"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: '#0f1f3d', letterSpacing: '-0.4px' }}
          >
            No legacy IT systems
          </h2>
          <p className="text-[13px] leading-[1.7]" style={{ color: '#64748b', fontFamily: "'Archivo', sans-serif", maxWidth: 360 }}>
            Our Digital Banking solution and multilayered approach help financial institutions take advantage of digital transformation by ensuring customer trust and regulatory compliance.
          </p>
          <div className="flex flex-col gap-3 text-left">
            {['Adaptive & Intelligent API monetization', 'Ambient User Experience', 'Cloud-native With lower TCO'].map(f => (
              <CheckItem key={f} text={f} />
            ))}
          </div>
        </div>

        {/* Right phone */}
        <div className="w-full lg:flex-1 flex justify-center order-1 lg:order-2"><PhoneMockup /></div>
      </div>

      {/* ── Block 3: No traditional branches ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 flex flex-col lg:flex-row gap-10 lg:gap-16 items-center"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left phone */}
        <div className="w-full lg:flex-1 flex justify-center"><PhoneMockup /></div>

        {/* Right features */}
        <div className="w-full lg:flex-1 flex flex-col gap-5 text-center lg:text-left items-center lg:items-start">
          <h2
            className="font-semibold leading-[1.15]"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)', color: '#0f1f3d', letterSpacing: '-0.4px' }}
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

      {/* ── Bottom CTA ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        <div
          className="relative overflow-hidden rounded-2xl px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-8"
          style={{ background: '#0a1128', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Ghost N7 */}
          <div
            className="absolute right-0 top-1/2 select-none pointer-events-none"
            style={{
              transform: 'translateY(-50%)',
              fontSize: 'clamp(120px, 18vw, 220px)',
              fontWeight: 800,
              fontFamily: "'Sora', sans-serif",
              color: 'transparent',
              WebkitTextStroke: '1.5px rgba(255,255,255,0.06)',
              letterSpacing: '-4px',
              lineHeight: 1,
            }}
          >
            N7
          </div>
          <div className="relative z-10 flex flex-col gap-5 lg:max-w-[55%]">
            <h2
              className="text-white font-semibold leading-[1.15]"
              style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', letterSpacing: '-0.5px' }}
            >
              Take the full advantage of going paper-less now.
            </h2>
            <p className="text-[13px] md:text-[14px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Archivo', sans-serif", maxWidth: 380 }}>
              N7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>
          <div className="relative z-10 flex gap-4 lg:ml-auto flex-wrap">
            <Button variant="outline">Contact Us</Button>
            <Button variant="primary">Request Demo</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
