import { Header } from "@/components/";
import { BannerHome } from "@/assets";
import { useNavigate } from "react-router-dom";

import "./style.css";

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate("/pokemons");
  };

  return (
    <div className="homeContainer">
      <Header />
      <main>
        <div className="mainTextHomeContainer">
          <h1>
            <strong>Encontre</strong> todos os seus <strong>Pokémons </strong>
            favoritos
          </h1>
          <p>
            Você pode conhecer o tipo de Pokémon, seus pontos fortes,
            desvantagens e habilidades.
          </p>
          <button type="button" onClick={handleNavigate}>
            Ver pokemons
          </button>
        </div>
        <img src={BannerHome} alt="Banner Home" />
      </main>
    </div>
  );
};
