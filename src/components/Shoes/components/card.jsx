import React, { useState, useContext } from "react";
import { formatCurrency } from "../../../utils/format";
import AppContext from "../../../context/AppContext";
import { Link } from "react-router-dom";
import Button from "../../Button";
import { localStorageAddUser } from "../../../utils/localStorage";
export const ShoesIndex = ({ shoesItem }) => {
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
    <div className="container_products" key={shoesItem.name}>
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
        shoesItem.name.includes("Mercedes Kart Cat-X Tech Unisex Sneakers") ? (
          <p>OU 9X {formatCurrency(shoesItem.price.value / 9)}</p>
        ) : (
          <p>OU 10X {formatCurrency(shoesItem.price.value / 10)}</p>
        )}
      </div>
      <div>
        {shoesItem.soldout == true ? (
          <Button
            className="Warn"
            theme="soldout"
            type="button"
            rel="nopeener noreferer"
          >
            ME AVISE QUANDO CHEGAR
          </Button>
        ) : (
          <Button
            onClick={() => handleAddCart(shoesItem)}
            className={`${!existingItem ? "comprar" : "comprado"}`}
            //disabled={!existingItem}
            theme="buyItem"
            type="button"
            rel="nopeener noreferer"
          >
            {!existingItem ? "comprar" : "adicionado a sacola"}
          </Button>
        )}
      </div>
    </div>
  );
};
