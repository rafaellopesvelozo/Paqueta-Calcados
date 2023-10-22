import React, { useContext } from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import StateDesire from "../../hooks/StatesWishList/StatesDesire";
import AppContext from "../../context/AppContext";

const WishList = () => {
  const { cartWishList } = useContext(AppContext);
  const { removeItem } = StateDesire();
  return (
    <Styled.WishListContainer>
      <div className="link-back">
        <nav>
          <Link to="/">Paquetá</Link> &gt; Lista de desejos
        </nav>
      </div>
      <h3>Favoritos</h3>
      {cartWishList.map((item) => (
        <section className="Container-Items">
          <div>
            <div className="Container-img">
              <img src={item.image} alt="imagem do prduto" />
              <div className="bg-hover"></div>
              <div onClick={() => removeItem(item)} className="icon-heart">
                {cartWishList.filter((i) => i.id == item.id).length == 0 ? (
                  <i class="bi bi-heart"></i>
                ) : (
                  <i class="bi bi-heart-fill"></i>
                )}
              </div>
            </div>
            <div className="Container-info">
              <div>
                <h2>{item.name}</h2>
                <p>id: {item.id}</p>
              </div>
              <p>
                Preço: <span>{formatCurrency(item.price.value)}</span>{" "}
              </p>
            </div>
          </div>
        </section>
      ))}
    </Styled.WishListContainer>
  );
};
export default WishList;
