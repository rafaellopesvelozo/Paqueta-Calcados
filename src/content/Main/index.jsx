import * as S from "./styles";
import Information from "../../components/Information";
import Outlet from "../../components/Outlet";
import ImgBanner from "../../assets/Header/img-header.png";
import Shoes from "../../components/Shoes";
import { Brands } from "../../components/Brands";
import { ButtonPrice } from "../../components/Button/Button.style";

const Main = () => {
  return (
    <S.Main>
      <div className="banner-Main">
        <img src={ImgBanner} alt="" />
        <div className="infoHeader">
          <div className="types">
            <p className="tipo">Tênis Casual</p>
            <p className="gênero">Masculino</p>
            <p className="A-partir">A partir de</p>
            <p className="preço">R$ 79,90</p>
          </div>

          <div className="btn-price">
            <ButtonPrice type="button" theme="price">
              <a href="#" target="_blank" rel="nopeener noreferer">
                Aproveite
              </a>
            </ButtonPrice>
          </div>
        </div>
      </div>
      <div>
        <Information />
      </div>
      <Outlet />
      <Shoes />
      <Brands />
    </S.Main>
  );
};
export default Main;
