import React from "react";
import * as styled from "./styles";
const Footer = () => {
  return (
    <styled.ConteinerFooter>
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
      <section>
        <div>
          <h6>Atendimento</h6>
          <p>Fale Conosco</p>
        </div>
        <div>
          <h6>Endereço</h6>
          <address>Rua Antonio Frederico Ozanan, 2601</address>
          <address>Canoas - RS | CNPJ: 01.098.983/0175-02</address>
        </div>
        <div>
          <h6>Trabalhe conosco</h6>
          <p>Venha crescer com a Paquetá</p>
        </div>
      </section>
      <section  className="payment">
        <div>
          <h6>Formas de Pagamento</h6>
        </div>
        <div className="social-media">
          <h6>Redes Sociais</h6>
          <div className="social-media-icons">
            <i class="bi bi-instagram"></i>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-twitter"></i>
            <i class="bi bi-youtube"></i>
            <i class="bi bi-pinterest"></i>
          </div>
        </div>
      </section>
      <section className="awards-security">
        <div>
          <h6>Prêmios e Certifições</h6>
        </div>
        <div>
          <h6>Segurança</h6>
        </div>
      </section>
    </styled.ConteinerFooter>
  );
};
export default Footer;
