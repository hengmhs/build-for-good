import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestionBankProvider } from "./Context/questionBankProvider";
import { HintsProvider } from "./Context/hintsProvider";
import App from "./App";
import Game from "./Components/Game/Game";
import Results from "./Components/Results";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <HintsProvider>
      <QuestionBankProvider>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="/game" element={<Game />} />
          <Route path="/results" element={<Results />} />
        </Routes>
      </QuestionBankProvider>
    </HintsProvider>
  </BrowserRouter>
);
