import styled from "styled-components";

export const ContainerProducts = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5% 15%;
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
        }
        .size-guide {
          font-size: 14px;
          font-weight: 600;
        }
      }
    }
    .row{
      margin: 150px 0;
      background-color: #EBEBEB;
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
`;
