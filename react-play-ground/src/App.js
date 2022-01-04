import AutoComplete from "./AutoComplete";
import { data } from "./data";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <AutoComplete data={data} />
    </div>
  );
}

export default App;
