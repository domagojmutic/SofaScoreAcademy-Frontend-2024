import pokeball from "../assets/Pokeball.svg";
import heart from "../assets/Heart_header.svg";
import heartHover from "../assets/Heart_header_hover.svg";
import settings from "../assets/Settings.svg";
import settingsHover from "../assets/Settings_hover.svg";
import ConfigMenu from "./ConfigMenu";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FavoritesList from "./FavoritesList";

function Header() {
  const [configOpened, setConfigOpened] = useState(false);
  const [favoritesOpened, setFavoritesOpened] = useState(false);
  const [hoveringSettings, setHoveringSettings] = useState(false);
  const [hoveringHeart, setHoveringHeart] = useState(false);

  function closeFavorites() {
    setFavoritesOpened(false);
  }
  return (
    <div className="sticky top-0 w-full h-[85px] px-[45px] flex flex-row justify-between items-center z-50 phone:h-[45px] phone:pl-[11px] phone:pr-[17px] bg-header-lt dark:bg-header-dt">
      <div className="flex flex-row items-center">
        <img
          className="phone:w-[25px] phone:h-[25px]"
          src={pokeball}
          alt="Pokeball"
        />
        <h1 className="text-page-lt font-semibold text-lg ml-[11px] phone:ml-[9px] phone:text-[18px]">
          POKEDEX
        </h1>
      </div>
      <div className="flex flex-row items-center">
        <button
          className="relative"
          onClick={() => setFavoritesOpened((old) => !old)}
        >
          <img
            className="phone:w-[25px] phone:h-[25px]"
            src={heart}
            alt="Heart"
          />
          <motion.img
            className="phone:w-[25px] phone:h-[25px] absolute top-0 opacity-0 transition-opacity duration-300 ease-in-out"
            style={
              favoritesOpened || hoveringHeart ? { opacity: 1 } : { opacity: 0 }
            }
            src={heartHover}
            alt="Heart"
            onHoverStart={() => setHoveringHeart(true)}
            onHoverEnd={() => setHoveringHeart(false)}
          />
        </button>
        <button
          className="ml-[28px] phone:ml-[12px] relative"
          onClick={() => setConfigOpened((old) => !old)}
        >
          <img
            className="phone:w-[25px] phone:h-[25px]"
            src={settings}
            alt="Settings"
          />
          <motion.img
            className="phone:w-[25px] phone:h-[25px] absolute top-0 opacity-0 transition-opacity duration-300 ease-in-out"
            style={
              configOpened || hoveringSettings ? { opacity: 1 } : { opacity: 0 }
            }
            src={settingsHover}
            alt="Settings"
            onHoverStart={() => setHoveringSettings(true)}
            onHoverEnd={() => setHoveringSettings(false)}
          />
        </button>
      </div>
      <AnimatePresence>
        {configOpened && (
          <ConfigMenu opened={configOpened} changeState={setConfigOpened} />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {favoritesOpened && (
          <FavoritesList opened={favoritesOpened} close={closeFavorites} />
        )}
      </AnimatePresence>
    </div>
  );
}

export default Header;
