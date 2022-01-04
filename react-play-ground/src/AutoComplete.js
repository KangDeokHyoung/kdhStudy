import React, { useState } from "react";
import "./AutoComplete.scss";

const Options = ({ data, setChoice }) => {
  return (
    <div className="option">
      {data.map((el) => {
        return <div onClick={() => setChoice(el)}>{el.title}</div>;
      })}
    </div>
  );
};

const AutoComplete = ({ data }) => {
  const [searchText, setSearchText] = useState("");
  const [choice, setChoice] = useState();
  const [focus, setFocus] = useState(false);

  const 가공데이터 = data.map((el) => {
    return {
      title: `${el.aiHostname}`,
      value: el,
    };
  });

  return (
    <div className="wrapper">
      <div className="input">
        <input
          onChange={setSearchText}
          value={searchText}
          //   onBlur={() => setFocus(false)}
          onFocus={() => setFocus(true)}
        />
      </div>
      {focus && <Options data={가공데이터} setChoice={setChoice} />}
    </div>
  );
};

export default AutoComplete;
