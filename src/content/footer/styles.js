import styled from "styled-components";

export const ConteinerFooter = styled.footer`
  div {
    padding: 2% 10%;
    display: flex;
    justify-content: space-between;
    background-color: #ebebeb;
    gap: 5px;
    .payment,
    .awards-security {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .footer-service {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }
    address,
    p {
      color: #808080;
      font-size: clamp(0.1rem, 1.09vw, 0.938rem);
    }

    h6 {
      font-size: 15px;
      font-weight: 700;
      font-family: "Montserrat", sans-serif;
      margin-bottom: 10px;
      color: #383838;
      @media (min-width: 768px) and (max-width: 991px) {
        font-size: 13px;
      }
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      li {
        cursor: pointer;
        font-size: 14px;
        font-weight: 400;
        font-family: "Montserrat", sans-serif;
        @media (min-width: 768px) and (max-width: 991px) {
          font-size: 10px;
        }
      }
    }
    .footer-adress,
    .footer-talk-us,
    .footer-work-us {
      display: block;

      p,
      address {
        cursor: pointer;
      }
    }

    .social-media {
      display: flex;
      flex-direction: column;
      text-align: center;

      .social-media-icons {
        display: flex;
        justify-content: space-between;
        padding: 0;

        img {
          max-width: 15px;
          @media (min-width: 768px) and (max-width: 991px) {
            width: 8px;
          }
        }
      }
    }
  }
  .payment {
    .payment-container {
      display: flex;
      flex-direction: column;
      text-align: center;
      h6 {
        @media (min-width: 768px) and (max-width: 991px) {
          font-size: 12px;
        }
      }
      .partners {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-width: 190px;
        padding: 0;

        div {
          padding: 0;
          img {
            max-width: 30px;
          }
        }
      }
    }
  }
  .awards-security {
    margin-left: 5px;
    div {
      display: flex;
      flex-direction: column;
      img {
        max-width: 50px;
      }
    }
    .security {
      div {
        img {
          max-width: 100px;
        }
      }
    }
  }

  .footer-group {
    background-color: #383838;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px 0;
    gap: 10px;
    h6 {
      color: #ffffff;
    }
  }
`;
