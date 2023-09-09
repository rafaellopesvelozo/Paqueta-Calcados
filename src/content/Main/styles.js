import styled from "styled-components";

export const Main = styled.main`
  .banner-Main {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    height: 622px;

    img {
      width: 100%;
      height: 100%;
    }

    .infoHeader {
      margin-right: 3%;
      position: absolute;

      p {
        font-family: "Poppins";
      }

      .tipo {
        font-size: 55px;
        color: #383838;

        font-weight: 600;
      }

      .gênero {
        font-size: 50px;
        font-weight: 400;
        color: #cf5d00;
      }

      .A-partir {
        font-size: 24px;
        font-weight: 500;
        color: #383838;
      }

      .preço {
        font-size: 45px;
        font-weight: 700;
        color: #383838;
      }
    }
  }
`;
