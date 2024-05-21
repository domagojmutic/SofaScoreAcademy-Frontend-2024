import { useContext } from "react";
import IsFavoriteContext from "../context/IsFavoriteContext";
import { Pokemon } from "../models/models";
import { AnimatePresence, motion } from "framer-motion";

interface Props {
  pokemon: Pokemon;
}

function PokeDetailsImage(props: Props) {
  const { pokemon } = props;

  const { isFavorite } = useContext(IsFavoriteContext);

  const variants = {
    in: { opacity: 1, transition: { duration: 0.2, delay: 1.1 } },
    out: { opacity: 0, transition: { duration: 0.2, delay: 0 } },
  };

  return (
    <div className="relative">
      <AnimatePresence>
        <motion.div
          variants={variants}
          className="absolute flex flex-row h-[160px] justify-between max-md:justify-center items-center flex-wrap"
          animate={"in"}
          initial={{ opacity: 0 }}
          exit={"out"}
          key={pokemon.id + "-small-image-" + isFavorite}
        >
          <img
            className="w-[160px] h-[160px] max-lg:w-[140px] max-lg:h-[140px]"
            src={
              isFavorite
                ? pokemon.sprites.front_shiny
                : pokemon.sprites.front_default
            }
            alt={pokemon.name + " front"}
          />
          <img
            className="w-[160px] h-[160px] max-lg:w-[140px] max-lg:h-[140px]"
            src={
              isFavorite
                ? pokemon.sprites.back_shiny
                : pokemon.sprites.back_default
            }
            alt={pokemon.name + " back"}
          />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default PokeDetailsImage;
