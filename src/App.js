import "./App.css";
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
      <header className="App-header">
        <h1>Scam or Not</h1>
      </header>
      <body>
        <p>Some intro text, e.g. game rules</p>
        <button onClick={() => {navigate(`/question/${questionsQueue[0]}`)}}>Start</button>
      </body>
    </div>
  );
}

export default App;
