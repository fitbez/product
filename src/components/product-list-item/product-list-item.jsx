import React from "react";

function ProductsListItem(props) {
  console.log("props", props);
  return (
    <>
      <h2>New Products</h2>
      {props.productData.map((product) => {
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

export default ProductsListItem;
