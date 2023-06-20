import React from "react";
import good from "../../Images/good.svg";
import bad from "../../Images/bad.svg";
import "./ScamModal.css";
import { Fireworks } from "fireworks/lib/react";
import Header from "../Header/Header";

export default function ScamModal({ closeModal, result, score }) {
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
        <div>Score: {score}</div>
        <Fireworks {...fxProps} />
      </>
    );
  } else if (input[0] === "not-scam") {
    resultDisplay = (
      <>
        <img className="answer-image" src={bad} alt="Bad" />
        <h1>Oh no...</h1>
        <div>Score: {score}</div>
        <p>That was a scam!</p>
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
    <div className={modalClass}>
      {/* <Header /> */}
      <div className="modal-content">{resultDisplay}</div>
      <button className="Button" onClick={closeModal}>
        Next
      </button>
    </div>
  );
}
