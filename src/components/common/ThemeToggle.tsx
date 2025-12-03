'use client';

import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  onToggle?: () => void;
}

export default function ThemeToggle({ onToggle }: ThemeToggleProps) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    // Récupérer le thème depuis localStorage au chargement
    const savedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null;
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
      document.documentElement.classList.toggle('light', savedTheme === 'light');
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
    document.documentElement.classList.toggle('light', newTheme === 'light');

    // Appeler la fonction onToggle si elle existe (pour fermer le menu mobile)
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-btn p-2 rounded-lg hover:bg-gray-800 transition-colors"
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
    >
      {theme === 'dark' ? (
        <Sun className="w-5 h-5" style={{ stroke: '#ffffff', strokeWidth: 2 }} />
      ) : (
        <Moon className="w-5 h-5" style={{ stroke: '#ffffff', strokeWidth: 2 }} />
      )}
    </button>
  );
}
