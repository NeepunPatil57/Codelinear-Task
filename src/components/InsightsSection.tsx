import { useState, useEffect, useRef } from 'react';
import Button from './Button';


const insightPosts = [
  { tag: 'Getting Started', title: 'How to transition from a traditional to a digital bank', author: 'David Eady', date: '17/09/24' },
  { tag: 'Getting Started', title: 'How to transition from a traditional to a digital bank', author: 'David Eady', date: '17/09/24' },
  { tag: 'Getting Started', title: 'How to transition from a traditional to a digital bank', author: 'David Eady', date: '17/09/24' },
];

const caseStudies = [
  { tag: 'Getting Started', title: 'How we help brand\n reach out to\n more people', company: 'Zoomerr' },
  { tag: 'Getting Started', title: 'How we helped\na fintech startup\n scale operations', company: 'Shells' },
  { tag: 'Case Study', title: 'Digital\n transformation for\n modern banking', company: 'SmartFinder' },
  { tag: 'Case Study', title: 'Redefining\n customer experience\n in fintech', company: 'Zoomerr' },
];

export default function InsightsSection() {
  const [caseIdx, setCaseIdx] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [exitIdx, setExitIdx] = useState<number | null>(null);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');

  const autoRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const pausedRef = useRef(false);
  const caseIdxRef = useRef(0);

  const advanceSlide = () => {
    caseIdxRef.current = (caseIdxRef.current + 1) % caseStudies.length;
    const next = caseIdxRef.current;
    setDirection('next');
    setExitIdx(prev => { return prev; }); // capture current before update
    setCaseIdx(cur => {
      setExitIdx(cur);
      return next;
    });
    setAnimating(true);
    setTimeout(() => { setExitIdx(null); setAnimating(false); }, 750);
  };

  const resetAuto = () => {
    if (autoRef.current) clearInterval(autoRef.current);
    autoRef.current = setInterval(() => {
      if (pausedRef.current) return;
      advanceSlide();
    }, 1500);
  };

  useEffect(() => {
    resetAuto();
    return () => { if (autoRef.current) clearInterval(autoRef.current); };
  }, []);

  const navigate = (newIdx: number) => {
    if (animating || newIdx === caseIdx) return;
    const n = caseStudies.length;
    const isNext = (newIdx - caseIdx + n) % n <= n / 2;
    setDirection(isNext ? 'next' : 'prev');
    setExitIdx(caseIdx);
    setAnimating(true);
    setCaseIdx(newIdx);
    caseIdxRef.current = newIdx;
    setTimeout(() => { setExitIdx(null); setAnimating(false); }, 750);
    resetAuto();
  };

  return (
    <div style={{ background: '#07090f' }}>

      {/* ── Insights ── */}
      <div
        className="w-full px-4 sm:px-8 md:px-14 lg:px-20 py-12 md:py-20 lg:py-24 flex flex-col lg:flex-row gap-8 lg:gap-10"
        style={{ maxWidth: '100%', margin: '0 auto' }}
      >
        {/* Left */}
        <div className="w-full lg:w-1/2 lg:flex-shrink-0 flex flex-col gap-6 justify-start lg:pt-2 relative">
          {/* Blob */}
          <div style={{
            position: 'absolute',
            top: '2%',
            left: '-5%',
            width: 620,
            height: 620,
            background: 'radial-gradient(circle, rgba(0,100,180,0.35) 0%, rgba(0,60,140,0.15) 50%, transparent 75%)',
            pointerEvents: 'none',
            filter: 'blur(40px)',
            zIndex: 0,
          }} />
          <h2
            className="text-white leading-[1.15] relative z-10 text-center lg:text-left"
            style={{ fontSize: 'clamp(26px, 3vw, 38px)', letterSpacing: '-0.3px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            Get yourself up-to-speed on all<br />the things happening in<br />fintech
          </h2>
          <button
            className="text-white text-[10px] tracking-[0.16em] uppercase px-8 py-3 transition-all duration-300 ease-out hover:bg-white/5 hover:scale-105 active:scale-95 active:duration-100 transform-gpu will-change-transform self-center lg:self-start relative z-10"
            style={{ border: '1px solid rgba(255,255,255,0.4)', borderRadius: 12, fontFamily: "'Chivo Mono', monospace", background: 'transparent', minWidth: 180 }}
          >
            Insights
          </button>
        </div>

        {/* Right — 2×2 grid */}
        <div className="flex-1 flex flex-col gap-4 sm:gap-8">
          {/* Row 1 — single horizontal card */}
          <div
            className="flex flex-col sm:flex-row rounded-2xl overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 cursor-pointer hover:ring-1 hover:ring-[#2490BB]/40 hover:shadow-[0_12px_40px_rgba(0,180,253,0.14)]"
            style={{ background: '#01141B', border: 'none' }}
          >
            {/* Image portion */}
            <div className="flex-shrink-0 p-3 sm:p-4 w-full sm:w-[50%] flex items-center justify-center sm:block">
              <div className="rounded-xl overflow-hidden w-[65%] sm:w-full">
                <img src="/assets/squares.png" alt="" className="w-full object-cover" style={{ aspectRatio: '1/1' }} />
              </div>
            </div>
            {/* Content portion */}
            <div className="flex flex-col p-5 pt-8 sm:p-6 sm:pl-4 sm:pt-10 flex-1 justify-between gap-4 items-center sm:items-start text-center sm:text-left">
              <div className="flex flex-col gap-3">
                <span className="text-[9px] tracking-[0.14em] uppercase" style={{ color: '#2490BB', fontFamily: "'Chivo Mono', monospace" }}>
                  {insightPosts[0].tag}
                </span>
                <h3 className="text-white font-semibold leading-snug" style={{ fontSize: 'clamp(16px, 2vw, 22px)', fontFamily: "'Sora', sans-serif" }}>
                  How to transition<br />from a traditional to a<br />digital bank
                </h3>
                <p className="text-[12px] flex gap-5" style={{ color: '#64A8C4', fontFamily: "'Archivo', sans-serif" }}>
                  <span>{insightPosts[0].author}</span>
                  <span>{insightPosts[0].date}</span>
                </p>
              </div>
              <button
                className="w-full text-white text-[9px] tracking-[0.14em] uppercase py-3 transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 active:scale-95 active:duration-100 transform-gpu"
                style={{ border: '1px solid rgba(255,255,255,0.25)', borderRadius: 10, fontFamily: "'Chivo Mono', monospace" }}
              >
                Read More
              </button>
            </div>
          </div>

          {/* Row 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-8">
            {insightPosts.slice(1).map((post, i) => (
              <div
                key={i}
                className="rounded-2xl flex flex-col p-5 pt-10 sm:p-6 sm:pt-10 items-center sm:items-start text-center sm:text-left transition-all duration-300 ease-out hover:scale-[1.02] hover:-translate-y-2 cursor-pointer hover:ring-1 hover:ring-[#2490BB]/40 hover:shadow-[0_12px_40px_rgba(0,180,253,0.14)] min-h-[260px] sm:min-h-[320px]"
                style={{ background: '#01141B', border: 'none' }}
              >
                <span className="text-[11px] tracking-[0.14em] uppercase mb-4" style={{ color: '#2490BB', fontFamily: "'Chivo Mono', monospace" }}>
                  {post.tag}
                </span>
                <h3 className="text-white font-semibold leading-snug" style={{ fontSize: 'clamp(16px, 2vw, 23px)', fontFamily: "'Sora', sans-serif" }}>
                  How to transition<br />from a traditional to a<br />digital bank
                </h3>
                <p className="text-[12px] flex gap-5 mt-3" style={{ color: '#64A8C4', fontFamily: "'Archivo', sans-serif" }}>
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </p>
                <button
                  className="mt-auto w-full text-white text-[9px] tracking-[0.14em] uppercase py-3 transition-all duration-300 ease-out hover:bg-white/10 hover:scale-105 active:scale-95 active:duration-100 transform-gpu mt-6"
                  style={{ border: '1px solid rgba(255,255,255,0.25)', borderRadius: 10, fontFamily: "'Chivo Mono', monospace" }}
                >
                  Read More
                </button>
              </div>
            ))}
          </div>

          {/* Read all link */}
          <div className="flex justify-end pt-1">
            <button
              className="flex items-center gap-2 text-[11px] tracking-[0.14em] uppercase hover:opacity-70 transition-opacity"
              style={{ color: '#00B4FD', fontFamily: "'Chivo Mono', monospace" }}
            >
              <span style={{ textDecoration: 'underline', textUnderlineOffset: '4px', textDecorationColor: '#00B4FD' }}>Read All</span>
              <span>Insights →</span>
            </button>
          </div>
        </div>
      </div>

      {/* ── Case Studies ── */}
      <div className="w-full py-16 md:py-20">
        <h2
          className="text-white text-center mb-10"
          style={{ fontSize: 'clamp(26px, 3vw, 38px)', letterSpacing: '-0.3px', fontFamily: "'Sora', sans-serif", fontWeight: 400 }}
        >
          Our Case Studies
        </h2>

        {/* Carousel */}
        <div className="overflow-hidden h-[460px] sm:h-[323px] lg:h-[370px]">
          <div className="relative h-full">
            {caseStudies.map((s, i) => {
              const n = caseStudies.length;
              const isActive = i === caseIdx;
              const isExiting = i === exitIdx;
              const stackPos = (i - caseIdx + n) % n; // 0=active,1=behind1,2=behind2,...

              if (!isActive && !isExiting && stackPos > 2) return null;

              let transform = '';
              let opacity = 0;
              let zIndex = 0;
              let pointerEvents: 'auto' | 'none' = 'none';

              if (isExiting) {
                const flyX = direction === 'next' ? '-140%' : '140%';
                const rot = direction === 'next' ? '-12deg' : '12deg';
                transform = `translateX(calc(-50% + ${flyX})) rotate(${rot}) scale(0.85)`;
                opacity = 0;
                zIndex = 8;
              } else if (isActive) {
                transform = 'translateX(-50%) translateY(0px) scale(1) rotate(0deg)';
                opacity = 1;
                zIndex = 10;
                pointerEvents = 'auto';
              } else if (stackPos === 1) {
                transform = 'translateX(calc(-50% - 7%)) scale(0.95)';
                opacity = 0.45;
                zIndex = 6;
              } else if (stackPos === 2) {
                transform = 'translateX(calc(-50% - 13%)) scale(0.90)';
                opacity = 0.22;
                zIndex = 4;
              }

              return (
                <div
                  key={i}
                  className="absolute top-0 bottom-0"
                  style={{
                    left: '50%',
                    width: 'min(calc(100vw - 32px), 940px)',
                    transition: isExiting
                      ? 'transform 0.75s cubic-bezier(0.4,0,1,1), opacity 0.7s ease'
                      : 'transform 0.7s cubic-bezier(0.22,1,0.36,1), opacity 0.7s ease',
                    transform,
                    opacity,
                    zIndex,
                    pointerEvents,
                  }}
                  onMouseEnter={isActive ? () => { pausedRef.current = true; } : undefined}
                  onMouseLeave={isActive ? () => { pausedRef.current = false; advanceSlide(); resetAuto(); } : undefined}
                >
                  <div
                    className="flex flex-col sm:flex-row h-full overflow-hidden"
                    style={{ borderRadius: 18, background: '#01141B', border: '1px solid rgba(255,255,255,0.07)' }}
                  >
                    {/* Image */}
                    <div className="flex-shrink-0 p-3 sm:p-4 sm:h-full sm:w-[42%] h-[180px] w-full">
                      <div className="w-full h-full rounded-xl overflow-hidden">
                        <img src="/assets/squares.png" alt="" className="w-full h-full object-cover sm:object-contain" />
                      </div>
                    </div>
                    {/* Content */}
                    <div className="flex flex-col gap-5 sm:gap-7 px-8 pb-5 pt-2 sm:p-8 flex-1 justify-center items-start text-left mx-auto sm:mx-0 w-full">
                      <span className="text-[13px] tracking-[0.14em] uppercase" style={{ color: '#2490BB', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}>
                        {s.tag}
                      </span>
                      <h3 className="text-white font-semibold leading-snug" style={{ fontSize: 'clamp(17px, 2.5vw, 32px)', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}>
                        {s.title.split('\n').map((line, i, arr) => (
                          <span key={i}>{line}{i < arr.length - 1 && <br className="hidden sm:block" />}</span>
                        ))}
                      </h3>
                      <div className="flex items-center gap-2">
                        {s.company === 'Zoomerr' ? (
                          <div className="flex items-center gap-2">
                            <img src="/zommer.svg" alt="Zoomerr" style={{ height: 22 }} />
                            <span className="text-[15px] sm:text-[17px]" style={{ color: '#586E84', fontFamily: "'Archivo', sans-serif" }}>Zoomerr</span>
                          </div>
                        ) : s.company === 'Shells' ? (
                          <div className="flex items-center gap-2">
                            <img src="/shells.svg" alt="Shells" style={{ height: 22 }} />
                            <span className="text-[12px] sm:text-[13px]" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Archivo', sans-serif" }}>Shells</span>
                          </div>
                        ) : s.company === 'SmartFinder' ? (
                          <div className="flex items-center gap-2">
                            <img src="/smart.svg" alt="SmartFinder" style={{ height: 22 }} />
                            <span className="text-[12px] sm:text-[13px]" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Archivo', sans-serif" }}>SmartFinder</span>
                          </div>
                        ) : (
                          <>
                            <div className="w-6 h-6 sm:w-7 sm:h-7 rounded-full flex items-center justify-center" style={{ background: 'rgba(255,255,255,0.12)' }}>
                              <span style={{ fontSize: 11 }}>⚡</span>
                            </div>
                            <span className="text-[12px] sm:text-[13px]" style={{ color: 'rgba(255,255,255,0.6)', fontFamily: "'Archivo', sans-serif" }}>{s.company}</span>
                          </>
                        )}
                      </div>
                      <button
                        className="w-full text-white text-[9px] tracking-[0.14em] uppercase py-2.5 sm:py-3 transition-all hover:bg-white/10 hover:scale-105 active:scale-95 transform-gpu mt-1 sm:mt-2"
                        style={{ border: '1px solid rgba(255,255,255,0.25)', borderRadius: 8, fontFamily: "'Chivo Mono', monospace", fontWeight: 400, color: '#E9F4F980' }}
                      >
                        Read More
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex flex-col items-center gap-3 mt-5 sm:mt-6">
          <div className="flex items-center gap-3 sm:gap-4">
            <button
              onClick={() => navigate((caseIdx - 1 + caseStudies.length) % caseStudies.length)}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all hover:bg-[#00B4FD]/10"
              style={{ border: '1.5px solid #00B4FD' }}
            >
              <img src="/arrow.svg" width="18" height="18" alt="Previous" />
            </button>
            <div className="flex items-center gap-2">
              {caseStudies.map((_, i) => (
                <button
                  key={i}
                  onClick={() => navigate(i)}
                  className="transition-all rounded-full"
                  style={{
                    width: i === caseIdx ? 32 : 10,
                    height: 10,
                    background: 'transparent',
                    border: `1.5px solid ${i === caseIdx ? '#00B4FD' : 'rgba(0,180,253,0.35)'}`,
                  }}
                />
              ))}
            </div>
            <button
              onClick={() => navigate((caseIdx + 1) % caseStudies.length)}
              className="w-9 h-9 sm:w-11 sm:h-11 rounded-full flex items-center justify-center transition-all hover:bg-[#00B4FD]/10"
              style={{ border: '1.5px solid #00B4FD' }}
            >
              <img src="/arrow.svg" width="18" height="18" alt="Next" style={{ transform: 'rotate(180deg)' }} />
            </button>
          </div>

          {/* View All — aligned to card right edge */}
          <div style={{ width: 'min(calc(100vw - 32px), 940px)' }} className="flex justify-end px-1">
            <button
              className="flex items-center gap-2 text-[10px] tracking-[0.14em] uppercase hover:opacity-70 transition-opacity"
              style={{ color: '#00B4FD', fontFamily: "'Chivo Mono', monospace" }}
            >
              View All →
            </button>
          </div>
        </div>
      </div>

      {/* ── CTA ── */}
      <div
        className="w-full px-6 md:px-12 lg:px-20 py-16 md:py-20 lg:py-24 flex flex-col lg:flex-row items-center lg:items-center gap-8 text-center lg:text-left"
        style={{ background: '#07090f' }}
      >
        <div className="flex flex-col gap-4 items-center lg:items-start lg:max-w-[55%]">
          <h2
            className="text-white leading-[1.15]"
            style={{ fontSize: 'clamp(28px, 3.5vw, 48px)', letterSpacing: '-0.5px', fontFamily: "'Archivo', sans-serif", fontWeight: 400 }}
          >
            Take the full advantage of<br />going <span style={{ whiteSpace: 'nowrap' }}>paper-less</span> now.
          </h2>
          <p
            className="text-[13px] md:text-[14px] leading-[1.7]"
            style={{ color: 'rgba(255,255,255,0.45)', fontFamily: "'Archivo', sans-serif", maxWidth: 420 }}
          >
            CB7 helps your financial institution improve the client experience, automate and optimize procedures, simplify banking operations
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-8 lg:ml-auto w-full sm:w-auto">
          <Button variant="outline" className="w-[75%] sm:w-auto mx-auto sm:mx-0">Contact Us</Button>
          <Button variant="primary" className="w-[75%] sm:w-auto mx-auto sm:mx-0">Request Demo</Button>
        </div>
      </div>

    </div>
  );
}
