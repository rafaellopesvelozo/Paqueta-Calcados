import styled from "styled-components";

export const Shoes = styled.section`
  padding: 0 10%;
  .numbers-list {
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
  }
  .highlights {
    .btn-carousel {
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
    }
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
      max-height: 500px;
      overflow: hidden;
      padding: 30px 0;
      gap: 20px;

      button {
        color: #ffff;
        font-weight: 600;
        width: 100%;
      }

      .container_products {
        max-width: 220px;
        border-radius: 3px;
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        box-shadow: 0px 0px 23px 0px rgba(0, 0, 0, 0.1);

        .img_product {
          position: relative;

          .bi-heart {
            cursor: pointer;
            position: absolute;
            right: 5px;
            top: 10px;
          }

          .bi-heart-active {
            color: red;
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
        }

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
      }
    }
  }
`;
