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
    .listItems {
      width: 100%;
      section {
        display: flex;
        justify-content: space-between;
        background-color: #f9f9f9;
        padding: 15px;
        margin-bottom: 10px;
        img {
          max-width: 200px;
          max-height: 200px;
        }
        .cart-item-info {
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

          .cart-item-numeracao,
          .cart-item-cor,
          .cart-item-quantidade {
            margin-bottom: 10px;
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
    }
  }
`;
