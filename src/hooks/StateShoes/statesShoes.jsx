import { useContext,useState } from "react";
import AppContext from "../../context/AppContext";

const StateShoes = () => {
  const { cartItem, setCartItem } = useContext(AppContext);
  const [existingItem, setExistingItem] = useState(false);

  const handleAddCart = (shoesItem) => {
    const existCart = cartItem.find((item) => item.id === shoesItem.id);
    if (!existCart) {
      setCartItem((previous) => [...previous, shoesItem]);
      setExistingItem(!existingItem);
    }
    
  };

  return {
    handleAddCart,
    existingItem,
    setExistingItem,
  };
};

export default StateShoes;
