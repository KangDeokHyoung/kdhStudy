import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import Type1 from "./type";
import Type2 from "./type2";
import Type3 from "./type3";
import Header from "./Header";
// import Routers from "./Routers";

function App() {
  const [state, setState] = useState(1);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        {/* <Routers /> */}
        {state === 1 && <Type1 name={"min"} age={30} />}
        {state === 2 && <Type2 name={"kang"} age={20} />}
        {state === 3 && <Type3 name={"kho"} age={30} id={2} />}

        <button onClick={()=> setState(2)}>aa</button>
        <button onClick={()=> setState(3)}>aa</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
