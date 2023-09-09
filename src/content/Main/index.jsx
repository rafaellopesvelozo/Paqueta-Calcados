import * as styled from "./styles";
import Information from "../../components/Information";
import Button from "../../components/Button/index.jsx";
import Outlet from "../../components/Outlet";
import ImgBanner from "../../assets/Header/img-header.png";
import Shoes from "../../components/Shoes";
import { Brands } from "../../components/Brands";

const Main = () => {
  return (
    <styled.Main>
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
            <Button type="button" theme="price">
              <a href="#" target="_blank" rel="nopeener noreferer">
                Aproveite
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div>
        <Information />
      </div>
      <Outlet />
      <Shoes />
      <Brands/>
    </styled.Main>
  );
};
export default Main;
