import React, { useContext } from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import AppContext from "../../context/AppContext";

const WishList = () => {
  const { cartWishList, setCartWishList, heartIsActive } = useContext(AppContext);

  const removeItem = (item) => {
    const id = item.id;
    const updateItems = cartWishList.filter((items) => items.id != id);
    setCartWishList(updateItems);
  };

  return (
    <Styled.WishListContainer>
      <div className="link-back">
        <a>
          <Link to="/">Paquetá</Link> &gt; Lista de desejos
        </a>
      </div>

      <h3>Favoritos</h3>

      {cartWishList.map((item) => (
        <section className="Container-Items">
          <div>
            <div className="Container-img">
              <img src={item.image} alt="imagem do prduto" />
              <div className="bg-hover"></div>
              <div onClick={()=> removeItem(item)} className="icon-heart">
                {!heartIsActive ? (
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
              <p>Preço: {formatCurrency(item.price.value)}</p>
            </div>
          </div>
        </section>
      ))}
    </Styled.WishListContainer>
  );
};
export default WishList;
