import Container from './ui/Container';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // useNavigate ve useLocation eklendi
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useCommandMenu } from '../context/CommandMenuContext';
import { Moon, Sun, Command } from 'lucide-react';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { toggle } = useCommandMenu();

  const location = useLocation();
  const navigate = useNavigate();

  // Sayfa içi scroll veya sayfa değişimi yapan akıllı fonksiyon
  const handleNavigation = (id: string) => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const navItems = [
    { label: t('Projects', 'Projeler'), id: 'work' },
    { label: t('Profile', 'Profil'), id: 'about' },
    { label: t('Stack', 'Birikimim'), id: 'expertise' },
    { label: t('Approach', 'Yaklaşım'), id: 'approach' },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-light)] bg-[var(--bg-main)]/80 backdrop-blur-md transition-colors duration-300">
      <Container className="flex items-center justify-between h-16 relative">

        {/* SOL: LOGO */}
        <div className="flex-1 flex justify-start">
          <Link
            to="/"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="font-serif font-bold text-2xl tracking-tight text-[var(--text-main)] hover:opacity-80 transition-opacity"
          >
            bugrakaanalp
          </Link>
        </div>

        {/* ORTA: NAVIGASYON LINKLERI (Desktop) */}
        <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden lg:flex items-center gap-6">
          {/* 1. Sayfa İçi Linkler */}
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => handleNavigation(item.id)}
              className="
                        font-serif text-xs font-bold uppercase tracking-[0.2em] 
                        /* LIGHT: Soluk Gri, DARK: Parlak Beyaz */
                        text-[var(--text-dim)] dark:text-[var(--text-main)]
                        hover:text-[var(--text-main)] 
                        transition-colors duration-200
                        relative group
                    "
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--text-main)] transition-all duration-300 group-hover:w-full" />
            </button>
          ))}

          {/* Ayırıcı Nokta */}
          <span className="w-1 h-1 rounded-full bg-[var(--border-light)]" />

          {/* 2. Services Linki (Ayrı Sayfa) */}
          <Link
            to="/services"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="
                    font-serif text-xs font-bold uppercase tracking-[0.2em] 
                    text-[var(--text-dim)] dark:text-[var(--text-main)]
                    hover:text-[var(--text-main)] 
                    transition-colors duration-200
                    relative group
                "
          >
            {t('Services', 'Hizmetler')}
            <span className="absolute -bottom-1 left-0 w-0 h-px bg-[var(--text-main)] transition-all duration-300 group-hover:w-full" />
          </Link>
        </nav>

        {/* SAĞ: ACTIONS */}
        <div className="flex-1 flex justify-end items-center gap-2 md:gap-3">

          {/* COMMAND MENU BUTTON */}
          <button
            onClick={toggle}
            className="p-2 rounded-md hover:bg-[var(--bg-secondary)] text-[var(--text-main)] transition-colors border border-transparent hover:border-[var(--border-light)] group"
            aria-label="Open Command Menu"
          >
            <Command size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
          </button>

          {/* THEME TOGGLE */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-md hover:bg-[var(--bg-secondary)] text-[var(--text-main)] transition-colors border border-transparent hover:border-[var(--border-light)]"
            aria-label="Toggle Theme"
          >
            {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
          </button>

          <div className="h-4 w-px bg-[var(--border-light)] mx-1" />

          {/* LANGUAGE */}
          <div className="flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border-light)] p-1 rounded-md shadow-sm">
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
        </div>

      </Container>
    </header>
  );
}