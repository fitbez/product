import "./App.css";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import { data } from "./data";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/products";
import { useState } from "react";

function App() {
  const [name, setName] = useState("John Doe");

  // const [car, setCar] = useState({
  //   make: "Toyota",
  //   year: "2020",
  // });

  const handleChangeName = () => {
    setName("Mike Rob");
  };

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={<Products buttonText="View Products" productData={data} />}
        />
      </Routes>
      <button onClick={handleChangeName}>Change my name</button>
      My name is {name}
    </div>
  );
}

export default App;

//camel case className, heroComponent
// pascal case  (e.g. component names) AppComponent
// snake case (e.g. file naming ) app-component
