import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Section from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

// İkon Paketleri
import {
  SiNextdotjs, SiReact, SiTypescript,
  SiTailwindcss, SiFramer,
  SiReactquery, SiPostgresql, SiPrisma,
  SiDocker, SiVercel, SiAmazon, SiGithubactions,
  SiDotnet
} from 'react-icons/si';

// C# ve MSSQL için alternatif ikonlar
import { TbBrandCSharp } from 'react-icons/tb';
import { DiMsqlServer } from 'react-icons/di';
import { Layers } from 'lucide-react';

export default function Expertise() {
  const { t } = useLanguage();

  const stack = [
    {
      id: "01",
      category: t("Frontend Core", "Frontend Çekirdek"),
      desc: t(
        "High-performance user interfaces with modern React ecosystem.",
        "Modern React ekosistemi ile yüksek performanslı arayüzler."
      ),
      tools: [
        { name: "Next.js", icon: SiNextdotjs, color: "hover:text-black dark:hover:text-white" },
        { name: "React 19", icon: SiReact, color: "hover:text-[#61DAFB]" },
        { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" }
      ]
    },
    {
      id: "02",
      category: t("Backend Architecture", "Backend Mimarisi"),
      desc: t(
        "Robust server-side solutions powered by .NET and strong typing.",
        ".NET ve güçlü tipleme ile desteklenen sağlam sunucu taraflı çözümler."
      ),
      tools: [
        { name: "C#", icon: TbBrandCSharp, color: "hover:text-[#239120] dark:hover:text-[#9B4F96]" },
        { name: ".NET Core", icon: SiDotnet, color: "hover:text-[#512BD4]" },
        { name: "SQL Server", icon: DiMsqlServer, color: "hover:text-[#CC2927]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1]" }
      ]
    },
    {
      id: "03",
      category: t("Data & State", "Veri & Durum"),
      desc: t(
        "Synchronizing app state with server data and real-time streams.",
        "Uygulama durumunu sunucu verileri ve gerçek zamanlı akışlarla senkronize etme."
      ),
      tools: [
        { name: "TanStack Query", icon: SiReactquery, color: "hover:text-[#FF4154]" },
        { name: "Prisma ORM", icon: SiPrisma, color: "hover:text-[#2D3748] dark:hover:text-white" },
        { name: "Zustand", icon: Layers, color: "hover:text-[#443E38] dark:hover:text-[#E8DCC8]" },
        { name: "Framer Motion", icon: SiFramer, color: "hover:text-[#0055FF]" }
      ]
    },
    {
      id: "04",
      category: t("DevOps & Cloud", "DevOps & Bulut"),
      desc: t(
        "Containerization, CI/CD pipelines, and serverless deployment.",
        "Konteynerizasyon, CI/CD süreçleri ve sunucusuz dağıtım."
      ),
      tools: [
        { name: "Docker", icon: SiDocker, color: "hover:text-[#2496ED]" },
        { name: "Vercel", icon: SiVercel, color: "hover:text-black dark:hover:text-white" },
        { name: "AWS", icon: SiAmazon, color: "hover:text-[#FF9900]" },
        { name: "GitHub Actions", icon: SiGithubactions, color: "hover:text-[#2088FF]" }
      ]
    }
  ];

  return (
    <Section id="expertise" className="border-t-2 border-[var(--border-dark)] !py-0 bg-[var(--bg-main)] transition-colors duration-300">
      <Container>
        {/* HEADER KISMI: Padding bottom (pb) kaldırıldı */}
        <div className="pt-20 pb-0">
          <SectionHeader
            label={t("The Stack", "Birikimim")}
            title={t("Technical Specifications", "Teknik Birikim")}
            description={t(
              "A hybrid arsenal combining the speed of JS with the stability of .NET.",
              "JS'nin hızı ile .NET'in kararlılığını birleştiren hibrit bir cephanelik."
            )}
          />
        </div>

        {/* KUTULAR LISTESI */}
        <div className="flex flex-col gap-8 pb-20 -mt-12 md:-mt-24">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className="
                group relative grid grid-cols-1 md:grid-cols-12 gap-y-8 md:gap-12
                p-8 md:p-12
                bg-[var(--bg-card)]
                border-2 border-[var(--border-light)]
                transition-all duration-300 ease-out
                hover:border-[var(--text-main)] 
                hover:-translate-y-1 
                hover:shadow-[8px_8px_0px_0px_var(--border-light)]
                hover:z-10
              "
            >

              {/* SOL TARAFA: BAŞLIK & AÇIKLAMA */}
              <div className="md:col-span-5 flex flex-col justify-center relative">

                {/* ID Numarası (Background Number) */}
                <span className="
                    absolute -top-6 -left-2 text-6xl md:text-8xl font-black font-mono 
                    text-[var(--border-light)] opacity-30 group-hover:opacity-10 
                    select-none transition-opacity
                ">
                  {item.id}
                </span>

                <div className="relative z-10 pt-4">
                  <h3 className="font-serif text-3xl md:text-4xl text-[var(--text-main)] font-bold mb-4">
                    {item.category}
                  </h3>

                  <div className="w-12 h-1 bg-[var(--text-main)] mb-6 transition-all duration-300 group-hover:w-24" />

                  <p className="font-mono text-sm text-[var(--text-muted)] leading-relaxed">
                    {`// ${item.desc}`}
                  </p>
                </div>
              </div>

              {/* SAĞ TARAFA: ARAÇLAR (ICONLAR) */}
              <div className="md:col-span-7 flex items-center md:justify-end">
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 w-full">
                  {item.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className={`
                        flex flex-col items-center justify-center gap-3 p-4
                        border border-[var(--border-light)] bg-[var(--bg-main)]
                        group/tool cursor-default
                        text-[var(--text-dim)] transition-all duration-300
                        hover:border-[var(--text-dim)]
                        ${tool.color}
                      `}
                    >
                      <tool.icon className="w-8 h-8 transition-transform duration-300 group-hover/tool:scale-110 group-hover/tool:-translate-y-1" />

                      <span className="
                        font-sans text-xs font-bold uppercase tracking-wider text-[var(--text-muted)]
                        group-hover/tool:text-[var(--text-main)] transition-colors text-center
                      ">
                        {tool.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}