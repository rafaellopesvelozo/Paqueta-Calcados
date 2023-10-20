import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

const StateDesire = () => {
  const { cartWishList, setCartWishList } = useContext(AppContext);
  const [heartIsActive, setHeatIsActive] = useState(false);

  const wishList = (shoesItem) => {
    const existWishList = cartWishList.find((item) => item.id === shoesItem.id);
    if (!existWishList) {
      setCartWishList([...cartWishList, shoesItem]);
      setHeatIsActive(!heartIsActive);
    }
  };

  const removeItem = (item) => {
    const id = item.id;
    const updateItems = cartWishList.filter((items) => items.id != id);
    setCartWishList(updateItems);
  };

  return {
    removeItem,
    wishList,
    heartIsActive,
    setHeatIsActive,
  };
};
export default StateDesire;
