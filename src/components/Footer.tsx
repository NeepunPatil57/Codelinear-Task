const addresses = [
  {
    city: 'London',
    text: 'Linkia Infosystems Ltd — CB7, 29 Main Road Scunthorpe, YN24 9EP, England, United Kingdom',
  },
  {
    city: 'Dubai',
    text: 'Linkia Infosystems Ltd — CB7, Jumeirah Business, Centre 5, Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    city: 'London',
    text: 'Linkia Infosystems Ltd — CB7 Nirmal, Anand Nagar, Sureety Road, Pune Maharashtra, 411041, India',
  },
];

const footerLinks = {
  Solutions: [
    'Core Banking CB7',
    'Digital Banking N7',
    'Open Banking',
    'Loan Origination System',
    'Loan Management System',
    'Digital Transformation',
  ],
  'N7 Banking': [
    'About Us',
    'Solutions',
    'Contact',
    'Company',
    'Careers',
    'Insights',
    'Core Team',
    'Brand Center',
  ],
  'Our Socials': ['LinkedIn', 'X'],
};

const ArrowIcon = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="flex-shrink-0">
    <path d="M2 5H8M5.5 2.5L8 5L5.5 7.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: '#07090f', fontFamily: "'Sora', sans-serif" }}>
      <div className="w-full px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-8" style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* Top row — N7 + addresses */}
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16 mb-14">
          {/* Large N7 */}
          <div className="flex-shrink-0">
            <span
              className="font-bold leading-none select-none"
              style={{
                fontSize: 'clamp(80px, 14vw, 160px)',
                fontFamily: "'Sora', sans-serif",
                background: 'linear-gradient(90deg, #00B4FD 0%, #003ACE 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
                letterSpacing: '-4px',
                lineHeight: 0.9,
              }}
            >
              N7
            </span>
          </div>

          {/* Addresses */}
          <div className="flex flex-col sm:flex-row gap-8 lg:gap-12 flex-1">
            {addresses.map((addr) => (
              <div key={addr.text} className="flex-1 flex flex-col gap-2">
                <span
                  className="text-[10px] tracking-[0.14em] uppercase font-medium"
                  style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Chivo Mono', monospace" }}
                >
                  {addr.city}
                </span>
                <p
                  className="text-[12px] leading-[1.7]"
                  style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Archivo', sans-serif" }}
                >
                  {addr.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Links row */}
        <div
          className="flex flex-col sm:flex-row gap-10 sm:gap-8 pb-12"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)', paddingTop: 40 }}
        >
          {Object.entries(footerLinks).map(([section, links]) => (
            <div key={section} className="flex-1 flex flex-col gap-3">
              <span
                className="text-[10px] tracking-[0.14em] uppercase font-medium mb-1"
                style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Chivo Mono', monospace" }}
              >
                {section}
              </span>
              {links.map((link) => (
                <button
                  key={link}
                  className="flex items-center justify-between text-[13px] hover:text-white transition-colors text-left group"
                  style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Archivo', sans-serif" }}
                >
                  {link}
                  <span style={{ color: 'rgba(255,255,255,0.25)' }} className="group-hover:text-white/60 transition-colors">
                    <ArrowIcon />
                  </span>
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div
          className="pt-6 text-center"
          style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}
        >
          <p
            className="text-[11px] leading-[1.7]"
            style={{ color: 'rgba(255,255,255,0.25)', fontFamily: "'Archivo', sans-serif" }}
          >
            © Copyright 2025 by Linkia Infosystems Limited — CB7 and N7 are Commercial Brands — Registered under the Companies Act 1996 in England and Wales | Number of incorporation 11319981
          </p>
        </div>
      </div>
    </footer>
  );
}
