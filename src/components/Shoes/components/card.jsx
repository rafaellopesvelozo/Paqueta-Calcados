import React, { useState, useContext } from "react";
import * as S from "../styles";
import { formatCurrency } from "../../../utils/format";
import { Link } from "react-router-dom";
import { ButtonBuy, ButtonSoldout } from "../../Button/Button.style";
//import { localStorageAddUser } from "../../../utils/localStorage";
import AppContext from "../../../context/AppContext";

export const ShoesIndex = ({ shoesItem, activeIndex }) => {
  const { cartItem, setCartItem, setProducts, cartWishList, setCartWishList } =
    useContext(AppContext);

  const [existingItem, setExistingItem] = useState(false);
  const [heartIsActive, setHeatIsActive] = useState(false);

  function handleAddCart(shoesItem) {
    const existCart = cartItem.find((item) => item.id === shoesItem.id);
    if (!existCart) {
      setCartItem([...cartItem, shoesItem]);
      setExistingItem(!existingItem);
      //localStorageAddUser(shoesItem)
    }
  }

  const wishList = (shoesItem) => {
    const existWishList = cartWishList.find((item) => item.id === shoesItem.id);
    if (!existWishList) {
      setCartWishList([...cartWishList, shoesItem]);
      setHeatIsActive(!heartIsActive);
    }
  };

  const pageProducts = (shoesItem) => {
    setProducts([shoesItem]);
  };

  return (
    <S.ContainerProducts
      style={{
        transform: `translate(-${activeIndex * 270}px)`,
        transition: "all .5s ease-in-out",
      }}
      key={shoesItem.name}
    >
      <S.ImgProducts>
        {shoesItem.soldout === true && (
          <div className="sold_out_product">
            <p>PRODUTO ESGOTADO</p>
          </div>
        )}

        <div onClick={() => wishList(shoesItem)}>
          {!heartIsActive ? (
            <i
              className={`${shoesItem.soldout === true ? "" : "bi-heart"}`}
            ></i>
          ) : (
            <i className="bi bi-heart-fill"></i>
          )}
        </div>

        <Link to="product">
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
        {shoesItem.soldout == true ? (
          <ButtonSoldout className="Warn" rel="nopeener noreferer">
            ME AVISE QUANDO CHEGAR
          </ButtonSoldout>
        ) : (
          <ButtonBuy
            onClick={() => handleAddCart(shoesItem)}
            className={`${!existingItem ? "comprar" : "Addsacola"}`}
          >
            {!existingItem ? "Comprar" : "Adicionado a sacola"}
          </ButtonBuy>
        )}
      </div>
    </S.ContainerProducts>
  );
};
