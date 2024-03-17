import { configureStore } from "@reduxjs/toolkit";
import property from "./reducers/property";

export default configureStore({
  reducer: {
    property,
  }
});
