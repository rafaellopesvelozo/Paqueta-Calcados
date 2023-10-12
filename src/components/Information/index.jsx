import * as S from "./styles";

const Information = () => {
  return (
    <S.Section>
      <S.InfoSection>
        <S.Icons>
          <i className="bi bi-briefcase"></i>
        </S.Icons>
        <div className="text-info">
          <S.TextCapsLock>PAGUE EM ATÉ 10X</S.TextCapsLock>
          <p>SEM JUROS*</p>
        </div>
      </S.InfoSection>
      <S.InfoSection>
        <S.Icons>
          <i className="bi bi-geo-alt"></i>
        </S.Icons>
        <div className="text-info">
          <S.TextCapsLock>RETIRE GRÁTIS</S.TextCapsLock>
          <p>EM NOSSAS LOJAS</p>
        </div>
      </S.InfoSection>
      <S.InfoSection>
        <S.Icons>
          <i className="bi bi-percent"></i>
        </S.Icons>
        <div className="text-info">
          <S.TextCapsLock>GANHE 20% DE </S.TextCapsLock>
          <S.TextCapsLock>DESCONTO</S.TextCapsLock>
        </div>
      </S.InfoSection>
      <S.InfoSection>
        <S.Icons>
          <i className="bi bi-truck"></i>
        </S.Icons>
        <div className="text-info">
          <S.TextCapsLock>
            FRETE GRÁTIS <span>PARA</span>
          </S.TextCapsLock>
          <p>
            <span>REGIÕES SUL E SUDESTE*</span>
          </p>
        </div>
      </S.InfoSection>
      <S.InfoSection>
        <S.Icons>
          <i className="bi bi-arrow-repeat"></i>
        </S.Icons>
        <div className="text-info">
          <p>PRIMEIRA TROCA GRÁTIS</p>
        </div>
      </S.InfoSection>
    </S.Section>
  );
};
export default Information;
