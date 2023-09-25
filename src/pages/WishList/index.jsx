import React, { useContext } from "react";
import * as Styled from "./styles";
import { Link } from "react-router-dom";
import { formatCurrency } from "../../utils/format";
import AppContext from "../../context/AppContext";
import Button from "../../components/Button";

const WishList = () => {
  const { cartWishList } = useContext(AppContext);
  return (
    <Styled.WishListContainer>
      <a>
        <Link to="/">Voltar</Link>
      </a>
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
          <Button theme="price" type="button" rel="nopeener noreferer">
            Comprar
          </Button>
        </section>
      ))}
    </Styled.WishListContainer>
  );
};
export default WishList;
