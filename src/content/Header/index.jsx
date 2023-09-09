import * as styled from "./styles";
import Logo from "../../assets/Header/logo.jpg";
import { Link } from "react-router-dom";

const Header = () => {
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
                <i class="bi bi-headphones"></i> Fale conosco
              </a>
            </div>
            <div>
              <a>
                <i class="bi bi-geo-alt"></i> Econtrar uma loja fisica
              </a>
            </div>
          </div>
        </styled.headerHelp>

        <div className="Buy">
          <img src={Logo} alt="Logotipo Paguetá" />

          <nav className="enter">
            
            <Link to="WishList">
              <i class="bi bi-heart"></i> Lista de desejos
            </Link>

            <Link to="Bag">
              <i class="bi bi-bag-dash"></i>
              Sacola
            </Link>

            <a>
              <i class="bi bi-person"></i>Entrar
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
