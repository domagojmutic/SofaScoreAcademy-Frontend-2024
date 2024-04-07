import { Pokemon } from "../models/models";
import heart from "../assets/Heart.svg";
import heartRed from "../assets/Heart_red.svg";
import heartBlue from "../assets/Heart_blue.svg";
import { useContext, useEffect, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";
import ThemeContext from "../context/ThemeContext";
import IsFavoriteContext from "../context/IsFavoriteContext";
import { AnimatePresence, motion } from "framer-motion";

type sideType = "left" | "right";

interface Props {
  side: sideType;
  pokemon: Pokemon;
}

function PokeLike(props: Props) {
  const { side, pokemon } = props;

  const { setPokemon: setFavorites } = useContext(FavoritesContext);
  const { theme } = useContext(ThemeContext);
  const { isFavorite } = useContext(IsFavoriteContext);

  const [heartColor, setHeartColor] = useState<string>();

  useEffect(() => {
    if (theme === "auto") {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches)
        setHeartColor(heartBlue);
      else setHeartColor(heartRed);
    } else if (theme === "dark") setHeartColor(heartBlue);
    else setHeartColor(heartRed);
  }, [theme]);

  function updateFavorites() {
    if (!isFavorite) setFavorites((old) => [...old, pokemon]);
    else
      setFavorites((old) => {
        const updated = [...old];
        updated.splice(updated.indexOf(pokemon), 1);
        return updated;
      });
  }

  return (
    <AnimatePresence>
      <motion.button
        className={
          "absolute top-[15px] phone:right-[11px] phone:bottom-[11px] phone:top-auto phone:left-auto " +
          (side === "right" ? "right-[15px]" : "left-[15px]")
        }
        onClick={() => updateFavorites()}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        initial={{ opacity: 0 }}
        transition={{ ease: "easeIn", duration: 0.3 }}
        key={pokemon.id + "-like-" + isFavorite}
      >
        <img
          className="text-favorite-icon w-[35px] h-[35px] phone:w-[25px] phone:h-[25px]"
          src={isFavorite ? heartColor : heart}
          alt="Heart"
        />
      </motion.button>
    </AnimatePresence>
  );
}

export default PokeLike;
