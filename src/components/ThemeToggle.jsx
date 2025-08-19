'use client';

import { Icon } from './icon';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { darkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      className="w-8 h-8 flex items-center justify-center text-white hover:text-yellow-300 transition-colors"
      aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      {darkMode ? (
        <Icon name="Sun" size={20} className="text-yellow-300" />
      ) : (
        <Icon name="Moon" size={20} />
      )}
    </button>
  );
}
