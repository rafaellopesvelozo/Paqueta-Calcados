import React, { useState } from "react";
import AppContext from "./AppContext";

export const Provider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [heartIsActive, setHeatIsActive] = useState(false);
  const [cartWishList, setCartWishList] = useState([]);
  const [products, setProducts] = useState([]);
  const [modalActive, setModalActive] = useState(false);
  const [existingItem, setExistingItem] = useState(false);
  const value = {
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
    modalActive,
    setModalActive,
    existingItem,
    setExistingItem,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default Provider;
