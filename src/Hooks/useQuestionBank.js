import { useContext, useEffect } from "react";
import QuestionBankContext from "../Context/questionBankProvider";
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function useQuestionBank() {
  const { questionBank, setQuestionBank, setQuestionID } =
    useContext(QuestionBankContext);

  useEffect(() => {
    if (questionBank.length === 0) {
      const allQuestionsRef = ref(database, "questions");
      onValue(allQuestionsRef, (snapshot) => {
        const data = snapshot.val();

        for (const [key, value] of Object.entries(data)) {
          setQuestionBank((prev) => [...prev, value]);
        }

        const keyValueArray = Object.entries(data);
        const questionKeyArray = keyValueArray.reduce(
          (result, [key, value]) => {
            const binId = value.bin_id;

            if (!result[binId]) {
              result[binId] = [];
            }

            result[binId].push(key);
            return result;
          },
          []
        );

        setQuestionID(questionKeyArray);
      });
    }
  }, []);

  return useContext(QuestionBankContext);
}
