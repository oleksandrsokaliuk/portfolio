import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const scrollSlice = createSlice({
  name: "languagesData",
  initialState: 0,
  reducers: {
    updateScroll: (state, action: PayloadAction<number>) => {
      return action.payload;
    },
  },
});

export const { updateScroll } = scrollSlice.actions;
export const scrollSelector = (state: RootState) => state.scroll;
export default scrollSlice.reducer;
