import React, { useState } from "react";

import classes from "./Home.module.css";

import BookList from "./BookList";
import axios from "axios";
import LoadingSpinner from "./LoadingSpinner";

const Home = () => {
  const [bookData, setBookData] = useState([]);
  const [isLoading, setIsLoading] = useState(null);

  const fetchBooks = async () => {
    setIsLoading(true);
    const res = await axios.get(
      `https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=${process.env.REACT_APP_NYT_BOOKS_API_KEY}`
    );
    setBookData(res.data.results.books);
    console.log(res.data.results.books);
  };

  return (
    <div className={classes["main_section_container"]}>
      {!isLoading && (
        <button
          className={classes["book_displayer_button"]}
          onClick={fetchBooks}
        >
          Click to see the latest bestsellers
        </button>
      )}

      {isLoading && bookData.length === 0 && <LoadingSpinner />}
      {isLoading && <BookList bookData={bookData} />}
    </div>
  );
};

export default Home;
