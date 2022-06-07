import { RootState } from "store";

import { createSlice } from "@reduxjs/toolkit";

import { REDUCER_SLICES } from "store/constants";

type SliceState = {
  isScoreModalOpened: boolean;
};

const initialState: SliceState = {
  isScoreModalOpened: false,
};

const slice = createSlice({
  name: REDUCER_SLICES.MODALS,
  initialState,
  reducers: {
    toggleScoreModal(state) {
      state.isScoreModalOpened = !state.isScoreModalOpened;
    },
  },
});

export const { toggleScoreModal } = slice.actions;

export default slice.reducer;

export const selectIsScoreModalOpened = (state: RootState) =>
  state.modals.isScoreModalOpened;
