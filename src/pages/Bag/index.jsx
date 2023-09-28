import React, { useContext } from "react";
import * as styled from "./styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import AppContext from "../../context/AppContext";
import { localStorageRemoveUser } from "../../utils/localStorage";

const Bag = () => {
  const { cartItem, setCartItem } = useContext(AppContext);

  const handleRemoveItem = (cart) => {
    try {
      const id = cart.id;
      const updatedItems = cartItem.filter((item) => item.id !== id);
      setCartItem(updatedItems);
      localStorageRemoveUser(cart);

    } catch (error) {
      console.log(error);
    }
  };

  return (
    <styled.containerBag>
      <div>
        <div className="navigation">
          <a>
            <Link to="/">Paquetá &gt;</Link> <span>Sacola</span>
          </a>
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
              <section key={cart.id}>
                <img
                  src={cart.image}
                  alt="imagem da compra"
                  className="cart-item-img"
                />
                <div className="cart-item-info">
                  <h3 className="cart-item-tittle">{cart.name}</h3>
                  <p className="cart-item-codigo">
                    Código do produto: {cart.id}
                  </p>
                  <p className="cart-item-numeracao">
                    <span>Numeração:</span> 39
                  </p>
                  <p className="cart-item-cor">
                    <span>Cor:</span> Preto
                  </p>
                  <p className="cart-item-quantidade">
                    <span>Quantidade:</span> 1
                  </p>
                  <p className="cart-item-price">
                    <span>Preço:</span> {formatCurrency(cart.price.value)}
                  </p>
                </div>

                <button
                  onClick={() => handleRemoveItem(cart)}
                  type="button"
                  className="button--remove-item"
                >
                  <i className="bi bi-trash3"></i> Remover
                </button>
              </section>
            ))}
          </div>
        </div>
      </div>
    </styled.containerBag>
  );
};
export default Bag;
