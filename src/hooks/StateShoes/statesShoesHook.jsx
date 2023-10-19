import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

const StateShoesHook = () => {
  const { cartWishList, setCartWishList, setProducts } =
    useContext(AppContext);

    console.log("oi")
  const [heartIsActive, setHeatIsActive] = useState(false);

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

  return {
    wishList,
    pageProducts,
    heartIsActive,
    setProducts,
  };
};

export default StateShoesHook;
