import "./App.css";
import Hero from "./components/Hero";
import Portfolio from "./components/Portfolio";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Hero />
      <Portfolio />
      <About />
      <Contact />
    </div>
  );
}

export default App;
