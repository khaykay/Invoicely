import { createSlice } from "@reduxjs/toolkit";

const previewSlice = createSlice({
  name: "previewSlice",
  initialState: {
    value: false,
  },
  reducers: {
    togglePreview: (state) => {
      state.value = !state.value;
    },
  },
});

export const { togglePreview } = previewSlice.actions;
export default previewSlice.reducer;
