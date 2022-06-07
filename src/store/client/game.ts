import { RootState } from "store";

import { createSlice } from "@reduxjs/toolkit";

import { REDUCER_SLICES } from "store/constants";

export enum DECK_SIZE {
  TWENTY_FOUR = 24,
  EIGHT = 8,
  FOUR = 4,
}

export enum GAME_STATUS {
  NOT_STARTED = "NOT_STARTED",
  PLAYING = "PLAYING",
  RESTARTED = "RESTARTED",
  FINISHED = "FINISHED",
}

type SliceState = {
  gameStatus: GAME_STATUS;
  turnCount: number;
  elapsedTime: number;
  deckSize: number;
};

const initialState: SliceState = {
  gameStatus: GAME_STATUS.NOT_STARTED,
  turnCount: 0,
  elapsedTime: 0,
  deckSize: DECK_SIZE.TWENTY_FOUR,
};

const slice = createSlice({
  name: REDUCER_SLICES.GAME,
  initialState,
  reducers: {
    setGameStatus(state, action) {
      if (action.payload === GAME_STATUS.FINISHED) {
        const storedValues = localStorage.getItem("game_score");

        const values = storedValues ? JSON.parse(storedValues) : [];

        values.push({
          turnCount: state.turnCount,
          elapsedTime: state.elapsedTime,
        });

        localStorage.setItem("game_score", JSON.stringify(values));
      }

      if (action.payload === GAME_STATUS.RESTARTED) {
        state.turnCount = 0;
        state.elapsedTime = 0;
      }

      state.gameStatus = action.payload;
    },
    setTurnCount(state, action) {
      state.turnCount = action.payload;
    },
    setElapsedTime(state, action) {
      state.elapsedTime = action.payload;
    },
    increaseElapsedTime(state, action) {
      state.elapsedTime = state.elapsedTime + action.payload;
    },
    setDeckSize(state, action) {
      state.deckSize = action.payload;
    },
  },
});

export const {
  setGameStatus,
  setTurnCount,
  increaseElapsedTime,
  setElapsedTime,
  setDeckSize,
} = slice.actions;

export default slice.reducer;

export const getCurrentGameStatus = (state: RootState) => state.game.gameStatus;
export const getCurrentTurnCount = (state: RootState) => state.game.turnCount;
export const getCurrentElapsedTime = (state: RootState) =>
  state.game.elapsedTime;
export const getCurrentDeckSize = (state: RootState) => state.game.deckSize;
