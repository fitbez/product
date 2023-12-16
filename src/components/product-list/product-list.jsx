import ProductsListItem from "../product-list-item/product-list-item";
import styled from "styled-components";

const StyledProductList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  margin: 1rem 4rem;
`;

const ProductList = (props) => {
  return (
    <StyledProductList>
      <h3>New Products</h3>
      <div>
        <ProductsListItem
          productData={props.productData}
          buttonText={props.buttonText}
        />
      </div>
    </StyledProductList>
  );
};

export default ProductList;
