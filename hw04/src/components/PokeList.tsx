import { useEffect, useRef, useState } from "react";
import PokeItem from "./PokeItem";
import { Pokemon } from "../models/models";
import { getPokemonList } from "../api/pokemon";

function PokeList() {
  const loadLine = useRef(null);
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);
  useEffect(() => {
    let startIndex = 0;
    const loadLineLocal = loadLine;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        getPokemonList(startIndex, 10)
          .then((res) => {
            setPokemon((old) => [...old, ...res]);
            startIndex += 10;
          })
          .catch((error) => {
            console.error("Error while fetching", error);
          });
      }
    });
    if (loadLineLocal.current) observer.observe(loadLineLocal.current);

    return () => {
      if (loadLineLocal.current) observer.unobserve(loadLineLocal.current);
    };
  }, [loadLine]);

  return (
    <div className="w-full min-h-[75vh] flex flex-col justify-start items-center relative text-text-lt dark:text-text-dt">
      {pokemon.map((pokemon, index) => {
        return (
          <PokeItem
            pokemon={pokemon}
            side={index % 2 === 0 ? "right" : "left"}
            key={pokemon.id}
          />
        );
      })}
      <div ref={loadLine} className="absolute bottom-[75vh]"></div>
    </div>
  );
}

export default PokeList;
