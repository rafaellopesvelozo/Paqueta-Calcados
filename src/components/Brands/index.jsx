import React from "react";
import {
  BrandsContainer,
  Logomarcas,
  Logotipos,
  Formulário,
  Email,
  InputForm,
  Form,
  Label,
  Input,
  ContainerIputEmail,
} from "./styles";
import Adiddas from "../../assets/Sponsor/adiddas.jpg";
import bebece from "../../assets/Sponsor/bebece.jpg";
import dumond from "../../assets/Sponsor/dumond.jpg";
import viamarte from "../../assets/Sponsor/viamarte.jpg";
import Button from "../../components/Button/index";

export const Brands = () => {
  return (
    <BrandsContainer>
      <Logomarcas>
        <h3>AS MELHORES MARCAS ESTÃO AQUI!</h3>
        <Logotipos>
          <img src={Adiddas} alt="logotipo adiddas" />
          <img src={viamarte} alt="logotipo viamarte" />
          <img src={bebece} alt="logotipo bebecê" />
          <img src={dumond} alt="logotimo dumond" />
        </Logotipos>
      </Logomarcas>

      <Formulário>
        <h3>
          SEJA O PRIMEIRO A <span>RECEBER NOSSAS</span>{" "}
          <span>OFERTAS E NOVIDADES</span> <span>EXCLUSIVAS!</span>
        </h3>
        <Email>
          <p>Nos informe seu e-mail para receber o melhor atendimento!</p>

          <ContainerIputEmail>
            <Input
              type="text"
              name="name"
              id="name"
              maxLength="30"
              placeholder="Maria da Silva"
            />
            <Input
              type="email"
              name="email"
              id="email"
              maxLength="30"
              placeholder="maria@seuemail.com"
            />
          </ContainerIputEmail>

          <InputForm>
            <p>Tenho interesse nessa categoria: </p>
            <Form action="#" method="#">
              <fieldset>
                <Label htmlFor="Masculino">
                  <input type="checkbox" name="masculino" id="masculino" />
                  Masculino
                </Label>

                <Label htmlFor="Feminino">
                  <input type="checkbox" name="masculino" id="feminino" />
                  Feminino
                </Label>
              </fieldset>
            </Form>
          </InputForm>

          <div className="btn-form">
            <Button className="button-price" type="submit">
              QUERO RECEBER
            </Button>
          </div>
        </Email>
      </Formulário>
    </BrandsContainer>
  );
};
