import React, { useContext } from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import AppContext from "../../context/AppContext";
import Button from "../../components/Button";

const WishList = () => {
  const { cartWishList, setCartWishList, heartIsActive } =
    useContext(AppContext);

  const removeItem = (item) => {
    const id = item.id;
    const updateItems = cartWishList.filter((items) => items.id != id);
    setCartWishList(updateItems);
  };

  return (
    <Styled.WishListContainer>
      <a>
        <Link to="/">Voltar</Link>
      </a>

      {!heartIsActive ? (
        <i class="bi bi-heart"></i>
      ) : (
        <i class="bi bi-heart-fill"></i>
      )}
      {cartWishList.map((item) => (
        <section className="Container-Items">
          <div>
            <div className="Container-img">
              <img src={item.image} alt="imagem do prduto" />
            </div>
            <div className="Container-info">
              <div>
                <h2>{item.name}</h2>
                <p>id: {item.id}</p>
              </div>
              <p>Preço: {formatCurrency(item.price.value)}</p>
            </div>
          </div>
          <div className="wishlist-btn">
            <Button
              onClick={() => removeItem(item)}
              theme="remove"
              type="button"
              rel="nopeener noreferer"
            >
              Remover
            </Button>
            <Button theme="price" type="button" rel="nopeener noreferer">
              Comprar
            </Button>
          </div>
        </section>
      ))}
    </Styled.WishListContainer>
  );
};
export default WishList;
