import React, { useState } from "react";
import styles from "./BookItem.module.css";
import SeparateBookPage from "./SeparateBookPage";
import ReactDOM from "react-dom";

const BookItem = (props) => {
  const [clicked, setClicked] = useState(false);

  function showModal() {
    setClicked(true);
  }

  function cancelModal() {
    setClicked(false);
  }

  return (
    <div>
      <li className={styles["book_item"]} onClick={showModal}>
        <img src={props.image} />
        <div className={styles["info_book"]}>
          <p>{props.title}</p>
          <p>{props.author}</p>
        </div>
        <button onClick={showModal}>More info</button>
      </li>

      {clicked && <div onClick={cancelModal} className={styles.backdrop}></div>}
      <SeparateBookPage
        show={clicked}
        title={props.title}
        image={props.image}
        author={props.author}
        id={props.id}
        ISBN={props.id}
        description={props.description}
        amazon_link={props.amazon_link}
        publisher={props.publisher}
      />
    </div>
  );
};

export default BookItem;

/* <React.Fragment>
<div className={styles["book_item"]}>
  {/* <div className={styles["book_icon"]}>{props.bookData.image}</div> */

//   <div className={styles["book_title"]}>{props.bookData.title}</div>
//   <div className={styles["author"]}>{props.bookData.author}</div>
//   <button>Click to buy</button>
// </div>
// </React.Fragment> */}
