import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { books } from "./books";
import Book from "./Book";

// https://youtu.be/Flbw5BX_AX0?list=PLuyywttDftVVtpTZoeTV8bpsTdTX5CrU6&t=8255

const firstBook = {
  id: 0,
  image:
    "https://images-na.ssl-images-amazon.com/images/I/81hHy5XrdKL._AC_UL600_SR600,400_.jpg",
  title: "The Four Agreements: A Practical Guide",
  author: "Don Miguel Ruiz",
};

const BookList = () => {
  function getBook(id) {
    //console.log(someValue);
    console.log(books.find((book) => book.id === id));
  }

  return (
    <>
      <h1>Best sellers</h1>
      <section className="bookList">
        {/* <EventExamples /> */}
        {/* <Book
        id={firstBook.id}
        author={firstBook.author}
        title={firstBook.title}
        image={firstBook.image}
        displayValue={getBook}
        >
        // below stuff will get passed as children prop
        <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt,
        expedita impedit dolorum cum quidem fuga!
        </p>
        <button>CLickilly</button>
      </Book> */}
        {books.map((book, index) => (
          <Book
            key={book.id}
            // author={book.author}
            // title={book.title}
            // image={book.image}
            {...book} // pretty much does the same as above, just passes the entire object with spread operator
            // book={book} // can do it like this as well, but then to access it, would need to write props.book
            displayValue={getBook}
            number={index}
          />
        ))}
      </section>
    </>
  );
};

function EventExamples() {
  const handleFormInput = (e) => {
    console.log(e.target.value);
  };
  function handleFormButton() {
    console.log("button clicked");
  }
  function handleFormSubmission(e) {
    e.preventDefault();
    console.log("submited");
  }
  return (
    <section>
      <form onSubmit={handleFormSubmission}>
        <h2>Typical form</h2>
        <input
          onChange={handleFormInput}
          type="text"
          name="example"
          style={{ margin: "1rem 0" }}
        />
        <div>
          <button onClick={handleFormButton}>Click</button>
        </div>
      </form>
    </section>
  );
}

// function Greeting() {
//   return (
//     <>
//       <h2>First component</h2>
//       <Person />
//       <Message />
//     </>
//   );
// }
// function Greeting() {  // same thing as above just using javascript create element
//   return React.createElement("h2", {}, "hello");
// }
// const Person = () => <h2>john doe</h2>;
// const Message = () => {
//   return <p>a message</p>;
// };

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<BookList />);
