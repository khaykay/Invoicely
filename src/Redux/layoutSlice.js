import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  layout: "default",
};
const layoutSlice = createSlice({
  name: "layoutSlice",
  initialState,
  reducers: {
    selectLayout: (state, action) => {
      state.layout = action.payload;
    },
  },
});

export const { selectLayout } = layoutSlice.actions;
export default layoutSlice.reducer;
