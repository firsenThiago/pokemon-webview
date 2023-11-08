import "./styles.css";
import { Logo } from "@/assets";

export const Header = () => {
  return (
    <div className="headerContainer">
      <img src={Logo} alt="Logo" />
      <nav className="navContainer">
        <ul>
          <li>Home</li>
          <li>Pokedex</li>
          <li>Lendarios</li>
        </ul>
      </nav>
    </div>
  );
};
