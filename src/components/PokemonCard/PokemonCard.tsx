import StatusPokemonCard from "./StatusPokemonCard";
import TypePokemonCard from "./TypePokemonCard";
import "./styles.css";

type PokemonCardProps = {
  pokemon: {
    name: string;
    url: string;
    photo: string;
    attack: number;
    defense: number;
    type: string;
  };
};

const PokemonCard = ({ pokemon }: PokemonCardProps) => {
  return (
    <div key={pokemon.name} className="containerPokemonCard">
      <div className="infoPokemonCard">
        <span>{pokemon.name}</span>
        <div className="containerStatusPokemonCard">
          <StatusPokemonCard status={pokemon.attack} text="Ataque" />
          <StatusPokemonCard status={pokemon.defense} text="Defesa" />
        </div>
        <div>
          {pokemon.type.split(",").map((type, index) => (
            <TypePokemonCard key={index} type={type.trim()} />
          ))}
        </div>
      </div>
      <img src={pokemon.photo} alt={pokemon.name} height={500} width={500} />
    </div>
  );
};

export default PokemonCard;
