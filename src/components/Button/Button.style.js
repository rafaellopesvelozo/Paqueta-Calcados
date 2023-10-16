import styled from "styled-components";
import ButtonStyled from "./Button";

export const ButtonPrice = styled(ButtonStyled)`
  width: 257px;
  height: 46px;
  font-size: 20px;
  cursor: pointer;
  background: linear-gradient(to top, #f99500, #ffcd29 100%);
  border-radius: 5px;
  transition: all 0.5s;
  color: #ffff;

  &:hover {
    background: linear-gradient(to top, #ff8c00, #ffa500);
  }
`;

export const ButtonRemove = styled(ButtonPrice)`
  height: 35px;
  width: 180px;
  background: transparent;
  font-size: 17px;
  color: #000000;
  &:hover {
    background: transparent;
  }
`;

export const ButtonSoldout = styled(ButtonPrice)`
  border-radius: 5px;
  width: 100%;
  transition: all 1s;
  background: gray;
  &:hover {
    background: gray;
  }
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
  font-size: 18px;
  cursor: pointer;
`;
