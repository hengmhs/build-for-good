import { createContext, useState } from "react";

const QuestionBankContext = createContext([]);

export const QuestionBankProvider = ({ children }) => {
  const [questionBank, setQuestionBank] = useState([]);

  return (
    <QuestionBankContext.Provider value={{ questionBank, setQuestionBank }}>
      {children}
    </QuestionBankContext.Provider>
  )
}

export default QuestionBankContext;

