import React from 'react';

const Card = ({ index, image, isFlipped, isMatched, handleCardClick }) => {
  return (
    <div
      className={`card ${isFlipped ? 'flipped' : ''} ${
        isMatched ? 'matched' : ''
      }`}
      onClick={() => handleCardClick(index)}
    >
      <div className="front">
        <img src="card-back.png" alt="Card Back" />
      </div>
      <div className="back">
        <img src={image} alt="Card Front" />
      </div>
    </div>
  );
};

export default Card;
