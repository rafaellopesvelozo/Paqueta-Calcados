import styled from "styled-components";

export const ContainerShoes = styled.section`
  padding: 0 10%;

  .highlights {
    button {
      color: #ffff;
      font-weight: 600;
      width: 100%;
      font-size: 15px;
    }

    .comprado {
      background-color: #05fa3d;
    }

    .comprar {
      background: linear-gradient(to top, #f99500, #ffcd29 100%);
      &:hover {
        background: linear-gradient(to top, #e98c00, #fcc71b 100%);
      }
    }

    .Warn {
      font-size: 12px;
    }
  }
`;

export const Section = styled.section`
  display: flex;
  border-radius: 3px;
  max-height: 500px;
  overflow: hidden;
  padding: 30px 0;
  gap: 20px;
`;

export const ContainerProducts = styled.div`
  max-width: 220px;
  border-radius: 3px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.1);

  p {
    font-size: 14px;
    margin: 0;
  }

  p:nth-child(3) {
    font-weight: 600;
    font-size: 20px;
  }

  .transitionX {
    transform: translateX(-${(props) => 200 * props.activeShoes} "px");
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
  }
  .bi-heart-fill {
    color: #cf5d00;
    transition: all 0.2s linear;
  }

  .sold_out_product {
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
    max-width: 200px;
    max-height: 200px;
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
    background-color: red;
    cursor: pointer;
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
  ul {
    display: flex;
    justify-content: space-between;
    width: 100%;
    margin: 0;
    padding: 0;

    li {
      border: 1px solid #383838;
      padding: 10px;
      border-radius: 3px;
      cursor: pointer;
    }
  }
`;
