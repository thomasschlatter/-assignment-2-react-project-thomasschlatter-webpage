import React from "react";

export default function FavoriteWordsCard({
  favoriteWords,
  handleHideShowFavoriteWordsClick,
}) {
  return (
    <>
      <button
        id={`show-favorites`}
        onClick={handleHideShowFavoriteWordsClick}
        className="favorites-button"
      >
        show favorites
      </button>{" "}
      <span id={`favorites`} hidden>
        {favoriteWords.join(", ")}
      </span>
      <br></br>
      <small>
        (To use the favourite words button, you have to add words to the
        favourite words list first)
      </small>
    </>
  );
}
