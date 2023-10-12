import React from "react";
import * as S from "./styles";
import { ButtonPrice } from "../Button/Button.style";
import ImgWoman from "../../assets/Outlet/woman.png";
import ImgMan from "../../assets/Outlet/man.png";
import Logo from "../../assets/Header/logo.jpg";

const Outlet = () => {
  return (
    <S.ContainerOutlet>
      <S.Article>
        <S.GradientManWomanAbsolute>
          <img src={ImgWoman} alt="" />
          <S.GradientWoman>
            CALÇADOS <span>FEMININOS</span>{" "}
          </S.GradientWoman>
        </S.GradientManWomanAbsolute>
        <S.OutletInfoWoman>
          <p>
            Escolher o seu sapato favorito entre nossa <br />
            <span>variedade de modelos e cores</span> não será uma tarefa <br />
            fácil, mas o que uma mulher não consegue fazer?
          </p>
          <ButtonPrice
            theme="price"
            type="button"
            target="blank"
            rel="nopeener noreferer"
          >
            <a href="#">conferir</a>
          </ButtonPrice>
        </S.OutletInfoWoman>
      </S.Article>
      <S.Article>
        <S.OutletInfoMan>
          <p>
            Tenha em seu guarda roupa sapatos de <br /> qualidade e
            confortáveis, para o dia a dia,
            <br /> trabalho e até mesmo para praticar esportes!
          </p>
          <ButtonPrice
            type="button"
            theme="price"
            target="_blank"
            rel="nopeener noreferer"
          >
            <a href="#">Conferir</a>
          </ButtonPrice>
        </S.OutletInfoMan>
        <S.GradientManWomanAbsolute>
          <img src={ImgMan} alt="Imagem do homen vestindo sapato" />
          <S.GradientMan>
            CALÇADOS <span>MASCULINO</span>{" "}
          </S.GradientMan>
        </S.GradientManWomanAbsolute>
      </S.Article>
      <S.PaquetaOutlet>
        <div className="row"></div>
        <S.PaquetaOutletInfo>
          <S.PaquetaOutletLogo>
            <img src={Logo} alt="logomarca Paquetá" />
            <p>OUTLET</p>
          </S.PaquetaOutletLogo>
          <S.PaquetaOutletText>
            <p>
              Você também pode escolher o seu novo sapato{" "}
              <span>favorito de acordo com a sua numeração.</span>
            </p>
          </S.PaquetaOutletText>
        </S.PaquetaOutletInfo>
      </S.PaquetaOutlet>
    </S.ContainerOutlet>
  );
};
export default Outlet;
