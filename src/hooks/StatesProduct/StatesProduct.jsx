import { useContext, useState } from "react";
import AppContext from "../../context/AppContext";

const StatesProduct = () => {
  
  const { cartItem, setCartItem } = useContext(AppContext);
  const [numberProductCheck, setNumberProductCheck] = useState(null);
  const [productItemBuy, setProductItemBuy] = useState(false);

  function price(item) {
    let preço = item.price.value;
    let discount = item.price.discount * 100;
    let total = preço - preço * (discount / 100);
    return total;
  }

  const numberProduct = (index) => {
    setNumberProductCheck(index);
  };

  const BuyProduct = (item) => {
    const existProduct = cartItem.find((product) => product.id === item.id);
    if (!existProduct) {
      setCartItem([...cartItem, item]);
      setProductItemBuy(!productItemBuy);
    }
  };

  return {
    price,
    numberProduct,
    setNumberProductCheck,
    numberProductCheck,
    BuyProduct,
    productItemBuy,
    setProductItemBuy,
  };
};
export default StatesProduct;
