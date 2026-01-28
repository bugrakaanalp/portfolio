import { motion } from 'framer-motion';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';

const SharpenedFocus = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block group cursor-default align-bottom">
      <motion.span
        initial={{ opacity: 0, scaleX: 0.95 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
        className="absolute -inset-x-1 -inset-y-0.5 bg-indigo-500/5 rounded-sm -z-10 origin-left"
      />
      <motion.span
        initial={{ filter: "blur(3px)", opacity: 0.6, color: "#86868B" }}
        whileInView={{ filter: "blur(0px)", opacity: 1, color: "#1D1D1F" }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 transition-colors duration-500 group-hover:text-black font-medium"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function About() {
  return (
    <section id="about" className="py-16 md:py-24 bg-[#FDFCFD] border-t border-[#1D1D1F]/5 overflow-hidden">
      <Container>
        <SectionHeader 
          label="Profile" 
          title="The Person Behind the Code" 
        />

        <div className="grid md:grid-cols-12 gap-16 items-center">
          
          {/* IMAGE COLUMN */}
          <div className="md:col-span-5 relative flex justify-center md:justify-start">
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="relative group cursor-pointer"
              >
                {/* Decorative Elements */}
                <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-50 to-rose-50 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                
                {/* The Stamp/Card - NO ROTATION */}
                <div className="relative w-72 h-96 bg-white p-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] transition-transform duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                  <div className="w-full h-full bg-[#F5F5F7] overflow-hidden relative">
                    <img 
                      src="/ben-pixel.png" 
                      alt="Buğra Kaan Alp" 
                      className="w-full h-full object-cover mix-blend-multiply filter contrast-110 grayscale-[10%] group-hover:grayscale-0 transition-all duration-700" 
                    />
                  </div>
                  
                  {/* "Hello" signature */}
                  <div className="absolute -bottom-10 -right-8 font-handwriting text-2xl text-[#1D1D1F] -rotate-6">
                    Buğra K. Alp
                  </div>
                </div>
              </motion.div>
          </div>

          {/* TEXT COLUMN */}
          <div className="md:col-span-7 space-y-10">
            <div>
              <h3 className="font-serif text-3xl md:text-5xl text-[#1D1D1F] leading-tight mb-6">
                Based in Türkiye, operating at the intersection of <span className="italic text-[#86868B]">art direction</span> and <span className="italic text-[#86868B]">engineering</span>.
              </h3>
              <p className="font-sans text-xl text-[#424245] leading-relaxed text-balance">
                My journey began with a curiosity for how things work, evolving into an obsession with how things feel. I don't just write code; I orchestrate experiences. Whether it's a high-performance C# backend or a fluid React interface, my goal is always the same: <SharpenedFocus>absolute clarity and precision.</SharpenedFocus>
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}