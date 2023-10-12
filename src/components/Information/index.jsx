import { Section, InfoSection, Icons, TextCapsLock } from "./styles";

const Information = () => {
  return (
    <Section>
      <InfoSection>
        <Icons>
          <i className="bi bi-briefcase"></i>
        </Icons>
        <div className="text-info">
          <TextCapsLock>PAGUE EM ATÉ 10X</TextCapsLock>
          <p>SEM JUROS*</p>
        </div>
      </InfoSection>
      <InfoSection>
        <Icons>
          <i className="bi bi-geo-alt"></i>
        </Icons>
        <div className="text-info">
          <TextCapsLock>RETIRE GRÁTIS</TextCapsLock>
          <p>EM NOSSAS LOJAS</p>
        </div>
      </InfoSection>
      <InfoSection>
        <Icons>
          <i className="bi bi-percent"></i>
        </Icons>
        <div className="text-info">
          <TextCapsLock>GANHE 20% DE </TextCapsLock>
          <TextCapsLock>DESCONTO</TextCapsLock>
        </div>
      </InfoSection>
      <InfoSection>
        <Icons>
          <i className="bi bi-truck"></i>
        </Icons>
        <div className="text-info">
          <TextCapsLock>
            FRETE GRÁTIS <span>PARA</span>
          </TextCapsLock>
          <p>
            <span>REGIÕES SUL E SUDESTE*</span>
          </p>
        </div>
      </InfoSection>
      <InfoSection>
        <Icons>
          <i className="bi bi-arrow-repeat"></i>
        </Icons>
        <div className="text-info">
          <p>PRIMEIRA TROCA GRÁTIS</p>
        </div>
      </InfoSection>
    </Section>
  );
};
export default Information;
