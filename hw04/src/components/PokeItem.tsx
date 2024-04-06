import { useContext, useEffect, useState } from "react";
import IsFavoriteContext from "../context/IsFavoriteContext";
import { Pokemon } from "../models/models";
import PokeDetails from "./PokeDetails";
import PokeImage from "./PokeImage";
import FavoritesContext from "../context/FavoritesContext";

type sideType = "left" | "right";

interface Props {
  side: sideType;
  pokemon: Pokemon;
}

function PokeItem(props: Props) {
  const { side, pokemon } = props;
  const { pokemon: favorites } = useContext(FavoritesContext);
  
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites.includes(pokemon)) setIsFavorite(true);
    else setIsFavorite(false);
  }, [favorites, pokemon]);

  return (
    <div className="w-full h-[516px] flex flex-row phone:h-[756px] phone:flex-col">
      <IsFavoriteContext.Provider value={{ isFavorite, setIsFavorite }}>
        <PokeImage pokemon={pokemon} side={side} />
        <PokeDetails pokemon={pokemon} side={side} />
      </IsFavoriteContext.Provider>
    </div>
  );
}

export default PokeItem;
