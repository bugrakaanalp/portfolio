import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Container from './ui/Container';

export default function Hero() {
  const containerRef = useRef(null);
  
  const { scrollY } = useScroll();
  const backgroundY1 = useTransform(scrollY, [0, 500], [0, 200]);
  const backgroundY2 = useTransform(scrollY, [0, 500], [0, -150]);

  return (
    <section 
      ref={containerRef} 
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden"
    >
      {/* Scroll-Reactive Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <motion.div 
          style={{ y: backgroundY1 }}
          className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[80vw] h-[80vw] bg-indigo-50/40 rounded-full blur-[120px] mix-blend-multiply" 
        />
        <motion.div 
          style={{ y: backgroundY2 }}
          className="absolute bottom-[-20%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-rose-50/30 rounded-full blur-[100px] mix-blend-multiply" 
        />
      </div>

      {/* CHANGED: pb-32 -> pb-12 */}
      <Container className="relative z-10 w-full flex flex-col items-center text-center pb-12">
        
        {/* Status Line */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full mt-6" />
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-[#86868B] mt-6">
            Web Architect
          </span>
          <div className="w-1.5 h-1.5 bg-[#1D1D1F] rounded-full mt-6" />
        </motion.div>

        {/* HEADLINE */}
        <h1 className="font-serif text-[15vw] md:text-[12rem] leading-[0.85] text-[#1D1D1F] tracking-[-0.04em] mb-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          >
            Digital
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, filter: "blur(15px)", scale: 0.98, y: 20 }}
            animate={{ opacity: 1, filter: "blur(0px)", scale: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1.4, ease: "easeOut" }}
            className="italic font-light text-[#86868B] mt-6"
          >
            Craftsman.
          </motion.div>
        </h1>

        {/* Narrative & The Visual Bridge */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="max-w-3xl mx-auto flex flex-col items-center"
        >

          {/* THE ARCHITECTURAL BRIDGE */}
          <div className="relative mt-12">
            <p className="font-sans text-[#86868B] text-lg font-light mb-2">
              Bridging the gap between
            </p>
            
            <div className="flex items-center gap-4 relative px-4 py-2">
              {/* Left Term */}
              <span className="font-serif italic text-xl text-[#1D1D1F] relative z-10">
                artistic intent
              </span>

              {/* The Visual Connection (SVG) */}
              <div className="flex-1 min-w-[60px] h-[1px] relative flex items-center justify-center">
                 <svg width="100%" height="12" viewBox="0 0 100 12" className="overflow-visible">
                    {/* The Connecting Line */}
                    <motion.path 
                      d="M0,6 L45,6 M55,6 L100,6" 
                      fill="none" 
                      stroke="#E8E8ED" 
                      strokeWidth="1"
                      initial={{ pathLength: 0, opacity: 0 }}
                      animate={{ pathLength: 1, opacity: 1 }}
                      transition={{ delay: 1.5, duration: 1.5, ease: "easeInOut" }}
                    />
                    {/* The "Bridge" Node in Center */}
                    <motion.circle 
                      cx="50" cy="6" r="2" 
                      fill="none" 
                      stroke="#1D1D1F" 
                      strokeWidth="1"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 2.2, duration: 0.5 }}
                    />
                 </svg>
              </div>

              {/* Right Term */}
              <span className="font-mono text-sm text-[#1D1D1F] relative z-10 tracking-tight">
                engineering_reality
              </span>
              
              {/* Architectural Bracket underneath */}
              <svg className="absolute bottom-0 left-0 w-full h-4 pointer-events-none text-[#E8E8ED]" viewBox="0 0 400 10" preserveAspectRatio="none">
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