import { useContext, useState } from "react";
import FavoritesContext from "../context/FavoritesContext";
import FavoriteItem from "./FavoriteItem";
import { motion } from "framer-motion";

interface Props {
  opened: boolean;
  close: () => void;
}

function FavoritesList(props: Props) {
  const { close } = props;
  const { pokemon } = useContext(FavoritesContext);

  const [localFavorites] = useState(pokemon);

  return (
    <motion.div
      className="fixed top-0 left-0 bottom-0 right-0 max-h-screen pt-[165px] pb-[80px] phone:pt-[90px] phone:pb-[45px] bg-black bg-opacity-25 backdrop-blur-[2px]"
      onClick={() => close()}
      animate={{opacity: 1}}
      exit={{opacity: 0}}
      initial={{opacity: 0}}
    >
      <motion.dialog
        className="relative max-w-full w-[85vw] min-h-[50vh] max-h-full px-[35px] py-[30px] flex flex-row justify-around items-start flex-wrap gap-[41px] phone:gap-[12px] phone:p-[15px] rounded-lg overflow-y-auto bg-details-lt dark:bg-details-dt text-text-lt dark:text-text-dt"
        onClick={(e) => e.stopPropagation()}
        initial={{ top: "calc(100vh - 165px)" }}
        animate={{ top: 0 }}
        exit={{ top: "calc(100vh - 165px)" }}
      >
        {localFavorites.length <= 0 && (
          <h2 className="font-bold text-lg leading-[48px] phone:text-[26px] m-auto">
            <span className="">No favorites found</span>
          </h2>
        )}
        {localFavorites.map((pokemon) => {
          return <FavoriteItem pokemon={pokemon} key={pokemon.id} />;
        })}
      </motion.dialog>
    </motion.div>
  );
}

export default FavoritesList;
