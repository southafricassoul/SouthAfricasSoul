import { Sun, Moon } from 'lucide-react';
import { useDarkMode } from '../hooks/useDarkMode';

export default function ThemeSlider() {
  const { isDarkMode, toggleDarkMode } = useDarkMode();

  return (
    <div
      role="button"
      aria-label="Toggle dark mode"
      onClick={toggleDarkMode}
      className="relative w-12 h-6 flex items-center bg-stone-200 dark:bg-stone-700 rounded-full p-1 cursor-pointer"
    >
      <div
        className={`absolute bg-white dark:bg-stone-900 w-5 h-5 rounded-full shadow-md transform transition-transform duration-300 ${
          isDarkMode ? 'translate-x-6' : 'translate-x-0'
        }`}
      />
      <div className="flex justify-between w-full">
        <Sun className="w-4 h-4 text-amber-500" />
        <Moon className="w-4 h-4 text-blue-500" />
      </div>
    </div>
  );
}
