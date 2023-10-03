import React from "react";
import * as styled from "./styles";

import logoFooter from "./../../assets/Footer/logo-footer1.png";
import americanExpress from "../../assets/Footer/american-express.png";
import mastercard from "../../assets/Footer/mastercard.png";
import boleto from "../../assets/Footer/boleto.png";
import elo from "../../assets/Footer/elo.png";
import gaston from "../../assets/Footer/gaston.png";
import hiperCard from "../../assets/Footer/hipercard.png";
import itau from "../../assets/Footer/itau.png";
import paqueta from "../../assets/Footer/paqueta.png";
import visa from "../../assets/Footer/visa.png";
import eBit from "../../assets/Footer/eBit.png";
import instagram from "../../assets/Footer/instagram.png";
import facebook from "../../assets/Footer/facebook.png";
import twitter from "../../assets/Footer/twitter.png";
import youtube from "../../assets/Footer/youtube.png";
import pinterest from "../../assets/Footer/pinterest.png";
import security from "../../assets/Footer/security.png";

const Footer = () => {
  return (
    <styled.ConteinerFooter>
      <div>
        <section>
          <h6>institucional</h6>
          <ul>
            <li>Quem somos</li>
            <li>Nossas Lojas</li>
            <li>Soluções Corporativas</li>
            <li>Política de privacidade</li>
            <li>Contrato de Compra e Venda</li>
            <li>Crédito pessoal</li>
          </ul>
        </section>
        <section>
          <h6>Ajuda e Suporte</h6>
          <ul>
            <li>Troca e Devolução</li>
            <li>2° Via do Boleto</li>
            <li>Detalhamento da Fatura</li>
            <li>Entrega</li>
            <li>Meus Pedidos</li>
            <li>Dúvidas Frequentes</li>
            <li>Status do Pedido</li>
          </ul>
        </section>
        <section className="footer-service">
          <div className="footer-talk-us">
            <h6>Atendimento</h6>
            <p>Fale Conosco</p>
          </div>
          <div className="footer-adress">
            <h6>Endereço</h6>
            <address>Rua Antonio Frederico Ozanan, 2601</address>
            <address>Canoas - RS | CNPJ: 01.098.983/0175-02</address>
          </div>
          <div className="footer-work-us">
            <h6>Trabalhe conosco</h6>
            <p>Venha crescer com a Paquetá</p>
          </div>
        </section>
        <section className="payment">
          <div className="payment-container">
            <h6>Formas de Pagamento</h6>
            <div className="partners">
              <div>
                <img src={mastercard} alt="logo mastercard" />
                <img src={americanExpress} alt="logo american express" />
                <img src={elo} alt="logo elo" />
              </div>
              <div>
                <img src={paqueta} alt="logo paqueta" />
                <img src={gaston} alt="logo gaston" />
                <img src={visa} alt="logo visa" />
              </div>
              <div>
                <img src={hiperCard} alt="logo hipercard" />
                <img src={itau} alt="" />
                <img src={boleto} alt="logo-boleto" />
              </div>
            </div>
          </div>
          <div className="social-media">
            <h6>Redes Sociais</h6>
            <div className="social-media-icons">
              <img src={instagram} alt="logo instagram" />
              <img src={facebook} alt="logo facebook" />
              <img src={twitter} alt="logo twitter" />
              <img src={youtube} alt="logo youtube" />
              <img src={pinterest} alt="logo pinterest" />
            </div>
          </div>
        </section>
        <section className="awards-security">
          <div>
            <h6>Prêmios e Certifições</h6>
            <div>
              <img src={eBit} alt="logo do certificado" />
            </div>
          </div>
          <div className="security">
            <h6>Segurança</h6>
            <div>
              <img src={security} alt="logo segurança" />
            </div>
          </div>
        </section>
      </div>

      <section className="footer-group">
        <h6>UMA EMPRESA DO GRUPO</h6>
        <img src={logoFooter} alt="logo paquetá footer" />
      </section>
    </styled.ConteinerFooter>
  );
};
export default Footer;
