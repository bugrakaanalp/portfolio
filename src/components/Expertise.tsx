import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Section from './ui/Section';

const stack = [
  { 
    id: "01", 
    category: "Core Architecture", 
    desc: "The foundational frameworks for scalable, type-safe web applications.", 
    tools: ["Next.js (App Router)", "React 19", "TypeScript", "Turborepo"] 
  },
  { 
    id: "02", 
    category: "Visual Engineering", 
    desc: "Tools for translating design systems into fluid, responsive interfaces.", 
    tools: ["Tailwind CSS", "Framer Motion", "GSAP", "Storybook"] 
  },
  { 
    id: "03", 
    category: "Data & State", 
    desc: "Strategies for efficient data fetching, caching, and synchronization.", 
    tools: ["TanStack Query", "Zustand", "PostgreSQL", "Prisma"] 
  },
  { 
    id: "04", 
    category: "DevOps & Cloud", 
    desc: "CI/CD pipelines and infrastructure as code.", 
    tools: ["Docker", "Vercel", "AWS", "GitHub Actions"] 
  }
];

export default function Expertise() {
  return (
    <Section id="expertise" className="border-t border-[#1D1D1F]/5 !py-0">
      <Container>
        <div className="pt-8 pb-0">
            <SectionHeader 
              label="The Stack" 
              title="Technical Specifications." 
              description="A curated toolset selected for precision, scalability, and developer experience."
            />
        </div>

        {/* SPEC SHEET TABLE LAYOUT */}
        <div className="flex flex-col border-t border-[var(--border-light)]">
          {stack.map((item, idx) => (
            <div 
              key={idx}
              className="
                group relative grid grid-cols-1 md:grid-cols-12 gap-y-6 md:gap-12 
                py-8 md:py-10 
                pl-6 md:pl-8
                border-b border-[var(--border-light)] 
                transition-all duration-300
                hover:bg-[var(--bg-secondary)]/50
              "
            >
              {/* Active Indicator Line on Hover */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-[var(--text-main)] scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />

              {/* LEFT: Category & Context */}
              <div className="md:col-span-4 flex flex-col">
                 <div className="flex items-center gap-3 mb-2">
                   <span className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-widest">
                     {item.id}
                   </span>
                   <span className="w-8 h-px bg-[var(--border-light)] group-hover:bg-[var(--text-dim)] transition-colors" />
                   <span className="font-mono text-xs text-[var(--text-main)] uppercase tracking-widest font-medium">
                     {item.category}
                   </span>
                 </div>
                 <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed max-w-[280px] opacity-80 group-hover:opacity-100 transition-opacity">
                   {item.desc}
                 </p>
              </div>

              {/* RIGHT: Tools List */}
              <div className="md:col-span-8 flex items-center">
                 <div className="flex flex-wrap gap-x-8 gap-y-2">
                   {item.tools.map((tool, tIdx) => (
                     <span 
                       key={tIdx} 
                       className="
                         font-serif text-2xl md:text-3xl text-[var(--text-main)] 
                         cursor-default relative
                         after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[var(--text-main)] 
                         after:scale-x-0 after:origin-right hover:after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-500
                       "
                     >
                       {tool}
                     </span>
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