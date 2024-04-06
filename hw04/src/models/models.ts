export interface Pokemon {
  id: number;
  name: string;
  hp_stats: number;
  height: number;
  weight: number;
  types: PokemonTypes[];
  details: string;
  sprites: {
    back_default: string;
    front_default: string;
    back_shiny: string;
    front_shiny: string;

    front_default_big: string;
    front_shiny_big: string;
  };
}

export type PokemonTypes =
  | "normal"
  | "fire"
  | "water"
  | "grass"
  | "electric"
  | "ice"
  | "fighting"
  | "ground"
  | "poison"
  | "flying"
  | "psychic"
  | "ghost"
  | "steel"
  | "fairy";

export type Themes = "light" | "dark" | "auto";
