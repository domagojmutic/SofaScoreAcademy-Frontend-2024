import { Pokemon } from "../models/models";
import heart from "../assets/HeartSmall.svg";

type sideType = "left" | "right";

interface Props {
  side: sideType;
  pokemon: Pokemon;
}

function PokeImage(props: Props) {
  const { side, pokemon } = props;

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
      >
        <img
          className="text-favorite-icon w-[35px] h-[35px] phone:w-[25px] phone:h-[25px]"
          src={heart}
          alt="Heart"
        />
      </button>
      <img
        className="w-[400px] h-[400px] phone:w-[300px] phone:h-[300px] max-sm:w-[350px] max-sm:h-[350px]"
        src={pokemon.sprites.front_default_big}
        alt={pokemon.name}
      />
    </div>
  );
}

export default PokeImage;
