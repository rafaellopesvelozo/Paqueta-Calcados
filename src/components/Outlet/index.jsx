import React from "react";
import * as styled from "./styles";

import Button from "../Button/index.jsx";
import ImgWoman from "../../assets/Outlet/woman.png";
import ImgMan from "../../assets/Outlet/man.png";
import Logo from "../../assets/Header/logo.jpg";

const Outlet = () => {
  return (
    <styled.Outlet>
      <article>
        <div className="gradient-woman">
          <img src={ImgWoman} alt="" />
          <div className="gradientWoman">
            CALÇADOS <span>FEMININOS</span>{" "}
          </div>
        </div>
        <div className="outlet-info-woman">
          <p>
            Escolher o seu sapato favorito entre nossa <br />
            <span>variedade de modelos e cores</span> não será uma tarefa <br />fácil,
            mas o que uma mulher não consegue fazer?
          </p>
          <Button
            theme="price"
            type="button"
            target="blank"
            rel="nopeener noreferer"
          > 
            <a href="#">conferir</a>
          </Button>
        </div>
      </article>
      <article>
        <div className="outlet-info-man">
          <p>
            Tenha em seu guarda roupa sapatos de <br/> qualidade e confortáveis, para
            o dia a dia,<br/> trabalho e até mesmo para praticar esportes!
          </p>
          <Button
            type="button"
            theme="price"
            target="_blank"
            rel="nopeener noreferer"
          >
            <a href="#">Conferir</a>
          </Button>
        </div>
        <div className="gradient-man">
          <img src={ImgMan} alt="Imagem do homen vestindo sapato" />
          <div className="gradientMan">
            CALÇADOS <span>MASCULINO</span>{" "}
          </div>
        </div>
      </article>
      <section className="Paqueta-Outlet">
        <div className="row"></div>
        <div className="paqueta-Outlet-info">
          <div className="paqueta-Outlet-logo">
            <img src={Logo} alt="logomarca Paquetá" />
            <p>OUTLET</p>
          </div>
          <div className="Paqueta-outlet-text">
            <p>
              Você também pode escolher o seu novo sapato{" "}
              <span>favorito de acordo com a sua numeração.</span>
            </p>
          </div>
        </div>
      </section>
    </styled.Outlet>
  );
};
export default Outlet;
