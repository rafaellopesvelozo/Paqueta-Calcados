import styled from "styled-components";

export const WishListContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vw;
  gap: 20px;

  .Container-Items {
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-radius: 10px;
    background-color: #f9f9f9;

    padding: 10px;
    width: 80%;

    > div {
      display: flex;
      gap: 15px;
    }

    .Container-img {
      max-width: 200px;
      h2 {
        font-size: 15px;
      }
      img {
        max-width: 120px;
        max-height: 120px;
      }
    }
  }
  .Container-info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;
