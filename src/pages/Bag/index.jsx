import React, { useContext } from "react";
import { ContainerBag } from "./styles";
import { Link } from "react-router-dom";
import AppContext from "../../context/AppContext";
import Update from "./UpdateItem/updateItem";

const Bag = () => {
  const { cartItem } = useContext(AppContext);
  return (
    <ContainerBag>
      <div>
        <div className="navigation">
          <nav>
            <Link to="/">Paquetá &gt;</Link> <span>Sacola</span>
          </nav>
        </div>

        <div className="sacola-de-compras">
          <h3>Sacola de compras</h3>
        </div>

        <div className="cartItems">
          <div className="cart-Items-Itens">
            <p>Itens</p>
          </div>
          <div className="listItems">
            {cartItem.map((cart) => (
              <Update cart={cart} />
            ))}
          </div>
        </div>
      </div>
    </ContainerBag>
  );
};
export default Bag;
