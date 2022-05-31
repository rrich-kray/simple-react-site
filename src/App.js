import "./App.css";
import Nav from "./components/Nav/Nav";
import Hero from "./components/Hero/Hero";
import About from "./components/About/About";
import Tiles from "./components/Tiles/Tiles";

function App() {
  return (
    <div className="app">
      <Nav />
      <Hero />
      <About />
      <Tiles />
    </div>
  );
}

export default App;
