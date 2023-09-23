import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";

const WishList = () => {
 const {cartWishList} = useContext(AppContext)
  return (
    <div>
      <a>
        <Link to="/">Voltar</Link>
      </a>
      {
        cartWishList.map((i) => <p>{i.name}</p>)
      }
    </div>
  );
};
export default WishList;
