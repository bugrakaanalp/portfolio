import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search,
  Laptop, 
  FileText, 
  Mail, 
  Github, 
  Code,
  CreditCard,
  Home
} from 'lucide-react';
import { useCommandMenu } from '../../context/CommandMenuContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext'; // <--- EKLE

export default function CommandMenu() {
  const { isOpen, toggle, close } = useCommandMenu();
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLanguage(); // <--- DİL FONKSİYONUNU ÇAĞIR

  // Klavye kısayolu dinleyicisi
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        toggle();
      }
      if (e.key === 'Escape') {
        close();
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, [toggle, close]);

  // Akıllı Yönlendirme Fonksiyonu
  const handleNavigation = (path: string, hash?: string) => {
    close(); 
    
    // Dış link kontrolü
    if (path.startsWith('http') || path.startsWith('mailto')) {
      window.open(path, '_blank');
      return;
    }

    // Sayfa içi scroll veya yönlendirme
    if (path === '/') {
      if (location.pathname !== '/') {
        navigate('/');
        if (hash) {
          setTimeout(() => {
            document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      } else if (hash) {
        document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    } else {
      navigate(path);
    }
  };

  // Eylemleri t() fonksiyonu ile çevrilebilir hale getirdik
  const actions = [
    { 
      id: 'home', 
      label: t('Home', 'Ana Sayfa'), 
      icon: Home, 
      shortcut: 'H', 
      action: () => handleNavigation('/') 
    },
    { 
      id: 'services', 
      label: t('Services & Pricing', 'Hizmetler & Fiyatlandırma'), 
      icon: CreditCard, 
      shortcut: 'S', 
      action: () => handleNavigation('/services') 
    },
    { 
      id: 'work', 
      label: t('Go to Projects', 'Projelere Git'), 
      icon: Code, 
      shortcut: 'P', 
      action: () => handleNavigation('/', 'work') 
    },
    { 
      id: 'stack', 
      label: t('View Tech Stack', 'Teknoloji Yığınını Gör'), 
      icon: Laptop, 
      shortcut: 'T', 
      action: () => handleNavigation('/', 'expertise') 
    },
    { 
      id: 'about', 
      label: t('Read Profile', 'Profili Oku'), 
      icon: FileText, 
      shortcut: 'A', 
      action: () => handleNavigation('/', 'about') 
    },
    { 
      id: 'contact', 
      label: t('Send Email', 'E-posta Gönder'), 
      icon: Mail, 
      shortcut: 'E', 
      action: () => window.location.assign('mailto:bugrakaanalp19@gmail.com') 
    },
    { 
      id: 'source', 
      label: t('View Source Code', 'Kaynak Kodunu Gör'), 
      icon: Github, 
      shortcut: 'G', 
      action: () => window.open('https://github.com/bugrakaanalp/portfolio', '_blank') 
    },
  ];

  const filteredActions = actions.filter(action => 
    action.label.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
            className="fixed inset-0 z-[100] bg-[var(--bg-main)]/60 backdrop-blur-sm"
          />

          <div className="fixed inset-0 z-[101] flex items-start justify-center pt-[15vh] px-4 pointer-events-none">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -20 }}
              transition={{ duration: 0.2 }}
              className="
                pointer-events-auto
                w-full max-w-xl 
                bg-[var(--bg-card)] 
                border border-[var(--border-light)] 
                shadow-2xl rounded-lg 
                overflow-hidden
                flex flex-col
              "
            >
              <div className="flex items-center px-4 py-4 border-b border-[var(--border-light)]">
                <Search className="w-5 h-5 text-[var(--text-dim)]" />
                <input 
                  autoFocus
                  className="flex-1 bg-transparent border-none outline-none px-4 text-lg font-sans text-[var(--text-main)] placeholder-[var(--text-dim)]"
                  placeholder={t("Type a command...", "Bir komut yazın...")} // <--- ÇEVİRİ
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />
                <button 
                  onClick={close}
                  className="px-2 py-1 bg-[var(--bg-secondary)] rounded text-[10px] font-mono text-[var(--text-dim)] uppercase tracking-wider border border-[var(--border-light)] hover:bg-[var(--border-light)] transition-colors"
                >
                  ESC
                </button>
              </div>

              <div className="max-h-[300px] overflow-y-auto p-2">
                {filteredActions.length > 0 ? (
                  filteredActions.map((action) => (
                    <button
                      key={action.id}
                      onClick={action.action}
                      className="
                        group w-full flex items-center gap-3 px-3 py-3 rounded-md
                        hover:bg-[var(--bg-secondary)] transition-colors text-left
                      "
                    >
                      <action.icon className="w-5 h-5 text-[var(--text-dim)] group-hover:text-[var(--text-main)]" />
                      <span className="flex-1 font-sans text-sm text-[var(--text-muted)] group-hover:text-[var(--text-main)]">
                        {action.label}
                      </span>
                      {action.shortcut && (
                        <span className="opacity-0 group-hover:opacity-100 transition-opacity flex items-center gap-1 text-[10px] font-mono text-[var(--text-dim)] border border-[var(--border-light)] px-1.5 rounded">
                          {action.shortcut}
                        </span>
                      )}
                    </button>
                  ))
                ) : (
                  <div className="py-8 text-center text-[var(--text-dim)] text-sm">
                    {t("No results found.", "Sonuç bulunamadı.")} {/* <--- ÇEVİRİ */}
                  </div>
                )}
              </div>

              <div className="px-4 py-2 bg-[var(--bg-secondary)]/50 border-t border-[var(--border-light)] flex justify-between items-center">
                <span className="font-mono text-[10px] text-[var(--text-dim)]">
                  {t("Navigate with arrows", "Ok tuşlarıyla gezin")} {/* <--- ÇEVİRİ */}
                </span>
                <span className="font-mono text-[10px] text-[var(--text-dim)]">
                  v1.0.0
                </span>
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}