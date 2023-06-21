import { createContext, useState } from "react";

const QuestionBankContext = createContext([]);

export const QuestionBankProvider = ({ children }) => {
  const [questionBank, setQuestionBank] = useState([]);
  const [questionID, setQuestionID] = useState([]);

  return (
    <QuestionBankContext.Provider
      value={{ questionBank, setQuestionBank, questionID, setQuestionID }}
    >
      {children}
    </QuestionBankContext.Provider>
  );
};

export default QuestionBankContext;
