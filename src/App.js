import "./App.css";
import logo from "./Images/logo.svg";

import { database } from "./firebase";
import { set, ref, push, get, onValue } from "firebase/database";
import { useEffect } from "react";
import useQuestionBank from "./Hooks/useQuestionBank";
import { useNavigate } from "react-router-dom";

function App() {
  // const [questionsObject, setQuestionsObject] = useState({});
  const navigate = useNavigate();
  const { setQuestionBank } = useQuestionBank();

  useEffect(() => {
    const allQuestionsRef = ref(database, "questions");
    onValue(allQuestionsRef, (snapshot) => {
      const data = snapshot.val();
      for (const [key, value] of Object.entries(data)) {
        setQuestionBank((prev) => [...prev, value]);
      }
    });
  }, []);

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
