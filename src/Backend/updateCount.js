import React from "react";
import { database } from "../firebase";
import { ref, update } from "firebase/database";

export const updateCount = (key, attempt, correct, result) => {
  const value = result === true ? 1 : 0;
  const postData = {
    num_users_attempted: attempt + 1,
    num_users_correct: correct + value,
  };
  const path = `/questions/${key}/`;
  update(ref(database, path), postData);
  console.log("Update attempt", key);
};
