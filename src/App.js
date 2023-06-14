import "./App.css";
import { database } from "./firebase";
import { set, ref, push, get, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function App() {
  const [questionsObject, setQuestionsObject] = useState({});

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
      }
    });
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <div>Scam or Not</div>
      </header>
    </div>
  );
}

export default App;
