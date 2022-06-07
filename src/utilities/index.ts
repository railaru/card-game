import { Card, Character, GameScoreValue } from "models";

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

export function sortByHighestScore(scores: GameScoreValue[]) {
  return scores.sort(
    (a, b) => a.turnCount * a.elapsedTime - b.turnCount * b.elapsedTime
  );
}
