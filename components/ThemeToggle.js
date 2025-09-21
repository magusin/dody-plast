import { useEffect, useState } from "react";

export default function ThemeToggle({ className = "" }) {
  const [mounted, setMounted] = useState(false);
  const [isDark, setIsDark] = useState(false);

  // Une fois monté, on lit l'état actuel (classe sur <html>)
  useEffect(() => {
    setMounted(true);
    const root = document.documentElement;
    setIsDark(root.classList.contains("dark"));
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
    setIsDark(next);
  };

  if (!mounted) return null;

  return (
    <button
      onClick={toggle}
      className={`p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 ${className}`}
      aria-label="Basculer thème"
      title={isDark ? "Mode clair" : "Mode sombre"}
    >
      {isDark ? (
        <span className="text-yellow-400 text-xl">☀️</span>
      ) : (
        <span className="text-gray-700 dark:text-gray-200 text-xl">🌙</span>
      )}
    </button>
  );
}