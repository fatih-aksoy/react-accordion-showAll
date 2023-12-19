import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  const [questions, setQuestions] = useState(data);
  const [show, setShow] = useState(false);

  const handleShowAll = () => {
    setShow(!show);
  };

  return (
    <>
      <section className="info">
        <button onClick={handleShowAll}>
          {show ? "Hide All" : "Show All"}
        </button>
      </section>
      <main>
        <div className="container">
          <h3>questions and answers about login</h3>

          <section className="info">
            {questions.map((question) => {
              return (
                <SingleQuestion key={question.id} {...question} show={show} />
              );
            })}
          </section>
        </div>
      </main>
    </>
  );
}

export default App;

//! Single questions componentini map() icerisinde dondurdu. Single question componentine key verdik ve geri kalani rest operatoru ile {...question} olarak gosterdik.
