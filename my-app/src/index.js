import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
const books = [
  {
    id: 1,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg",
    title: "Atlas of the Heart",
    author: "Brené Brown 1",
  },
  {
    id: 2,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71eA+3k5PzL._AC_UL210_SR195,210_.jpg",
    title: "Atlas of the Heart 2",
    author: "Brené Brown 2",
  },
  {
    id: 3,
    img:
      "https://images-na.ssl-images-amazon.com/images/I/71eA+3k5PzL._AC_UL210_SR195,210_.jpg",
    title: "Atlas of the Heart 3",
    author: "Brené Brown 3",
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
        const { id, img, title, author } = book;

        return <Book key={book.id} {...book} />;
      })}
    </section>
  );
};

const Book = (props) => {
  const { img, title, author, children } = props;
  // console.log(props);
  const clickHandler = (e) => {
    console.log(e);
    console.log(e.target);
    alert("hello world");
  };
  const ComplexExample = (author) => {
    console.log(author);
  };
  return (
    <article className="book">
      <img src={img}></img>
      <h1 onClick={() => console.log(title)}>{title}</h1>
      <h4>{author}</h4>
      <button type="button" onClick={clickHandler}>
        Reference Example
      </button>
      <button type="button" onClick={() => ComplexExample(author)}>
        more complex example
      </button>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById("root"));
