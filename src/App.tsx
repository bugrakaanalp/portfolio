import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

// Context
import { LanguageProvider } from './context/LanguageContext';
import { CommandMenuProvider } from './context/CommandMenuContext';

// Components
import Navbar from './components/Navbar';
import CommandMenu from './components/ui/CommandMenu';
import Container from './components/ui/Container';
import { Github, Linkedin, Mail } from 'lucide-react';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <CommandMenuProvider>
          <main className="min-h-screen w-full text-[var(--text-main)] transition-colors duration-300 relative selection:bg-[var(--text-main)] selection:text-[var(--bg-main)]">
            
            <ScrollToTop />
            <Navbar />
            <CommandMenu />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/services" element={<ServicesPage />} />
            </Routes>
            
            <footer className="py-12 border-t border-[var(--border-light)] mt-auto">
              <Container>
                <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                  <div className="text-center md:text-left">
                    <span className="font-serif text-lg italic text-[var(--text-main)]">Buğra Kaan Alp.</span>
                    <p className="font-mono text-[10px] text-[var(--text-dim)] uppercase tracking-widest mt-1">
                      Digital Craftsman
                    </p>
                  </div>
                  
                  <div className="flex gap-6 text-[var(--text-dim)]">
                     <a href="https://linkedin.com/in/bugrakaanalp" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] hover:scale-110 transition-all"><Linkedin size={18} strokeWidth={1.5} /></a>
                     <a href="https://github.com/bugrakaanalp" target="_blank" rel="noopener noreferrer" className="hover:text-[var(--text-main)] hover:scale-110 transition-all"><Github size={18} strokeWidth={1.5} /></a>
                     <a href="mailto:bugrakaanalp19@gmail.com" className="hover:text-[var(--text-main)] hover:scale-110 transition-all"><Mail size={18} strokeWidth={1.5} /></a>
                  </div>

                  <div className="text-center md:text-right">
                    <p className="font-mono text-[10px] text-[var(--text-dim)] uppercase tracking-widest">
                      Samsun, TR — © {new Date().getFullYear()}
                    </p>
                  </div>
                </div>
              </Container>
            </footer>

          </main>
        </CommandMenuProvider>
      </Router>
    </LanguageProvider>
  );
}

export default App;