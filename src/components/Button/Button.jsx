import React from "react";
const ButtonStyled = ({ className, children, ...restProps }) => {
  return (
    <button type="button" className={className} {...restProps}>
      {children}
    </button>
  );
};
export default ButtonStyled;
