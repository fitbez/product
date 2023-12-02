import React from "react";
import Button from "../button/button";
import { data } from "../../data";

console.log("DATA", data);

const product = {
  image: "dkjkjdskj",
  name: "product name",
  description: "some description",
  price: 400,
};

function Products(props) {
  return (
    <>
      <h2>Hello from Products</h2>
      {data.map((product) => {
        return (
          <>
            <img width="300px" height="300px" src={product.image} alt="" />
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </>
        );
      })}
    </>
  );
}

export default Products;
