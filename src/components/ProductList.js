import React from "react";
import Product from "./Product.js";
export default function ProductList(props) {
  return props.productList.length > 0 ? (
    props.productList.map((product, i) => {
      return <Product product={product} key={i} />;
    })
  ) : (
    <h1>No Prodects Exist in the Carts</h1>
  );
}
