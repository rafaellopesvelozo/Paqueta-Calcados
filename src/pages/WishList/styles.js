import styled from "styled-components";

export const WishListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10%;

  .link-back {
    margin: 30px 0;
  }

  .bi-heart-fill {
    color: red;
  }

  .Container-Items {
    display: flex;
    margin: 0 auto;
    width: 70%;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: #f9f9f9;
    padding: 10px;

    > div {
      display: flex;
    }
    .Container-img {
      max-width: 250px;
      position: relative;

      .bg-hover {
        position: absolute;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: 99;

        &:hover {
          background-color: #000000;
          opacity: 0.7;
          transition: .7s all linear;
        }
      }
      img {
        max-width: 190px;
      }
      .icon-heart {
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 999;

        i {
          cursor: pointer;
          font-size: 25px;
        }
      }
    }
  }
  .Container-info {
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding: 5px 0 0 30px;
    div {
      h2 {
        font-size: 25px;
      }
    }
  }
`;
