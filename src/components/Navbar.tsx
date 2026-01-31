import { useState, useEffect } from 'react';
import Container from './ui/Container';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { useCommandMenu } from '../context/CommandMenuContext';
import { Moon, Sun, Command, Menu, X, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const { lang, setLang, t } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { toggle } = useCommandMenu();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  // Sayfa değiştiğinde menüyü kapat
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  // Mobil menü açıkken scroll'u kilitle
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMobileMenuOpen]);

  const handleNavigation = (id: string) => {
    setIsMobileMenuOpen(false);
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
    <>
      <header className="sticky top-0 z-50 w-full border-b border-[var(--border-light)] bg-[var(--bg-main)]/80 backdrop-blur-md transition-colors duration-300">
        <Container className="flex items-center justify-between h-16 relative">

          {/* SOL: LOGO */}
          {/* ÖNEMLİ: pointer-events-none ekledik. Böylece bu kutu genişlese bile ortadaki menüyü engellemez. */}
          <div className="flex-1 flex justify-start relative z-50 pointer-events-none">
            {/* Link'in kendisine pointer-events-auto verdik ki hala tıklanabilsin */}
            <Link
              to="/"
              onClick={() => {
                window.scrollTo({ top: 0, behavior: 'smooth' });
                setIsMobileMenuOpen(false);
              }}
              className="pointer-events-auto font-serif font-bold text-2xl tracking-tight text-[var(--text-main)] hover:opacity-80 transition-opacity"
            >
              bugrakaanalp
            </Link>
          </div>

          {/* ORTA: NAVIGASYON (Desktop) */}
          {/* z-40 ile görünür kıldık, side containerlar artık bunu engellemiyor */}
          <nav className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 hidden md:flex items-center gap-6 z-40">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                className="
                  font-serif text-xs font-bold uppercase tracking-[0.2em] 
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

            <span className="w-1 h-1 rounded-full bg-[var(--border-light)]" />

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

          {/* SAĞ: ACTIONS & HAMBURGER */}
          {/* ÖNEMLİ: pointer-events-none ekledik. Boş alanlar tıklamayı engellemesin diye. */}
          <div className="flex-1 flex justify-end items-center gap-2 md:gap-3 relative z-50 pointer-events-none">

            {/* COMMAND MENU (Desktop) - pointer-events-auto */}
            <button
              onClick={toggle}
              className="pointer-events-auto hidden md:block p-2 rounded-md hover:bg-[var(--bg-secondary)] text-[var(--text-main)] transition-colors border border-transparent hover:border-[var(--border-light)] group"
              aria-label="Open Command Menu"
            >
              <Command size={18} strokeWidth={1.5} className="group-hover:scale-110 transition-transform" />
            </button>

            {/* THEME TOGGLE - pointer-events-auto */}
            <button
              onClick={toggleTheme}
              className="pointer-events-auto p-2 rounded-md hover:bg-[var(--bg-secondary)] text-[var(--text-main)] transition-colors border border-transparent hover:border-[var(--border-light)]"
              aria-label="Toggle Theme"
            >
              {theme === 'light' ? <Moon size={18} strokeWidth={1.5} /> : <Sun size={18} strokeWidth={1.5} />}
            </button>

            <div className="h-4 w-px bg-[var(--border-light)] mx-1 hidden md:block" />

            {/* LANGUAGE - pointer-events-auto */}
            <div className="pointer-events-auto hidden md:flex items-center gap-1 bg-[var(--bg-card)] border border-[var(--border-light)] p-1 rounded-md shadow-sm">
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

            {/* MOBILE HAMBURGER - pointer-events-auto */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="pointer-events-auto md:hidden p-2 ml-1 text-[var(--text-main)] hover:bg-[var(--bg-secondary)] rounded-md transition-colors"
              aria-label="Menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </Container>
      </header>

      {/* MOBILE FULLSCREEN MENU OVERLAY */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-[var(--bg-main)] pt-24 px-6 pb-8 md:hidden flex flex-col overflow-y-auto"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => handleNavigation(item.id)}
                  className="flex items-center justify-between text-left group py-4 border-b border-[var(--border-light)]"
                >
                  <span className="font-serif text-3xl text-[var(--text-main)] group-hover:pl-4 transition-all duration-300">
                    {item.label}
                  </span>
                  <ArrowRight className="w-5 h-5 text-[var(--text-dim)] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
                </button>
              ))}

              <Link
                to="/services"
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between text-left group py-4 border-b border-[var(--border-light)]"
              >
                <span className="font-serif text-3xl text-[var(--text-main)] group-hover:pl-4 transition-all duration-300">
                  {t('Services', 'Hizmetler')}
                </span>
                <ArrowRight className="w-5 h-5 text-[var(--text-dim)] opacity-0 group-hover:opacity-100 transition-all -translate-x-4 group-hover:translate-x-0" />
              </Link>
            </div>

            <div className="mt-auto pt-12 space-y-6">
              <div className="flex items-center gap-4">
                <span className="font-mono text-xs text-[var(--text-dim)] uppercase">Language:</span>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => setLang('EN')}
                    className={`text-sm font-bold ${lang === 'EN' ? 'text-[var(--text-main)] underline' : 'text-[var(--text-dim)]'}`}
                  >
                    EN
                  </button>
                  <span className="text-[var(--border-light)]">/</span>
                  <button
                    onClick={() => setLang('TR')}
                    className={`text-sm font-bold ${lang === 'TR' ? 'text-[var(--text-main)] underline' : 'text-[var(--text-dim)]'}`}
                  >
                    TR
                  </button>
                </div>
              </div>

              <button
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  toggle();
                }}
                className="w-full flex items-center justify-center gap-2 py-3 border border-[var(--border-light)] rounded-md text-[var(--text-main)] font-mono text-xs uppercase hover:bg-[var(--bg-secondary)] transition-colors"
              >
                <Command size={14} />
                {t("Open Command Menu", "Komut Menüsünü Aç")}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}