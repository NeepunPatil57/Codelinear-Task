import Button from './Button';


const CheckIcon = () => (
  <img src="/tick.svg" width={26} height={26} alt="check" className="flex-shrink-0 mt-0.5" />
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
    <div style={{ background: '#07090f', overflow: 'hidden' }}>

      {/* ── Block 1: Cloud-based core banking ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 text-center lg:text-left items-center lg:items-start">
          <h2
            className="text-white leading-[1.08]"
            style={{ fontSize: 'clamp(28px, 3.8vw, 48px)', letterSpacing: '-1px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            A complete cloud-based<br />core banking.
          </h2>
          <p
            className="text-[13px] md:text-[14px] leading-[1.7]"
            style={{ color: '#E9F4F9', fontFamily: "'Archivo', sans-serif", maxWidth: 380 }}
          >
            Faster time to market with our cloud-based core banking services
          </p>
          <div className="flex flex-col items-start gap-4">
            <Button variant="primary">Request Demo</Button>
            <LearnMoreLink />
          </div>
        </div>

        {/* Right — laptop image, bleeding off right edge */}
        <div className="w-full lg:flex-1 flex justify-end" style={{ overflow: 'visible' }}>
          <img
            src="/assets/laptop.png"
            alt="AML Dashboard on laptop"
            className="h-auto"
            style={{ width: '160%', maxWidth: 900, marginRight: '-75%' }}
          />
        </div>
      </div>

      {/* ── Block 2: Feature list ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left — laptop image bleeding off left edge */}
        <div className="w-full lg:flex-1 flex justify-start order-2 lg:order-1" style={{ overflow: 'visible' }}>
          <img
            src="/assets/laptop.png"
            alt="Banking Dashboard"
            className="h-auto"
            style={{ width: '160%', maxWidth: 900, marginLeft: '-75%' }}
          />
        </div>

        {/* Right */}
        <div className="w-full lg:flex-1 flex flex-col gap-6 text-center lg:text-left order-1 lg:order-2">
          <h2
            className="text-white leading-[1.2]"
            style={{ fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '-0.3px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            Run a more efficient, flexible, and digitally connected corebanking system
          </h2>
          <p
            className="text-[13px] tracking-[0.1em] uppercase"
            style={{ color: 'rgba(255,255,255,0.4)', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            What you will get:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3 text-left">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-2.5">
                <CheckIcon />
                <span
                  className="text-[13px] md:text-[14px] leading-[1.6]"
                  style={{ color: 'rgba(255,255,255,0.7)', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
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
          className="relative overflow-hidden rounded-2xl px-8 md:px-12 lg:px-16 py-14 md:py-20 flex flex-col lg:flex-row items-start lg:items-center gap-8 lg:gap-0"
          style={{ background: '#060c18', border: '1px solid rgba(0,140,255,0.15)' }}
        >
          {/* Left glow */}
          <div style={{
            position: 'absolute',
            top: '50%',
            left: '-5%',
            transform: 'translateY(-50%)',
            width: 380,
            height: 380,
            background: 'radial-gradient(circle, rgba(0,180,253,0.18) 0%, rgba(0,58,206,0.08) 50%, transparent 75%)',
            pointerEvents: 'none',
            filter: 'blur(30px)',
          }} />

          {/* Ghost "CB7" SVG */}
          <img
            src="/CB7.svg"
            alt=""
            aria-hidden="true"
            className="absolute select-none pointer-events-none"
            style={{
              top: '50%',
              right: '-2%',
              transform: 'translateY(-50%)',
              height: '100%',
              width: 'auto',
              opacity: 0.7,
            }}
          />

          {/* Left text */}
          <div className="relative z-10 flex flex-col gap-5 lg:max-w-[50%]">
            <h2
              className="text-white leading-[1.15]"
              style={{ fontSize: 'clamp(24px, 3.2vw, 42px)', letterSpacing: '-0.5px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
            >
              Take the full advantage of going paper-less now.
            </h2>
            <p
              className="text-[13px] md:text-[14px] leading-[1.7]"
              style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Archivo', sans-serif" }}
            >
              CB7 helps your financial institution improve the client experience,<br />automate and optimize procedures, simplify banking operations.
            </p>
          </div>

          {/* Right buttons */}
          <div className="relative z-10 flex flex-col lg:flex-row gap-8 lg:ml-auto items-center lg:items-center w-full lg:w-auto">
            <Button variant="outline" className="w-[240px] lg:w-auto text-center">Contact Us</Button>
            <Button variant="primary" className="w-[240px] lg:w-auto text-center">Request Demo</Button>
          </div>
        </div>
      </div>

    </div>
  );
}
