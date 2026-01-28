import type { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  noTopPadding?: boolean; 
}

export default function Section({ children, className = "", id, noTopPadding = false }: SectionProps) {
  return (
    <section 
      id={id}
      className={`
        relative w-full 
        /* CHANGED: Reduced padding to py-12 (approx 48px) to bring sections closer */
        ${noTopPadding ? 'pb-12 pt-0' : 'py-12'} 
        transition-colors duration-500
        ${className}
      `}
    >
      {children}
    </section>
  );
}