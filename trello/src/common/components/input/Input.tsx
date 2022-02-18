import React from "react";

interface Props {
  id: string;
  label: string;
  type: string;
  onChange: (event: any) => void;
  value: any;
}

export const Input: React.FC<Props> = (props) => {
  return (
    <>
      <label>{props.label}</label>
      <input type={props.type} value={props.value} onChange={props.onChange}></input>
    </>
  );
};

export default Input;
