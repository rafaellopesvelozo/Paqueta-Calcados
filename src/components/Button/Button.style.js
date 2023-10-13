import styled from "styled-components";
import ButtonStyled from "./Button";

export const ButtonPrice = styled(ButtonStyled)`
  width: 257px;
  height: 46px;
  cursor: pointer;
  background: linear-gradient(to top, #f99500, #ffcd29 100%);
  border-radius: 5px;
  transition: all 0.5s;
  color: #ffff;
`;

export const ButtonRemove = styled(ButtonPrice)`
  height: 35px;
  width: 240px;
  background: linear-gradient(to top, #ff0000, #ff4e47);
  &:hover {
    background: linear-gradient(to top, #ff0000, #ff1919);
  }
`;

export const ButtonSoldout = styled(ButtonPrice)`
  background-color: gray;
  border-radius: 5px;
  width: 100%;
  transition: all 1s;
`;

export const ButtonBuy = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: #ffff;
  font-weight: 600;
  height: 46px;
  width: 100%;
  border-radius: 5px;
  font-size: 15px;
  cursor: pointer;
`;
