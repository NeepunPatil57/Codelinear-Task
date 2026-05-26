import Button from './Button';

const GradientIcon = ({ src, alt }: { src: string; alt: string }) => (
  <div
    style={{
      width: 40,
      height: 40,
      background: 'linear-gradient(to right, #FFFFFF, #8B8B8B)',
      WebkitMaskImage: `url(${src})`,
      maskImage: `url(${src})`,
      WebkitMaskSize: 'contain',
      maskSize: 'contain',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    }}
    aria-label={alt}
  />
);

const CoreBankingIcon = () => <GradientIcon src="/assets/spiral.png" alt="Core Banking" />;
const DigitalBankingIcon = () => <GradientIcon src="/assets/core-banking.png" alt="Digital Banking" />;
const OpenBankingIcon = () => <GradientIcon src="/assets/digital-banking.png" alt="Open Banking" />;
const LoanOriginationIcon = () => <GradientIcon src="/assets/open-banking.png" alt="Loan Origination" />;
const LoanManagementIcon = () => <GradientIcon src="/assets/loan-origination.png" alt="Loan Management" />;

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
    className="flex flex-col gap-4 p-6 md:p-8 relative z-10"
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
      className="text-white text-[17px] md:text-[19px] leading-snug"
      style={{ fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
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
      className="flex items-center gap-1.5 text-[13px] tracking-[0.16em] uppercase transition-opacity hover:opacity-70 self-start"
      style={{
        color: '#00B4FD',
        fontFamily: "'Chivo Mono', monospace",
        textDecoration: 'underline',
        textUnderlineOffset: '4px',
        textDecorationColor: '#00B4FD99',
      }}
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
      className="w-full overflow-hidden"
    >
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row lg:items-start gap-12 lg:gap-48"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left column */}
        <div className="w-full lg:w-[460px] lg:flex-shrink-0 flex flex-col gap-8 lg:pr-8 lg:pt-8 items-center text-center lg:items-start lg:text-left">
          <h2
            className="text-white leading-[1.2]"
            style={{ fontSize: 'clamp(24px, 2.8vw, 32px)', letterSpacing: '-0.5px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            All of our solutions are<br />tailor-made to your needs
          </h2>
          <Button variant="outline" className="self-center lg:self-start min-w-[190px]">Request Demo</Button>
        </div>

        {/* Right grid */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 relative">
          <div style={{
            position: 'absolute',
            top: '55%',
            right: '-250px',
            transform: 'translateY(-50%)',
            width: 600,
            height: 600,
            background: 'radial-gradient(circle, rgba(0,180,253,0.12) 0%, rgba(0,58,206,0.07) 50%, transparent 75%)',
            pointerEvents: 'none',
            zIndex: 0,
          }} />
          {solutions.map((s) => (
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
