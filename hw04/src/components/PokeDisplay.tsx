import { Pokemon } from "../models/models";
import PokeImage from "./PokeImage";
import PokeLike from "./PokeLike";

type sideType = "left" | "right";

interface Props {
  side: sideType;
  pokemon: Pokemon;
}

function PokeDisplay(props: Props) {
  const { side, pokemon } = props;

  return (
    <div
      className={
        "relative w-full h-full px-[60px] flex items-center flex-1 phone:order-1 phone:justify-center phone:px-[30px] max-md:px-[50px] max-sm:px-[45px] " +
        (side === "right" ? "justify-end" : "order-2 justify-start")
      }
    >
      <div
        className={
          "absolute w-[35px] h-[35px] phone:w-[25px] phone:h-[25px] top-[15px] phone:right-[11px] phone:bottom-[11px] phone:top-auto phone:left-auto " +
          (side === "right" ? "right-[15px]" : "left-[15px]")
        }
      >
        <PokeLike pokemon={pokemon} />
      </div>
      <div className="relative w-[400px] h-[400px] phone:w-[300px] phone:h-[300px] max-sm:w-[350px] max-sm:h-[350px]">
        <PokeImage animation_side={side} pokemon={pokemon} />
      </div>
    </div>
  );
}

export default PokeDisplay;
