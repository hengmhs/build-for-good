import { useEffect, useState } from "react";
import useQuestionBank from "../Hooks/useQuestionBank"
import Question from "./Question";

export default function Game() {
  const { questionBank } = useQuestionBank();
  const [roundNumber, setRoundNumber] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [roundQuestions, setRoundQuestions] = useState([]);

  useEffect(() => {
    if (!questionBank || questionBank.length === 0) {
      return;
    }
    const currentRoundQuestions = questionBank.filter((question) => question.bin_id === roundNumber);
    setRoundQuestions(currentRoundQuestions);
  }, [roundNumber])

  useEffect(() => {
    if (questionIndex === roundQuestions.length - 1) {
      setRoundNumber(prev => prev + 1)
      setQuestionIndex(0);
    }
  }, [questionIndex])

  return (
    <div>
      <Question content={roundQuestions[questionIndex]?.content} />
      <button onClick={() => { setQuestionIndex(prev => prev + 1) }}>Scam</button>
      <button onClick={() => { setQuestionIndex(prev => prev + 1) }}>Not a Scam</button>
    </div>
  )
}