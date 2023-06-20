import React, { useEffect } from "react";
import good from "../../Images/good.svg";
import bad from "../../Images/bad.svg";
import "./ScamModal.css";
import { Fireworks } from "fireworks/lib/react";
import { useState } from "react";

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

  const modalClass =
    result === "correct" ? "modal-overlay correct" : "modal-overlay incorrect";
  const input = result.split(" ");

  let fxProps = {
    count: 5,
    // interval: 1500,
    colors: ["#cc3333", "#4CAF50", "#81C784"],
    calc: (props, i) => {
      return {
        ...props,
        x: Math.random(window.outerWidth) * (i * 200) + window.innerWidth / 4,
        y: Math.random(window.outerHeight) * (i * 300) + window.innerWidth / 4,
      };
    },
  };

  let resultDisplay;

  if (result === "correct") {
    resultDisplay = (
      <>
        <h1>Yay!</h1>
        <div>Current Score: {score}</div>
        {category && <div>Category: {category}</div>}
        {warning && (
          <div>
            <h3>Warning Signs</h3>
            <ol>
              {warning.map((line) => {
                return <li>{line}</li>;
              })}
            </ol>
          </div>
        )}
        {advice && (
          <div>
            <h3>Advice</h3>
            <ol>
              {advice.map((line) => {
                return <li>{line}</li>;
              })}
            </ol>
          </div>
        )}
        <Fireworks {...fxProps} />
      </>
    );
  } else if (input[0] === "not-scam") {
    resultDisplay = (
      <>
        <img className="answer-image" src={bad} alt="Bad" />
        <h1>Oh no...</h1>
        <div>Current Score: {score}</div>
        <div>Category: {category}</div>
        {warning && (
          <div>
            <h3>Warning Signs</h3>
            <ol>
              {warning.map((line) => {
                return <li>{line}</li>;
              })}
            </ol>
          </div>
        )}
        {advice && (
          <div>
            <h3>Advice</h3>
            <ol>
              {advice.map((line) => {
                return <li>{line}</li>;
              })}
            </ol>
          </div>
        )}
        <p>That was a scam!</p>
      </>
    );
  } else if (input[0] === "scam") {
    resultDisplay = (
      <>
        <img className="answer-image" src={good} alt="Good" />
        <h1>Whoops!</h1>
        <div>Current Score: {score}</div>
        <p>That wasn't a scam!</p>
      </>
    );
  }

  return (
    <div className={modalClass}>
      {/* <Header /> */}
      <div className="modal-content">{resultDisplay}</div>
      <button className="Button" onClick={closeModal}>
        Next
      </button>
    </div>
  );
}
