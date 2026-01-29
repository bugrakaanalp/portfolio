import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Section from './ui/Section';
import { useLanguage } from '../context/LanguageContext';

import {
  SiNextdotjs, SiReact, SiTypescript, SiTurborepo,
  SiTailwindcss, SiFramer, SiGreensock, SiStorybook,
  SiReactquery, SiPostgresql, SiPrisma,
  SiDocker, SiVercel, SiAmazon, SiGithubactions
} from 'react-icons/si';
import { Layers } from 'lucide-react';

export default function Expertise() {
  const { t } = useLanguage();

  const stack = [
    {
      id: "01",
      category: t("Core Architecture", "Çekirdek Mimari"),
      desc: t(
        "The foundational frameworks for scalable, type-safe web applications.",
        "Ölçeklenebilir, tip güvenli web uygulamaları için temel iskeletler."
      ),
      tools: [
        { name: "Next.js", icon: SiNextdotjs, color: "hover:text-black dark:hover:text-white" },
        { name: "React 19", icon: SiReact, color: "hover:text-[#61DAFB]" },
        { name: "TypeScript", icon: SiTypescript, color: "hover:text-[#3178C6]" },
        { name: "Turborepo", icon: SiTurborepo, color: "hover:text-[#EF4444]" }
      ]
    },
    {
      id: "02",
      category: t("Visual Engineering", "Görsel Mühendislik"),
      desc: t(
        "Tools for translating design systems into fluid, responsive interfaces.",
        "Tasarım sistemlerini akıcı, duyarlı arayüzlere dönüştüren araçlar."
      ),
      tools: [
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "hover:text-[#06B6D4]" },
        { name: "Framer Motion", icon: SiFramer, color: "hover:text-[#0055FF]" },
        { name: "GSAP", icon: SiGreensock, color: "hover:text-[#88CE02]" },
        { name: "Storybook", icon: SiStorybook, color: "hover:text-[#FF4785]" }
      ]
    },
    {
      id: "03",
      category: t("Data & State", "Veri & Durum"),
      desc: t(
        "Strategies for efficient data fetching, caching, and synchronization.",
        "Verimli veri çekme, önbellekleme ve senkronizasyon stratejileri."
      ),
      tools: [
        { name: "TanStack Query", icon: SiReactquery, color: "hover:text-[#FF4154]" },
        { name: "Zustand", icon: Layers, color: "hover:text-[#443E38] dark:hover:text-[#E8DCC8]" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "hover:text-[#4169E1]" },
        { name: "Prisma", icon: SiPrisma, color: "hover:text-[#2D3748] dark:hover:text-white" }
      ]
    },
    {
      id: "04",
      category: t("DevOps & Cloud", "DevOps & Bulut"),
      desc: t(
        "CI/CD pipelines and infrastructure as code.",
        "CI/CD süreçleri ve kod olarak altyapı."
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
    // ZEMİN
    <Section id="expertise" className="border-t-2 border-[var(--border-dark)] !py-0 bg-[var(--bg-main)] transition-colors duration-300">
      <Container>
        <div className="pt-16 pb-8">
          <SectionHeader
            label={t("The Stack", "Birikimim")}
            title={t("Technical Specifications", "Teknik Birikim")}
            description={t(
              "A curated toolset selected for precision, scalability, and developer experience.",
              "Hassasiyet, ölçeklenebilirlik ve geliştirici deneyimi için seçilmiş özel araç seti."
            )}
          />
        </div>

        {/* Tablo Çizgileri */}
        <div className="flex flex-col border-t-2 border-[var(--border-light)]">
          {stack.map((item, idx) => (
            <div
              key={idx}
              className="
                group relative grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-12 
                py-10 md:py-12 
                pl-4 md:pl-6
                border-b border-[var(--border-light)] 
                transition-all duration-300
                hover:bg-[var(--bg-secondary)]
              "
            >
              {/* Aktif Çizgisi */}
              <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-[var(--text-main)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              <div className="md:col-span-4 flex flex-col justify-center">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono text-xs text-[var(--text-dim)] font-bold uppercase tracking-widest">
                    {item.id}
                  </span>
                  <span className="w-8 h-px bg-[var(--border-light)] group-hover:bg-[var(--text-main)] transition-colors" />
                  <span className="font-mono text-sm text-[var(--text-main)] uppercase tracking-widest font-bold">
                    {item.category}
                  </span>
                </div>
                <p className="font-mono text-xs text-[var(--text-muted)] leading-relaxed max-w-[280px]">
                  {`// ${item.desc}`}
                </p>
              </div>

              <div className="md:col-span-8 flex items-center">
                <div className="flex flex-wrap gap-x-12 gap-y-8">
                  {item.tools.map((tool, tIdx) => (
                    <div
                      key={tIdx}
                      className={`
                        flex items-center gap-3 group/tool cursor-default
                        text-[var(--text-dim)] transition-all duration-300
                        ${tool.color}
                      `}
                    >
                      <tool.icon className="w-6 h-6 md:w-8 md:h-8 transition-transform duration-300 group-hover/tool:scale-110" />

                      <span className="
                        font-serif text-xl md:text-2xl text-[var(--text-muted)]
                        group-hover/tool:text-[var(--text-main)] transition-colors
                        relative
                        after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-[2px] 
                        after:bg-current
                        after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300
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