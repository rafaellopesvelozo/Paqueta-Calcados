import { useContext, useState, useEffect } from "react";
import AppContext from "../../../context/AppContext";

const UpdateItemStates = () => {
  const { cartItem, setCartItem } = useContext(AppContext);

  const [value, setValue] = useState(1);
  const [ramdomCode, setRamdomCode] = useState("");
  const [ramdomShoe, setramdomShoe] = useState("");

  const handleRemoveItem = (cart) => {
    const id = cart.id;
    const updatedItems = cartItem.filter((item) => item.id !== id);
    setCartItem(updatedItems);
  };

  const getRamdomCode = () => {
    const min = 1234;
    const max = 99999999;
    const nRamdom1 = Math.floor(Math.random() * (max - min) + min);
    const newRamdom = nRamdom1.toString().split("");
    for (let i = 0; i < newRamdom.length; i++) {
      if (i == 4) newRamdom.splice(i, 0, "-");
    }
    setRamdomCode(newRamdom);
  };

  const getRamdomNumberShoe = () => {
    const min = 33;
    const max = 44;
    const RamdomNumberShoe = Math.floor(Math.random() * (max - min) + min);
    setramdomShoe(RamdomNumberShoe);
  };

  useEffect(() => {
    getRamdomNumberShoe(), getRamdomCode();
  }, []);

  const updateItem = (action) => {
    if (action === "increase") setValue((value) => value + 1);

    if (action === "decrease") {
      if (value == 1) return;
      setValue((value) => value - 1);
    }
  };

  return {
    handleRemoveItem,
    updateItem,
    value,
    getRamdomCode,
    ramdomCode,
    ramdomShoe,
    getRamdomNumberShoe,
  };
};

export default UpdateItemStates;
