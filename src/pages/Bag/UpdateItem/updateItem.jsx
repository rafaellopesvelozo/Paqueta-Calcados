import React from "react";

import { formatCurrency } from "../../../utils/format";
import { ButtonRemove } from "../../../components/Button/Button.style";
import UpdateItemStates from "../../../hooks/Statesbag/StatesUpdateItem/StatesUpdateItem";


const Update = ({ cart }) => {

  const {
    handleRemoveItem,
    updateItem,
    value,
    ramdomCode,
    ramdomShoe,
  } = UpdateItemStates();

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
