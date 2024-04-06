import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ThemeContext from "./context/ThemeContext";
import { Themes } from "./models/models";

function App() {
  const [theme, setTheme] = useState<Themes>("auto");

  useEffect(() => {
    if (!("theme" in localStorage)) {
      setTheme("auto");
    } else if (localStorage.theme === "dark") setTheme("dark");
    else setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "auto") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        document.documentElement.classList.add("dark");
      else document.documentElement.classList.remove("dark");
    } else if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <div className="min-w-screen min-h-screen flex flex-col bg-page-lt dark:bg-page-dt">
        <Header />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
