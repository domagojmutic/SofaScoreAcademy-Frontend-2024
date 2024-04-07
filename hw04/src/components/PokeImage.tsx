import { Pokemon } from "../models/models";
import { useContext } from "react";
import IsFavoriteContext from "../context/IsFavoriteContext";
import { AnimatePresence, motion } from "framer-motion";
import IsSmallDisplayContext from "../context/IsSmallDisplayContext";

type sideType = "left" | "right";

interface Props {
  animation_side?: sideType;
  pokemon: Pokemon;
}

function PokeImage(props: Props) {
  const { animation_side, pokemon } = props;

  const { isFavorite } = useContext(IsFavoriteContext);
  const isSmallDisplay = useContext(IsSmallDisplayContext);

  function getOffset() {
    if (animation_side === "right") {
      if (isSmallDisplay) return "calc(100vw + 50%)";
      else return "calc(100% + 60px)";
    } else if (animation_side === "left") {
      if (isSmallDisplay) return "calc(-100vw - 50%)";
      else return "calc(-100% - 60px)";
    } else return "";
  }

  const variants = {
    in: {
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
    out: {
      left: getOffset(),
      transition: {
        type: "spring",
        stiffness: 216,
        damping: 29.3,
        mass: 1,
        duration: 0.41,
        delay: 0,
      },
    },
    init: animation_side
      ? {
          left: getOffset(),
        }
      : {},
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
        initial={"init"}
        animate={"in"}
        exit={"out"}
        key={pokemon.id + "-image-" + isFavorite}
      />
    </AnimatePresence>
  );
}

export default PokeImage;
