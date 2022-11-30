import React from 'react';

export default function FavoriteWordsCard({
        favoriteWords,
        handleHideShowFavoriteWordsClick,

}) {
    return (
        <>
        <button id={`show-favorites`} onClick={handleHideShowFavoriteWordsClick} className="favorites-button">show favorites</button> <span id={`favorites`} hidden>{favoriteWords.join(", ")}</span>
        </>
    );
}
