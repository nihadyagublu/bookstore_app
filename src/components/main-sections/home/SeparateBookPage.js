import React from "react";
import styles from "./SeparateBookPage.module.css";
import CSSTransition from "react-transition-group/CSSTransition";

const SeparateBookPage = (props) => {
  const completedClass = props.show ? " " : styles.separatePage_non;

  let animationTiming = {
    enter: 800,
    exit: 500,
  };

  return (
    <CSSTransition
      in={props.show}
      timeout={animationTiming}
      classNames={{
        enter: `${styles["fade-enter"]}`,
        enterActive: `${styles["fade-enter-active"]}`,
        enterDone: `${styles["fade-enter-done"]}`,
        exit: `${styles["fade-exit"]}`,
        exitActive: `${styles["fade-exit-active"]}`,
        exitDone: `${styles["fade-exit-done"]}`,
      }}
    >
      <div className={`${styles.separatePage} ${completedClass}`}>
        <h1>{props.title}</h1>
        <h2>by {props.author}</h2>
        <img src={props.image} />
        <p className={styles["p-descr"]}>
          <b>Description: </b>
          {props.description}
        </p>
        <p>
          <b>ISBN: </b>
          {props.id}
        </p>
        <p>
          <b>Publisher: </b>
          {props.publisher}
        </p>
        <button className={styles.myButton}>
          <a href={props.amazon_link}> Buy from Amazon </a>
        </button>
      </div>
    </CSSTransition>
  );
};

export default SeparateBookPage;
