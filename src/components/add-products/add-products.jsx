import styled from "styled-components";
import Button from "../button/button";
import { useState } from "react";
import { data } from "../../data";

const FormContainer = styled.section`
  max-width: 400px;
  margin: 4rem auto;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
`;

const FormGroup = styled.div`
  margin-bottom: 20px;
`;

const StyledLabel = styled.label`
  display: block;
  font-weight: bold;
  margin0-bottom: 5px;
`;

const StyledHeader = styled.h1`
  margin-bottom: 1rem;
`;

const StyledInput = styled.input`
  width: 100%;
  padding: 10px 0px 10px 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
`;

function AddProduct(props) {
  const [name, setName] = useState(""); //string state
  const [count, setCount] = useState(0); // number
  const { productData, setProductData } = useState([
    {
      image: "kjdkjskdj",
      name: "",
    },
  ]); // array

  const [product, setProduct] = useState({
    name: "",
    image: null,
    description: "",
    price: 0,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    props.setProducts({ ...data, product });
    // data.push(product);
    setProduct({
      name: "",
      image: null,
      description: "",
      price: 0,
    });
  };

  return (
    <>
      <FormContainer>
        <StyledHeader>Add Product</StyledHeader>
        <form onSubmit={handleSubmit}>
          <FormGroup>
            <StyledLabel htmlFor="name">Name: </StyledLabel>
            <StyledInput
              type="text"
              value={product.name}
              name="name"
              id="name"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="description">Description: </StyledLabel>
            <StyledInput
              type="text"
              value={product.description}
              name="description"
              id="description"
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <StyledLabel htmlFor="price">Price: </StyledLabel>
            <StyledInput
              type="number"
              name="price"
              value={product.price}
              id="price"
              onChange={handleChange}
            />
          </FormGroup>
          <StyledLabel htmlFor="image">Upload Image: </StyledLabel>
          <input type="file" name="image" id="image" />
          <button style={{ backgroundColor: props.bgColor }}>
            {props.buttonText}
          </button>
        </form>
      </FormContainer>
      {product && (
        <ul>
          <li>name: {product.name}</li>
          <li>description: {product.description}</li>
          <li>price: {product.price}</li>
        </ul>
      )}
    </>
  );
}

export default AddProduct;
