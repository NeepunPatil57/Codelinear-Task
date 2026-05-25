import Button from './Button';

const CoreBankingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3C14 3 20 6 20 14C20 22 14 25 14 25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M14 3C14 3 8 6 8 14C8 22 14 25 14 25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <circle cx="14" cy="14" r="11" stroke="white" strokeWidth="1.3" strokeOpacity="0.7"/>
    <path d="M3 14H25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M4.5 9H23.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M4.5 19H23.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
  </svg>
);

const DigitalBankingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3V25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M3 14H25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M5.5 5.5L22.5 22.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M22.5 5.5L5.5 22.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
  </svg>
);

const OpenBankingIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <circle cx="10" cy="14" r="7" stroke="white" strokeWidth="1.3" strokeOpacity="0.7"/>
    <circle cx="18" cy="14" r="7" stroke="white" strokeWidth="1.3" strokeOpacity="0.7"/>
  </svg>
);

const LoanOriginationIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3L25 14L14 25L3 14L14 3Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" strokeOpacity="0.7"/>
    <path d="M14 8L20 14L14 20L8 14L14 8Z" stroke="white" strokeWidth="1.3" strokeLinejoin="round" strokeOpacity="0.7"/>
  </svg>
);

const LoanManagementIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
    <path d="M14 3V25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M3 14H25" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M5.5 5.5L22.5 22.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <path d="M22.5 5.5L5.5 22.5" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeOpacity="0.7"/>
    <circle cx="14" cy="14" r="3" stroke="white" strokeWidth="1.3" strokeOpacity="0.7"/>
  </svg>
);

const solutions = [
  {
    icon: <CoreBankingIcon />,
    title: 'Core Banking CB7',
    description: 'CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations for your employees, improve risk management, increase productivity, and ensure full regulatory compliance.',
    badge: null,
  },
  {
    icon: <DigitalBankingIcon />,
    title: 'Digital Banking N7',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: null,
  },
  {
    icon: <OpenBankingIcon />,
    title: 'Open Banking',
    description: 'Our API banking helps you to gain actionable insights, enable account aggregation, offer predictive budgeting tools, streamline customer onboarding, KYC, and payment initiation, and introduce enhanced credit scoring.',
    badge: null,
  },
  {
    icon: <LoanOriginationIcon />,
    title: 'Loan Origination System',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: 'NBFC',
  },
  {
    icon: <LoanManagementIcon />,
    title: 'Loan Management System',
    description: 'N7 brings full capabilities across strategy, human-centred design, operations, engineering and data science to create and deliver disruptive innovation. Our approach to building digital banks is specifically designed to help clients',
    badge: 'NBFC',
  },
];

const SolutionCard = ({
  icon,
  title,
  description,
  badge,
  borderRight,
  borderBottom,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  badge: string | null;
  borderRight: boolean;
  borderBottom: boolean;
}) => (
  <div
    className="flex flex-col gap-4 p-6 md:p-8"
    style={{
      borderRight: borderRight ? '1px solid rgba(255,255,255,0.07)' : undefined,
      borderBottom: borderBottom ? '1px solid rgba(255,255,255,0.07)' : undefined,
    }}
  >
    <div className="flex items-start justify-between">
      <div style={{ opacity: 0.75 }}>{icon}</div>
      {badge && (
        <span
          className="text-[9px] tracking-[0.14em] uppercase"
          style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Chivo Mono', monospace" }}
        >
          {badge}
        </span>
      )}
    </div>
    <h3
      className="text-white font-semibold text-[17px] md:text-[19px] leading-snug"
      style={{ fontFamily: "'Sora', sans-serif" }}
    >
      {title}
    </h3>
    <p
      className="text-[13px] leading-[1.7] flex-1"
      style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
    >
      {description}
    </p>
    <button
      className="flex items-center gap-1.5 text-[10px] tracking-[0.16em] uppercase transition-opacity hover:opacity-70 self-start"
      style={{ color: '#00B4FD', fontFamily: "'Chivo Mono', monospace" }}
    >
      Learn More
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d="M2 7H12M8 3L12 7L8 11" stroke="#00B4FD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    </button>
  </div>
);

export default function SolutionsSection() {
  return (
    <section
      style={{ background: '#07090f', fontFamily: "'Sora', sans-serif" }}
      className="w-full"
    >
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-0"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left column */}
        <div className="w-full lg:w-[320px] lg:flex-shrink-0 flex flex-col gap-8 lg:pr-12 lg:pt-8">
          <h2
            className="text-white font-semibold leading-[1.15]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 40px)', letterSpacing: '-0.5px' }}
          >
            All of our solutions are tailor-made to your needs
          </h2>
          <Button variant="outline" className="self-start">Request Demo</Button>
        </div>

        {/* Right grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2">
          {solutions.map((s, i) => (
            <SolutionCard
              key={s.title}
              {...s}
              borderRight={false}
              borderBottom={false}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
