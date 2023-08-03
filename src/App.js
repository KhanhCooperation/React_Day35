import logo from "./logo.svg";
import "./App.css";
import BTMovie from "./BTMovie/BTMovie";
import BgLayer from "./BgLayer/BgLayer";
function App() {
  return (
    <div className="App">
      <BgLayer></BgLayer>
      <BTMovie></BTMovie>
    </div>
  );
}

export default App;
