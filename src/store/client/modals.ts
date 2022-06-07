import { RootState } from "store";

import { createSlice } from "@reduxjs/toolkit";

import { REDUCER_SLICES } from "store/constants";

type SliceState = {
  isScoreModalOpened: boolean;
  isMobileMenuModalOpened: boolean;
};

const initialState: SliceState = {
  isScoreModalOpened: false,
  isMobileMenuModalOpened: false,
};

const slice = createSlice({
  name: REDUCER_SLICES.MODALS,
  initialState,
  reducers: {
    toggleScoreModal(state) {
      state.isScoreModalOpened = !state.isScoreModalOpened;
    },
    toggleMobileMenuModal(state) {
      state.isMobileMenuModalOpened = !state.isMobileMenuModalOpened;
    },
  },
});

export const { toggleScoreModal, toggleMobileMenuModal } = slice.actions;

export default slice.reducer;

export const selectIsScoreModalOpened = (state: RootState) =>
  state.modals.isScoreModalOpened;

export const selectIsMobileMenuModalOpened = (state: RootState) =>
  state.modals.isMobileMenuModalOpened;
