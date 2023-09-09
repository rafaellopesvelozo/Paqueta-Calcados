import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../utils/format";
import AppContext from "../context/AppContext";

const Bag = () => {
  const { cartItem } = useContext(AppContext);

  return (
    <div>
      <a>
        {" "}
        <Link to="/">voltar</Link>{" "}
      </a>

      {cartItem.map((cart) => (
        <section className="cart-item" key={cart.id}>
          <img src="" alt="" className="cart-item-img" />
          <div>
            <h3 className="cart-item-tittle">{cart.name}</h3>
            <h3 className="cart-item-price"></h3>
          </div>

          <button type="button" className="button--remove-item">
            excluir
          </button>
        </section>
      ))}
    </div>
  );
};
export default Bag;
