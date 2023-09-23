import React, { useContext, useEffect } from "react";
import * as styled from "./styles";

import Button from "../Button";
import AppContext from "../../context/AppContext";

import { Shoes_Api } from "../../services/api";
import { formatCurrency } from "../../utils/format";
import { numberShoes } from "../../utils/numberShoes";

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
  }

  const wishList = (shoesItem) => {
    //setHeatIsActive(!heartIsActive);

    setCartWishList([...cartWishList, shoesItem]);
    console.log(setCartWishList);
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
            <div className="container_products" key={shoesItem.name}>
              <div className="img_product">
                {shoesItem.soldout === true && (
                  <div className="sold_out_product">
                    <p>PRODUTO ESGOTADO</p>
                  </div>
                )}

                <i
                  onClick={()=>wishList(shoesItem)}
                  className={`${
                    heartIsActive ? "bi-heart bi-heart-active" : "bi-heart"
                  }`}
                ></i>

                <img src={shoesItem.image} alt="imagem do produto" />
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
      </div>
    </styled.Shoes>
  );
};

export default Shoes;
