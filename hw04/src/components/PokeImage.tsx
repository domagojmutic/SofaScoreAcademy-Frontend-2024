import { Pokemon } from "../models/models";
import { useContext } from "react";
import IsFavoriteContext from "../context/IsFavoriteContext";
import { AnimatePresence, motion } from "framer-motion";

type sideType = "left" | "right";

interface Props {
  animation_side?: sideType;
  pokemon: Pokemon;
}

function PokeImage(props: Props) {
  const { animation_side, pokemon } = props;

  const { isFavorite } = useContext(IsFavoriteContext);

  const variants = {
    in:
      animation_side === "right"
        ? {
            right: "0px",
            transition: {
              type: "spring",
              stiffness: 216,
              damping: 29.3,
              mass: 1,
              duration: 0.41,
              delay: 1,
            },
            // transition: { delay: 1, duration: 0.4, ease: "easeOut" },
          }
        : {
            left: "0px",
            transition: {
              type: "spring",
              stiffness: 216,
              damping: 29.3,
              mass: 1,
              duration: 0.41,
              delay: 1,
            },
          },
    out:
      animation_side === "right"
        ? {
            right: "-460px",
            transition: {
              type: "spring",
              stiffness: 216,
              damping: 29.3,
              mass: 1,
              duration: 0.41,
              delay: 0,
            },
          }
        : {
            left: "-460px",
            transition: {
              type: "spring",
              stiffness: 216,
              damping: 29.3,
              mass: 1,
              duration: 0.41,
              delay: 0,
            },
          },
  };

  return (
    <AnimatePresence>
      <motion.img
        variants={animation_side ? variants : {}}
        className="absolute w-full h-full"
        src={
          isFavorite
            ? pokemon.sprites.front_shiny_big
            : pokemon.sprites.front_default_big
        }
        alt={pokemon.name}
        initial={
          animation_side
            ? animation_side === "right"
              ? { right: "-460px" }
              : { left: "-460px" }
            : {}
        }
        animate={"in"}
        exit={"out"}
        key={pokemon.id + "-image-" + isFavorite}
      />
    </AnimatePresence>
  );
}

export default PokeImage;
