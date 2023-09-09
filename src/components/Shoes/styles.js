import styled from "styled-components";

export const Shoes = styled.section`
  padding: 0 10%;
  .numbers-list {
    ul {
      display: flex;
      justify-content: space-between;

      li {
        border: 1px solid #383838;
        padding: 10px;
        border-radius: 3px;
        cursor: pointer;
      }
    }
  }
  .highlights {
    .highlight_Check {
      margin: 20px 0;
      div:nth-child(2) {
        display: flex;
        justify-content: flex-end;
        p {
          border-bottom: 1px solid #cf5d00;
        }
      }
    }

    section {
      display: flex;
      border-radius: 3px;
      max-height: 450px;
      overflow: hidden;
      button {
        color: #ffff;
        font-weight: 600;
      }

      .container_products {
        border-radius: 3px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.1);

        .img_product {
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
            width: 100%;
          }
        }

        p {
          font-size: 14px;
        }

        p:nth-child(3) {
          font-weight: 600;
          font-size: 20px;
        }
      }
    }
  }
`;
