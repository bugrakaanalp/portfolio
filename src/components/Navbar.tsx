import Container from './ui/Container';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--border-light)] bg-[var(--bg-main)]/80 backdrop-blur-md transition-colors duration-300">
      <Container className="flex items-center h-16">
        
        {/* Link Bileşeni: Ana Sayfaya Yönlendirir */}
        <Link 
          to="/" 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="font-serif font-bold text-2xl tracking-tight text-[var(--text-main)] hover:opacity-80 transition-opacity"
        >
          bugrakaanalp
        </Link>

      </Container>
    </header>
  );
}