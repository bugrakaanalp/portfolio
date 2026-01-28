import { useState, useEffect } from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import { ArrowUpRight, Github } from 'lucide-react';
import Section from './ui/Section';

const projects = [
  { name: "auctionproject", desc: "Comprehensive auction backend system with impressive an UI.", lang: "C#, Typescript, Javascript", url: "https://github.com/bugrakaanalp/auctionproject" },
  { name: "CollabTask", desc: "Real-time SignalR task manager.", lang: "C#, Typescript, Javascript", url: "https://github.com/bugrakaanalp/CollabTask" },
  { name: "web-scraper-cti", desc: "CTI-focused high-perf scraper.", lang: "Go", url: "https://github.com/bugrakaanalp/web-scraper-cti" },
  { name: "Go-Tor-Scraper", desc: "Anonymous Tor traffic routing.", lang: "Go", url: "https://github.com/bugrakaanalp/Go-Tor-Scraper-CTI" },
  { name: "NovaCart", desc: "Strictly typed modular cart.", lang: "C#, Typescript, Javascript", url: "https://github.com/bugrakaanalp/NovaCart" },
  { name: "Spindora AI", desc: "Modern AI platform interface.", lang: "TypeScript, Vite.js" } 
];

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
  return (
    <Section id="work" className="border-t border-[#1D1D1F]/5">
      <Container>
        <SectionHeader 
          label="Index" 
          title="Selected Works" 
          description="A curated collection of technical challenges and architectural solutions."
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
                          Source
                        </span>
                      </div>
                      <ArrowUpRight className="w-4 h-4 text-[var(--text-main)] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  ) : (
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-widest cursor-default">
                        In Development
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