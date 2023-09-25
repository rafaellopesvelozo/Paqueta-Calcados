import styled from "styled-components";

export const headerStyle = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 241px;
  background-color: #ffff;
  a {
    cursor: pointer;
    text-decoration: none;
  }

  .Buy {
    padding: 0 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    img {
      width: 1remx;
    }
  }

  .navigation {
    nav {
      padding: 1rem 10%;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }

    a {
      cursor: pointer;
    }
  }

  .Buy .enter {
    display: flex;
    justify-content: space-between;
    gap: 4rem;

    .number-buy {
      position: relative;
      span {
        position: absolute;
        display: flex;
        align-items: center;
        justify-content: center;
        left: 6px;
        top: -14px;
        height: 20px;
        width: 20px;
        padding: 5px;
        border-radius: 50%;
        background-color: #fcad12;
        color: #ffffff;
        font-size: 12px;
      }
    }
  }
`;

export const headerHelp = styled.nav`
  align-items: center;
  display: flex;
  padding: 0 10%;
  height: 3.313rem;
  justify-content: space-between;
  background: linear-gradient(to right, #ff8a29, #cf5d00);

  p {
    cursor: pointer;
    color: #ffff;
  }

  .talk {
    display: flex;
    gap: 4rem;
  }
`;
