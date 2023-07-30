import React, { useState } from "react";

const QuestionCard = ({ question, onNext }) => {
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const handleAnswerSelect = (event) => {
    setSelectedAnswer(event.target.value);
  };

  const handleNext = () => {
    onNext(selectedAnswer);
    setSelectedAnswer(null);
  };

  return (
    <div className="card p-5" style={{ width: "36rem" }}>
      <img
        className="card-img-top  rounded "
        src={question.img}
        alt="Card image cap"
      />
      <div className="card-body ">
        <p className="card-text ">{question.soru}</p>
      </div>
      <ul className="list-group list-group-flush">
        {Object.entries(question.cevaplar).map(([key, value]) => (
          <li className="list-group-item d-flex  align-items-center" key={key}>
            <input
              className="mr-2 mb-2"
              type="radio"
              id={key}
              name="answer"
              value={key}
              checked={selectedAnswer === key}
              onChange={handleAnswerSelect}
            />
            <label htmlFor={key}>{value}</label>
          </li>
        ))}
      </ul>
      <div className="card-body">
        <a href="#" className="card-link">
          <button
            className="btn btn-primary btn-block"
            type="button"
            onClick={handleNext}
          >
            CEVAPLA
          </button>
        </a>
      </div>
    </div>
  );
};

export default QuestionCard;
