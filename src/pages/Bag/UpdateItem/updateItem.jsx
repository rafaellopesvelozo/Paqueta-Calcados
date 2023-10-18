import React, { useContext, useEffect } from "react";

import { useState } from "react";
import { formatCurrency } from "../../../utils/format";
import { ButtonRemove } from "../../../components/Button/Button.style";

import AppContext from "../../../context/AppContext";

const Update = ({ cart }) => {
  const { cartItem, setCartItem } = useContext(AppContext);
  const [value, setValue] = useState(1);
  const [ramdomCode, setRamdomCode] = useState("");
  const [ramdomShoe, setramdomShoe] = useState("");
  const handleRemoveItem = (cart) => {
    const id = cart.id;
    const updatedItems = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedItems);
    //localStorageRemoveUser(cart);
  };

  const getRamdomCode = () => {
    const min = 1234;
    const max = 99999999;
    const nRamdom1 = Math.floor(Math.random() * (max - min) + min);
    setRamdomCode(nRamdom1);
  };

  const getRamdomNumberShoe = () => {
    const min = 33;
    const max = 44;
    const RamdomNumberShoe = Math.floor(Math.random() * (max - min) + min);
    setramdomShoe(RamdomNumberShoe);
  };

  useEffect(() => {
    getRamdomCode(), getRamdomNumberShoe();
  }, []);

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
    <section key={cart.id}>
      <img src={cart.image} alt="imagem da compra" className="cart-item-img" />
      <div className="cart-item-info">
        <div>
          <h3 className="cart-item-tittle">{cart.name}</h3>
          <p className="cart-item-codigo">Código do produto: {ramdomCode}</p>
          <p className="cart-item-numeracao">
            <span>Numeração:</span> {ramdomShoe}
          </p>
          <p className="cart-item-cor">
            <span>Cor:</span> Preto
          </p>
          <div className="cart-item-quantidade">
            <p className="quantidade">Quantidade:</p>
            <div className="add-remove">
              <button onClick={() => updateItem("decrease")} className="less">
                -
              </button>
              <p>{value}</p>
              <button onClick={() => updateItem("increase")} className="more">
                +
              </button>
            </div>
          </div>
          <p className="cart-item-price">
            <span>Preço:</span> {formatCurrency(cart.price.value * value)}
            <p>{}</p>
          </p>
        </div>
        <ButtonRemove onClick={() => handleRemoveItem(cart)}>
          <i className="bi bi-trash3"></i> Remover
        </ButtonRemove>
      </div>
    </section>
  );
};
export default Update;
