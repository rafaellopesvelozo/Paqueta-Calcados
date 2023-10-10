import React, { useContext, useEffect, useState } from "react";
import * as styled from "./styles";

import AppContext from "../../context/AppContext";

//import { Link } from "react-router-dom";
import { Shoes_Api } from "../../services/api";
import { numberShoes } from "../../utils/numberShoes";
import { ShoesIndex } from "../../components/Shoes/components/card";

const Shoes = () => {
  const {
    shoes,
    setShoes,
  } = useContext(AppContext);

  useEffect(() => {
    try {
      Shoes_Api.get("api/paqueta/shoes").then(({ data }) => {
        setShoes(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  let activeShoes = 0;
  const left = (direction) => {
    activeShoes = activeShoes + direction;
    const shoesCarousel = shoes[activeShoes];
    //console.log(shoesCarousel, activeShoes);
  };

  const listNumbers = numberShoes.map((n) => <li>{n}</li>);

  return (
    <styled.Shoes>
      <nav className="numbers-list">
        <ul>{listNumbers}</ul>
      </nav>
      <div className="highlights">
        <div className="highlight_Check">
          <div>
            <p>DESTAQUES</p>
          </div>
          <div>
            <p>CONFERIR TUDO</p>
          </div>
        </div>

        <section>
          {shoes.length === 0 && <p>Carregado...</p>}
          {shoes.map((shoesItem) => {
            return <ShoesIndex shoesItem={shoesItem} />;
          })}
        </section>
        <div className="btn-carousel">
          <div  className="left" onClick={() => left(1)}></div>
          <div className="center"></div>
          <div className="right" onClick={() => left(-1)}></div>
        </div>
      </div>
    </styled.Shoes>
  );
};

export default Shoes;
