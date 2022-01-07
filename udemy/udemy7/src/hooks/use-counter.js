import { useState, useEffect } from "react";

const useCouter = (forward = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      //   if (forward) {
      //     setCounter((prevCounter) => prevCounter + 1);
      //   }else {
      //     setCounter((prevCounter) => prevCounter - 1);
      //   }
      setCounter((prevCounter) => {
        setCounter(forward ? prevCounter + 1 : prevCounter - 1);
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [forward]);
  return counter;
};

export default useCouter;
