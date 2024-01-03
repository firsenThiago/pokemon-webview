import "./App.css";
import { Home } from "@/screens";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

// import { api } from "@/services";

function App() {
  // api
  //   .get("/pokemon")
  //   .then((response) => {
  //     console.log(response.data);
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pokedex" element={<></>} />
          <Route path="/lendarios" element={<></>} />
          <Route path="/*" element={<></>} /> {/* Error */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
