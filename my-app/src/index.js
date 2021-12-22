import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import data from "./books";
import Book from "./book";
import greet, { greeting } from "./testing/testing";
const author = "Brené Brown";
const title = "Atlas of the Heart";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg";
const BookList = () => {
  console.log(greeting);
  return (
    <section className="booklist">
      {data.map((book) => {
        const { id, img, title, author } = book;

        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
