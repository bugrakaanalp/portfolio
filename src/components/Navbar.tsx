import Container from './ui/Container';
import { Link } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';

export default function Navbar() {
  const { lang, setLang } = useLanguage();

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-light)] bg-[var(--bg-main)]/80 backdrop-blur-md transition-colors duration-300">
      <Container className="flex items-center justify-between h-16">
        
        {/* LOGO */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif font-bold text-2xl tracking-tight text-[var(--text-main)] hover:opacity-80 transition-opacity"
        >
          bugrakaanalp
        </Link>

        {/* LANGUAGE SWITCHER */}
        <div className="flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border-light)] p-1 rounded-md">
          <button
            onClick={() => setLang('EN')}
            className={`
              px-2 py-1 text-[10px] font-mono rounded-sm transition-all duration-200
              ${lang === 'EN' 
                ? 'bg-[var(--text-main)] text-[var(--bg-main)] font-bold' 
                : 'text-[var(--text-dim)] hover:text-[var(--text-main)]'}
            `}
          >
            EN
          </button>
          <button
            onClick={() => setLang('TR')}
            className={`
              px-2 py-1 text-[10px] font-mono rounded-sm transition-all duration-200
              ${lang === 'TR' 
                ? 'bg-[var(--text-main)] text-[var(--bg-main)] font-bold' 
                : 'text-[var(--text-dim)] hover:text-[var(--text-main)]'}
            `}
          >
            TR
          </button>
        </div>

      </Container>
    </header>
  );
}