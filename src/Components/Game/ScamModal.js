import React from "react";
import "./ScamModal.css";

export default function ScamModal({ closeModal, result }) {
  const modalClass =
    result === "correct" ? "modal-overlay correct" : "modal-overlay incorrect";

  return (
    <div className={modalClass}>
      <div className="modal-content">
        <div className="scam-advice">{result}</div>

        <div className="modal-close">
          <button onClick={closeModal}>Next</button>
        </div>
      </div>
    </div>
  );
}
