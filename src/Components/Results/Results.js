import logo from "../../Images/logo.svg";
import shareIcon from "../../Images/share.svg"
import "../../App.css";
import "./Results.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, useLocation } from "react-router-dom";

function Results() {
  const navigate = useNavigate();
  const { state } = useLocation();
  const MAX_SCORE = 5;

  const handleShare = () => {
    let resultToShare = `I scored ${state.score}/${MAX_SCORE} in Scam or Not. Beat me at recognising scams at https://go.gov.sg/scam-or-not.`;
    navigator.clipboard.writeText(resultToShare);
    toast.success("Results copied to clipboard!");
  }

  return (
    <div className="App">
      <main className="Container Results">
        <img className="Logo" src={logo} alt="Scam or Not" />
        <div className="InfoText">
          <h4>Your score</h4>
          <div className="score">
            <h1>{state.score}</h1>
            <h1 id="divider">/</h1>
            <h1>{MAX_SCORE}</h1>
          </div>
        </div>
        <ToastContainer
          position="bottom-center"
          autoClose={1500}
          hideProgressBar
          pauseOnFocusLoss={false}
          pauseOnHover={false}
          bodyClassName="toastBody"
        />
        <button className="Button" onClick={handleShare}>
          <img src={shareIcon} alt="" className="Icon" />
          Share
        </button>
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
