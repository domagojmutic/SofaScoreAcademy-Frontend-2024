import { Context, createContext } from "react";
import { Pokemon } from "../models/models";

export interface FavoritesContextType {
  pokemon: Pokemon[];
  setPokemon: React.Dispatch<React.SetStateAction<Pokemon[]>>;
}

const FavoritesContext = createContext<FavoritesContextType | undefined>(undefined);

export default FavoritesContext as Context<FavoritesContextType>;
