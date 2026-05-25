type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  onClick?: () => void;
  className?: string;
};

export default function Button({ children, variant = 'primary', onClick, className = '' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`text-white text-[11px] tracking-[0.16em] uppercase px-10 py-4 transition-all ${className}`}
      style={{
        borderRadius: 12,
        fontFamily: "'Chivo Mono', monospace",
        fontWeight: 400,
        ...(variant === 'primary'
          ? { background: 'linear-gradient(180deg, #00B4FD 0%, #003ACE 100%)' }
          : { background: 'transparent', border: '1px solid rgba(255,255,255,0.25)' }),
      }}
      onMouseEnter={(e) => {
        if (variant === 'primary') (e.currentTarget as HTMLButtonElement).style.opacity = '0.9';
        else (e.currentTarget as HTMLButtonElement).style.background = 'rgba(255,255,255,0.05)';
      }}
      onMouseLeave={(e) => {
        if (variant === 'primary') (e.currentTarget as HTMLButtonElement).style.opacity = '1';
        else (e.currentTarget as HTMLButtonElement).style.background = 'transparent';
      }}
    >
      {children}
    </button>
  );
}
