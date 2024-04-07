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
        "relative w-full h-full px-[60px] flex items-center flex-1 phone:order-1 phone:justify-center phone:px-[30px] " +
        (side === "right" ? "justify-end" : "order-2 justify-start")
      }
    >
      <PokeLike side={side} pokemon={pokemon} />
      <PokeImage side={side} pokemon={pokemon} />
    </div>
  );
}

export default PokeDisplay;
