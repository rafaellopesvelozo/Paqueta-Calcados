import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import AppContext from "../../context/AppContext";
import * as styled from "./styles";

const Bag = () => {
  const { cartItem } = useContext(AppContext);

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
          <p>Itens</p>
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
                  <p className="cart-item-numeracao">Numeração: 39</p>
                  <p className="cart-item-cor">Cor: Preto</p>
                  <p className="cart-item-quantidade">Quantidade: 1</p>
                  <p className="cart-item-price">
                    Preço: {formatCurrency(cart.price.value)}
                  </p>
                </div>

                <button type="button" className="button--remove-item">
                  excluir
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