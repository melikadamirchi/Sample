import "./Comp1";
import Comp1 from "./Comp1";
import Comp2 from "./Comp2";
import Comp3 from "./Comp3";
import Comp4 from "./Comp4";
import Comp5 from "./Comp5";
import Comp6 from "./Comp6";
import Comp7 from "./Comp7";
import Comp8 from "./Comp8";
import Comp9 from "./Comp9";
import Comp10 from "./Comp10";
import { Navbar } from "./pages/Navbar";
import "./css/stylesComp3.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
function App() {
  return (
    <>
      <HashRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Comp1" element={<Comp1 />}></Route>
          <Route path="/Comp2" element={<Comp2 />}></Route>
          <Route path="/Comp3" element={<Comp3 />}></Route>
          <Route path="/Comp4" element={<Comp4 />}></Route>
          <Route path="/Comp5" element={<Comp5 />}></Route>
          <Route path="/Comp6" element={<Comp6 />}></Route>
          <Route path="/Comp7" element={<Comp7 />}></Route>
          <Route path="/Comp8" element={<Comp8 />}></Route>
          <Route path="/Comp9" element={<Comp9 />}></Route>
          <Route path="/Comp10" element={<Comp10 />}></Route>
          <Route path="*" element={<h5>Nothing available</h5>}></Route>
        </Routes>
      </HashRouter>
    </>
  );
}

export default App;
