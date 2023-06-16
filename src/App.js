import "./App.css";
import logo from "./logo.svg";
import { database } from "./firebase";
import { set, ref, push, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function App() {
  // const [questionsObject, setQuestionsObject] = useState({});
  const navigate = useNavigate();
  const [questionsQueue, setQuestionsQueue] = useState([]);
  /*
  // Create initial testing questions

  const questionRef = ref(database, process.env.REACT_APP_DB_QUESTIONS_KEY);
  const currentDate = new Date().toJSON();
  push(questionRef, {
    content: "hey this is a scam",
    is_scam: true,
    num_users_attempted: 0,
    num_users_correct: 0,
    date_created: currentDate,
  });
  push(questionRef, {
    content: "good news this isn't a scam",
    is_scam: false,
    num_users_attempted: 0,
    num_users_correct: 0,
    date_created: currentDate,
  });
  */

  // Docs: https://firebase.google.com/docs/database/web/read-and-write

  useEffect(() => {
    const allQuestionsRef = ref(database, "questions");
    onValue(allQuestionsRef, (snapshot) => {
      const data = snapshot.val();
      for (const [key, value] of Object.entries(data)) {
        console.log(key, value);
        setQuestionsQueue((prev) => [...prev, key])
      }
    });
  }, []);

  return (
    <div className="App">
      <main className="Container">
        <img className="Logo" src={logo} />
        <div className="InfoText">
          <p className="InfoText-paragraph">Help beat the scammers.</p>
          <p className="InfoText-paragraph">Test and improve your ability to identify scams.</p>
          <p className="InfoText-paragraph">Challenge your family and friends.</p>
        </div>
        <button className="Button" onClick={() => {navigate(`/question/${questionsQueue[0]}`)}}>Play</button>
      </main>
    </div>
  );
}

export default App;
