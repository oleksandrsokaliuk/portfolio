import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import englishData from "../data/english";
import germanData from "../data/german";
import ukrainianData from "../data/ukrainian";
import { Language } from "../data/dataTypes";
import { RootState } from "./store";

const languageSlice = createSlice({
  name: "languagesData",
  initialState: englishData,
  reducers: {
    changeLanguage: (state, action: PayloadAction<Language>) => {
      if (action.payload === Language.ENGLISH) {
        return englishData;
      } else if (action.payload === Language.GERMAN) {
        return germanData;
      } else if (action.payload === Language.UKRAINIAN) {
        return ukrainianData;
      }
      // console.log("english data");
      return englishData;
    },
    updateScroll: (state, action: PayloadAction<number>) => {},
  },
});

export const { changeLanguage, updateScroll } = languageSlice.actions;
export const languageSelector = (state: RootState) => state.language;
export default languageSlice.reducer;
