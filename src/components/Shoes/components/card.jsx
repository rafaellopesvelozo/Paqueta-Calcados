import React, { useContext } from "react";
import * as S from "../styles";
import { formatCurrency } from "../../../utils/format";
import { Link } from "react-router-dom";
import { ButtonBuy, ButtonSoldout } from "../../Button/Button.style";
import StateShoes from "../../../hooks/StateShoes/statesShoes";
import StateDesire from "../../../hooks/StatesWishList/StatesDesire";
import StatesProduct from "../../../hooks/StatesProduct/StatesProduct";
import AppContext from "../../../context/AppContext";

export const ShoesIndex = ({ shoesItem }) => {
  const { cartItem, cartWishList } = useContext(AppContext);
  const { handleAddCart } = StateShoes();
  const { wishList } = StateDesire();
  const { pageProducts } = StatesProduct();

  return (
    <S.ContainerProducts key={shoesItem.name}>
      <S.ImgProducts>
        {shoesItem.soldout === true && (
          <div className="sold_out_product">
            <p>PRODUTO ESGOTADO</p>
          </div>
        )}

        <div onClick={() => wishList(shoesItem)}>
          {cartWishList.filter((item) => item.id == shoesItem.id).length ==
          0 ? (
            <i className={`${shoesItem.soldout === true ? "" : "bi-heart"}`} />
          ) : (
            <i className="bi bi-heart-fill" />
          )}
        </div>

        <Link to={`product/${shoesItem.name}`}>
          <img
            onClick={() => pageProducts(shoesItem)}
            src={shoesItem.image}
            alt="imagem do produto"
          />
        </Link>
      </S.ImgProducts>

      <p>{shoesItem.name}</p>
      <p>{formatCurrency(shoesItem.price.value)}</p>

      <div>
        {shoesItem.name.includes("TÊNIS RS 3.0 FUTURE VINTAGE") ||
        shoesItem.name.includes("Mercedes Kart Cat-X Tech Unisex Sneakers") ? (
          <p>OU 9X {formatCurrency(shoesItem.price.value / 9)}</p>
        ) : (
          <p>OU 10X {formatCurrency(shoesItem.price.value / 10)}</p>
        )}
      </div>

      <div>
        {shoesItem.soldout == false ? (
          <ButtonBuy
            onClick={() => handleAddCart(shoesItem)}
            className={`${
              cartItem.filter((item) => item.id == shoesItem.id).length == 0
                ? "comprar"
                : "Addsacola"
            }`}
          >
            {cartItem.filter((item) => item.id == shoesItem.id).length == 0
              ? "Comprar"
              : "Adicionado a sacola"}
          </ButtonBuy>
        ) : (
          <ButtonSoldout className="Warn" rel="nopeener noreferer">
            ME AVISE QUANDO CHEGAR
          </ButtonSoldout>
        )}
      </div>
    </S.ContainerProducts>
  );
};
