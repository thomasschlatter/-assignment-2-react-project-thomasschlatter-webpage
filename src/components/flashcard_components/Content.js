import React from "react";
import Card from "./Card";
import FavoriteWordsCard from "./FavoriteWords";

export function Content({
  vocabularies,
  favoriteWords,
  handleHideShowFavoriteWordsClick,
  handleStarClick,
  handleExampleClick,
}) {
  return (
    <div className="content">
      <FavoriteWordsCard
        favoriteWords={favoriteWords}
        handleHideShowFavoriteWordsClick={handleHideShowFavoriteWordsClick}
      />
      {vocabularies.map((v, i) => (
        <div className="card" key={i}>
          <Card
            id={i.toString()}
            handleStarClick={handleStarClick}
            word={v.word}
            part_of_speech={v.part_of_speech}
            definition={v.definition}
            handleExampleClick={handleExampleClick}
            example={v.example}
          />
        </div>
      ))}
    </div>
  );
}
