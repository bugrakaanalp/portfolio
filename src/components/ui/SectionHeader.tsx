import { motion } from 'framer-motion';
import React from 'react';

interface SectionHeaderProps {
  label: string;
  title: string | React.ReactNode;
  description?: string | React.ReactNode;
}

export default function SectionHeader({ label, title, description }: SectionHeaderProps) {
  return (
    <div className="mb-20 md:mb-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="flex items-center gap-4 mb-6">
          {/* Çizgi: Light'ta Siyah, Dark'ta Beyaz (Opaklık ayarlı) */}
          <div className="h-[2px] w-12 bg-[var(--text-main)] opacity-70" />

          {/* LABEL: Light'ta Gri, Dark'ta Parlak Beyaz */}
          <span className="
             font-mono text-xs font-bold tracking-[0.2em] uppercase 
             text-[var(--text-dim)] dark:text-[var(--text-main)]
             transition-colors duration-300
           ">
            {label}
          </span>
        </div>

        {/* Title */}
        <h2 className="text-5xl md:text-7xl font-serif text-[var(--text-main)] mb-8 leading-[1.1]">
          {title}
        </h2>

        {/* Description */}
        {description && (
          <div className="max-w-xl text-lg md:text-xl font-sans font-light leading-relaxed text-[var(--text-muted)] text-balance">
            {description}
          </div>
        )}
      </motion.div>
    </div>
  );
}