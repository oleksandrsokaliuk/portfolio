import { configureStore } from "@reduxjs/toolkit";
import languageReducer from "./languageSlice";
import scrollReducer from "./languageSlice";

const store = configureStore({
  reducer: {
    language: languageReducer,
    scroll: scrollReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
