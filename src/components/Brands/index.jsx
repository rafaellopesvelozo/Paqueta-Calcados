import React from "react";
import * as styled from "./styles";
import Adiddas from "../../assets/Sponsor/adiddas.jpg";
import bebece from "../../assets/Sponsor/bebece.jpg";
import dumond from "../../assets/Sponsor/dumond.jpg";
import viamarte from "../../assets/Sponsor/viamarte.jpg";
import Button from "../../components/Button/index";

export const Brands = () => {
  return (
    <styled.BrandsContainer>
      <div className="logomarcas">
        <h3>AS MELHORES MARCAS ESTÃO AQUI!</h3>
        <div className="logotipos">
          <img src={Adiddas} alt="logotipo adiddas" />
          <img src={viamarte} alt="logotipo viamarte" />
          <img src={bebece} alt="logotipo bebecê" />
          <img src={dumond} alt="logotimo dumond" />
        </div>
      </div>

      <div className="formulário">
        <h3>
          SEJA O PRIMEIRO A <span>RECEBER NOSSAS</span>{" "}
          <span>OFERTAS E NOVIDADES</span> <span>EXCLUSIVAS!</span>
        </h3>
        <div className="Email">
          <p>Nos informe seu e-mail para receber o melhor atendimento!</p>

          <div>
            <input
              type="text"
              name="name"
              id="name"
              maxlength="30"
              placeholder="Maria da Silva"
            />
            <input
              type="email"
              name="email"
              id="email"
              maxlength="30"
              placeholder="maria@seuemail.com"
            />
          </div>

          <div className="input-form">
            <p>Tenho interesse nessa categoria: </p>
            <form action="#" method="#">
              <fieldset>
                <label htmlFor="Masculino">
                  Masculino{" "}
                  <input type="checkbox" name="masculino" id="masculino" />
                </label>

                <label htmlFor="Feminino">
                  Feminino{" "}
                  <input type="checkbox" name="masculino" id="feminino" />
                </label>
              </fieldset>
            </form>
          </div>

          <div>
            <Button className="button-price" type="submit">
              QUERO RECEBER
            </Button>
          </div>
        </div>
      </div>
    </styled.BrandsContainer>
  );
};
