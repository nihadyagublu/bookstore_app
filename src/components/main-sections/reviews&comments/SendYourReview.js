import React, { useCallback, useEffect, useState } from "react";
import UserInputList from "./UserInputList";
import AddComment from "./AddComment";
import styles from "./SendYourReview.module.css";
import axios from "axios";
import results from "./results";
import LoadingSpinner from "../home/LoadingSpinner";

const SendYourReview = () => {
  const [isLoading, setIsLoading] = useState(null);

  const [userInput, setUserInput] = useState([]);

  async function addedCommentHandler(comment) {
    const response = await fetch(
      "https://last-before-default-rtdb.firebaseio.com/books.json",
      {
        method: "POST",
        body: JSON.stringify(comment),
        headers: { "Content-Type": "application/json" },
      }
    );
    const data = await response.json();

    console.log(data);
  }

  const getUserComment = async () => {
    setIsLoading(true);
    const response = await fetch(
      "https://last-before-default-rtdb.firebaseio.com/books.json"
    );
    const data = await response.json();

    const loadedComments = [];

    for (const key in data) {
      loadedComments.push({
        id: key,
        name: data[key].name,
        surname: data[key].surname,
        userComment: data[key].userComment,
      });
    }
    setUserInput(loadedComments);
    setIsLoading(false);
  };

  useEffect(() => {
    getUserComment();
  }, [getUserComment]);

  return (
    <div className={styles["comment-review-page-container"]}>
      <AddComment addedComment={addedCommentHandler} />
      {isLoading && userInput.length === 0 && <LoadingSpinner />}
      {userInput.length !== 0 && <UserInputList userData={userInput} />}
    </div>
  );
};

export default SendYourReview;
