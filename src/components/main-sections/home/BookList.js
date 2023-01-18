import React, { useState } from "react";
import SeparateBookPage from "./SeparateBookPage";
import BookItem from "./BookItem";
import styles from "./BookList.module.css";

const BookList = (props) => {
  const [infoSelected, setInfoSelected] = useState(null);

  const bookInfoPage = () => {
    setInfoSelected(true);
  };
  return (
    <div>
      {!infoSelected && (
        <ul className={styles["books-list"]}>
          {props.bookData.map((book) => (
            <BookItem
              bookData={props.bookData}
              bookInfoPage={bookInfoPage}
              title={book.title}
              image={book.book_image}
              author={book.author}
              key={book.primary_isbn10}
              id={book.primary_isbn10}
              description={book.description}
              amazon_link={book.amazon_product_url}
              publisher={book.publisher}
            />
          ))}
        </ul>
      )}

      {/* {infoSelected && <SeparateBookPage myboolean={infoSelected} />} */}
    </div>
  );
};

export default BookList;
