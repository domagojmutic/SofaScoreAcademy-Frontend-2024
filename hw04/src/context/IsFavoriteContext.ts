import { Context, createContext } from "react";

export interface FavoriteContextType {
  isFavorite: boolean;
  setIsFavorite: React.Dispatch<React.SetStateAction<boolean>>;
}

const FavoriteContext = createContext<FavoriteContextType | undefined>(undefined);

export default FavoriteContext as Context<FavoriteContextType>;
