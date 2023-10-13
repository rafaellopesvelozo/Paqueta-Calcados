import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
//import { Link } from "react-router-dom";
import { Shoes_Api } from "../../services/api";
import { numberShoes } from "../../utils/numberShoes";
import { ShoesIndex } from "../../components/Shoes/components/card";
//import Slider from "react-slick";
import AppContext from "../../context/AppContext";

const Shoes = () => {
  /* 
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    //centerMode: false,
    //variableWidth: true,
    slidesToScroll: 1,
  };
*/
  const { shoes, setShoes } = useContext(AppContext);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    try {
      Shoes_Api.get("api/paqueta/shoes").then(({ data }) => {
        setShoes(data);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex == shoes.length) {
      newIndex = shoes.length - 1;
    }
    setActiveIndex(newIndex);

    console.log(newIndex);
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
          {shoes.length === 0 && <p>CARREGANDO . . .</p>}
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
          <div className="center"></div>
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
