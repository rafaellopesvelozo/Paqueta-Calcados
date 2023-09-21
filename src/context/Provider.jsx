import React, { useState } from "react";
import AppContext from "./AppContext";

export const Provider = ({ children }) => {
  const [shoes, setShoes] = useState([]);
  const [cartItem, setCartItem] = useState([]);
  const [heartIsActive, setHeatIsActive] = useState(false);

  const value = {
    shoes,
    setShoes,
    cartItem,
    setCartItem,
    heartIsActive,
    setHeatIsActive,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
export default Provider;
