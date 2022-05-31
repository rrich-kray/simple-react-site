import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tiles from "./components/Tiles/Tiles";
import Footer from "./components/Footer/Footer";
import Awards from "./components/Awards/Awards";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Tiles />
      {/* <Awards /> */}
      <Footer />
    </div>
  );
}

export default App;
