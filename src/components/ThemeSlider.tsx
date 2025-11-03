'use client';

import { Moon, Sun } from 'lucide-react';
import { useDarkMode } from '../lib/useDarkMode';

export default function ThemeSlider() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      onClick={toggleDarkMode}
      className="relative w-12 h-6 flex items-center bg-gray-200 dark:bg-gray-700 rounded-full p-1 cursor-pointer transition-colors duration-300 ease-in-out"
      aria-label="Toggle dark mode"
    >
      <div className="absolute left-1 top-1/2 -translate-y-1/2">
        <Sun size={16} className="text-yellow-500" />
      </div>
      <div className="absolute right-1 top-1/2 -translate-y-1/2">
        <Moon size={16} className="text-gray-900" />
      </div>
      <div
        className={`absolute top-1/2 -translate-y-1/2 w-5 h-5 bg-white dark:bg-gray-900 rounded-full shadow-md transform transition-transform duration-300 ease-in-out ${
          isDarkMode ? 'translate-x-6' : 'translate-x-1'
        }`}
      />
    </div>
  );
}
