import React, { useContext } from "react";
import * as styled from "./styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import { localStorageRemoveUser } from "../../utils/localStorage";
import AppContext from "../../context/AppContext";

const Bag = () => {
  const { cartItem, setCartItem } = useContext(AppContext);

  const handleRemoveItem = (cart) => {
    const id = cart.id;
    const updatedItems = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedItems);
    localStorageRemoveUser();
  };

  const getRamdom = () => {
    const min = 0;
    const max = 9999;
    const nRamdom = Math.floor(Math.random() * (max - min + 1)) * 99999999;
    let nRamdom1 = nRamdom.toString().slice(0, 6);
    let nRamdom2 = nRamdom.toString().slice(6, 12);
    return nRamdom1 + "-" + nRamdom2;
  };

  const a = (n) =>{
    return n
  }

  const updateItem = (action) => {
    let i = 1
    let newQuantity = i;
    
    if (action === "increase") {
      newQuantity += 1;
    }

    if (action === "decrease") {
      if (newQuantity === 1) {
        return;
      }
      newQuantity -= 1;
    }

    console.log(newQuantity);
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
                        <div
                          onClick={() => updateItem("decrease")}
                          className="less"
                        >
                          -
                        </div>
                        <p>{a(1)}</p>
                        <div
                          onClick={() => updateItem("increase")}
                          className="more"
                        >
                          +
                        </div>
                      </div>
                    </div>
                    <p className="cart-item-price">
                      <span>Preço:</span> {formatCurrency(cart.price.value)}
                      <p>{}</p>
                    </p>
                  </div>
                  <button
                    onClick={() => handleRemoveItem(cart)}
                    type="button"
                    className="button--remove-item"
                  >
                    <i className="bi bi-trash3"></i> Remover
                  </button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </div>
    </styled.containerBag>
  );
};
export default Bag;
