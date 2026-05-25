const NavChevron = () => (
  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
    <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export default function Navbar() {
  return (
    <div className="relative z-10 flex justify-center pt-10 pb-0 px-8">
      <nav
        className="flex items-center justify-between w-full px-3 py-2 max-w-[900px] rounded-[14px] border border-white/[0.07] font-normal"
        style={{
          background: 'rgba(47,47,47,0.698)',
          fontFamily: "'Chivo Mono', monospace",
        }}
      >
        <span className="text-white font-bold text-[18px] tracking-normal select-none">
          N7
        </span>

        <div className="flex items-center gap-9">
          {['Solutions', 'Resources'].map((item) => (
            <button
              key={item}
              className="text-white text-[11px] tracking-[0.16em] uppercase flex items-center gap-1.5 hover:text-white transition-colors"
            >
              {item}
              <NavChevron />
            </button>
          ))}
          <button className="text-white text-[11px] tracking-[0.16em] uppercase hover:text-white transition-colors">
            About Us
          </button>
        </div>

        <button
          className="text-white text-[11px] tracking-[0.16em] uppercase px-6 py-2.5 hover:bg-white/5 transition-all"
          style={{ border: '1px solid rgba(255,255,255,0.3)', borderRadius: 8 }}
        >
          Request Demo
        </button>
      </nav>
    </div>
  );
}
