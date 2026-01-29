import React, { createContext, useContext, useEffect, useState } from 'react';

interface CommandMenuContextType {
  isOpen: boolean;
  toggle: () => void;
  close: () => void;
  setIsOpen: (value: boolean) => void;
}

const CommandMenuContext = createContext<CommandMenuContextType | undefined>(undefined);

export function CommandMenuProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  // Klavye Kısayolu (CTRL+K veya CMD+K)
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    document.addEventListener('keydown', down);
    return () => document.removeEventListener('keydown', down);
  }, []);

  const toggle = () => setIsOpen((prev) => !prev);
  const close = () => setIsOpen(false);

  return (
    <CommandMenuContext.Provider value={{ isOpen, toggle, close, setIsOpen }}>
      {children}
    </CommandMenuContext.Provider>
  );
}

export const useCommandMenu = () => {
  const context = useContext(CommandMenuContext);
  if (context === undefined) {
    throw new Error('useCommandMenu must be used within a CommandMenuProvider');
  }
  return context;
};