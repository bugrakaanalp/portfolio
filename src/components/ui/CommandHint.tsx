import { Command, Menu } from 'lucide-react';
import { useCommandMenu } from '../../context/CommandMenuContext';

export default function CommandHint() {
  const { toggle } = useCommandMenu();

  return (
    <button
      onClick={toggle}
      className="
        fixed 
        bottom-6 right-6 
        md:bottom-8 md:right-8 
        z-40 
        flex items-center justify-center
        w-12 h-12 hover:w-32 /* Normalde kare, hoverda genişler */
        bg-[var(--text-main)] text-[var(--bg-main)]
        rounded-full shadow-xl
        transition-all duration-300 ease-in-out
        group overflow-hidden
      "
    >
      {/* İKON: Sabit kalır */}
      <div className="absolute left-1/2 -translate-x-1/2 group-hover:left-4 group-hover:translate-x-0 transition-all duration-300">
        <Menu className="w-5 h-5 md:hidden" />
        <Command className="w-5 h-5 hidden md:block" />
      </div>

      {/* YAZI: Hover olunca açılır ve görünür */}
      <span className="opacity-0 group-hover:opacity-100 whitespace-nowrap pl-6 text-xs font-mono tracking-wide transition-opacity duration-300 delay-100">
        Ctrl + K
      </span>
    </button>
  );
}