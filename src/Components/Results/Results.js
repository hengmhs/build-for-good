import logo from "../../Images/logo.svg";
import "../../App.css";
import "./Results.css";
import { useNavigate, useLocation } from "react-router-dom";

function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="App">
      <main className="Container Results">
        <img className="Logo" src={logo} alt="Scam or Not" />
        <div className="InfoText">
          <h4>Your score</h4>
          <div className="score">
            <h1>{state.score}</h1>
            <h1 id="divider">/</h1>
            <h1>5</h1>
          </div>
        </div>
        <button
          className="Button"
          onClick={() => {
            navigate("../game");
          }}
        >
          Try again
        </button>
      </main>
    </div>
  );
}

export default Results;
