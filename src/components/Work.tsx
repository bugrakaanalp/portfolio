import { useState, useEffect } from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import { ArrowUpRight, Github } from 'lucide-react';
import Section from './ui/Section';
import { useLanguage } from '../context/LanguageContext'; // <--- EKLE

// --- Sub-Component: Animated Dots ---
const LoadingDots = () => {
  const [dots, setDots] = useState('.');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length < 3 ? prev + '.' : '.');
    }, 400); 
    return () => clearInterval(interval);
  }, []);

  return (
    <span className="inline-block w-[12px] text-left">
      {dots}
    </span>
  );
};

export default function Work() {
  const { t } = useLanguage(); // <--- DİL FONKSİYONUNU ÇAĞIR

  // Proje verilerini bileşen içine taşıdık (Çeviri desteği için)
  const projects = [
    { 
      name: "auctionproject", 
      desc: t(
        "Comprehensive auction backend system with impressive an UI.", 
        "Etkileyici bir arayüze sahip kapsamlı açık artırma arka uç sistemi."
      ), 
      lang: "C#, Typescript, Javascript", 
      url: "https://github.com/bugrakaanalp/auctionproject" 
    },
    { 
      name: "CollabTask", 
      desc: t(
        "Real-time SignalR task manager.", 
        "Gerçek zamanlı SignalR görev yöneticisi."
      ), 
      lang: "C#, Typescript, Javascript", 
      url: "https://github.com/bugrakaanalp/CollabTask" 
    },
    { 
      name: "web-scraper-cti", 
      desc: t(
        "CTI-focused high-perf scraper.", 
        "CTI odaklı yüksek performanslı veri kazıyıcı."
      ), 
      lang: "Go", 
      url: "https://github.com/bugrakaanalp/web-scraper-cti" 
    },
    { 
      name: "Go-Tor-Scraper", 
      desc: t(
        "Anonymous Tor traffic routing.", 
        "Anonim Tor trafik yönlendirmesi."
      ), 
      lang: "Go", 
      url: "https://github.com/bugrakaanalp/Go-Tor-Scraper-CTI" 
    },
    { 
      name: "NovaCart", 
      desc: t(
        "Strictly typed modular cart.", 
        "Katı tipli modüler alışveriş sepeti."
      ), 
      lang: "C#, Typescript, Javascript", 
      url: "https://github.com/bugrakaanalp/NovaCart" 
    },
    { 
      name: "Spindora AI", 
      desc: t(
        "Modern AI platform interface.", 
        "Modern yapay zeka platformu arayüzü."
      ), 
      lang: "TypeScript, Vite.js" 
    } 
  ];

  return (
    <Section id="work" className="border-t border-[#1D1D1F]/5">
      <Container>
        <SectionHeader 
          label={t("Index", "Dizin")} 
          title={t("Selected Works", "Öne Çıkan İşlerim")} 
          description={t(
            "A curated collection of technical challenges and architectural solutions.",
            "Teknik zorluklar ve mimari çözümlerden oluşan özenle seçilmiş bir koleksiyon."
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
          {projects.map((project, idx) => {
            const isReady = !!project.url;
            const CardTag = isReady ? 'a' : 'div';

            return (
              <CardTag 
                key={idx}
                href={isReady ? project.url : undefined}
                className={`
                  group relative flex flex-col justify-between
                  h-[320px] p-8 
                  border border-[var(--border-light)]
                  bg-[var(--bg-main)]/50 backdrop-blur-[2px]
                  transition-all duration-300 ease-[cubic-bezier(0.25,1,0.5,1)]
                  ${isReady 
                    ? 'cursor-pointer hover:-translate-y-2 hover:-translate-x-1 hover:shadow-[6px_6px_0px_0px_var(--text-main)] hover:border-[var(--text-main)] hover:bg-[var(--bg-main)]' 
                    : 'cursor-default opacity-60'
                  }
                `}
              >
                {/* 1. Header: Tech Stack & Number */}
                <div className="flex justify-between items-start">
                   <span className="font-mono text-[10px] uppercase tracking-widest leading-relaxed max-w-[70%] text-[var(--text-dim)] group-hover:text-[var(--text-main)] transition-colors">
                     {project.lang}
                   </span>
                   <span className="font-serif italic text-xl text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors">
                     0{idx + 1}
                   </span>
                </div>

                {/* 2. Main Content */}
                <div className="mt-auto mb-8">
                  <h3 className="text-2xl font-serif mb-3 leading-tight text-[var(--text-main)]">
                    {project.name}
                  </h3>
                  <p className="font-sans text-sm leading-relaxed font-light text-[var(--text-muted)]">
                    {project.desc}
                  </p>
                </div>

                {/* 3. Footer: Action */}
                <div className="pt-6 border-t border-[var(--border-light)] group-hover:border-[var(--text-main)]/20 transition-colors flex items-center justify-between">
                  {isReady ? (
                    <>
                      <div className="flex items-center gap-2">
                        <Github className="w-4 h-4 text-[var(--text-main)]" strokeWidth={1.5} />
                        <span className="font-mono text-xs uppercase tracking-widest text-[var(--text-main)]">
                          {t("Source", "Kaynak")}
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[var(--text-main)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-widest cursor-default">
                        {t("In Development", "Geliştiriliyor")}
                      </span>
                      <span className="font-mono text-xs text-[var(--text-dim)]">
                        <LoadingDots />
                      </span>
                    </div>
                  )}
                </div>
              </CardTag>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}