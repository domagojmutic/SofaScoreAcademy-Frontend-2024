import { PropsWithChildren } from "react";
import { PokemonTypes } from "../models/models";

const typeColor = {
  normal: "#A8A878",
  fire: "#F08030",
  water: "#6890F0",
  grass: "#78C850",
  electric: "#F8D030",
  ice: "#98D8D8",
  fighting: "#C03028",
  ground: "#E0C068",
  poison: "#A040A0",
  flying: "#A890F0",
  psychic: "#F85888",
  ghost: "#705898",
  steel: "#B8B8D0",
  fairy: "#F0B6BC",
};

function Tag(props: PropsWithChildren<{ type: PokemonTypes }>) {
  const { children, type } = props;

  return (
    <div
      className="w-[68px] h-[16px] ml-[7px] flex justify-center items-start rounded-full text-page-lt dark:text-page-dt"
      style={{ backgroundColor: typeColor[type] }}
    >
      {children}
    </div>
  );
}

export default Tag;
