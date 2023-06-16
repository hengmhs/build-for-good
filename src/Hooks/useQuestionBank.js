import { useContext } from "react";
import QuestionBankContext from "../Context/questionBankProvider";

export default function useQuestionBank() {
  return useContext(QuestionBankContext);
}