import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";

import { ConfigureStoreOptions, configureStore } from "@reduxjs/toolkit";

import { characterApi } from "store/api/characters";
import game from "store/client/game";
import modals from "store/client/modals";

export const createStore = (
  options?: ConfigureStoreOptions["preloadedState"] | undefined
) =>
  configureStore({
    reducer: {
      [characterApi.reducerPath]: characterApi.reducer,
      modals,
      game,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(characterApi.middleware),
    ...options,
  });

export const store = createStore();

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export type RootState = ReturnType<typeof store.getState>;
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
