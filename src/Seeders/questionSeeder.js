import { database } from "./firebase";
import { ref, push } from "firebase/database";

// Create initial testing questions
const seedData = () => {
  const questionRef = ref(database, process.env.REACT_APP_DB_QUESTIONS_KEY);
  const currentDate = new Date().toJSON();
  push(questionRef, {
    content: "hey this is a scam",
    is_scam: true,
    num_users_attempted: 0,
    num_users_correct: 0,
    date_created: currentDate,
    bin_id: 1,
  });
  push(questionRef, {
    content: "good news this isn't a scam",
    is_scam: false,
    num_users_attempted: 0,
    num_users_correct: 0,
    date_created: currentDate,
    bin_id: 1,
  });

  // Docs: https://firebase.google.com/docs/database/web/read-and-write
};

export default seedData;
