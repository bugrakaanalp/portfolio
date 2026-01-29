import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="
        relative flex items-center justify-center w-10 h-10 
        border-2 border-black dark:border-white
        bg-transparent
        text-black dark:text-white
        hover:bg-black hover:text-white
        dark:hover:bg-white dark:hover:text-black
        transition-all duration-300
      "
            aria-label="Toggle Theme"
        >
            {theme === 'light' ? (
                <Moon className="w-5 h-5" strokeWidth={2} />
            ) : (
                <Sun className="w-5 h-5" strokeWidth={2} />
            )}
        </button>
    );
}