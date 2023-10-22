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
            <nav>
              <li>
                <i className="bi bi-headphones" />
                Fale conosco
              </li>
            </nav>
            <nav>
              <li>
                <i className="bi bi-geo-alt" />
                Econtrar uma loja fisica
              </li>
            </nav>
          </S.Talk>
        </S.headerHelp>

        <S.Buy>
          <img src={Logo} alt="Logotipo Paguetá" />
          <S.Enter>
            <Link to="WishList">
              <p className="number-buy">
                {cartWishList.length ? <span>{cartWishList.length}</span> : ""}
                <i className="bi bi-heart" />
                Lista de desejos
              </p>
            </Link>

            <Link to="Bag">
              <p className="number-buy">
                {cartItem.length ? <span>{cartItem.length}</span> : ""}
                <i className="bi bi-bag-dash" /> Sacola
              </p>
            </Link>

            <p className="login">
              <i className="bi bi-person" /> Entrar
            </p>
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
