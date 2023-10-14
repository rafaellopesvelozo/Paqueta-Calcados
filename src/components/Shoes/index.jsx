import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
//import { Link } from "react-router-dom";
import { Shoes_Api } from "../../services/api";
import { numberShoes } from "../../utils/numberShoes";
import { ShoesIndex } from "../../components/Shoes/components/card";
//import Slider from "react-slick";
import AppContext from "../../context/AppContext";

const Shoes = () => {
  const { shoes, setShoes } = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(0);

  const [load, setLoad] = useState(true);

  useEffect(() => {
    try {
      setLoad(load);
      Shoes_Api.get("api/paqueta/shoes").then(({ data }) => {
        setShoes(data);
        setLoad(false);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex == shoes.length -1) {
      newIndex = shoes.length - 1;
    }
    setActiveIndex(newIndex);
  };

  const listNumbers = numberShoes.map((n) => <li>{n}</li>);

  return (
    <S.ContainerShoes>
      <S.NumberList>
        <ul>{listNumbers}</ul>
      </S.NumberList>

      <div className="highlights">
        <S.HighlightCheck>
          <div>
            <p>DESTAQUES</p>
          </div>
          <div>
            <p>CONFERIR TUDO</p>
          </div>
        </S.HighlightCheck>

        <S.Section>
          {shoes.length === 0 && (
            <i className={`${load ? "bi-arrow-clockwise" : ""}`}></i>
          )}
          {shoes.map((shoesItem) => {
            return (
              <ShoesIndex activeIndex={activeIndex} shoesItem={shoesItem} />
            );
          })}
        </S.Section>

        <S.BtnCarroussel>
          <div
            className="left"
            onClick={() => updateIndex(activeIndex - 1)}
          ></div>
          <div
            className="center"
            onClick={() => updateIndex(shoes.length / 2)}
          ></div>
          <div
            className="right"
            onClick={() => updateIndex(activeIndex + 1)}
          ></div>
        </S.BtnCarroussel>
      </div>
    </S.ContainerShoes>
  );
};

export default Shoes;
