import styled from "styled-components";

export const ContainerShoes = styled.section`
  padding: 0 10%;

  .Addsacola {
    background-color: #05fa3d;
  }

  .comprar {
    background: linear-gradient(to top, #f99500, #ffcd29 100%);
    &:hover {
      background: linear-gradient(to top, #e98c00, #fcc71b 100%);
    }
  }

  .Warn {
    font-size: 13px;
    font-weight: 600;
  }
`;

export const Section = styled.section`
  display: flex;
  overflow: hidden;
  align-items: center;
  border-radius: 3px;
  padding: 10px;

  .Swiper {
    padding-bottom: 30px;
  }

  .bi-arrow-clockwise {
    font-size: 50px;
    margin: 0 auto;
    animation: spin 1s linear;
  }

  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;

export const ContainerProducts = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  max-width: 330px;
  max-height: 400px;
  border-radius: 3px;
  padding: 10px;
  margin: 10px;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

  p {
    font-size: clamp(0.5rem, 1.08vw, 0.875rem);
    margin: 0;
  }

  p:nth-child(3) {
    font-weight: 600;
    font-size: 20px;
  }
  @media (min-width: 992px) and (max-width: 1199px) {
    height: 345px;
  }
  @media (min-width: 1200px) and (max-width: 1919px) {
    height: 360px;
  }
  @media (min-width: 1920px) {
    width: 330px;
  }
`;

export const ImgProducts = styled.div`
  position: relative;

  i {
    cursor: pointer;
    position: absolute;
    right: 5px;
    top: 10px;
    font-size: 25px;
    color: #cf5d00;
    z-index: 99;

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 20px;
    }
  }

  .bi-heart-fill {
    color: #cf5d00;
    transition: all 0.2s linear;
  }

  .sold_out_product {
    position: absolute;
    background-color: #cf5d00;
    height: 25px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    p {
      color: #ffff;
      font-weight: 600;
    }
  }

  img {
    width: 100%;
    height: 180px;
    @media (min-width: 768px) and (max-width: 991px) {
      height: 120px;
    }
    @media (min-width: 992px) and (max-width: 1199px) {
      height: 150px;
    }
    @media (min-width: 1920px) {
      width: 100%;
      height: 220px;
    }
  }
`;

export const soldOutProduct = styled.div``;

export const BtnCarroussel = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  .left,
  .center,
  .right {
    width: 50px;
    height: 10px;
    background-color: #c3c3c3;
    border-radius: 10px;
    cursor: pointer;

    &:hover {
      background-color: #383838;
      transition: all.2s linear;
    }
  }
`;

export const HighlightCheck = styled.div`
  margin: 20px 0;

  div:nth-child(2) {
    display: flex;
    justify-content: flex-end;
    p {
      border-bottom: 1px solid #cf5d00;
    }
  }
`;
export const NumberList = styled.nav`
  .numberCheck {
    border: 2px solid #ff8a29;
    color: #ff8a29;
  }
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;

    li {
      border: 2px solid #383838;
      padding: 10px;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;
