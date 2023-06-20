import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import useQuestionBank from "../../Hooks/useQuestionBank";
import Question from "../Question/Question";
import "../../App.css";
import "./Game.css";
import ScamModal from "./ScamModal";
import Header from "../Header/Header";

export default function Game() {
  const navigate = useNavigate();
  const { questionBank } = useQuestionBank();
  const [roundNumber, setRoundNumber] = useState(1);
  const [questionIndex, setQuestionIndex] = useState(0);
  const [roundQuestions, setRoundQuestions] = useState([]);
  const [score, setScore] = useState(0);

  const [isModalOpen, setModal] = useState(false);
  const [result, setResult] = useState("");

  useEffect(() => {
    if (!questionBank || questionBank.length === 0) {
      return;
    }
    const currentRoundQuestions = questionBank.filter(
      (question) => question.bin_id === roundNumber
    );
    setRoundQuestions(currentRoundQuestions);
  }, [roundNumber, questionBank]);

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

    if ((isScam && answer === "scam") || (!isScam && answer === "not-scam")) {
      setScore(score + 1);
      setResult("correct");
    } else {
      setResult(`${answer} is incorrect`);
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
          <ScamModal closeModal={setModalClose} result={result} score={score} />
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
            Not a Scam
          </button>
        </div>
      </main>
    </div>
  );
}
