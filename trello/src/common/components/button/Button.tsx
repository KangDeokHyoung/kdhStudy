import React from "react";

interface Props {
  type: any;
}

export const Button: React.FC<Props> = (props) => {
  return <button type={props.type || "button"}>{props.children}</button>;
};

export default Button;
