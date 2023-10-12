import React from "react";
import * as S from "./styles";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";
import Logo from "../../assets/Header/logo.jpg";

const Header = () => {
  const { cartItem, cartWishList } = useContext(AppContext);
  return (
    <>
      <S.headerStyle>
        <S.headerHelp>
          <div className="online">
            <p>Loja de Calçados e Moda Online </p>
          </div>
          <S.Talk>
            <div>
              <a>
                <i className="bi bi-headphones"></i> Fale conosco
              </a>
            </div>
            <div>
              <a>
                <i className="bi bi-geo-alt"></i> Econtrar uma loja fisica
              </a>
            </div>
          </S.Talk>
        </S.headerHelp>

        <S.Buy>
          <img src={Logo} alt="Logotipo Paguetá" />

          <S.Enter>
            <Link to="WishList" className="number-buy">
              <div>
                {cartWishList.length ? <span>{cartWishList.length}</span> : ""}
                <i className="bi bi-heart"></i> Lista de desejos
              </div>
            </Link>

            <Link to="Bag">
              <div className="number-buy">
                {cartItem.length ? <span>{cartItem.length}</span> : ""}
                <i className="bi bi-bag-dash"></i> Sacola
              </div>
            </Link>

            <a>
              <i className="bi bi-person"></i> Entrar
            </a>
          </S.Enter>
        </S.Buy>

        <S.Navigation>
          <nav>
            <a>Novidades</a>
            <a>Feminino</a>
            <a>Masculino</a>
            <a>Paquetá Esportes</a>
            <a>Outlet</a>
            <a>Cashback</a>
          </nav>
        </S.Navigation>
      </S.headerStyle>
    </>
  );
};
export default Header;
