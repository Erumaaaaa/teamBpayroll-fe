import { createContext, useContext, useEffect, useState } from "react";

const ThemeProviderContext = createContext({
  theme: "system",
  setTheme: () => null,
});

export function ThemeProvider({
  children,
  defaultTheme = "system",
  storageKey = "vite-ui-theme",
  ...props
}) {
  // Mengambil tema dari localStorage atau defaultTheme jika tidak ada
  const [theme, setTheme] = useState(() => {
    const storedTheme = localStorage.getItem(storageKey);
    return storedTheme ? storedTheme : defaultTheme;
  });

  useEffect(() => {
    const root = window.document.documentElement;

    // Menghapus kelas tema lama jika ada
    root.classList.remove("light", "dark", "system");

    if (theme === "system") {
      // Menentukan tema berdasarkan preferensi sistem
      const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light";

      root.classList.add("system", systemTheme);
    } else {
      // Menambahkan kelas tema baru
      root.classList.add(theme);
    }
  }, [theme]);

  const value = {
    theme,
    setTheme: (newTheme) => {
      console.log("Setting theme to:", newTheme); // Log untuk debugging
      localStorage.setItem(storageKey, newTheme); // Menyimpan tema di localStorage
      setTheme(newTheme); // Mengupdate state tema
    },
  };

  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

export const useTheme = () => {
  const context = useContext(ThemeProviderContext);

  if (context === undefined)
    throw new Error("useTheme must be used within a ThemeProvider");

  return context;
};
