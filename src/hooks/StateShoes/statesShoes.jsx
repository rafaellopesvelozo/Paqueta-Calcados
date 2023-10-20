import { useContext,useState } from "react";
import AppContext from "../../context/AppContext";

const StateShoes = () => {
  const { setProducts, cartItem, setCartItem } =
    useContext(AppContext);

  const [existingItem, setExistingItem] = useState(false);

  const pageProducts = (shoesItem) => {
    setProducts([shoesItem]);
  };

  const handleAddCart = (shoesItem) => {
    const existCart = cartItem.find((item) => item.id === shoesItem.id);
    if (!existCart) {
      setCartItem((previous) => [...previous, shoesItem]);
      //localStorageAddUser(shoesItem)
      setExistingItem(!existCart);
     
    }
  };

  return {
    pageProducts,
    setProducts,
    handleAddCart,
    existingItem,
    setExistingItem,
  };
};

export default StateShoes;
