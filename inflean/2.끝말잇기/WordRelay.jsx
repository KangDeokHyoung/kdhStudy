const React = require("react");
const { useState } = React;

const WordRelay = () => {
  const [value, setValue] = useState("");
  const [result, setResult] = useState("");
  const [word, setWord] = useState("제로초");

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult("딩동댕");
      setWord(value);
      setValue("");
    } else {
      setResult("땡");
      setValue("");
    }
  };

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input
          // ref={refInput}
          type="text"
          value={value}
          onChange={onChangeHandler}
        />
        <button>입력!</button>
      </form>
      <div>{result}</div>
    </>
  );
};

module.exports = WordRelay;
