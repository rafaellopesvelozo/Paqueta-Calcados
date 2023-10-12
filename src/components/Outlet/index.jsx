import React from "react";
import {
  Article,
  ContainerOutlet,
  GradientManWomanAbsolute,
  GradientMan,
  GradientWoman,
  OutletInfoWoman,
  OutletInfoMan,
  PaquetaOutletInfo,
  PaquetaOutletLogo,
  PaquetaOutletText,
  PaquetaOutlet,
} from "./styles";

import Button from "../Button/index.jsx";
import ImgWoman from "../../assets/Outlet/woman.png";
import ImgMan from "../../assets/Outlet/man.png";
import Logo from "../../assets/Header/logo.jpg";

const Outlet = () => {
  return (
    <ContainerOutlet>
      <Article>
        <GradientManWomanAbsolute>
          <img src={ImgWoman} alt="" />
          <GradientWoman>
            CALÇADOS <span>FEMININOS</span>{" "}
          </GradientWoman>
        </GradientManWomanAbsolute>
        <OutletInfoWoman>
          <p>
            Escolher o seu sapato favorito entre nossa <br />
            <span>variedade de modelos e cores</span> não será uma tarefa <br />
            fácil, mas o que uma mulher não consegue fazer?
          </p>
          <Button
            theme="price"
            type="button"
            target="blank"
            rel="nopeener noreferer"
          >
            <a href="#">conferir</a>
          </Button>
        </OutletInfoWoman>
      </Article>
      <Article>
        <OutletInfoMan>
          <p>
            Tenha em seu guarda roupa sapatos de <br /> qualidade e
            confortáveis, para o dia a dia,
            <br /> trabalho e até mesmo para praticar esportes!
          </p>
          <Button
            type="button"
            theme="price"
            target="_blank"
            rel="nopeener noreferer"
          >
            <a href="#">Conferir</a>
          </Button>
        </OutletInfoMan>
        <GradientManWomanAbsolute>
          <img src={ImgMan} alt="Imagem do homen vestindo sapato" />
          <GradientMan>
            CALÇADOS <span>MASCULINO</span>{" "}
          </GradientMan>
        </GradientManWomanAbsolute>
      </Article>
      <PaquetaOutlet>
        <div className="row"></div>
        <PaquetaOutletInfo>
          <PaquetaOutletLogo>
            <img src={Logo} alt="logomarca Paquetá" />
            <p>OUTLET</p>
          </PaquetaOutletLogo>
          <PaquetaOutletText>
            <p>
              Você também pode escolher o seu novo sapato{" "}
              <span>favorito de acordo com a sua numeração.</span>
            </p>
          </PaquetaOutletText>
        </PaquetaOutletInfo>
      </PaquetaOutlet>
    </ContainerOutlet>
  );
};
export default Outlet;
