import Hero from "../hero/hero";
import ProductsListItem from "../product-list-item/product-list-item";

export default function Products(props) {
  console.log("products", props);
  return (
    <>
      <Hero productData={props.productData} />
      <ProductsListItem
        buttonText={props.buttonText}
        productData={props.productData}
      />
    </>
  );
}
