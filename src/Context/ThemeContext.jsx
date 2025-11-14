import { createContext, useEffect, useState } from "react";
export const ThemeContext = createContext();
export const ThemeProvider = ({ children }) => {
  const [openAsideBar, setOpenAsideBar] = useState(false)
  const [switchTheme, setSwitchTheme] = useState(() => {
    const saved = localStorage.getItem("theme");
    return saved ? saved : "light";
  });
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove("light", "dark");
    root.classList.add(switchTheme);
    localStorage.setItem("theme", switchTheme);
  }, [switchTheme]);

  const ToggleTheme = (theme) => {
    setSwitchTheme(theme);
  };




  return (
    <ThemeContext.Provider value={{ switchTheme, ToggleTheme, openAsideBar, setOpenAsideBar }}>
      {children}
    </ThemeContext.Provider>
  );
};
