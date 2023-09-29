import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import AppContext from "../../context/AppContext";

const Product = () => {
  const { products } = useContext(AppContext);
  console.log(products);

  return (
    <div>
      <Link to="/">VOLTAR</Link>

      {products.map((product) => (
        <div>
          <p>{product.name}</p>
          <img src={product.image} alt="imagem do produto" />
          <p>{formatCurrency(product.price.value)}</p>
        </div>
      ))}
      <h1>products</h1>
    </div>
  );
};
export default Product;
