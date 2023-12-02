import "./App.css";
import Hero from "./components/hero/hero";
import Nav from "./components/nav/nav";
import Products from "./components/products/products";

function App() {
  return (
    <div className="App">
      <Nav />
      <Hero buttonText="Add Products" />
      <Products buttonText="View Products" />
    </div>
  );
}

export default App;

//camel case className, heroComponent
// pascal case  (e.g. component names) AppComponent
// snake case (e.g. file naming ) app-component
