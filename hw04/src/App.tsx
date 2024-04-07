import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import PokeList from "./components/PokeList";
import ThemeContext from "./context/ThemeContext";
import { Pokemon, Themes } from "./models/models";
import FavoritesContext from "./context/FavoritesContext";
import IsSmallDisplayContext from "./context/IsSmallDisplayContext";
import resolveConfig from "tailwindcss/resolveConfig";
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import tailwindConfig from "../tailwind.config.js";

function App() {
  const [favorites, setFavorites] = useState<Pokemon[]>([]);
  const [theme, setTheme] = useState<Themes>("auto");
  const [smallDisplay, setSmallDisplay] = useState<boolean>(false);

  const tailwindConfigs = resolveConfig(tailwindConfig);

  useEffect(() => {
    if (!("theme" in localStorage)) {
      setTheme("auto");
    } else if (localStorage.theme === "dark") setTheme("dark");
    else setTheme("light");

    const handleResize = () => {
      if (
        parseInt(tailwindConfigs.theme.screens.phone.max) >= window.innerWidth
      )
        setSmallDisplay(true);
      else setSmallDisplay(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [tailwindConfigs.theme.screens.phone.max]);

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
      <IsSmallDisplayContext.Provider value={smallDisplay}>
        <div className="min-w-screen min-h-screen flex flex-col bg-page-lt dark:bg-page-dt">
          <FavoritesContext.Provider
            value={{ pokemon: favorites, setPokemon: setFavorites }}
          >
            <Header />
            <PokeList />
          </FavoritesContext.Provider>
        </div>
      </IsSmallDisplayContext.Provider>
    </ThemeContext.Provider>
  );
}

export default App;
