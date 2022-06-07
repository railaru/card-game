import { Card } from "models";
import { shuffleCards } from "utilities";

describe("game logic tests", () => {
  test("cards should be arranged in a different way after each shuffle", () => {
    const cardBeforeShuffle: Card[] = [
      { imgSrc: "img_url_1", isMatching: false, name: "Card 1" },
      { imgSrc: "img_url_2", isMatching: false, name: "Card 2" },
      { imgSrc: "img_url_3", isMatching: false, name: "Card 3" },
      { imgSrc: "img_url_4", isMatching: false, name: "Card 4" },
      { imgSrc: "img_url_5", isMatching: false, name: "Card 5" },
      { imgSrc: "img_url_6", isMatching: false, name: "Card 6" },
      { imgSrc: "img_url_7", isMatching: false, name: "Card 7" },
      { imgSrc: "img_url_8", isMatching: false, name: "Card 8" },
      { imgSrc: "img_url_9", isMatching: false, name: "Card 9" },
      { imgSrc: "img_url_10", isMatching: false, name: "Card 10" },
      { imgSrc: "img_url_11", isMatching: false, name: "Card 11" },
      { imgSrc: "img_url_12", isMatching: false, name: "Card 12" },
    ];

    const cardsAfterShuffle = shuffleCards(cardBeforeShuffle);
    const cardsAfterSecondShuffle = shuffleCards(cardsAfterShuffle);

    expect(cardBeforeShuffle).not.toBe(cardsAfterShuffle);
    expect(cardsAfterShuffle).not.toBe(cardsAfterSecondShuffle);
  });
});
