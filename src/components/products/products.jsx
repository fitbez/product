import Hero from "../hero/hero";
import ProductsListItem from "../product-list-item/product-list-item";
import ProductList from "../product-list/product-list";

export default function Products(props) {
  console.log("products", props);
  return (
    <>
      <Hero
        bgColor={props.bgColor}
        productData={props.productData}
        handleAddProduct={props.handleAddProduct}
      />
      {/* <ProductsListItem
        buttonText={props.buttonText}
        productData={props.productData}
      /> */}
      <ProductList
        buttonText={props.buttonText}
        productData={props.productData}
      />
    </>
  );
}
