import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./userSlice";
import emailReducer from "./emailSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    email: emailReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
});
export default store;
