import React from "react";
import "./ScamModal.css";

export default function ScamModal({ closeModal }) {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <div className="scam-advice">Scam advice here</div>

        <div className="modal-close">
          <button onClick={closeModal}>Next</button>
        </div>
      </div>
    </div>
  );
}
