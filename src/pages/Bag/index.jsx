import React, { useState, useContext, useEffect } from "react";
import { ContainerBag } from "./styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
//import { localStorageRemoveUser } from "../../utils/localStorage";
import AppContext from "../../context/AppContext";
import { ButtonRemove } from "../../components/Button/Button.style";

const Bag = () => {
  const { cartItem, setCartItem } = useContext(AppContext);
  const [value, setValue] = useState(1);

  const handleRemoveItem = (cart) => {
    const id = cart.id;
    const updatedItems = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedItems);
    //localStorageRemoveUser(cart);
  };

  const getRamdom = () => {
    const min = 0;
    const max = 9999;
    const nRamdom = Math.floor(Math.random() * (max - min + 1)) * 99999999;
    let nRamdom1 = nRamdom.toString().slice(0, 6);
    let nRamdom2 = nRamdom.toString().slice(6, 12);
    return nRamdom1 + "-" + nRamdom2;
  };

  const updateItem = (action) => {
    if (action === "increase") {
      setValue((value) => value + 1);
    }

    if (action === "decrease") {
      if (value == 1) {
        return;
      }
      setValue((value) => value - 1);
    }
  };

  return (
    <ContainerBag>
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
                  <div>
                    <h3 className="cart-item-tittle">{cart.name}</h3>
                    <p className="cart-item-codigo">
                      Código do produto: {getRamdom()}
                    </p>
                    <p className="cart-item-numeracao">
                      <span>Numeração:</span> 39
                    </p>
                    <p className="cart-item-cor">
                      <span>Cor:</span> Preto
                    </p>
                    <div className="cart-item-quantidade">
                      <p className="quantidade">Quantidade:</p>
                      <div className="add-remove">
                        <button
                          onClick={() => updateItem("decrease")}
                          className="less"
                        >
                          -
                        </button>
                        <p>{value}</p>
                        <button
                          onClick={() => updateItem("increase")}
                          className="more"
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <p className="cart-item-price">
                      <span>Preço:</span>{" "}
                      {formatCurrency(cart.price.value * value)}
                      <p>{}</p>
                    </p>
                  </div>
                  <ButtonRemove onClick={() => handleRemoveItem(cart)}>
                    <i className="bi bi-trash3"></i> Remover
                  </ButtonRemove>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </ContainerBag>
  );
};
export default Bag;
