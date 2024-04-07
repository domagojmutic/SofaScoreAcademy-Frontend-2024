import { useContext, useEffect, useState } from "react";
import IsFavoriteContext from "../context/IsFavoriteContext";
import { Pokemon } from "../models/models";
import FavoritesContext from "../context/FavoritesContext";
import PokeLike from "./PokeLike";
import PokeImage from "./PokeImage";

interface Props {
  pokemon: Pokemon;
}

function FavoriteItem(props: Props) {
  const { pokemon } = props;
  const { pokemon: favorites } = useContext(FavoritesContext);

  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    if (favorites.includes(pokemon)) setIsFavorite(true);
    else setIsFavorite(false);
  }, [favorites, pokemon]);

  return (
    <div className="relative w-[450px] px-[25px] py-[8px] flex flex-col gap-2 rounded-lg phone:w-[267px] phone:p-[15px] bg-page-lt dark:bg-page-dt">
      <IsFavoriteContext.Provider value={{ isFavorite, setIsFavorite }}>
        <div className="w-[35px] h-[35px] relative ml-auto phone:w-[22px] phone:h-[22px] phone:absolute phone:bottom-[19px] phone:right-[15px]">
          <PokeLike pokemon={pokemon} />
        </div>
        <div className="relative w-[400px] h-[400px] m-auto phone:w-[235px] phone:h-[235px]">
          <PokeImage pokemon={pokemon} />
        </div>
        <h2 className="font-bold text-[32px] leading-[48px] phone:text-[20px] phone:leading-[30px]">
          <span>#{pokemon.id.toString().padStart(4, "0")}&nbsp;&nbsp;</span>
          <span className="capitalize">{pokemon.name}</span>
        </h2>
      </IsFavoriteContext.Provider>
    </div>
  );
}

export default FavoriteItem;
