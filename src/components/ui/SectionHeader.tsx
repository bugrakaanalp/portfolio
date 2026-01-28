import { motion } from 'framer-motion';

interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  dark?: boolean;
}

export default function SectionHeader({ label, title, description, dark = false }: SectionHeaderProps) {
  return (
    <div className="mb-20 md:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-6">
           <div className={`h-px w-8 ${dark ? 'bg-white/30' : 'bg-[#1D1D1F]/30'}`} />
           <span className={`font-mono text-xs font-medium tracking-[0.2em] uppercase ${dark ? 'text-indigo-300' : 'text-[#86868B]'}`}>
            {label}
          </span>
        </div>

        {/* Playful/Expressive Typography Treatment */}
        <h2 className={`text-5xl md:text-7xl font-serif ${dark ? 'text-white' : 'text-[#1D1D1F]'} mb-8`}>
          {/* We split the title to allow styling if needed, or just render it */}
          {title}
        </h2>

        {description && (
          <p className={`max-w-xl text-lg md:text-xl font-sans font-light leading-relaxed ${dark ? 'text-white/60' : 'text-[#424245]'} text-balance`}>
            {description}
          </p>
        )}
      </motion.div>
    </div>
  );
}