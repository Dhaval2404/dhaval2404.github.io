"use client";

import { Moon, Sun } from "lucide-react";

const THEME_STORAGE_KEY = "theme";

export default function ThemeToggle() {
  const toggleTheme = () => {
    const isDark = document.documentElement.classList.toggle("dark");
    try {
      window.localStorage.setItem(THEME_STORAGE_KEY, isDark ? "dark" : "light");
    } catch {
      /* storage unavailable */
    }
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className="inline-flex size-11 items-center justify-center rounded-lg border border-border-light bg-white text-slate-heading transition-colors hover:bg-slate-50 dark:bg-slate-900 dark:hover:bg-slate-800"
    >
      <span aria-hidden="true">
        <Sun className="hidden text-amber-300 h-6 w-6 dark:block" />
        <Moon className="block h-6 w-6 text-zinc-600 dark:hidden" />
      </span>
    </button>
  );
}
