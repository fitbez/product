import "./App.css";
import Home from "./components/home/home";
import Nav from "./components/nav/nav";
import { data } from "./data";
import { Routes, Route } from "react-router-dom";
import Products from "./components/products/products";
import { useState, useEffect } from "react";
import AddProduct from "./components/add-products/add-products";

function App() {
  const [product, setProduct] = useState([]);
  const [count, setCount] = useState(0);

  const handleAddProduct = () => {
    setProduct(data);
  };

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const fetchProductData = () => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProduct(data));
  };

  useEffect(() => {
    fetchProductData();
  }, []);

  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={
            <Products
              buttonText="View Products"
              bgColor="#11CCF4"
              productData={product}
              handleAddProduct={handleAddProduct}
            />
          }
        />
        <Route
          path="/add-product"
          element={
            <AddProduct
              buttonText="Submit"
              bgColor="green"
              setProducts={setProduct}
            />
          }
        />
      </Routes>
      <div style={{ marginBottom: "2rem", width: "100%", textAlign: "center" }}>
        <p>{count}</p>
        <button onClick={handleIncrement}>Count</button>
      </div>
    </div>
  );
}

export default App;
