import React from "react";
import good from "../../Images/good.svg";
import bad from "../../Images/bad.svg";
import "./ScamModal.css";
import { Fireworks } from "fireworks/lib/react";
import { useState, useRef, useEffect } from "react";
import Tips from "../Tips/Tips";
import CategoryTag from "../CategoryTag/CategoryTag";

//import { database } from "../../firebase";
//import { ref, onValue } from "firebase/database";

export default function ScamModal({
  closeModal,
  result,
  score,
  questionCategory,
  hints,
}) {
  const [category, setCategory] = useState(null);
  const [warning, setWarning] = useState(null);
  const [advice, setAdvice] = useState(null);
  const [firework, setFirework] = useState(null);

  // fireworks alignment variables
  const refContainer = useRef();

  // if questionCategory is null, not a a scam
  // else, questionCategory is an object with the category of the scam as the key
  // e.g. questionCategory: {"e-commerce": true}

  useEffect(() => {
    if (questionCategory) {
      const key = Object.keys(questionCategory)[0];
      // Array of warnings
      setWarning(hints[key].warning);
      // Array of advice
      setAdvice(hints[key].advice);
      const properNames = {
        "credit-for-sex": "Credit for Sex Scam",
        "e-commerce": "E-commerce Scam",
        "govt-impersonation": "Government Impersonation Scam",
        investment: "Investment Scam",
        job: "Job Scam",
        laundering: "Money Laundering Scam",
        loan: "Loan Scam",
        love: "Love Scam",
        prize: "Prize Scam",
        "social-media-impersonation": "Social Media Impersonation Scam",
        survey: "Survey Scam",
      };
      // obtain the first key of questionCategory and get the proper name for it
      setCategory(properNames[key]);
    } else {
      setCategory(null);
    }
  }, []);

  useEffect(() => {
    // get the height and width of the modal itself
    const modalWidth = refContainer.current.getBoundingClientRect().width;
    const modalHeight = refContainer.current.getBoundingClientRect().height;

    // console.log("modalWidth: ", modalWidth);
    // console.log("modalHeight: ", modalHeight);

    // create a margin so fireworks don't appear at the left and right edge
    const modalWidthMargin = 0.1 * modalWidth;

    const fxProps = {
      count: 5,
      // interval: 1500,
      colors: ["#cc3333", "#4CAF50", "#81C784"],
      calc: (props) => {
        return {
          ...props,
          x:
            modalWidthMargin +
            Math.max(Math.random() * (modalWidth - 2 * modalWidthMargin), 0),
          y: Math.random() * modalHeight,
        };
      },
    };
    setFirework(<Fireworks {...fxProps} />);
  }, [result]);

  const modalClass =
    result === "correct"
      ? "Container modal-overlay correct"
      : "Container modal-overlay incorrect";
  const input = result.split(" ");

  let resultDisplay;

  if (result === "correct") {
    resultDisplay = (
      <>
        <h1>Correct!</h1>
        <CategoryTag category={category} />
        <Tips warning={warning} advice={advice} />
        {firework}
      </>
    );
  } else if (input[0] === "not-scam") {
    resultDisplay = (
      <>
        <img className="answer-image" src={bad} alt="Bad" />
        <h1>Oh no...</h1>
        <CategoryTag category={category} />
        <Tips warning={warning} advice={advice} />
      </>
    );
  } else if (input[0] === "scam") {
    resultDisplay = (
      <>
        <img className="answer-image" src={good} alt="Good" />
        <h1>Whoops!</h1>
        <p>That wasn't a scam!</p>
      </>
    );
  }

  return (
    <div className={modalClass} ref={refContainer}>
      {/* <Header /> */}
      <div className="modal-content">{resultDisplay}</div>
      <button className="Button" onClick={closeModal}>
        Next
      </button>
    </div>
  );
}
