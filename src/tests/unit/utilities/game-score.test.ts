import { GameScoreValue } from "models";
import { sortByHighestScore } from "utilities";

describe("game score tests", () => {
  test("a list of score should be sorted with the best results at the top", () => {
    const rawScores: GameScoreValue[] = [
      { elapsedTime: 3, turnCount: 3 },
      { elapsedTime: 2, turnCount: 2 },
      { elapsedTime: 1, turnCount: 1 },
    ];

    expect(sortByHighestScore(rawScores)[0].elapsedTime).toBe(1);
    expect(sortByHighestScore(rawScores)[1].turnCount).toBe(2);
    expect(sortByHighestScore(rawScores)[2].elapsedTime).toBe(3);
  });
});
