import { useState, useRef, useEffect } from 'react';

const NavChevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const HamburgerIcon = ({ open }: { open: boolean }) => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    {open ? (
      <>
        <path d="M4 4L16 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 4L4 16" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </>
    ) : (
      <>
        <path d="M3 5H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 10H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M3 15H17" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </>
    )}
  </svg>
);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div className="relative z-10 flex justify-center pt-5 pb-0 px-4 md:px-8">
      <div className="w-full max-w-[900px]" ref={ref}>
        <nav
          className="flex items-center justify-between w-full px-3 py-2 md:py-3 rounded-[14px] border border-white/[0.07] font-normal"
          style={{
            background: 'rgba(47,47,47,0.698)',
            fontFamily: "'Chivo Mono', monospace",
          }}
        >
          <span className="text-white font-bold text-[18px] tracking-normal select-none">
            N7
          </span>

          {/* Nav links — hidden on mobile */}
          <div className="hidden md:flex items-center gap-9">
            {['Solutions', 'Resources'].map((item) => (
              <button
                key={item}
                className="text-white text-[11px] tracking-[0.16em] uppercase flex items-center gap-1.5 hover:text-white/70 transition-colors"
              >
                {item}
                <NavChevron />
              </button>
            ))}
            <button className="text-white text-[11px] tracking-[0.16em] uppercase hover:text-white/70 transition-colors">
              About Us
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              className="text-white text-[10px] md:text-[11px] tracking-[0.16em] uppercase px-4 md:px-6 py-2 md:py-2.5 hover:bg-white/5 transition-all"
              style={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: 8 }}
            >
              Request Demo
            </button>

            {/* Hamburger — mobile only */}
            <button
              className="md:hidden p-1.5 hover:bg-white/5 transition-all rounded-lg"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              <HamburgerIcon open={open} />
            </button>
          </div>
        </nav>

        {/* Mobile dropdown */}
        <div
          className="md:hidden overflow-hidden transition-all duration-300 ease-in-out"
          style={{ maxHeight: open ? 200 : 0, opacity: open ? 1 : 0 }}
        >
          <div
            className="mt-1 rounded-[14px] border border-white/[0.07] px-4 py-3 flex flex-col gap-3"
            style={{
              background: 'rgba(47,47,47,0.95)',
              fontFamily: "'Chivo Mono', monospace",
              transform: open ? 'translateY(0)' : 'translateY(-8px)',
              transition: 'transform 0.3s ease',
            }}
          >
            {['Solutions', 'Resources'].map((item) => (
              <button
                key={item}
                className="text-white text-[11px] tracking-[0.16em] uppercase flex items-center gap-1.5 hover:text-white/70 transition-colors text-left"
              >
                {item}
                <NavChevron />
              </button>
            ))}
            <button className="text-white text-[11px] tracking-[0.16em] uppercase hover:text-white/70 transition-colors text-left">
              About Us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
