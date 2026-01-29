import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import { ArrowUpRight, Terminal, Cpu, Construction, Loader2 } from 'lucide-react';
import Section from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

export default function Work() {
  const { t } = useLanguage();

  const projects = [
    {
      name: "auctionproject",
      desc: t("Auction backend system.", "Açık artırma arka uç sistemi."),
      lang: "C# / .NET",
      type: "Backend",
      url: "https://github.com/bugrakaanalp/auctionproject"
    },
    {
      name: "CollabTask",
      desc: t("Real-time task manager.", "Gerçek zamanlı görev yöneticisi."),
      lang: "SignalR",
      type: "Fullstack",
      url: "https://github.com/bugrakaanalp/CollabTask"
    },
    {
      name: "web-scraper-cti",
      desc: t("High-perf CTI scraper.", "Yüksek performanslı CTI kazıyıcı."),
      lang: "Go (Golang)",
      type: "Tool",
      url: "https://github.com/bugrakaanalp/web-scraper-cti"
    },
    {
      name: "Go-Tor-Scraper",
      desc: t("Anon Tor traffic routing.", "Anonim Tor trafik yönlendirmesi."),
      lang: "Go / Tor",
      type: "Security",
      url: "https://github.com/bugrakaanalp/Go-Tor-Scraper-CTI"
    },
    {
      name: "NovaCart",
      desc: t("Modular shopping cart.", "Modüler alışveriş sepeti."),
      lang: "TypeScript",
      type: "Module",
      url: "https://github.com/bugrakaanalp/NovaCart"
    },
    {
      name: "Spindora AI",
      desc: t("AI platform interface.", "Yapay zeka platformu arayüzü."),
      lang: "React / Vite",
      type: "Frontend",
      url: ""
    }
  ];

  return (
    <Section id="work" className="border-t-2 border-[var(--border-dark)] bg-[var(--bg-secondary)]">
      <Container>
        <SectionHeader
          label={t("Projects", "Projeler")}
          title={t("Builds", "İnşa Edilenler")}
          description={t(
            "Architectural solutions deployed to reality.",
            "Gerçekliğe dağıtılmış mimari çözümler."
          )}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {projects.map((project, idx) => {
            const isReady = !!project.url;

            if (isReady) {
              return (
                <a
                  key={idx}
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    group relative flex flex-col justify-between
                    h-[260px] p-6
                    bg-[var(--bg-card)]
                    border-2 border-[var(--border-light)]
                    rounded-none
                    transition-all duration-200 ease-out
                    cursor-pointer 
                    hover:border-[var(--border-dark)] 
                    hover:shadow-[6px_6px_0px_0px_var(--border-dark)] 
                    hover:-translate-y-1 hover:-translate-x-1
                  "
                >
                  <div className="flex justify-between items-start border-b border-[var(--border-light)] pb-4 mb-4">
                    <div className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-[var(--text-dim)] group-hover:text-[var(--text-main)] transition-colors" />
                      <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] group-hover:text-[var(--text-main)] transition-colors">
                        PRJ-{idx + 1}
                      </span>
                    </div>
                    <span className="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-light)] text-[10px] font-mono text-[var(--text-muted)] uppercase">
                      {project.type}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold font-serif text-[var(--text-main)] mb-2 group-hover:underline decoration-2 underline-offset-4 decoration-indigo-500">
                      {project.name}
                    </h3>
                    <p className="font-mono text-xs text-[var(--text-dim)] leading-relaxed">
                      {`> ${project.desc}`}
                    </p>
                  </div>

                  <div className="mt-auto pt-4 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Cpu className="w-3 h-3 text-indigo-600" />
                      <span className="font-bold text-xs text-[var(--text-muted)] font-sans">{project.lang}</span>
                    </div>
                    <div className="w-8 h-8 flex items-center justify-center bg-[var(--bg-secondary)] border border-[var(--border-light)] group-hover:bg-[var(--text-main)] group-hover:text-[var(--bg-main)] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>
                </a>
              );
            }

            // --- DURUM 2: GELİŞTİRİLİYOR (MOBİLDE DİREKT ARKASI GÖZÜKÜR) ---
            return (
              <div key={idx} className="group h-[260px] perspective-[1000px]">
                <div className="
                  relative w-full h-full transition-all duration-700 [transform-style:preserve-3d] 
                  [transform:rotateY(180deg)] md:[transform:rotateY(0deg)] md:group-hover:[transform:rotateY(180deg)]
                ">

                  {/* FRONT (Desktop default) */}
                  <div className="
                    absolute inset-0 [backface-visibility:hidden]
                    flex flex-col justify-between p-6
                    bg-[var(--bg-card)]
                    border-2 border-[var(--border-light)] border-dashed
                  ">
                    <div className="flex justify-between items-start border-b border-[var(--border-light)] pb-4 mb-4">
                      <div className="flex items-center gap-2">
                        <Terminal className="w-4 h-4 text-[var(--text-dim)] opacity-50" />
                        <span className="font-mono text-xs font-bold uppercase tracking-wider text-[var(--text-dim)] opacity-50">
                          PRJ-{idx + 1}
                        </span>
                      </div>
                      <span className="px-2 py-0.5 bg-[var(--bg-secondary)] border border-[var(--border-light)] text-[10px] font-mono text-[var(--text-dim)] uppercase">
                        {project.type}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-xl font-bold font-serif text-[var(--text-dim)] mb-2">
                        {project.name}
                      </h3>
                      <p className="font-mono text-xs text-[var(--text-dim)] leading-relaxed">
                        {`> ${project.desc}`}
                      </p>
                    </div>

                    <div className="mt-auto pt-4 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <Cpu className="w-3 h-3 text-[var(--text-dim)]" />
                        <span className="font-bold text-xs text-[var(--text-dim)] font-sans">{project.lang}</span>
                      </div>
                      <div className="flex items-center gap-2 px-2 py-1 bg-[var(--bg-secondary)] rounded-sm">
                        <Loader2 className="w-3 h-3 text-[var(--text-muted)] animate-spin" />
                        <span className="font-mono text-[10px] font-bold text-[var(--text-muted)] uppercase">WIP</span>
                      </div>
                    </div>
                  </div>

                  {/* BACK (Sarı/İnşaat - Mobilde Varsayılan Gözüken) */}
                  <div className="
                    absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]
                    flex flex-col items-center justify-center text-center p-6
                    bg-amber-50 
                    border-2 border-amber-400
                    shadow-[6px_6px_0px_0px_#d97706]
                    dark:bg-[#1f1705] dark:border-amber-600 dark:shadow-[6px_6px_0px_0px_#b45309]
                  ">
                    <div className="absolute top-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#FBBF24,#FBBF24_10px,#000_10px,#000_20px)] opacity-20" />
                    <div className="absolute bottom-0 left-0 w-full h-2 bg-[repeating-linear-gradient(45deg,#FBBF24,#FBBF24_10px,#000_10px,#000_20px)] opacity-20" />

                    {/* PROJE İSMİ (Mobilde kart direkt arkasını döndüğü için burada ismin yazması şart) */}
                    <h3 className="font-serif text-xl font-bold text-amber-900 dark:text-amber-400 mb-2">
                      {project.name}
                    </h3>

                    <div className="w-10 h-10 bg-amber-100 dark:bg-amber-900/30 rounded-full flex items-center justify-center mb-3 border border-amber-200 dark:border-amber-800">
                      <Construction className="w-5 h-5 text-amber-600 dark:text-amber-500" />
                    </div>

                    <h4 className="font-mono text-sm font-bold text-amber-800 dark:text-amber-500 mb-2 uppercase tracking-wide">
                      {t("Under Construction", "Geliştirme Aşamasında")}
                    </h4>

                    <p className="font-mono text-[9px] text-amber-700 dark:text-amber-500 leading-relaxed max-w-[200px]">
                      {t(
                        "// Currently working on the architecture. Coming soon.",
                        "// Şu anda mimarisi üzerinde çalışılıyor. Çok yakında."
                      )}
                    </p>

                    <div className="mt-4 flex items-center gap-2 px-3 py-1 bg-white dark:bg-black border border-amber-200 dark:border-amber-700 rounded-full">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                      <span className="text-[10px] font-bold text-gray-600 dark:text-gray-300 uppercase tracking-wide">
                        {t("Coding...", "Kodlanıyor...")}
                      </span>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </Section>
  );
}