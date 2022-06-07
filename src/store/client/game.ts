import { RootState } from "store";

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

import { REDUCER_SLICES } from "store/constants";

export enum GAME_STATUS {
  NOT_STARTED = "NOT_STARTED",
  PLAYING = "PLAYING",
  RESTARTED = "RESTARTED",
  FINISHED = "FINISHED",
}

type SliceState = {
  gameStatus: GAME_STATUS;
};

const initialState: SliceState = {
  gameStatus: GAME_STATUS.NOT_STARTED,
};

const slice = createSlice({
  name: REDUCER_SLICES.GAME,
  initialState,
  reducers: {
    setGameStatus(state, action) {
      state.gameStatus = action.payload;
      console.log(action);
    },
  },
});

export const { setGameStatus } = slice.actions;

export default slice.reducer;

export const getCurrentGameStatus = (state: RootState) => state.game.gameStatus;
