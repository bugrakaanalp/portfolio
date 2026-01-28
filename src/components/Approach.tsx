import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { useState } from 'react';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Section from './ui/Section';

// --- VISUAL: THE HYPER-CORE ---
const HyperCore = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics for 3D Tilt
  const rotateX = useSpring(useTransform(y, [-100, 100], [20, -20]), {
    stiffness: 100,
    damping: 20,
  });
  const rotateY = useSpring(useTransform(x, [-100, 100], [-20, 20]), {
    stiffness: 100,
    damping: 20,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set(e.clientX - (rect.left + rect.width / 2));
    y.set(e.clientY - (rect.top + rect.height / 2));
  }

  // Initializing random particles state once
  const [particles] = useState(() =>
    [...Array(20)].map(() => ({
      x: [Math.random() * 200 - 100, Math.random() * 200 - 100],
      y: [Math.random() * 200 - 100, Math.random() * 200 - 100],
      z: [Math.random() * 200 - 100, Math.random() * 200 - 100],
      duration: Math.random() * 2 + 1,
    }))
  );

  return (
    <div
      className="relative w-full max-w-lg mt-16 mb-24 h-[320px] flex items-center justify-center cursor-pointer group perspective-1000"
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
    >
      <motion.div
        style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
        className="relative w-64 h-64 flex items-center justify-center"
      >
        {/* 1. CENTRAL NUCLEUS */}
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            boxShadow: [
              '0 0 20px var(--text-main)',
              '0 0 40px var(--text-main)',
              '0 0 20px var(--text-main)',
            ],
          }}
          transition={{ duration: 3, repeat: Infinity }}
          className="absolute w-12 h-12 bg-[var(--text-main)] rounded-full z-20 blur-sm"
        />
        <div className="absolute w-8 h-8 bg-white rounded-full z-30" />

        {/* 2. INNER GYROSCOPE */}
        <motion.div
          className="absolute w-32 h-32 border-2 border-[var(--text-main)]/50 rounded-full z-10"
          style={{
            borderTopColor: 'transparent',
            borderBottomColor: 'transparent',
          }}
          animate={{ rotateX: 360, rotateY: 180, rotateZ: 90 }}
          transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute w-24 h-24 border border-[var(--text-main)] rounded-full z-10"
          style={{
            borderLeftColor: 'transparent',
            borderRightColor: 'transparent',
          }}
          animate={{ rotateX: -360, rotateZ: -180 }}
          transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
        />

        {/* 3. ORBITAL SHELLS */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 rounded-full border border-[var(--text-dim)]/20"
            style={{
              width: `${100 + i * 20}px`,
              height: `${100 + i * 20}px`,
              left: '50%',
              top: '50%',
              x: '-50%',
              y: '-50%',
              borderStyle: i % 2 === 0 ? 'solid' : 'dashed',
            }}
            animate={{
              rotateX: [0, 360],
              rotateY: [0, 360],
              rotateZ: [0, i % 2 === 0 ? 360 : -360],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: 'linear',
              delay: i * 0.2,
            }}
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-[var(--text-dim)] rounded-full" />
          </motion.div>
        ))}

        {/* 4. PARTICLE SWARM */}
        {particles.map((p, i) => (
          <motion.div
            key={`p-${i}`}
            className="absolute w-1 h-1 bg-[var(--text-main)] rounded-full"
            animate={{
              x: p.x,
              y: p.y,
              z: p.z,
              opacity: [0, 1, 0],
              scale: [0, 1.5, 0],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

// --- PRINCIPLE COMPONENT ---
function Principle({
  number,
  title,
  text,
}: {
  number: string;
  title: string;
  text: React.ReactNode;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="group"
    >
      <div className="flex items-baseline gap-4 mb-3">
        <span className="font-mono text-xs text-[var(--text-dim)] bg-[var(--bg-card)] px-2 py-1 rounded border border-[var(--border-light)]">
          {number}
        </span>
        <h4 className="font-serif text-2xl text-[var(--text-main)] group-hover:text-indigo-600 transition-colors">
          {title}
        </h4>
      </div>
      <div className="pl-[3.25rem]">
        <p className="font-sans text-[var(--text-muted)] leading-relaxed text-balance">
          {text}
        </p>
      </div>
    </motion.div>
  );
}

// --- MAIN APPROACH COMPONENT ---
export default function Approach({ className = '' }: { className?: string }) {
  return (
    <Section
      className={`bg-[var(--bg-secondary)] relative overflow-hidden transition-colors duration-300 ${className}`}
    >
      <Container className="relative z-10">
        <SectionHeader
          label="Approach"
          title="The Philosophy."
          description="How I think about software is just as important as how I write it."
        />
        <div className="grid md:grid-cols-2 gap-16 md:gap-24 items-start">
          <div className="sticky top-32">
            <h3 className="font-serif text-3xl md:text-5xl text-[var(--text-main)] leading-tight mb-8 transition-colors duration-300">
              Complexity belongs <br />
              <span className="italic text-[var(--text-dim)]">
                under the hood.
              </span>
            </h3>
            <p className="font-sans text-lg text-[var(--text-muted)] leading-relaxed max-w-sm mb-8 transition-colors duration-300">
              Great software feels linear. My goal is to bridge the gap between
              heavy engineering requirements and a frictionless user experience.
            </p>

            <HyperCore />
          </div>

          <div className="space-y-16">
            <Principle
              number="01"
              title="Intentionality"
              text={
                <>
                  I don't write code until the problem is understood. Every div,
                  every hook, and every transition exists for a{' '}
                  <span className="font-mono text-xs uppercase tracking-widest border-b border-[var(--text-dim)]">
                    specific
                  </span>{' '}
                  user-centric reason.
                </>
              }
            />
            <Principle
              number="02"
              title="Performance as UX"
              text={
                <>
                  <span className="font-serif italic text-xl mr-1 font-medium text-[var(--text-main)]">
                    Fast
                  </span>
                  isn't a feature; it's a baseline. I architect systems that
                  maintain 60fps interaction and near-instant load times.
                </>
              }
            />
            <Principle
              number="03"
              title="Resilience"
              text={
                <>
                  Errors are inevitable;{' '}
                  <span className="inline-block opacity-50 line-through decoration-[var(--text-dim)] decoration-1">
                    broken
                  </span>{' '}
                  experiences are not. I build fault-tolerant interfaces that
                  handle failure gracefully.
                </>
              }
            />
            <Principle
              number="04"
              title="Scalability"
              text={
                <>
                  Codebases shouldn't just work; they should{' '}
                  <span className="font-serif text-3xl italic text-[var(--text-main)] align-baseline leading-none transition-colors duration-300">
                    grow
                  </span>
                  . I implement modular patterns and strict typing.
                </>
              }
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}