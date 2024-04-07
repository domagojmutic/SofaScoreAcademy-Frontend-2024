import { Pokemon } from "../models/models";
import Tag from "./Tag";
import { motion } from "framer-motion";
import PokeDetailsImage from "./PokeDetailsImage";

type sideType = "left" | "right";

interface Props {
  side: sideType;
  pokemon: Pokemon;
}

function PokeDetails(props: Props) {
  const { side, pokemon } = props;

  return (
    <div
      className={
        "w-full h-full px-[60px] flex flex-col flex-1 justify-center items-start bg-details-lt dark:bg-details-dt phone:order-2 phone:px-[30px] max-md:px-[50px] max-sm:px-[45px] z-30 " +
        (side === "right" ? "" : "order-1")
      }
    >
      <motion.div
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 1.5, duration: 0.4 }}
      >
        <h2 className="font-bold text-lg h-[48px] phone:text-[26px]">
          <span>#{pokemon.id.toString().padStart(4, "0")}&nbsp;&nbsp;</span>
          <span className="capitalize">{pokemon.name}</span>
        </h2>
        <div className="flex flex-row mt-[12px] min-xl:gap-[8%] min-xxl:gap-[11%]">
          <div className="flex flex-col gap-[10px] flex-1">
            <div className="min-h-[21px]">
              <span className="font-semibold text-md">Health Points: </span>
              <span className="text-md">{pokemon.hp_stats} HP</span>
            </div>
            <div className="min-h-[21px]">
              <span className="font-semibold text-md">Height: </span>
              <span className="text-md">{pokemon.height} cm</span>
            </div>
            <div className="min-h-[21px]">
              <span className="font-semibold text-md">Weight: </span>
              <span className="text-md">{pokemon.weight} kg</span>
            </div>
            <div className="min-h-[21px] flex flex-row items-center">
              <span className="font-semibold text-md">Type:</span>
              {pokemon.types.map((type) => {
                return (
                  <Tag type={type} key={type}>
                    <span className="text-sm">{type}</span>
                  </Tag>
                );
              })}
            </div>
            <div className="min-h-[21px]">
              <span className="font-semibold text-md">Details: </span>
              <span className="text-md">{pokemon.details}</span>
            </div>
          </div>
          <div className="flex flex-col gap-[10px] flex-[1.23] phone:hidden">
            <div className="min-h-[21px]">
              <span className="font-semibold text-md">Full view: </span>
            </div>
            <PokeDetailsImage pokemon={pokemon} />
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default PokeDetails;
