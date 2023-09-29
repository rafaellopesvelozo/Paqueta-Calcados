import React, { useContext, useEffect, useState } from "react";
import * as styled from "./styles";

import Button from "../Button";
import AppContext from "../../context/AppContext";

import { Link } from "react-router-dom";
import { Shoes_Api } from "../../services/api";
import { formatCurrency } from "../../utils/format";
import { numberShoes } from "../../utils/numberShoes";
import { localStorageAddUser } from "../../utils/localStorage";

const Shoes = () => {
  const {
    shoes,
    setShoes,
    cartItem,
    setCartItem,
    heartIsActive,
    setHeatIsActive,
    cartWishList,
    setCartWishList,
    products,
    setProducts,
  } = useContext(AppContext);

  useEffect(() => {
    try {
      Shoes_Api.get("api/paqueta/shoes").then(({ data }) => {
        setShoes(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  function handleAddCart(shoesItem) {
    setCartItem([...cartItem, shoesItem]);
    localStorageAddUser(shoesItem);
  }

  const wishList = (shoesItem) => {
    setCartWishList([...cartWishList, shoesItem]);

    const iconHeart = () => {
      setHeatIsActive(!heartIsActive);
      console.log(heartIsActive);
    };
    iconHeart();
  };

  const pageProducts = (shoesItem) => {
    setProducts([products, shoesItem])
    console.log(shoesItem);
  };

  let activeShoes = 0;
  const left = (direction) => {
    activeShoes = activeShoes + direction;
    const shoesCarousel = shoes[activeShoes];
    console.log(shoesCarousel, activeShoes);
  };

  const listNumbers = numberShoes.map((n) => <li>{n}</li>);

  return (
    <styled.Shoes>
      <nav className="numbers-list">
        <ul>{listNumbers}</ul>
      </nav>
      <div className="highlights">
        <div className="highlight_Check">
          <div>
            <p>DESTAQUES</p>
          </div>
          <div>
            <p>CONFERIR TUDO</p>
          </div>
        </div>

        <section>
          {shoes.length === 0 && <p>Carregado...</p>}
          {shoes.map((shoesItem) => (
            <div className={`container_products`} key={shoesItem.name}>
              <div className="img_product">
                {shoesItem.soldout === true && (
                  <div className="sold_out_product">
                    <p>PRODUTO ESGOTADO</p>
                  </div>
                )}

                <div onClick={() => wishList(shoesItem)}>
                  {!heartIsActive ? (
                    <i class="bi bi-heart"></i>
                  ) : (
                    <i class="bi bi-heart-fill"></i>
                  )}
                </div>

                <Link to="product">
                  <img
                    onClick={() => pageProducts(shoesItem)}
                    src={shoesItem.image}
                    alt="imagem do produto"
                  />
                </Link>
              </div>

              <p>{shoesItem.name}</p>
              <p>{formatCurrency(shoesItem.price.value)}</p>

              <div>
                {shoesItem.name.includes("TÊNIS RS 3.0 FUTURE VINTAGE") ||
                shoesItem.name.includes(
                  "Mercedes Kart Cat-X Tech Unisex Sneakers"
                ) ? (
                  <p>OU 9X {formatCurrency(shoesItem.price.value / 9)}</p>
                ) : (
                  <p>OU 10X {formatCurrency(shoesItem.price.value / 10)}</p>
                )}
              </div>
              <div>
                <Button
                  onClick={() => handleAddCart(shoesItem)}
                  disabled={shoesItem.soldout == true}
                  theme="price"
                  type="button"
                  rel="nopeener noreferer"
                >
                  {shoesItem.soldout == true ? (
                    <p>ME AVISE QUANDO CHEGAR</p>
                  ) : (
                    <p>comprar</p>
                  )}
                </Button>
              </div>
            </div>
          ))}
        </section>
        <div className="btn-carousel">
          <div className="left" onClick={() => left(1)}></div>
          <div className="center"></div>
          <div className="right" onClick={() => left(-1)}></div>
        </div>
      </div>
    </styled.Shoes>
  );
};

export default Shoes;
