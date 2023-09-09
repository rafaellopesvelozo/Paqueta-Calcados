import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import WishList from "./pages/WishList";
import Bag from "./pages/Bag";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/WishList" element={<WishList />} />
        <Route path="/Bag" element={<Bag />} />
        <Route path="*" element={<Home />} />
        <Route />
      </Routes>
    </BrowserRouter>
  );
};
