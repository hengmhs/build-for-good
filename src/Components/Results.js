import logo from "../logo.svg";
import { useNavigate } from "react-router-dom";

function Results() {
  const navigate = useNavigate();

  return (
    <div className="App">
      <main className="Container">
        <img className="Logo" src={logo} />
        <div className="InfoText">
          <p className="InfoText-paragraph">Your score</p>
          <p className="InfoText-paragraph">10/10</p>
        </div>
        <button className="Button" onClick={() => { navigate("../game") }}>Try again</button>
      </main>
    </div>
  );
}

export default Results;