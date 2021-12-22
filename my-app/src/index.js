import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const books = [
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg",
    title: "Atlas of the Heart",
    author: "Brené Brown",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71eA+3k5PzL._AC_UL210_SR195,210_.jpg",
    title: "Atlas of the Heart 2",
    author: "Brené Brown",
  },
  {
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71eA+3k5PzL._AC_UL210_SR195,210_.jpg",
    title: "Atlas of the Heart 3",
    author: "Brené Brown",
  },
];
const author = "Brené Brown";
const title = "Atlas of the Heart";
const img =
  "https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg";
const BookList = () => {
  return (
    <section className="booklist">
      {books.map((book) => {
        const { img, title, author } = book;
        return <Book book={book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props.book;
  // console.log(props);

  return (
    <article className="book">
      <img src={img}></img>
      <h1>{title}</h1>
      <h4>{author}</h4>
      <p>{children}</p>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
