import React, { useContext, useEffect, useState } from "react";
import * as S from "./styles";
import { Shoes_Api } from "../../services/api";
import { numberShoes } from "../../utils/numberShoes";
import { ShoesIndex } from "../../components/Shoes/components/card";
import AppContext from "../../context/AppContext";

import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-fade";

const Shoes = () => {
  const { shoes, setShoes } = useContext(AppContext);
  const [slidePreview, setSlidePreview] = useState(4);
  const [load, setLoad] = useState(true);
  const [check, setCheck] = useState(null);

  useEffect(() => {
    try {
      setLoad(load);
      Shoes_Api.get("api/paqueta/shoes").then(({ data }) => {
        setShoes(data);
        setLoad(!load);
      });
    } catch (error) {
      console.log(error);
    }
  }, []);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 720) {
        setSlidePreview(2);
      } else setSlidePreview(4);
    }
    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resise", handleResize);
    };
  }, []);

  const numberCheck = (index) => {
    setCheck(index);
  };

  return (
    <S.ContainerShoes>
      <S.NumberList>
        <ul>
          {numberShoes.map((n, index) => (
            <li
              key={index}
              className={`${check == index ? "numberCheck" : ""}`}
              onClick={() => numberCheck(index)}
            >
              {n}
            </li>
          ))}
        </ul>
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
            <i className={`${load ? "bi-arrow-clockwise" : ""}`} />
          )}
          <Swiper
            className="Swiper"
            modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade]}
            spaceBetween={10}
            slidesPerView={slidePreview}
            pagination={{
              clickable: true,
            }}
          >
            {shoes.map((shoesItem) => {
              return (
                <SwiperSlide>
                  <ShoesIndex shoesItem={shoesItem} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </S.Section>
      </div>
    </S.ContainerShoes>
  );
};

export default Shoes;
