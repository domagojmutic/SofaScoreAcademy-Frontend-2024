import { Pokemon } from "../models/models";
import heart from "../assets/Heart.svg";
import heartRed from "../assets/Heart_red.svg";
import heartBlue from "../assets/Heart_blue.svg";
import { useContext, useEffect, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";
import ThemeContext from "../context/ThemeContext";
import IsFavoriteContext from "../context/IsFavoriteContext";

type sideType = "left" | "right";

interface Props {
  side: sideType;
  pokemon: Pokemon;
}

function PokeImage(props: Props) {
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
    <div
      className={
        "relative w-full h-full px-[60px] flex items-center flex-1 phone:order-1 phone:justify-center phone:px-[30px] " +
        (side === "right" ? "justify-end" : "order-2 justify-start")
      }
    >
      <button
        className={
          "absolute top-[15px] phone:right-[11px] phone:bottom-[11px] phone:top-auto phone:left-auto " +
          (side === "right" ? "right-[15px]" : "left-[15px]")
        }
        onClick={() => updateFavorites()}
      >
        <img
          className="text-favorite-icon w-[35px] h-[35px] phone:w-[25px] phone:h-[25px]"
          src={isFavorite ? heartColor : heart}
          alt="Heart"
        />
      </button>
      <img
        className="w-[400px] h-[400px] phone:w-[300px] phone:h-[300px] max-sm:w-[350px] max-sm:h-[350px]"
        src={
          isFavorite
            ? pokemon.sprites.front_shiny_big
            : pokemon.sprites.front_default_big
        }
        alt={pokemon.name}
      />
    </div>
  );
}

export default PokeImage;
