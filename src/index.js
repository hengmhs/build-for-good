import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QuestionBankProvider } from "./Context/questionBankProvider";
import App from "./App";
import Game from "./Components/Game";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QuestionBankProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </QuestionBankProvider>
  </BrowserRouter>
);
