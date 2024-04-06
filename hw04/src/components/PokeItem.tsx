import { Pokemon } from "../models/models";
import PokeDetails from "./PokeDetails";
import PokeImage from "./PokeImage";

type sideType = 'left' | 'right';

interface Props {
  side: sideType,
  pokemon: Pokemon
}

function PokeItem(props: Props) {
  const {side, pokemon} = props;
  
  return (
    <div className="w-full h-[516px] flex flex-row phone:h-[756px] phone:flex-col">
      <PokeImage pokemon={pokemon} side={side} />
      <PokeDetails pokemon={pokemon} side={side} />
    </div>
  );
}

export default PokeItem;
