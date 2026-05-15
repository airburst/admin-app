import { useCallback, useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(null);

  useEffect(() => {
    setTheme(
      document.documentElement.classList.contains("dark") ? "dark" : "light",
    );
  }, []);

  const toggleTheme = useCallback(() => {
    const isDark = document.documentElement.classList.toggle("dark");
    const next: Theme = isDark ? "dark" : "light";
    localStorage.setItem("theme", next);
    setTheme(next);
  }, []);

  return { theme, toggleTheme };
}
