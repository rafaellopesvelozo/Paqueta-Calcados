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
`;

export const Buy = styled.nav`
  padding: 0 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 15rem;
    @media (min-width: 768px) and (max-width: 991px) {
      width: 12rem;
    }
  }
`;

export const Enter = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 4rem;

  .login {
    cursor: pointer;
  }
  p {
    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 14px;
    }
    i {
      margin-right: 5px;
      font-size: 20px;
    }
  }

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

  @media (min-width: 768px) and (max-width: 991px) {
    gap: 1rem;
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

    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 14px;
    }
  }
`;

export const Talk = styled.nav`
  display: flex;
  gap: 4rem;

  nav {
    li {
      color: #ffff;
      @media (min-width: 768px) and (max-width: 991px) {
        font-size: 14px;
      }
      i {
        font-size: 20px;
        color: #ffffff;
        margin-right: 5px;
      }
    }
  }

  @media (min-width: 768px) and (max-width: 991px) {
    gap: 1rem;
  }
`;

export const Navigation = styled.nav`
  nav {
    padding: 1rem 10%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  a {
    cursor: pointer;
    position: relative;
    font-size: 17px;
    @media (min-width: 768px) and (max-width: 991px) {
      font-size: 14px;
    }

    &::after {
      content: "";
      position: absolute;
      background-color: #e97516;
      left: 0;
      top: -3px;
      width: 0px;
      height: 2px;
    }

    &::before {
      content: "";
      position: absolute;
      background-color: #e97516;
      right: 0;
      bottom: -3px;
      width: 0px;
      height: 2px;
    }

    &:hover {
      &::after,
      &::before {
        width: 100%;
        transition: all 0.3s linear;
      }
    }
  }
`;
