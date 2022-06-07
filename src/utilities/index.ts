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

export function shuffleCards(cards: Card[]): Card[] {
  const shuffledCards = [...cards, ...cards]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));

  return shuffledCards;
}
