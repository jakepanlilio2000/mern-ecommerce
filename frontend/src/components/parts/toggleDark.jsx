// ThemeToggle.jsx
import { useEffect, useState } from "react";

function useDarkMode() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === "undefined") return false;
    return (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
    );
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add("dark");
      localStorage.theme = "dark";
    } else {
      root.classList.remove("dark");
      localStorage.theme = "light";
    }
  }, [isDark]);

  const toggleDarkMode = () => setIsDark((prev) => !prev);

  return [isDark, toggleDarkMode];
}

export default function ThemeToggle() {
  const [isDark, toggleDarkMode] = useDarkMode();

  return <button onClick={toggleDarkMode}>{isDark ? "🌙" : "☀️"}</button>;
}
