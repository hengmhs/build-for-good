import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { database } from "../firebase";
import { ref, onValue } from "firebase/database";

export default function Questions() {
  const { questionId } = useParams();
  const [questionContent, setQuestionContent] = useState("");

  // useEffect(() => {
  //   const questionRef = ref(database, `questions/${questionId}`)
  //   onValue(questionRef, (snapshot) => {
  //     const data = snapshot.val();
  //     setQuestionContent(data.content);
  //   })
  // }, [])

  return (
    <div>
      <div>question placeholder {questionId}: {questionContent}</div>
      <button disabled>Scam</button>
      <button disabled>Not a Scam</button>
    </div>
  )
}