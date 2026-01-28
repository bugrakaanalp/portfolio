import Container from './ui/Container';
import SectionHeader from './ui/SectionHeader';
import Section from './ui/Section';
import { 
  Check, 
  Mail, 
  MessageCircle, 
  Database, 
  Layers, 
  Globe, 
  Smartphone,
  Zap 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const content = {
  EN: {
    header: {
      label: "Services",
      title: "Interface Engineering.",
      desc: "Precision-crafted frontend solutions with manageable infrastructure."
    },
    tiers: [
      {
        name: "STATIC [Identity]",
        desc: "High-performance, visual-focused static structures for brand awareness.",
        price: "$600",
        recur: "One-time Payment",
        time: "1 Week",
        features: [
          "Landing Page / Corporate Showcase",
          "Next.js & Tailwind CSS",
          "Advanced Animations (Framer Motion)",
          "SEO & Semantic HTML Structure",
          "Responsive (Mobile First)",
          "Contact Form Integration"
        ]
      },
      {
        name: "HEADLESS [CMS]",
        desc: "Modern web sites with manageable content and dynamic data structure.",
        price: "$1,500",
        recur: "Standard Project",
        time: "2-3 Weeks",
        features: [
          "Blog / News / Portfolio Management",
          "Admin Panel (Sanity / Strapi)",
          "Image Optimization & CDN",
          "Dynamic Content Pages",
          "On-site Search Function",
          "Basic Data Analytics"
        ]
      },
      {
        name: "INTERACTIVE [App]",
        desc: "Web Applications containing complex data flows and user interaction.",
        price: "$3,000+",
        recur: "Project Based",
        time: "4-8 Weeks",
        features: [
          "SaaS Front-End / Dashboard",
          "User Auth Integration",
          "API Connections (Rest / GraphQL)",
          "Complex State Management",
          "Real-time Data Processing",
          "PWA (App-like Experience)"
        ]
      }
    ],
    modules: {
      title: "Technical Add-ons",
      desc: "Projects are delivered with high performance as standard. However, these modules can be integrated for specific business requirements.",
      items: [
        { icon: Smartphone, title: "Mobile First UI", desc: "Custom design touches giving an app-like feel on mobile devices.", price: "Included" },
        { icon: Globe, title: "Multi-Language", desc: "i18n infrastructure setup for multi-language (TR/EN/FR) architecture.", price: "+ $200" },
        { icon: Database, title: "BaaS Integration", desc: "Serverless backend connection with Firebase/Supabase.", price: "+ $400" },
        { icon: Layers, title: "Design System", desc: "Creation of a reusable UI Kit for your brand.", price: "Quote" },
      ]
    },
    audit: {
      title: "UI/UX & Performance Refactoring",
      desc: "Is your current site slow? Or is the design outdated? Instead of rewriting from scratch, I analyze your existing React/Next.js project, improve code quality, and migrate it to a modern design language.",
      cta: "Contact for Audit",
      price: "$250+",
      priceLabel: "Starting Price",
      badge: "PERFORMANCE OPTIMIZATION"
    },
    buttons: {
      est: "EST:",
      mail: "Mail",
      whatsapp: "WhatsApp"
    }
  },
  TR: {
    header: {
      label: "Hizmetler",
      title: "Arayüz Mühendisliği.",
      desc: "Yönetilebilir altyapıya sahip, hassas işlenmiş frontend çözümleri."
    },
    tiers: [
      {
        name: "STATİK [Kimlik]",
        desc: "Marka bilinirliği için yüksek performanslı, görsel odaklı statik yapılar.",
        price: "₺15.000",
        recur: "Tek Seferlik Ödeme",
        time: "1 Hafta",
        features: [
          "Landing Page / Kurumsal Vitrin",
          "Next.js & Tailwind CSS",
          "Gelişmiş Animasyonlar (Framer Motion)",
          "SEO & Semantik HTML Yapısı",
          "Responsive (Mobil Uyumlu)",
          "Form Entegrasyonu (İletişim)"
        ]
      },
      {
        name: "HEADLESS [CMS]",
        desc: "İçeriği yönetilebilir, dinamik veri yapısına sahip modern web siteleri.",
        price: "₺35.000",
        recur: "Standart Proje",
        time: "2-3 Hafta",
        features: [
          "Blog / Haber / Portfolyo Yönetimi",
          "Yönetim Paneli (Sanity / Strapi)",
          "Görsel Optimizasyonu & CDN",
          "Dinamik İçerik Sayfaları",
          "Site İçi Arama Fonksiyonu",
          "Basit Veri Analitiği"
        ]
      },
      {
        name: "İNTERAKTİF [Uygulama]",
        desc: "Karmaşık veri akışları ve kullanıcı etkileşimi içeren Web Uygulamaları.",
        price: "₺70.000+",
        recur: "Proje Bazlı",
        time: "4-8 Hafta",
        features: [
          "SaaS Front-End / Dashboard",
          "Kullanıcı Girişi (Auth) Entegrasyonu",
          "API Bağlantıları (Rest / GraphQL)",
          "Karmaşık State Yönetimi",
          "Gerçek Zamanlı Veri (Real-time)",
          "PWA (Uygulama Gibi Çalışma)"
        ]
      }
    ],
    modules: {
      title: "Teknik Eklentiler",
      desc: "Projeler standart olarak yüksek performanslı teslim edilir. Ancak özel iş gereksinimleri için bu modüller sisteme entegre edilebilir.",
      items: [
        { icon: Smartphone, title: "Mobile First UI", desc: "Mobil cihazlarda uygulama hissi veren özel tasarım dokunuşları.", price: "Dahil" },
        { icon: Globe, title: "Çoklu Dil", desc: "i18n altyapısı ile çok dilli (TR/EN/FR) mimari kurulumu.", price: "+ ₺5.000" },
        { icon: Database, title: "BaaS Entegrasyonu", desc: "Firebase/Supabase ile serverless backend bağlantısı.", price: "+ ₺8.000" },
        { icon: Layers, title: "Tasarım Sistemi", desc: "Markanız için yeniden kullanılabilir UI Kit oluşturulması.", price: "Teklif" },
      ]
    },
    audit: {
      title: "UI/UX & Performans İyileştirme",
      desc: "Mevcut siteniz yavaş mı? Veya tasarımı eskidi mi? Sıfırdan yazmak yerine, mevcut React/Next.js projenizi analiz ediyor, kod kalitesini artırıyor ve modern tasarım diline (Redesign) taşıyorum.",
      cta: "Analiz İçin İletişim",
      price: "₺5.000+",
      priceLabel: "Başlangıç Fiyatı",
      badge: "HIZ VE PERFORMANS ANALİZİ"
    },
    buttons: {
      est: "SÜRE:",
      mail: "Mail",
      whatsapp: "WhatsApp"
    }
  }
};

export default function Services() {
  const { lang } = useLanguage(); // Context'ten dili çekiyoruz
  const t = content[lang];

  return (
    <Section id="services" className="border-t border-[var(--border-light)] pb-32">
      <Container>
        <SectionHeader 
          label={t.header.label} 
          title={t.header.title} 
          description={t.header.desc}
        />

        {/* 1. PAKETLER (TIERS) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {t.tiers.map((tier, idx) => (
            <div 
              key={idx}
              className="
                group relative flex flex-col p-8
                bg-[var(--bg-card)] border border-[var(--border-light)]
                hover:border-[var(--text-main)] transition-all duration-300
              "
            >
              <div className="mb-6">
                <h3 className="font-mono text-xs text-[var(--text-dim)] uppercase tracking-widest mb-2">
                  {tier.name}
                </h3>
                <div className="font-serif text-3xl text-[var(--text-main)] font-medium">
                  {tier.price}
                </div>
                <div className="text-[10px] font-mono text-[var(--text-muted)] mt-1">
                  {tier.recur}
                </div>
              </div>

              <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed mb-8 border-b border-[var(--border-light)] pb-6">
                {tier.desc}
              </p>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feat, fIdx) => (
                  <li key={fIdx} className="flex items-start gap-3">
                    <Check className="w-4 h-4 text-[var(--text-main)] mt-0.5 shrink-0" />
                    <span className="font-sans text-sm text-[var(--text-muted)] group-hover:text-[var(--text-main)] transition-colors">
                      {feat}
                    </span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto pt-6 border-t border-[var(--border-light)] flex flex-col gap-4">
                 <span className="font-mono text-[10px] text-[var(--text-dim)] uppercase">
                   {t.buttons.est} {tier.time}
                 </span>
                 <div className="flex gap-3 w-full">
                   <a 
                     href={`mailto:bugrakaanalp19@gmail.com?subject=${tier.name} Inquiry`}
                     className="
                       flex-1 flex items-center justify-center gap-2 
                       px-3 py-2.5 
                       text-xs font-medium text-[var(--text-main)] 
                       border border-[var(--border-light)] rounded 
                       hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] 
                       transition-all duration-300
                     "
                   >
                     <Mail className="w-3.5 h-3.5" />
                     {t.buttons.mail}
                   </a>
                   {/* Numaranı yaz: 905... */}
                   <a 
                     href="https://wa.me/905XXXXXXXXXX" 
                     target="_blank"
                     rel="noopener noreferrer"
                     className="
                       flex-1 flex items-center justify-center gap-2 
                       px-3 py-2.5 
                       text-xs font-medium text-[var(--text-main)] 
                       border border-[var(--border-light)] rounded 
                       hover:bg-[var(--text-main)] hover:text-[var(--bg-main)] 
                       transition-all duration-300
                     "
                   >
                     <MessageCircle className="w-3.5 h-3.5" />
                     {t.buttons.whatsapp}
                   </a>
                 </div>
              </div>
            </div>
          ))}
        </div>

        <div className="w-full h-px bg-[var(--border-light)] my-24" />

        {/* 2. TEKNİK DETAYLAR & MODÜLLER */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
           <div className="lg:col-span-1">
             <h3 className="font-serif text-2xl text-[var(--text-main)]">
               {t.modules.title}
             </h3>
             <p className="font-sans text-sm text-[var(--text-muted)] mt-4 leading-relaxed">
               {t.modules.desc}
             </p>
           </div>

           <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12">
             {t.modules.items.map((mod, idx) => (
               <div key={idx} className="group flex gap-4 items-start">
                 <div className="p-3 bg-[var(--bg-secondary)] border border-[var(--border-light)] rounded-sm group-hover:border-[var(--text-main)] transition-colors">
                   <mod.icon className="w-5 h-5 text-[var(--text-main)]" />
                 </div>
                 <div>
                   <h4 className="font-sans font-medium text-[var(--text-main)] mb-1">
                     {mod.title}
                   </h4>
                   <p className="font-sans text-xs text-[var(--text-muted)] leading-relaxed mb-2">
                     {mod.desc}
                   </p>
                   <span className="font-mono text-[10px] text-[var(--text-dim)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded border border-[var(--border-light)]">
                     {mod.price}
                   </span>
                 </div>
               </div>
             ))}
           </div>
        </div>

        {/* 3. AUDIT SERVICES */}
        <div className="mt-24 border border-[var(--border-light)] bg-[var(--bg-card)]/50 p-6 md:p-10 hover:border-[var(--text-main)] transition-all">
           <div className="flex flex-col md:flex-row items-start justify-between gap-8">
             <div className="flex-1">
               <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-5 bg-amber-500/10 border border-amber-500/20 rounded text-amber-500 font-sans text-xs md:text-sm font-bold tracking-wide uppercase">
                 <Zap className="w-4 h-4" />
                 <span>{t.audit.badge}</span>
               </div>
               <h3 className="font-serif text-xl text-[var(--text-main)] mb-2">
                 {t.audit.title}
               </h3>
               <p className="font-sans text-sm text-[var(--text-muted)] leading-relaxed max-w-2xl">
                 {t.audit.desc}
               </p>
             </div>
             <div className="shrink-0 text-right md:pt-8">
                <span className="block font-serif text-xl text-[var(--text-main)]">{t.audit.price}</span>
                <button className="mt-2 text-[10px] font-mono uppercase text-[var(--text-main)] border-b border-[var(--text-main)] hover:opacity-70 transition-opacity">
                  {t.audit.cta}
                </button>
             </div>
           </div>
        </div>
      </Container>
    </Section>
  );
}