import React from 'react';
// function to generate and shuffle cards
const generateCards = (cards) => {
    // Perform a Fisher-Yates shuffle on the array of cards
    for (let i = cards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [cards[i], cards[j]] = [cards[j], cards[i]];
    }
    
    // Return the shuffled array
    return cards;
  };
  