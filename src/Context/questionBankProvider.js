import { createContext, useState } from "react";

const QuestionBankContext = createContext([]);

export const QuestionBankProvider = ({ children }) => {
  const [questionBank, setQuestionBank] = useState([]);
  const [questionID, setQuestionID] = useState([]);
  const [binArray, setBinArray] = useState([]);
  const [remainBins, setRemainBin] = useState([]);

  return (
    <QuestionBankContext.Provider
      value={{
        questionBank,
        setQuestionBank,
        questionID,
        setQuestionID,
        binArray,
        setBinArray,
        remainBins,
        setRemainBin,
      }}
    >
      {children}
    </QuestionBankContext.Provider>
  );
};

export default QuestionBankContext;
