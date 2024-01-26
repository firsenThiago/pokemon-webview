import "./styles.css";
import { Logo } from "@/assets";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <div className="headerContainer">
      <NavLink to={"/"}>
        <img src={Logo} alt="Logo" />
      </NavLink>
      <nav className="navContainer">
        <ul>
          <NavLink
            to={"/"}
            className={({ isActive }) => (isActive ? "active" : "noActive")}
          >
            <li>Home</li>
          </NavLink>
          <NavLink
            to={"/pokedex"}
            className={({ isActive }) => (isActive ? "active" : "noActive")}
          >
            <li>Pokedex</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};
