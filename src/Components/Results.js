import logo from "../Images/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();

  return (
    <div className="App">
      <main className="Container">
        <img className="Logo" src={logo} />
        <div className="InfoText">
          <p className="InfoText-paragraph">Your score</p>
          <p className="InfoText-paragraph">{state.score}/5</p>
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
