import React from "react";
import Adiddas from "../../assets/Sponsor/adiddas.jpg";
import bebece from "../../assets/Sponsor/bebece.jpg";
import dumond from "../../assets/Sponsor/dumond.jpg";
import viamarte from "../../assets/Sponsor/viamarte.jpg";
import Button from "../../components/Button/index";

export const Brands = () => {
  return (
    <section>
      <div>
        <h3>AS MELHORES MARCAS ESTÃO AQUI!</h3>
      </div>
      <div>
        <img src={Adiddas} alt="logotipo adiddas" />
        <img src={bebece} alt="logotipo bebecê" />
        <img src={dumond} alt="logotimo dumond" />
        <img src={viamarte} alt="logotipo viamarte" />
      </div>
      <div>
        <h3>
          SEJA O PRIMEIRO A <span>RECEBER NOSSAS</span>{" "}
          <span>OFERTAS E NOVIDADES</span> <span>EXCLUSIVAS!</span>
        </h3>
      </div>
      <div>
        <p>Nos informe seu e-mail para receber o melhor atendimento!</p>
      </div>
      <div>
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
        <div>
          <div>
            <p>Tenho interesse nessa categoria: </p>
          </div>
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
            <div>
              <Button className="button-price" type="submit">
                QUERO RECEBER
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
