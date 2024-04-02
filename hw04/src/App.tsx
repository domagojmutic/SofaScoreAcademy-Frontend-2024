import { useEffect, useState } from "react";
import "./App.css";

type themes = "light" | "dark";

function App() {
  const [theme, setTheme] = useState<themes>("light");

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    )
      setTheme("dark");
    else setTheme("light");
  }, []);

  useEffect(() => {
    if (theme === "dark") document.documentElement.classList.add("dark");
    else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  return (
    <div className="min-w-screen min-h-screen flex flex-col bg-page-lt dark:bg-page-dt">
    </div>
  );
}

export default App;
