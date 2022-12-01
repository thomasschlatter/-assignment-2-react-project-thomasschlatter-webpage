import React from "react";

export default function Card({
  id,
  handleStarClick,
  word,
  part_of_speech,
  definition,
  handleExampleClick,
  example,
}) {
  return (
    <>
      <div className="vocabulary">
        <h3 className="word">
          <span id={`star-${id}`} onClick={handleStarClick} className="star">
            &#x2605;
          </span>{" "}
          {word}
        </h3>
        {part_of_speech}
      </div>
      <h5 className="definition">{definition}</h5>
      <button
        id={`button-${id}`}
        onClick={handleExampleClick}
        className="example-button"
      >
        example
      </button>{" "}
      <span id={`example-${id}`} hidden>
        {example}
      </span>
    </>
  );
}
