import React, { useEffect, useState } from "react";
import AppContext from "./AppContext";

const cartFromLocalStorage = JSON.parse(localStorage.getItem("cart") || "[]");
const WishListFromLocalStorage = JSON.parse(
  localStorage.getItem("WishList") || "[]"
);

export const Provider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [cartItem, setCartItem] = useState(cartFromLocalStorage);
  const [products, setProducts] = useState([]);
  const [cartWishList, setCartWishList] = useState(WishListFromLocalStorage);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItem));
    localStorage.setItem("WishList", JSON.stringify(cartWishList));
  }, [cartItem, cartWishList]);

  const value = {
    shoes,
    setShoes,
    cartItem,
    setCartItem,
    products,
    setProducts,
    cartWishList,
    setCartWishList,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default Provider;
