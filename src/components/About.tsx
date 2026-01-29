import { motion } from 'framer-motion';
import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import { useLanguage } from '../context/LanguageContext';

const SharpenedFocus = ({ children }: { children: React.ReactNode }) => {
  return (
    <span className="relative inline-block group cursor-default align-bottom">
      <motion.span
        initial={{ opacity: 0, scaleX: 0.95 }}
        whileInView={{ opacity: 1, scaleX: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ delay: 0.2, duration: 1.2, ease: "easeOut" }}
        className="absolute -inset-x-1 -inset-y-0.5 bg-indigo-500/5 dark:bg-indigo-500/20 rounded-sm -z-10 origin-left"
      />
      <motion.span
        initial={{ filter: "blur(3px)", opacity: 0.6 }}
        whileInView={{ filter: "blur(0px)", opacity: 1 }}
        viewport={{ once: true, margin: "-10%" }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="relative z-10 transition-colors duration-500 text-[var(--text-dim)] group-hover:text-[var(--text-main)] font-medium"
      >
        {children}
      </motion.span>
    </span>
  );
};

export default function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-16 md:py-24 bg-[var(--bg-main)] border-t-2 border-[var(--border-dark)] overflow-hidden transition-colors duration-300">
      <Container>
        <SectionHeader
          label={t("Profile", "Profil")}
          title={t("The Person Behind the Code", "Klavyenin Ardındaki Kişi")}
          description={t("Merging technical expertise with artistic vision.", "Teknik uzmanlığı sanatsal vizyonla birleştiriyorum.")}
        />

        <div className="grid md:grid-cols-12 gap-16 items-center mt-12">

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
              <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-50 to-rose-50 dark:from-indigo-900/20 dark:to-rose-900/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

              {/* The Stamp/Card */}
              <div className="relative w-72 h-96 bg-[var(--bg-card)] p-3 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.08)] dark:shadow-none dark:border dark:border-[var(--border-light)] transition-all duration-500 ease-[cubic-bezier(0.23,1,0.32,1)]">
                {/* İç Çerçeve Rengi */}
                <div className="w-full h-full bg-[var(--bg-secondary)] overflow-hidden relative">
                  <img
                    src="/ben-pixel.png"
                    alt="Buğra Kaan Alp"
                    className="w-full h-full object-cover mix-blend-multiply dark:mix-blend-normal filter contrast-110 grayscale-[10%] group-hover:grayscale-0 transition-all duration-700"
                  />
                </div>

                {/* "Hello" signature */}
                <div className="absolute -bottom-10 -right-8 font-handwriting text-2xl text-[var(--text-main)] -rotate-6 transition-colors">
                  Buğra K. Alp
                </div>
              </div>
            </motion.div>
          </div>

          {/* TEXT COLUMN */}
          <div className="md:col-span-7 space-y-10">
            <div>
              <h3 className="font-serif text-3xl md:text-5xl text-[var(--text-main)] leading-tight mb-6 transition-colors">
                {t("Based in Türkiye, operating at the intersection of", "Türkiye’den,")} <span className="italic text-[var(--text-dim)]">{t("art direction", "sanat yönetimi")}</span> {t("and", "ile")} <span className="italic text-[var(--text-dim)]">{t("engineering", "mühendisliğin")}</span> {t("", "kesiştiği noktada üretiyorum.")}
              </h3>
              <p className="font-sans text-xl text-[var(--text-muted)] leading-relaxed text-balance transition-colors">
                {t(
                  "My journey began with a curiosity for how things work, evolving into an obsession with how things feel. I don't just write code; I orchestrate experiences. Whether it's a high-performance C# backend or a fluid React interface, my goal is always the same: ",
                  "Yolculuğum, işlerin nasıl yürüdüğüne olan merakla başladı ve zamanla işlerin nasıl hissettirdiğine olan bir takıntıya dönüştü. Ben sadece kod yazmıyorum; deneyimleri düzenliyorum. İster yüksek performanslı bir C# backend ister akıcı bir React arayüzü olsun, hedefim her zaman aynı: "
                )}
                <SharpenedFocus>
                  {t("absolute clarity and precision.", "mutlak netlik ve hassasiyet.")}
                </SharpenedFocus>
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}