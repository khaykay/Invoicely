import { configureStore } from "@reduxjs/toolkit";
import layoutReducer from "./layoutSlice";
import bgColorReducer from "./bgColorSlice";
const Store = configureStore({
  reducer: {
    layoutReducer,
    bgColorReducer,
  },
});

export default Store;
