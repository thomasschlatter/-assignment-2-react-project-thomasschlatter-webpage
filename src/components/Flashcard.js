import React, { useState } from "react";
import { Content } from "./flashcard_components/Content";

const vocabularies = [
  {
    word: "knotty",
    part_of_speech: "Adjective",
    definition:
      "(of a problem or difficulty) complicated and difficult to solve.",
    example: "It was a very knotty problem.",
  },
  {
    word: "cantrip",
    part_of_speech: "Noun",
    definition: "a magic spell; trick by sorcery.",
    example:
      "And that old witch, Eliza—I little guessed she’d play this cantrip on me: But what a jest—Jerusalem, what a jest!",
  },
  {
    word: "traverse",
    part_of_speech: "Verb",
    definition: "to pass or move over, along, or through.",
    example: "Stanley traversed the continent from west to east.",
  },
  {
    word: "peculiar",
    part_of_speech: "Adjective",
    definition: "different to what is normal or expected; strange.",
    example: "He gave her some very peculiar looks.",
  },
];

function handleHideShowFavoriteWordsClick() {
  const favorites = document.querySelector("#favorites");
  favorites.hidden = !favorites.hidden;
}

function handleExampleClick(event) {
  const example = document.getElementById(
    "example-" + event.target.id.split("-")[1]
  );
  example.hidden = !example.hidden;
}

// Flashcard.js
export function Flashcard() {
  const [favoriteWords, setFavorites] = useState([]);

  function handleStarClick(event) {
    const id = event.target.id;
    const element = document.getElementById(id);
    const word = vocabularies[id.split("-")[1]].word;
    if (favoriteWords.includes(word)) {
      setFavorites(favoriteWords.filter((w) => w !== word));
    } else {
      setFavorites([...favoriteWords, word]);
    }
    element.classList.toggle("yellow");
  }

  return (
    <section>
      <h1>Flashcard</h1>
      <Content
        vocabularies={vocabularies}
        favoriteWords={favoriteWords}
        handleHideShowFavoriteWordsClick={handleHideShowFavoriteWordsClick}
        handleStarClick={handleStarClick}
        handleExampleClick={handleExampleClick}
      />
    </section>
  );
}
