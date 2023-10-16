import styled from "styled-components";

export const ContainerOutlet = styled.section`
  display: flex;
  flex-direction: column;
  gap: 100px;
  padding: 7% 10%;
`;

export const PaquetaOutlet = styled.section`
  .row {
    height: 2px;
    width: 100%;
    background-color: #383838;
    margin: 0 auto;
  }
`;
export const PaquetaOutletText = styled.div`
  p {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    font-family: "Montserrat", sans-serif;
    span {
      font-family: "Montserrat", sans-serif;
    }
  }
`;

export const PaquetaOutletInfo = styled.div`
  padding: 7% 0 2% 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const PaquetaOutletLogo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  p {
    font-size: 40px;
    font-family: "Poppins", sans-serif;
    font-weight: 800;
    color: #f57002;
  }
`;
export const GradientManWomanAbsolute = styled.div`
  position: relative;
  height: 400px;
  max-width: 550px;

  @media (min-width: 768px) and (max-width: 991px) {
    height: 250px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 370px;
  }

  img {
    width: 100%;
    height: 100%;
  }
`;

export const GradientWoman = styled.div`
  position: absolute;
  flex-direction: column;
  top: 0;
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  background: linear-gradient(90deg, #f57002 0%, transparent 100%);
  padding: 0 0 30px 30px;
  color: #ffff;
  font-size: clamp(0.2rem, 4.02vw, 3rem);
  text-shadow: 0.1rem 0.1rem 0.2rem #000;

  @media (min-width: 768px) and (max-width: 991px) {
    font-size: 20px;
  }
`;

export const GradientMan = styled(GradientWoman)`
  background: linear-gradient(90deg, transparent 0%, #f57002 100%);
  align-items: self-end;
  padding: 0 30px 30px 0;
`;

export const Article = styled.article`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OutletInfoMan = styled.div`
  p {
    font-size: clamp(0.5rem, 2.1vw, 0.875rem);
    font-family: "Montserrat", sans-serif;
  }
  Button {
    margin-top: 30px;
  }
`;

export const OutletInfoWoman = styled.div`
  display: flex;
  flex-direction: column;
  align-items: end;

  p {
    text-align: right;
    font-family: "Montserrat", sans-serif;
    font-size: clamp(0.5rem, 1.67vw, 1rem);
    span {
      font-weight: 600;
    }
  }
  Button {
    margin-top: 30px;
  }
`;
