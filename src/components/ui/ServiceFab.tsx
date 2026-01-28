import { Mail, ArrowUpRight } from 'lucide-react';

export default function ServiceFab() {
  return (
    <a
      href="mailto:bugrakaanalp19@gmail.com?subject=Project%20Inquiry"
      className="
        fixed 
        bottom-6 left-6 
        md:bottom-8 md:left-8 
        z-40 
        flex items-center justify-center
        w-12 h-12 hover:w-36 /* Hoverda daha fazla genişler */
        bg-[var(--text-main)] text-[var(--bg-main)]
        rounded-full shadow-xl
        transition-all duration-300 ease-in-out
        group overflow-hidden
      "
    >
      {/* İKON */}
      <div className="absolute left-1/2 -translate-x-1/2 group-hover:left-4 group-hover:translate-x-0 transition-all duration-300">
        <Mail className="w-5 h-5" />
      </div>

      {/* YAZI */}
      <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap pl-6 text-xs font-sans font-medium transition-opacity duration-300 delay-100 flex items-center gap-2">
        Start Project
        <ArrowUpRight className="w-3 h-3" />
      </span>
    </a>
  );
}