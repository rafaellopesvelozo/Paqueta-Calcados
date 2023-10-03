import Styled from "styled-components";

export const Button = Styled.div`
  .btn-default{
    outline: none;
    border: none;
  }

  .button-price, .button-remove {
    width: 257px;
    height: 46px;
    cursor: pointer;
    background: linear-gradient(to top, #f99500, #ffcd29 100%);
    border-radius: 5px;
    transition: all 0.5s;
    color: #ffff;

    a {
      font-family: "Poppins";
      font-weight: 400;
      color: #ffff;
    }

    &:hover {
      background: linear-gradient(to top, #e98c00, #fcc71b 100%);
    }
  }

  .button-remove{
    background: linear-gradient(to top, #FF0000, #FF4E47);
    &:hover{
      background: linear-gradient(to top, #FF0000, #FF1919);
    }
  }
  
`;
