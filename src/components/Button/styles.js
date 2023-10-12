import Styled from "styled-components";

export const Button = Styled.div`
  .btn-default{
    outline: none;
    border: none;
  }

  .button-price, .button-remove{
    width: 257px;
    height: 46px;
    cursor: pointer;
    background: linear-gradient(to top, #f99500, #ffcd29 100%);
    border-radius: 5px;
    transition: all 0.5s;
    color: #ffff;
  }


  .button-remove{
    background: linear-gradient(to top, #FF0000, #FF4E47);
    &:hover{
      background: linear-gradient(to top, #FF0000, #FF1919);
    }
  }

  .button-soldout{
    width: 257px;
    height: 46px;
    cursor: pointer;
    background: gray;
    border-radius: 5px;
    transition: all 1s;
    color: #ffff;
  }
  
  .button-buyItem{
    width: 257px;
    height: 46px;
    cursor: pointer;
    border-radius: 5px;
    transition: all .3s;
    color: #ffff;
  }
  
`;
