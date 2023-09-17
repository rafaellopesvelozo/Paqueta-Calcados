import styled from "styled-components";

export const ConteinerFooter = styled.footer`
  div {
    padding: 2% 10%;
    display: flex;
    justify-content: space-between;
    background-color: #ebebeb;
    .payment,
    .awards-security {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    section {
      div {
        padding: 0;
      }
      .footer-service{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
      }
      address,
      p {
        color: #808080;
      }

      h6 {
        font-size: 16px;
        font-weight: 700;
        font-family: "Montserrat", sans-serif;
        margin-bottom: 10px;
        color: #383838;
      }

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        li {
          font-size: 14px;
          font-weight: 400;
          font-family: "Montserrat", sans-serif;
        }
      }
      .footer-adress,
      .footer-talk-us,
      .footer-work-us {
        display: block;
      }
      .social-media {
        .social-media-icons {
          display: flex;
          gap: 15px;

          .bi-instagram,
          .bi-facebook,
          .bi-twitter,
          .bi-youtube,
          .bi-pinterest {
            font-size: 25px;
          }
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
