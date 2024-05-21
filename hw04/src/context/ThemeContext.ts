import { Context, createContext } from "react";
import { Themes } from "../models/models";

export interface ThemeContextType {
  theme: Themes;
  setTheme: React.Dispatch<React.SetStateAction<Themes>>;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext as Context<ThemeContextType>;
