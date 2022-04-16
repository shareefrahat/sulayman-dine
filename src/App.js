import { Route, Routes } from "react-router-dom";
import "./App.css";
import AllMeals from "./components/AllMeals/AllMeals";
import GetBreakFast from "./components/BreakfastCard/GetBreakFast";
import Features from "./components/Features/Features";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import GetLunch from "./components/LunchCard/GetLunch";

import Nav from "./components/Nav/Nav";
import NotFound from "./components/NotFound/NotFound";

import Svgwave from "./components/SvgWave/Svgwave";
import TopBanner from "./components/TopBanner/TopBanner";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <TopBanner></TopBanner>
      <Nav></Nav>
      <Routes>
        <Route path="/" element={<AllMeals></AllMeals>}></Route>
        <Route path="/home" element={<AllMeals></AllMeals>}></Route>
        <Route path="/allmeals" element={<AllMeals></AllMeals>}></Route>
        <Route
          path="/breakfast"
          element={<GetBreakFast></GetBreakFast>}
        ></Route>
        <Route path="/lunch" element={<GetLunch></GetLunch>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Features></Features>
      <Svgwave></Svgwave>
      <Footer></Footer>
    </div>
  );
}

export default App;
