import "./App.css";
import logo from "./Images/logo.svg";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <main className="Container">
        <img className="Logo" src={logo} alt="Scam or not!" />
        <div className="InfoText">
          <p>Help beat the scammers.</p>
          <p>Test and improve your ability to identify scams.</p>
          <p>Challenge your family and friends.</p>
        </div>
        <button
          className="Button"
          onClick={() => {
            navigate("game");
          }}
        >
          Play
        </button>
      </main>
    </div>
  );
}

export default App;
