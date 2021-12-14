import React, { useRef, useState, useCallback } from "react";
import PComp from "./PComp";
import Try from "./Try";

const getNumbers = () => {
  const candidate = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const array = [];
  for (let i = 0; i < 4; i += 1) {
    const chosen = candidate.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
};

const NumberBaseball = () => {
  const [result, setResult] = useState("");
  const [value, setValue] = useState("");
  const [test, setTest] = useState("test");
  const [answer, setAnswer] = useState(getNumbers());
  const [tries, setTries] = useState([]);

  const inputRef = useRef();

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (value === answer.join("")) {
      setTries((prevState) => [
        ...prevState,
        {
          try: value,
          result: "홈런!",
        },
      ]);
      setResult("홈런");
      alert("게임을 다시 시작합니다.");

      setValue("");
      setAnswer(getNumbers());
      setTries([]);
      inputRef.current.focus();
    } else {
      const answerArray = value.split("").map((el) => parseInt(el));

      let strike = 0;
      let ball = 0;
      if (tries.length >= 9) {
        setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(",")} 였습니다.`);
        alert("게임을 다시 시작합니다.");
        setValue("");
        setAnswer(getNumbers());
        setTries([]);
        inputRef.current.focus();
      } else {
        for (let i = 0; i < 4; i += 1) {
          if (answerArray[i] === answer[i]) {
            strike += 1;
          } else if (answer.includes(answerArray[i])) {
            ball += 1;
          }
        }
        setTries((prevState) => [
          ...prevState,
          {
            try: value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          },
        ]);

        setValue("");
        inputRef.current.focus();
      }
    }
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <h1>{result}</h1>
      <form onSubmit={onSubmitForm}>
        <input
          ref={inputRef}
          maxLength={4}
          value={value}
          onChange={onChangeInput}
        />
        <button>입력!</button>
      </form>
      <div>시도: {tries.length}</div>
      <ul>
        {tries.map((el) => (
          <Try tryInfo={el} />
        ))}
      </ul>
      <PComp value={value} />
    </>
  );
};

export default NumberBaseball;
