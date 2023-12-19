import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

const Question = ({ title, info, show }) => {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <>
      <article className="question">
        <header>
          <h4>{title}</h4>
          <button className="btn" onClick={() => setShowInfo(!showInfo)}>
            {showInfo || show ? <AiOutlineMinus /> : <AiOutlinePlus />}
          </button>
        </header>
        {(showInfo || show) && <p>{info}</p>}
      </article>
    </>
  );
};

export default Question;
