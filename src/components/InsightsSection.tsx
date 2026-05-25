import { useState } from 'react';
import Button from './Button';

/* ── X Pattern placeholder image ── */
const XPatternBg = ({ className, style }: { className?: string; style?: React.CSSProperties }) => (
  <div className={`overflow-hidden ${className || ''}`} style={{ background: '#071828', ...style }}>
    <svg viewBox="0 0 200 160" fill="none" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
      {([[50,40],[130,40],[50,120],[130,120]] as [number,number][]).map(([cx,cy], i) => (
        <g key={i} transform={`translate(${cx},${cy})`}>
          <path d="M-22,-22 L22,22" stroke="#00AAEE" strokeWidth="7" strokeLinecap="round"/>
          <path d="M22,-22 L-22,22" stroke="#00AAEE" strokeWidth="7" strokeLinecap="round"/>
          <path d="M-22,-22 L-22,-13 M-22,-22 L-13,-22" stroke="#00AAEE" strokeWidth="4" strokeLinecap="round"/>
          <path d="M22,-22 L13,-22 M22,-22 L22,-13" stroke="#00AAEE" strokeWidth="4" strokeLinecap="round"/>
          <path d="M22,22 L22,13 M22,22 L13,22" stroke="#00AAEE" strokeWidth="4" strokeLinecap="round"/>
          <path d="M-22,22 L-13,22 M-22,22 L-22,13" stroke="#00AAEE" strokeWidth="4" strokeLinecap="round"/>
        </g>
      ))}
    </svg>
  </div>
);

const Tag = ({ children }: { children: React.ReactNode }) => (
  <span className="text-[9px] tracking-[0.14em] uppercase" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Chivo Mono', monospace" }}>
    {children}
  </span>
);

const ReadMoreBtn = () => (
  <button
    className="text-white text-[9px] tracking-[0.14em] uppercase px-4 py-2 transition-all hover:bg-white/10 self-start"
    style={{ border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, fontFamily: "'Chivo Mono', monospace" }}
  >
    Read More
  </button>
);

const insightPosts = [
  { tag: 'Getting Started', title: 'How to transition from a traditional to a digital bank', author: 'David Eady', date: '17/09/24' },
  { tag: 'Getting Started', title: 'How to transition from a traditional to a digital bank', author: 'David Eady', date: '17/09/24' },
  { tag: 'Getting Started', title: 'How to transition from a traditional to a digital bank', author: 'David Eady', date: '17/09/24' },
];

const caseStudies = [
  { tag: 'Getting Started', title: 'How we help brand reach out to more people', company: 'Zoomerr' },
  { tag: 'Getting Started', title: 'How we helped a fintech startup scale operations', company: 'Shells' },
  { tag: 'Case Study', title: 'Digital transformation for modern banking', company: 'SmartFinder' },
];

export default function InsightsSection() {
  const [caseIdx, setCaseIdx] = useState(0);
  const study = caseStudies[caseIdx];

  return (
    <div style={{ background: '#07090f' }}>

      {/* ── Insights ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row gap-10 lg:gap-16"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        {/* Left */}
        <div className="w-full lg:w-[280px] lg:flex-shrink-0 flex flex-col gap-6 justify-start lg:pt-2">
          <h2
            className="text-white font-semibold leading-[1.15]"
            style={{ fontSize: 'clamp(22px, 3vw, 32px)', letterSpacing: '-0.4px', fontFamily: "'Sora', sans-serif" }}
          >
            Get yourself up-to-speed on all the things happening in fintech
          </h2>
          <button
            className="text-white text-[10px] tracking-[0.16em] uppercase px-5 py-2.5 transition-all hover:bg-white/5 self-start"
            style={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: 8, fontFamily: "'Chivo Mono', monospace" }}
          >
            Insights
          </button>
        </div>

        {/* Right — cards grid */}
        <div className="flex-1 flex flex-col sm:flex-row gap-4">
          {/* Featured large card */}
          <div
            className="flex-1 flex flex-col rounded-xl overflow-hidden"
            style={{ border: '1px solid rgba(255,255,255,0.07)' }}
          >
            <XPatternBg className="w-full" style={{ height: 180 }} />
            <div className="flex flex-col gap-3 p-5 flex-1" style={{ background: '#0d1220' }}>
              <Tag>{insightPosts[0].tag}</Tag>
              <h3 className="text-white font-semibold text-[15px] leading-snug" style={{ fontFamily: "'Sora', sans-serif" }}>
                {insightPosts[0].title}
              </h3>
              <p className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Archivo', sans-serif" }}>
                {insightPosts[0].author} · {insightPosts[0].date}
              </p>
              <div className="mt-auto pt-2"><ReadMoreBtn /></div>
            </div>
          </div>

          {/* Two smaller cards stacked */}
          <div className="flex-1 flex flex-col gap-4">
            {insightPosts.slice(1).map((post, i) => (
              <div
                key={i}
                className="flex flex-col sm:flex-row rounded-xl overflow-hidden"
                style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#0d1220' }}
              >
                <XPatternBg style={{ width: '100%', height: 100, flexShrink: 0 }} className="sm:w-28 sm:h-auto" />
                <div className="flex flex-col gap-2 p-4 flex-1">
                  <Tag>{post.tag}</Tag>
                  <h3 className="text-white font-semibold text-[13px] leading-snug" style={{ fontFamily: "'Sora', sans-serif" }}>
                    {post.title}
                  </h3>
                  <p className="text-[10px]" style={{ color: 'rgba(255,255,255,0.35)', fontFamily: "'Archivo', sans-serif" }}>
                    {post.author} · {post.date}
                  </p>
                  <div className="mt-auto pt-1"><ReadMoreBtn /></div>
                </div>
              </div>
            ))}

            {/* Read all link */}
            <div className="flex justify-end pt-1">
              <button
                className="flex items-center gap-1.5 text-[10px] tracking-[0.14em] uppercase hover:opacity-70 transition-opacity"
                style={{ color: '#00B4FD', fontFamily: "'Chivo Mono', monospace" }}
              >
                Read All Insights
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2 7H12M8 3L12 7L8 11" stroke="#00B4FD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* ── Case Studies ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 py-16 md:py-20"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        <h2
          className="text-white font-semibold text-center mb-10"
          style={{ fontSize: 'clamp(22px, 3vw, 34px)', letterSpacing: '-0.4px', fontFamily: "'Sora', sans-serif" }}
        >
          Our Case Studies
        </h2>

        {/* Featured card */}
        <div
          className="flex flex-col md:flex-row rounded-xl overflow-hidden"
          style={{ border: '1px solid rgba(255,255,255,0.07)', background: '#0d1220' }}
        >
          {/* Image */}
          <XPatternBg className="w-full md:w-[320px] lg:w-[400px] flex-shrink-0" style={{ minHeight: 220 }} />

          {/* Content */}
          <div className="flex flex-col gap-4 p-6 md:p-8 flex-1 justify-center">
            <Tag>{study.tag}</Tag>
            <h3
              className="text-white font-semibold leading-snug"
              style={{ fontSize: 'clamp(18px, 2.5vw, 26px)', fontFamily: "'Sora', sans-serif" }}
            >
              {study.title}
            </h3>
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-full" style={{ background: 'linear-gradient(135deg,#003ACE,#00B4FD)' }} />
              <span className="text-[12px]" style={{ color: 'rgba(255,255,255,0.5)', fontFamily: "'Archivo', sans-serif" }}>
                {study.company}
              </span>
            </div>
            <div><ReadMoreBtn /></div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-3">
            <button
              onClick={() => setCaseIdx((caseIdx - 1 + caseStudies.length) % caseStudies.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M9 3L5 7L9 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="flex items-center gap-1.5">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCaseIdx(i)}
                  className="transition-all rounded-full"
                  style={{ width: i === caseIdx ? 20 : 6, height: 6, background: i === caseIdx ? '#00B4FD' : 'rgba(255,255,255,0.2)' }}
                />
              ))}
            </div>
            <button
              onClick={() => setCaseIdx((caseIdx + 1) % caseStudies.length)}
              className="w-8 h-8 rounded-full flex items-center justify-center transition-all hover:bg-white/10"
              style={{ border: '1px solid rgba(255,255,255,0.2)' }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M5 3L9 7L5 11" stroke="white" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          <button
            className="flex items-center gap-1.5 text-[10px] tracking-[0.14em] uppercase hover:opacity-70 transition-opacity"
            style={{ color: '#00B4FD', fontFamily: "'Chivo Mono', monospace" }}
          >
            View All
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M2 7H12M8 3L12 7L8 11" stroke="#00B4FD" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* ── CTA Card ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-16 pb-16 md:pb-20 lg:pb-24"
        style={{ maxWidth: 1400, margin: '0 auto' }}
      >
        <div
          className="relative overflow-hidden rounded-2xl px-8 md:px-12 lg:px-16 py-12 md:py-16 flex flex-col lg:flex-row items-start lg:items-center gap-8"
          style={{ background: '#0a1128', border: '1px solid rgba(255,255,255,0.07)' }}
        >
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
            CB7
          </div>
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
          <div className="relative z-10 flex gap-4 lg:ml-auto flex-wrap">
            <Button variant="outline">Contact Us</Button>
            <Button variant="primary">Request Demo</Button>
          </div>
        </div>
      </div>

    </div>
  );
}
