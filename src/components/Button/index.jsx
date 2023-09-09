import React from "react";
import * as styled from "./styles";

const Button = ({ children, className, theme, ...restProps }) => {
  return (
    <styled.Button>
      <button className={`btn-default button-${theme} ${className}` } {...restProps}>
        {children}
      </button>
    </styled.Button>
  );
};

Button.defaultProps = {
  className: "",
  theme: "button-",  
};

export default Button;
