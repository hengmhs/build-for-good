import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuestionBank from "../../Hooks/useQuestionBank";
import useHints from "../../Hooks/useHints";
import Question from "../Question/Question";
import "../../App.css";
import "./Game.css";
import ScamModal from "./ScamModal";
import Header from "../Header/Header";
import { updateCount } from "../../Backend/updateCount";

export default function Game() {
  const navigate = useNavigate();
  const { questionBank, questionID } = useQuestionBank();
  const { hints } = useHints();
  // const [roundNumber, setRoundNumber] = useState(1);
  const [questionBinNum, setQuestionBinNum] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [roundQuestions, setRoundQuestions] = useState([]);
  const [score, setScore] = useState(0);
  const [questionCategory, setQuestionCategory] = useState(null);
  const [questionIDs, setQuestionIDs] = useState([]);

  const [isModalOpen, setModal] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!questionBank || questionBank.length === 0) {
      return;
    }
    const num_of_bins = Math.ceil(questionBank.length / 5);
    const randNum = Math.floor(Math.random() * num_of_bins + 1);
    setQuestionBinNum(randNum);
  }, [questionBank]);

  useEffect(() => {
    const currentRoundQuestions = questionBank.filter(
      (question) => question.bin_id === questionBinNum
    );

    const questionKey = questionID[questionBinNum];
    setQuestionIDs(questionKey);
    setRoundQuestions(currentRoundQuestions);
  }, [questionBinNum, questionBank]);

  const setModalClose = () => {
    setModal(false);
    if (questionIndex === roundQuestions.length) {
      navigate("../results", { state: { score: score } });
    }
  };

  const setModalOpen = () => {
    setModal(true);
  };

  const handleClick = (e) => {
    const answer = e.currentTarget.id;
    const isScam = roundQuestions[questionIndex].is_scam;
    const key = questionIDs[questionIndex];

    if (isScam) {
      setQuestionCategory(roundQuestions[questionIndex].category);
    } else {
      setQuestionCategory(null);
    }

    if ((isScam && answer === "scam") || (!isScam && answer === "not-scam")) {
      setScore(score + 1);
      setResult("correct");
      updateCount(key, true);
    } else {
      setResult(`${answer} is incorrect`);
      updateCount(key, false);
    }
    setQuestionIndex((prev) => prev + 1);
    setModalOpen();
  };

  return (
    <div className="App">
      <main className="Container Game">
        <Header
          currentQuestion={questionIndex + 1}
          totalQuestions={roundQuestions.length}
        />
        {isModalOpen && (
          <ScamModal
            closeModal={setModalClose}
            result={result}
            questionCategory={questionCategory}
            hint={roundQuestions[questionIndex - 1].hint}
          />
        )}
        <div className="Scam-Display">
          <Question
            content={roundQuestions[questionIndex]?.content}
            sender={roundQuestions[questionIndex]?.sender}
          />
        </div>
        <div className="Buttons-Container">
          <button className="Button Red" onClick={handleClick} id="scam">
            Scam
          </button>
          <button className="Button Green" onClick={handleClick} id="not-scam">
            Not Scam
          </button>
        </div>
      </main>
    </div>
  );
}
