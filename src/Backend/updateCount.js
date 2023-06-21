import React from "react";
import { database } from "../firebase";
import { ref, update, get } from "firebase/database";

export const updateCount = (key, result) => {
  const value = result === true ? 1 : 0;

  let attemptCount;
  let correctCount;

  const path = `/questions/${key}/`;

  get(ref(database, path)).then((snapshot) => {
    if (snapshot.exists()) {
      attemptCount = snapshot.val().num_users_attempted;
      correctCount = snapshot.val().num_users_correct;

      const postData = {
        num_users_attempted: attemptCount + 1,
        num_users_correct: correctCount + value,
      };

      update(ref(database, path), postData);
    } else {
      console.log("No data available");
    }
  });
};
