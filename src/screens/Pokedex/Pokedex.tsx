import { Header } from "@/components";
import { api } from "@/services";
import { Suspense, useEffect, useState } from "react";
import "./styles.css";
import PokemonCard from "@/components/PokemonCard/PokemonCard";

type Pokemon = {
  name: string;
  url: string;
  photo: string;
  attack: number;
  defense: number;
  type: string;
};

const Pokedex = () => {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get("/pokemon");
        const pokemonList = response.data.results;

        const pokemonDetailsPromises = pokemonList.map(async (pokemon) => {
          const detailsResponse = await api.get(pokemon.url);
          const { name, sprites, stats, types } = detailsResponse.data;
          const photo = sprites.other.home.front_default;
          const attack = stats.find(
            (stat) => stat.stat.name === "attack"
          ).base_stat;
          const defense = stats.find(
            (stat) => stat.stat.name === "defense"
          ).base_stat;
          const type = types.map((type) => type.type.name).join(", ");

          return { name, url: pokemon.url, photo, attack, defense, type };
        });

        const pokemonDetails = await Promise.all(pokemonDetailsPromises);

        setPokemons(pokemonDetails);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="pokedexContainer">
        <Suspense fallback={<>Loading...</>}>
          {pokemons &&
            pokemons.map((pokemon) => <PokemonCard pokemon={pokemon} />)}
        </Suspense>
      </div>
    </>
  );
};

export default Pokedex;
