import styled from "styled-components";

export const WishListContainer = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0 10%;

  h3 {
    width: fit-content;
    border-bottom: 2px solid #cf5d00;
  }

  .link-back {
    margin: 30px 0;
  }

  i {
    color: #cf5d00;
  }

  .bi-heart-fill {
    color: #cf5d00;
    transition: all 0.2s linear;
  }

  .Container-Items {
    display: flex;
    margin: 0 auto;
    width: 70%;
    align-items: center;
    justify-content: space-between;
    background-color: #ebebeb;
    padding: 10px;
    border-bottom: 2px solid #cf5d00;

    &:last-child {
      border-bottom: none;
    }
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

        &:hover {
          background-color: #000000;
          opacity: 0.7;
          transition: 0.7s all linear;
        }
      }
      img {
        max-width: 190px;
      }
      .icon-heart {
        position: absolute;
        top: 5px;
        right: 5px;
        z-index: 99;

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
    padding: 10px 0 10px 20px;
    div {
      h2 {
        font-size: 25px;
      }
    }
    > p {
      font-size: 20px;
      font-family: "Montserrat", sans-serif;
      font-weight: 600;

      > span {
        font-weight: normal;
      }
    }
  }
`;
