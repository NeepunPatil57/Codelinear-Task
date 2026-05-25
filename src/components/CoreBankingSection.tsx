import Button from './Button';

const AMLDashboard = () => (
  <div
    className="w-full rounded-xl overflow-hidden shadow-2xl"
    style={{ background: '#0f1623', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Archivo', sans-serif" }}
  >
    {/* Header */}
    <div className="flex items-center gap-2 px-4 py-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f57' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: '#28ca41' }} />
      </div>
      <span className="text-white text-[11px] font-medium ml-2">AML Dashboard</span>
    </div>
    {/* Stats row */}
    <div className="flex gap-0" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex-1 px-4 py-3" style={{ borderRight: '1px solid rgba(255,255,255,0.07)' }}>
        <div className="text-white text-[22px] font-bold leading-none">450</div>
        <div className="text-[9px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Suspicious Transaction Report</div>
        <div className="text-[8px] mt-0.5" style={{ color: 'rgba(255,255,255,0.25)' }}>As on 23-02-2025</div>
      </div>
      <div className="flex-1 px-4 py-3">
        <div className="text-white text-[22px] font-bold leading-none">3</div>
        <div className="text-[9px] mt-1" style={{ color: 'rgba(255,255,255,0.4)' }}>Top Priority for AML Process</div>
      </div>
    </div>
    {/* Charts row */}
    <div className="flex gap-3 p-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      {/* Donut */}
      <div className="flex items-center justify-center" style={{ width: 80, height: 80 }}>
        <svg width="80" height="80" viewBox="0 0 80 80">
          <circle cx="40" cy="40" r="30" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="12"/>
          <circle cx="40" cy="40" r="30" fill="none" stroke="#00B4FD" strokeWidth="12" strokeDasharray="94 94" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 40 40)"/>
          <circle cx="40" cy="40" r="30" fill="none" stroke="#003ACE" strokeWidth="12" strokeDasharray="50 138" strokeDashoffset="-94" strokeLinecap="round" transform="rotate(-90 40 40)"/>
          <circle cx="40" cy="40" r="30" fill="none" stroke="#f59e0b" strokeWidth="12" strokeDasharray="44 144" strokeDashoffset="-144" strokeLinecap="round" transform="rotate(-90 40 40)"/>
        </svg>
      </div>
      {/* Bar chart */}
      <div className="flex-1 flex items-end gap-1.5 pb-1">
        {[40, 65, 30, 80, 50, 90, 45, 70].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm" style={{ height: h * 0.55, background: i % 3 === 0 ? '#00B4FD' : i % 3 === 1 ? '#003ACE' : 'rgba(255,255,255,0.12)' }} />
        ))}
      </div>
    </div>
    {/* Table */}
    <div className="px-4 py-2">
      <div className="text-[9px] font-semibold mb-2" style={{ color: 'rgba(255,255,255,0.5)' }}>AML Report</div>
      {[1, 2, 3].map((r) => (
        <div key={r} className="flex gap-2 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {[60, 40, 50, 35, 45].map((w, i) => (
            <div key={i} className="rounded-sm" style={{ width: `${w}px`, height: 6, background: 'rgba(255,255,255,0.1)' }} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const GeneralDashboard = () => (
  <div
    className="w-full rounded-xl overflow-hidden shadow-2xl"
    style={{ background: '#0f1623', border: '1px solid rgba(255,255,255,0.08)', fontFamily: "'Archivo', sans-serif" }}
  >
    {/* Header */}
    <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <span className="text-white text-[11px] font-medium">Dashboard</span>
      <div className="flex gap-2">
        {['Overview', 'Analytics', 'Reports'].map(t => (
          <span key={t} className="text-[8px] px-2 py-0.5 rounded" style={{ color: 'rgba(255,255,255,0.4)', background: 'rgba(255,255,255,0.05)' }}>{t}</span>
        ))}
      </div>
    </div>
    {/* Stats */}
    <div className="flex" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      {[{ val: '115', label: 'Total Accounts' }, { val: '940', label: 'Transactions' }, { val: '105', label: 'Active Users' }].map((s, i) => (
        <div key={i} className="flex-1 px-3 py-2.5" style={{ borderRight: i < 2 ? '1px solid rgba(255,255,255,0.07)' : undefined }}>
          <div className="text-white text-[18px] font-bold leading-none">{s.val}</div>
          <div className="text-[8px] mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
        </div>
      ))}
    </div>
    {/* Bar charts */}
    <div className="flex gap-3 p-3" style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}>
      <div className="flex-1 flex items-end gap-1 pb-1">
        {[55, 80, 40, 95, 60, 75, 45, 85, 50, 70].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm" style={{ height: h * 0.5, background: i % 2 === 0 ? '#00B4FD' : 'rgba(255,255,255,0.1)' }} />
        ))}
      </div>
      <div className="flex-1 flex items-end gap-1 pb-1">
        {[70, 45, 85, 55, 90, 40, 75, 60].map((h, i) => (
          <div key={i} className="flex-1 rounded-sm" style={{ height: h * 0.5, background: i % 2 === 0 ? '#003ACE' : 'rgba(255,255,255,0.1)' }} />
        ))}
      </div>
    </div>
    {/* Table */}
    <div className="px-3 py-2">
      {[1, 2, 3, 4].map((r) => (
        <div key={r} className="flex gap-2 py-1.5" style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
          {[50, 35, 55, 40].map((w, i) => (
            <div key={i} className="rounded-sm" style={{ width: `${w}px`, height: 5, background: 'rgba(255,255,255,0.08)' }} />
          ))}
        </div>
      ))}
    </div>
  </div>
);

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0 mt-0.5">
    <circle cx="8" cy="8" r="8" fill="#003ACE" fillOpacity="0.3"/>
    <path d="M4.5 8L7 10.5L11.5 6" stroke="#00B4FD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LearnMoreLink = () => (
  <button
    className="flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase transition-opacity hover:opacity-70 self-start"
    style={{ color: '#00B4FD', fontFamily: "'Chivo Mono', monospace" }}
  >
    Learn More
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
      <path d="M2 7H12M8 3L12 7L8 11" stroke="#00B4FD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  </button>
);

const features = [
  'Customer On Boarding',
  'Managing deposits and withdrawals',
  'Transaction management',
  'Interest Calculation',
  'Payments processing (cash, cheques, mandates, NEFT, RTGS etc.)',
  'CRM Activities',
  'Configuring New Banking Products',
  'Loan disbursal and Loan management',
  'Establishing criteria for minimum balances, interest rates, number of withdrawals allowed and so on.',
];

export default function CoreBankingSection() {
  return (
    <div style={{ background: '#07090f' }}>

      {/* ── Block 1: Cloud-based core banking ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <h2
            className="text-white font-semibold leading-[1.12]"
            style={{ fontSize: 'clamp(28px, 4vw, 48px)', letterSpacing: '-0.5px', fontFamily: "'Sora', sans-serif" }}
          >
            A complete cloud-based<br />core banking.
          </h2>
          <p
            className="text-[13px] md:text-[14px] leading-[1.7]"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Archivo', sans-serif", maxWidth: 340 }}
          >
            Faster time to market with our cloud-based core banking services
          </p>
          <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4">
            <Button variant="primary">Request Demo</Button>
            <LearnMoreLink />
          </div>
        </div>

        {/* Right — dashboard mockup */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-end">
          <div className="w-full" style={{ maxWidth: 520 }}>
            <AMLDashboard />
          </div>
        </div>
      </div>

      {/* ── Block 2: Feature list ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left — dashboard mockup */}
        <div className="w-full lg:flex-1 flex justify-center lg:justify-start order-2 lg:order-1">
          <div className="w-full" style={{ maxWidth: 460 }}>
            <GeneralDashboard />
          </div>
        </div>

        {/* Right */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 text-center lg:text-left order-1 lg:order-2">
          <h2
            className="text-white font-semibold leading-[1.2]"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '-0.3px', fontFamily: "'Sora', sans-serif" }}
          >
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>
          <p
            className="text-[12px] tracking-[0.1em] uppercase"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Chivo Mono', monospace" }}
          >
            What you will get:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-left">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <CheckIcon />
                <span
                  className="text-[12px] md:text-[13px] leading-[1.6]"
                  style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Archivo', sans-serif" }}
                >
                  {f}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Block 3: Paper-less CTA ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        <div
          className="relative overflow-hidden rounded-2xl px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0"
          style={{ background: '#0a1128', border: '1px solid rgba(255,255,255,0.07)' }}
        >
          {/* Ghost "CB7" text */}
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
              userSelect: 'none',
            }}
          >
            CB7
          </div>

          {/* Left text */}
          <div className="relative z-10 flex flex-col gap-5 lg:max-w-[55%]">
            <h2
              className="text-white font-semibold leading-[1.15]"
              style={{ fontSize: 'clamp(24px, 3.5vw, 44px)', letterSpacing: '-0.5px', fontFamily: "'Sora', sans-serif" }}
            >
              Take the full advantage of going paper-less now.
            </h2>
            <p
              className="text-[13px] md:text-[14px] leading-[1.7]"
              style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Archivo', sans-serif", maxWidth: 380 }}
            >
              CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
            </p>
          </div>

          {/* Right buttons */}
          <div className="relative z-10 flex gap-4 lg:ml-auto flex-wrap">
            <Button variant="outline">Contact Us</Button>
            <Button variant="primary">Request Demo</Button>
          </div>
        </div>
      </div>

    </div>
  );
}
