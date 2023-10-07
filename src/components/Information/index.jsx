import * as styled from "./styles";

const Information = () => {
  return (
    <styled.Section>
      <div className="info-section">
        <div className="icons">
          <i className="bi bi-briefcase"></i>
        </div>
        <div className="text-info">
          <p className="Caps-lock">PAGUE EM ATÉ 10X</p>
          <p>SEM JUROS*</p>
        </div>
      </div>
      <div className="info-section">
        <div className="icons">
          <i className="bi bi-geo-alt"></i>
        </div>
        <div className="text-info">
          <p className="Caps-lock">RETIRE GRÁTIS</p>
          <p>EM NOSSAS LOJAS</p>
        </div>
      </div>
      <div className="info-section">
        <div className="icons">
          <i className="bi bi-percent"></i>
        </div>
        <div className="text-info">
          <p className="Caps-lock">GANHE 20% DE </p>
          <p className="Caps-lock">DESCONTO</p>
        </div>
      </div>
      <div className="info-section">
        <div className="icons">
          <i className="bi bi-truck"></i>
        </div>
        <div className="text-info">
          <p className="Caps-lock">
            FRETE GRÁTIS <span>PARA</span>
          </p>
          <p>
            <span>REGIÕES SUL E SUDESTE*</span>
          </p>
        </div>
      </div>
      <div className="info-section">
        <div className="icons">
          <i className="bi bi-arrow-repeat"></i>
        </div>
        <div className="text-info">
          <p>PRIMEIRA TROCA GRÁTIS</p>
        </div>
      </div>
    </styled.Section>
  );
};
export default Information;
