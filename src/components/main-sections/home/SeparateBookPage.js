import React from "react";
import "./SeparateBookPage.css";
import CSSTransition from "react-transition-group/CSSTransition";

const SeparateBookPage = (props) => {
  let animationTiming = {
    enter: 800,
    exit: 500,
  };

  return (
    <CSSTransition in={props.show} timeout={animationTiming} classNames="fade">
      <div
        className={
          props.show ? "separatePage" : "separatePage separatePage-non"
        }
      >
        <h1>{props.title}</h1>
        <h2>by {props.author}</h2>
        <img src={props.image} />
        <p>
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
        <button className="myButton">
          <a href={props.amazon_link}> Buy from Amazon </a>
        </button>
      </div>
    </CSSTransition>
  );
};

export default SeparateBookPage;
