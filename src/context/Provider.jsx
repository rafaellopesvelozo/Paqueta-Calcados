import React, { useRef, useState } from "react";
import AppContext from "./AppContext";

export const Provider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [cartItem, setCartItem] = useState([]);


  const value = {
    shoes,
    setShoes,
    cartItem,
    setCartItem,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default Provider;
