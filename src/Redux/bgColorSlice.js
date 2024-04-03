import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  color: "#000000",
  recentlyUsedColor: [],
};
const bgcolorSlice = createSlice({
  name: "bgcolorSlice",
  initialState,
  reducers: {
    setBgColor: (state, action) => {
      state.color = action.payload;
      if (state.recentlyUsedColor.length === 8) {
        state.recentlyUsedColor.shift();
      }
      state.recentlyUsedColor.push(action.payload);
    },
  },
});

export const { setBgColor } = bgcolorSlice.actions;
export default bgcolorSlice.reducer;
