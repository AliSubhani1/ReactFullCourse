import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
};
const Book = () => {
  return (
    <article className="book">
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => {
  return (
    <img src="https://images-na.ssl-images-amazon.com/images/I/51KvAoff+ZL._SX407_BO1,204,203,200_.jpg"></img>
  );
};
const Title = () => {
  return <h1>Atlas of the Heart</h1>;
};
const Author = () => {
  return <h4>Brené Brown</h4>;
};
ReactDOM.render(<BookList />, document.getElementById("root"));
