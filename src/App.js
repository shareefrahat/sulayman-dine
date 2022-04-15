import "./App.css";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Svgwave from "./components/SvgWave/Svgwave";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Svgwave></Svgwave>
      <Footer></Footer>
    </div>
  );
}

export default App;
