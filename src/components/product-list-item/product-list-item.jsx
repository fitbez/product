import styled from "styled-components";

const StyledProductList = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`;

function ProductsListItem(props) {
  console.log("props", props);
  return (
    <StyledProductList>
      {props.productData.map((product, index) => {
        return (
          <div style={{ textAlign: "center" }} key={index}>
            <img width="200px" height="200px" src={product.image} alt="" />
            <h5>{product.name}</h5>
            <p>{product.description}</p>
            <p>${product.price}</p>
          </div>
        );
      })}
    </StyledProductList>
  );
}

export default ProductsListItem;
