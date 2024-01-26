import "./App.css";
import { Home } from "@/screens";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import NotFound from "./screens/NotFound/NotFound";
import Pokedex from "./screens/Pokedex/Pokedex";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<Pokedex />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
