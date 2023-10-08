import styled from "styled-components";

export const Section = styled.section`
  padding: 0 10%;
  height: 163px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #ff8a29, #cf5d00);

  .info-section {
    display: flex;
    align-items: center;
    gap: 10px;

    .icons {
      display: flex;
      i {
        font-size: 35px;
        color: #ffffff;
        margin: 0 auto;
      }
    }
  }

  div {
    p {
      font-size: 12px;
      color: #ffff;
      margin: 0;
    }

    .Caps-lock {
      font-weight: bold;
    }
  }
`;
