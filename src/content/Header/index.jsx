import * as styled from "./styles";
import Logo from "../../assets/Header/logo.jpg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import AppContext from "../../context/AppContext";

const Header = () => {
  const { cartItem, cartWishList } = useContext(AppContext);
  return (
    <>
      <styled.headerStyle>
        <styled.headerHelp>
          <div className="online">
            <p>Loja de Calçados e Moda Online </p>
          </div>

          <div className=" talk">
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
          </div>
        </styled.headerHelp>

        <div className="Buy">
          <img src={Logo} alt="Logotipo Paguetá" />

          <nav className="enter">
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
          </nav>
        </div>

        <div className="navigation">
          <nav>
            <a>Novidades</a>
            <a>Feminino</a>
            <a>Masculino</a>
            <a>Paquetá Esportes</a>
            <a>Outlet</a>
            <a>Cashback</a>
          </nav>
        </div>
      </styled.headerStyle>
    </>
  );
};
export default Header;
