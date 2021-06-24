import React from "react";
import EachProduct from "./EachProduct";

const Products = ({ products, updateCart }) => {
  return (
    <div className="Products">
      { products.map((el) => (
        <EachProduct key={el.id} name={el.name} updateCart={updateCart} />
      ))}
    </div>
  );
};

export default Products;
