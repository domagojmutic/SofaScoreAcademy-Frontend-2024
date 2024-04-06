import {
  NamedAPIResourceList,
  ApiPokemon,
  ApiPokemonSpecies,
} from "../models/apiModels";
import { Pokemon } from "../models/models";

async function genericFetch<T>(url: string) {
  const res = await fetch(url, { method: "GET" });
  const jsonRes: T = await res.json();

  return jsonRes;
}

async function getPokemonSpecies(url: string) {
  const jsonObject = genericFetch<ApiPokemonSpecies>(url);
  return jsonObject;
}

async function getOnePokemon(url: string): Promise<Pokemon | undefined> {
  try {
    const jsonObject = await genericFetch<ApiPokemon>(url);
    const jsonSpecies = await getPokemonSpecies(jsonObject.species.url);

    return {
      id: jsonObject.id,
      name: jsonObject.name,
      height: jsonObject.height * 10,
      weight: jsonObject.weight / 10,
      hp_stats: jsonObject.stats.filter((stat) => stat.stat.name === "hp")[0]
        .base_stat,
      types: jsonObject.types.map((type) => type.type.name),
      details: jsonSpecies.flavor_text_entries
        .filter((entry) => entry.language.name === "en")[0]
        .flavor_text.replace("\f", " "),
      sprites: {
        back_default: jsonObject.sprites.back_default,
        front_default: jsonObject.sprites.front_default,
        back_shiny: jsonObject.sprites.back_shiny,
        front_shiny: jsonObject.sprites.front_shiny,
        front_default_big:
          jsonObject.sprites.other["official-artwork"].front_default,
        front_shiny_big:
          jsonObject.sprites.other["official-artwork"].front_shiny,
      },
    };
  } catch (error) {
    console.error("Failed to fetch pokemon (" + url + ")", error);
    return undefined;
  }
}

async function getPokemon(urls: string[]): Promise<Pokemon[]> {
  const pokemonPromises = urls.map((url) => getOnePokemon(url));
  const pokemon = await Promise.all(pokemonPromises);

  return pokemon.filter((pokemon) => pokemon !== undefined) as Pokemon[];
}

export async function getPokemonList(offset: number, limit: number) {
  try {
    const jsonObject = await genericFetch<NamedAPIResourceList>(
      `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}`
    );

    return await getPokemon(jsonObject.results.map((res) => res.url));
  } catch (error) {
    console.error(
      "Failed to fetch (" +
        `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${limit}` +
        ")",
      error
    );
    return [];
  }
}
