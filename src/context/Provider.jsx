import React, { useState } from "react";
import AppContext from "./AppContext";

export const Provider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [products, setProducts] = useState([]);
  const [cartWishList, setCartWishList] = useState([]);
  
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
