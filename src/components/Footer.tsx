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

const addresses = [
  {
    city: 'London',
    text: 'Linktia Infosystems Ltd – CB7, 26 Main Road Sundridge, TN14 6EP, England, United Kingdom.',
  },
  {
    city: 'Dubai',
    text: 'Linktia Infosystems Ltd – CB7, Jumeirah Business, Center 5 Cluster W, Jumeirah Lakes Towers, Dubai, United Arab Emirates',
  },
  {
    city: 'London',
    text: 'Linktia Infosystems Ltd – CB7, Nirmal, Anand Nagar, Suncity Road, Pune, Maharashtra, 411041, India',
  },
];

const ArrowIcon = () => (
  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
    <path d="M3 8H13M9 4L13 8L9 12" stroke="#00B4FD" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Footer() {
  return (
    <footer style={{ background: '#07090f', fontFamily: "'Archivo', sans-serif", overflowX: 'hidden' }}>
      <div className="w-full px-6 md:px-12 lg:px-16 pt-16 md:pt-20 pb-6" style={{ maxWidth: 1400, margin: '0 auto' }}>

        {/* ── Desktop grid layout (4 columns: N7 | addr1 | addr2 | addr3) ── */}
        <div className="hidden lg:grid gap-x-8 mb-20 items-start" style={{ gridTemplateColumns: '32% 1fr 1fr 1fr' }}>

          {/* Row 1: N7 image */}
          <div className="row-start-1 col-start-1">
            <img src="/assets/footerimg.png" alt="N7" className="w-full h-auto" />
          </div>

          {/* Row 1: Address columns */}
          {addresses.map((addr, idx) => (
            <div key={idx} className="flex flex-col gap-3" style={{ gridRow: 1, gridColumn: idx + 2, paddingTop: 0 }}>
              <span className="text-white text-[15px] font-medium" style={{ }}>
                {addr.city}
              </span>
              <p className="text-[13px] leading-[1.75]" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Archivo', sans-serif" }}>
                {addr.text}
              </p>
            </div>
          ))}

          {/* Spacer row */}
          <div style={{ gridRow: 2, gridColumn: '1 / -1', height: 32 }} />

          {/* Row 3: empty N7 column */}
          <div style={{ gridRow: 3, gridColumn: 1 }} />

          {/* Row 3: Link columns */}
          {Object.entries(footerLinks).map(([section, links], idx) => (
            <div key={section} className="flex flex-col gap-1" style={{ gridRow: 3, gridColumn: idx + 2, maxWidth: 180 }}>
              <span className="text-white text-[15px] font-medium mb-4" style={{ }}>
                {section}
              </span>
              {links.map((link) => (
                <button
                  key={link}
                  className="flex items-center justify-between text-[13px] py-1.5 hover:text-white transition-colors text-left"
                  style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Archivo', sans-serif" }}
                >
                  <span>{link}</span>
                  <ArrowIcon />
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* ── Mobile / tablet stacked layout ── */}
        <div className="flex flex-col gap-10 lg:hidden mb-16">
          <img src="/assets/footerimg.png" alt="N7" style={{ width: 'clamp(160px, 40vw, 260px)', height: 'auto' }} />
          <div className="flex flex-col gap-8">
            {addresses.map((addr, idx) => (
              <div key={idx} className="flex flex-col gap-2">
                <span className="text-white text-[14px] font-medium" style={{ }}>{addr.city}</span>
                <p className="text-[12px] leading-[1.7]" style={{ color: 'rgba(255,255,255,0.55)', fontFamily: "'Archivo', sans-serif" }}>{addr.text}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {Object.entries(footerLinks).map(([section, links]) => (
              <div key={section} className="flex flex-col gap-1">
                <span className="text-white text-[14px] font-medium mb-3" style={{ }}>{section}</span>
                {links.map((link) => (
                  <button key={link} className="flex items-center justify-between text-[12px] py-1.5 hover:text-white transition-colors text-left" style={{ color: 'rgba(255,255,255,0.65)', fontFamily: "'Archivo', sans-serif" }}>
                    <span>{link}</span>
                    <ArrowIcon />
                  </button>
                ))}
              </div>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="hidden lg:grid gap-x-8 mt-6" style={{ gridTemplateColumns: '32% 1fr 1fr 1fr' }}>
          <div />
          <div className="col-span-3">
            <p className="text-[12px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Archivo', sans-serif" }}>
              Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
            </p>
          </div>
        </div>
        <div className="lg:hidden mt-8">
          <p className="text-[12px] leading-[1.8]" style={{ color: 'rgba(255,255,255,0.3)', fontFamily: "'Archivo', sans-serif" }}>
            Copyright © 2022 by Linktia Infosystems Limited — [CB7 and N7 as Commercial Brand] — [Registered under the Companies Act 2006 in England and Wales | Number of Incorporation 13100992]
          </p>
        </div>

      </div>
    </footer>
  );
}
