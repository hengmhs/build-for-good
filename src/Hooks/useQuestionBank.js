import { useContext, useEffect } from "react";
import QuestionBankContext from "../Context/questionBankProvider";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function useQuestionBank() {
  const { questionBank, setQuestionBank } = useContext(QuestionBankContext);

  useEffect(() => {
    if (questionBank.length === 0) {
      const allQuestionsRef = ref(database, "questions");
      onValue(allQuestionsRef, (snapshot) => {
        const data = snapshot.val();
        for (const [key, value] of Object.entries(data)) {
          setQuestionBank((prev) => [...prev, value]);
        }
      });
    }
  }, []);

  return useContext(QuestionBankContext);
}