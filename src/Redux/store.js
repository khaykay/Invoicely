import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";
import bgColorReducer from "./bgColorSlice";
import previewReducer from "./previewSlice";
const Store = configureStore({
  reducer: {
    layoutReducer,
    bgColorReducer,
    previewReducer,
  },
});

export default Store;
