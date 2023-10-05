import styled from "styled-components";

export const containerBag = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 10%;

  .navigation {
    margin: 30px 0;
  }
  .sacola-de-compras {
    margin: 40px 0;
  }
  .cartItems {
    display: flex;
    background-color: #f9f9f9;
    border-radius: 10px;
    padding: 15px 0;
    .cart-Items-Itens {
      margin-right: 10px;
      p {
        padding: 15px 0 0 20px;
        border-bottom: 2px solid #cf5d00;
        font-family: "Montserrat", sans-serif;
        font-weight: 600;
      }
    }

    .listItems {
      width: 100%;
      section {
        display: flex;
        padding: 15px;
        border-bottom: 2px solid #cf5d00;

        img {
          max-width: 200px;
          max-height: 200px;
        }
        .cart-item-info {
          display: flex;
          width: 100%;
          justify-content: space-between;
          padding-left: 30px;

          p,
          h3 {
            margin: 0;
            font-family: "Montserrat", sans-serif;
          }

          h3 {
            font-weight: 600;
          }
          .cart-item-codigo {
            margin-bottom: 20px;
            font-size: 13px;
          }

          .cart-item-numeracao > span,
          .cart-item-cor > span,
          .cart-item-quantidade > span,
          .cart-item-price > span {
            margin-bottom: 10px;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
          }
          .cart-item-tittle {
            font-size: 25px;
          }
        }

        button {
          border: none;
          outline: none;
          background-color: inherit;
          height: 20px;
          width: 100px;
        }
      }
      section:last-child {
        border-bottom: none;
      }
    }
  }
`;
