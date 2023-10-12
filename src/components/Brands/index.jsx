import React from "react";
import * as S from "./styles";

import Adiddas from "../../assets/Sponsor/adiddas.jpg";
import bebece from "../../assets/Sponsor/bebece.jpg";
import dumond from "../../assets/Sponsor/dumond.jpg";
import viamarte from "../../assets/Sponsor/viamarte.jpg";
import { ButtonPrice } from "../Button/Button.style";

export const Brands = () => {
  return (
    <S.BrandsContainer>
      <S.Logomarcas>
        <h3>AS MELHORES MARCAS ESTÃO AQUI!</h3>
        <S.Logotipos>
          <img src={Adiddas} alt="logotipo adiddas" />
          <img src={viamarte} alt="logotipo viamarte" />
          <img src={bebece} alt="logotipo bebecê" />
          <img src={dumond} alt="logotimo dumond" />
        </S.Logotipos>
      </S.Logomarcas>

      <S.Formulário>
        <h3>
          SEJA O PRIMEIRO A <span>RECEBER NOSSAS</span>{" "}
          <span>OFERTAS E NOVIDADES</span> <span>EXCLUSIVAS!</span>
        </h3>
        <S.Email>
          <p>Nos informe seu e-mail para receber o melhor atendimento!</p>

          <S.ContainerIputEmail>
            <S.Input
              type="text"
              name="name"
              id="name"
              maxLength="30"
              placeholder="Maria da Silva"
            />
            <S.Input
              type="email"
              name="email"
              id="email"
              maxLength="30"
              placeholder="maria@seuemail.com"
            />
          </S.ContainerIputEmail>

          <S.InputForm>
            <p>Tenho interesse nessa categoria: </p>
            <S.Form action="#" method="#">
              <fieldset>
                <S.Label htmlFor="Masculino">
                  <input type="checkbox" name="masculino" id="masculino" />
                  Masculino
                </S.Label>

                <S.Label htmlFor="Feminino">
                  <input type="checkbox" name="masculino" id="feminino" />
                  Feminino
                </S.Label>
              </fieldset>
            </S.Form>
          </S.InputForm>

          <div className="btn-form">
            <ButtonPrice type="submit">QUERO RECEBER</ButtonPrice>
          </div>
        </S.Email>
      </S.Formulário>
    </S.BrandsContainer>
  );
};
