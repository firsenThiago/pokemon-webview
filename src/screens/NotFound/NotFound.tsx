import { Rocket } from "@/assets";
import "./style.css";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();
  const handleButton = () => {
    navigate("/");
  };
  return (
    <div className="notFoundContainer">
      <div className="messageNotFound">
        <h1>404</h1>
        <p>
          A equipe rocket <span>venceu desta vez.</span>
        </p>
        <button type="button" onClick={handleButton}>
          Voltar
        </button>
      </div>
      <img
        className="rocketImage"
        src={Rocket}
        alt="Equipe rocket"
        width={650}
        height={540}
      />
    </div>
  );
};

export default NotFound;
