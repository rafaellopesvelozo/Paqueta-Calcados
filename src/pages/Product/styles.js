import styled from "styled-components";

export const ContainerProducts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 15%;
  position: relative;

  .sizes-fixed {
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.85);
    width: 100vw;
    height: 100vh;

    .container-size {
      display: flex;
      background-color: #ffffff;
      width: 50%;
      padding: 30px 30px;
      border-radius: 20px;
      position: relative;

      .closeModal {
        position: absolute;
        cursor: pointer;
        font-size: 20px;
        font-weight: 600;
        top: 5px;
        right: 20px;
      }

      .guia-de-tamanhos,
      .numeros {
        width: 50%;
      }
      .guia-de-tamanhos {
        .título-tamanhos {
          p {
            font-family: "Montserrat", sans-serif;
            font-weight: 700;
            font-size: 20px;
            color: #cf5d00;
            margin-bottom: 35px;
          }
        }
        .instruções {
          display: flex;
          gap: 10px;
          margin-bottom: 20px;
          p:nth-child(1) {
            background-color: #ff8a29;
            text-align: center;
            border-radius: 50%;
            font-size: 15px;
            width: 20px;
            height: 22px;
            color: #ffffff;
          }
          p:nth-child(2) {
            font-family: "Montserrat", sans-serif;
            font-size: 14px;
          }
        }
        .tamanho-img {
          display: flex;
          justify-content: center;
          img {
            max-height: 210px;
          }
        }
      }
      .numeros {
        .título-numeros {
          display: flex;
          justify-content: space-between;
          p {
            text-align: center;
            color: #383838;
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 15px;
          }
        }
        .numeros-e-comprimentos {
          padding: 15px 0 0 0;
          .lista {
            display: flex;
            justify-content: space-between;
            padding: 5px;
            border-bottom: 2px solid #d7d7d7;

            &:last-child {
              border-bottom: unset;
            }

            p:nth-child(1) {
              padding-left: 30px;
              font-weight: 600;
              font-size: 15px;
            }
            p:nth-child(2) {
              padding-right: 30px;
              font-size: 15px;
            }
          }
        }
      }
    }
  }

  section {
    .container-products-item {
      display: flex;
      justify-content: space-between;
      gap: 20px;
      width: 100%;
      height: 400px;

      .products-img {
        width: 45%;
        max-height: 400px;
        img {
          width: 100%;
          height: 89%;
        }
        .share {
          .share-icons {
            display: flex;
            gap: 10px;
          }
        }
      }
      .products-info {
        width: 45%;
        .products-btn {

          .productAdBag{
              background: #05fa3d;
            }
          button {
            width: 100%;
            
          }
        }
      }
    }
    .products-info {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .products-name {
        .name {
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          font-size: 30px;
        }
        .id {
          font-family: "Montserrat", sans-serif;
          font-size: 15px;
          color: #383838;
        }
      }
      .products-price {
        //padding: 20px 0;
        .price-discount {
          display: flex;
          gap: 10px;
          .with-discount {
            color: #383838;
            font-family: "Montserrat", sans-serif;
          }

          .discount {
            background-color: #65c239;
            padding: 0 10px;
            color: #ffffff;
            border-radius: 3px;
            font-size: 15px;
          }
        }
        .price {
          .no-discount {
            font-family: "Montserrat", sans-serif;
            font-size: 20px;
            font-weight: 700;
          }
          .price-divided {
            font-family: "Montserrat", sans-serif;
            font-size: 12px;
          }
        }
      }
      .products-number {
        padding-bottom: 15px;

        .choie-number {
          font-size: 14px;
        }
        ul {
          display: flex;
          justify-content: space-between;
          margin: 10px 0;

          .numberProductCheck {
            border: 2px solid #ff8a29;
            color: #ff8a29;
          }

          li {
            border: 2px solid #000000;
            padding: 10px;
            cursor: pointer;
            display: flex;
            justify-content: center;
            border-radius: 5px;
          }
        }
        .size-guide {
          font-size: 14px;
          font-weight: 600;
          cursor: pointer;
        }
      }
    }
    .row {
      margin: 150px 0;
      background-color: #ebebeb;
      height: 1px;
    }
    .products-description {
      padding: 25px 0 0 0;
      h5 {
        font-weight: 700;
      }
      p {
        margin-top: 20px;
        font-family: "Montserrat", sans-serif;
        color: #383838;
        line-height: 30px;
      }
    }
  }
  .container-de-interesses {
    .container-items {
      display: flex;
      margin-top: 15px;
      gap: 20px;
      justify-content: space-between;

      .item-carousel {
        width: 220px;
        flex-wrap: wrap;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.2);

        &:hover {
          transform: scale(1.01);
        }

        .img-carousel {
          img {
            width: 100%;
            height: 120px;
          }
        }
        .name-item {
          p {
            font-size: 12px;
            font-family: "Poppins", sans-serif;
            font-weight: 500;
          }
        }
        .price-item {
          p:nth-child(1) {
            margin: 10px 0;
            font-weight: 600;
          }
          p:nth-child(2) {
            font-family: "Montserrat", sans-serif;
            font-weight: 400;
          }
        }
        .btn {
          padding: 0;
          width: 100% !important;
          button {
            width: 100%;
          }
        }
      }
    }
  }
`;
