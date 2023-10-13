import styled from "styled-components";

export const ContainerBag = styled.section`
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
          div {
          }
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
          .cart-item-price > span {
            margin-bottom: 10px;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
          }
          .cart-item-tittle {
            font-size: clamp(0.5rem, 25px, 1.563);
          }
          .cart-item-quantidade {
            display: flex;
            .quantidade {
              font-family: "Montserrat", sans-serif;
              font-weight: 600;
            }
            gap: 15px;
            .add-remove {
              display: flex;
              align-items: center;
              gap: 5px;
              background-color: #a7b3be;
              border-radius: 10px;
              color: #ffffff;

              .less,
              .more {
                display: flex;
                align-items: center;
                justify-content: center;
                width: 30px;
                cursor: pointer;
              }
            }
          }
        }
      }
      section:last-child {
        border-bottom: none;
      }
    }
  }
`;
