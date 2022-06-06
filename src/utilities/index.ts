import { Card, Character } from "models";

export function formatCharactersToCards(characters: Character[] | undefined) {
  const formattedCards: Card[] = [];

  characters?.forEach((character, index) => {
    if (index < 2) {
      formattedCards.push({
        name: character.name,
        imgSrc: character.image,
        isMatching: false,
      });
    }
  });

  return formattedCards;
}
