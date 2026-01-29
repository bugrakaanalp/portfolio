import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from './ui/Container';
import { useLanguage } from '../context/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();
  const containerRef = useRef(null);

  const { scrollY } = useScroll();
  const backgroundY1 = useTransform(scrollY, [0, 500], [0, 200]);
  const backgroundY2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[70vh] flex flex-col justify-start items-center overflow-hidden pt-16 md:pt-20"
    >
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div
          style={{ y: backgroundY1 }}
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] rounded-full blur-[120px] mix-blend-multiply dark:mix-blend-normal"
        />
        <motion.div
          style={{ y: backgroundY2 }}
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] rounded-full blur-[100px] mix-blend-multiply dark:mix-blend-normal"
        />
      </div>

      <Container className="relative z-10 w-full flex flex-col items-center text-center pb-8">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-4 mt-4"
        >
          <div className="w-1.5 h-1.5 bg-[var(--text-main)] rounded-full" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[var(--text-dim)]">
            {t('Web Architect', 'Web Mimarı')}
          </span>
          <div className="w-1.5 h-1.5 bg-[var(--text-main)] rounded-full" />
        </motion.div>

        <h1 className="font-serif text-[15vw] md:text-[12rem] leading-[0.85] text-[var(--text-main)] tracking-[-0.04em] mb-6 flex flex-col items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('Digital', 'Dijital')}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0.98, y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
            className="italic font-light text-[var(--text-dim)] mt-2"
          >
            {t('Craftsman.', 'Mimar.')}
          </motion.div>
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >
          <div className="relative mt-4">
            <p className="font-sans text-[var(--text-dim)] text-lg font-light mb-1">
              {t('Bridging the gap between', 'Değer verdiğim iki şey:')}
            </p>

            <div className="flex items-center gap-4 relative px-4 py-2">
              <span className="font-serif italic text-xl text-[var(--text-main)] relative z-10">
                {t('artistic intent', 'sanatsallık')}
              </span>

              <div className="flex-1 min-w-[60px] h-[1px] relative flex items-center justify-center">
                <svg width="100%" height="12" viewBox="0 0 100 12" className="overflow-visible">
                  <motion.path
                    d="M0,6 L45,6 M55,6 L100,6"
                    fill="none"
                    stroke="var(--border-light)"
                    strokeWidth="1"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                  />
                  <motion.circle
                    cx="50" cy="6" r="2"
                    fill="none"
                    stroke="var(--text-main)"
                    strokeWidth="1"
                    initial={{ scale: 0, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ delay: 2.2, duration: 0.5 }}
                  />
                </svg>
              </div>

              <span className="font-mono text-sm text-[var(--text-main)] relative z-10 tracking-tight">
                {t('engineering_reality', 'mühendisliğin gerçekliği')}
              </span>

              <svg className="absolute bottom-0 left-0 w-full h-4 pointer-events-none text-[var(--border-light)]" viewBox="0 0 400 10" preserveAspectRatio="none">
                <motion.path
                  d="M10,0 L10,10 L390,10 L390,0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1.5 }}
                  transition={{ delay: 1.8, duration: 1.5, ease: "easeInOut" }}
                />
              </svg>
            </div>
          </div>
        </motion.div>

      </Container>
    </section>
  );
}