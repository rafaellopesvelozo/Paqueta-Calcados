import React, { useContext, useEffect} from "react";
import * as S from "./styles";

import AppContext from "../../context/AppContext";

//import { Link } from "react-router-dom";
import { Shoes_Api } from "../../services/api";
import { numberShoes } from "../../utils/numberShoes";
import { ShoesIndex } from "../../components/Shoes/components/card";

const Shoes = () => {
  const { shoes, setShoes } = useContext(AppContext);

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
            return <ShoesIndex shoesItem={shoesItem} />;
          })}
        </S.Section>
        <S.BtnCarroussel>
          <div className="left" onClick={() => left(1)}></div>
          <div className="center"></div>
          <div className="right" onClick={() => left(-1)}></div>
        </S.BtnCarroussel>
      </div>
    </S.ContainerShoes>
  );
};

export default Shoes;
