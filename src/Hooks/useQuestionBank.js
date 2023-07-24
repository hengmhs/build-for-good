import { useContext, useEffect } from "react";
import QuestionBankContext from "../Context/questionBankProvider";
import { database } from "../firebase";
import { ref, onValue, get, child } from "firebase/database";

export default function useQuestionBank() {
  const { questionBank, setQuestionBank, setQuestionID, setBinArray } =
    useContext(QuestionBankContext);

  useEffect(() => {
    if (questionBank.length === 0) {
      const allQuestionsRef = ref(database, "questions");

      get(allQuestionsRef)
        .then((snapshot) => {
          if (snapshot.exists()) {
            const data = snapshot.val();

            const len = Object.keys(data).length;
            const binAmt = Math.ceil(len / 5);
            const arr = Array(binAmt)
              .fill()
              .map((_, i) => i + 1);
            setBinArray(arr);

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
          } else {
            console.log("No data available");
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }, []);

  return useContext(QuestionBankContext);
}
