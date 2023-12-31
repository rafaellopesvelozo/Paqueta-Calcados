import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Bag from "./pages/Bag";
import Product from "./pages/Product";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/Bag" element={<Bag />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="*" element={<Home />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
