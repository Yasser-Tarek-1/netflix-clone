import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "",
};

const emailSlice = createSlice({
  name: "email",
  initialState,
  reducers: {
    emailHandler: (state, action) => {
      state.email = action.payload;
    },
    inputDump: (state, action) => {
      state.email = "";
    },
  },
});

export const { emailHandler, inputDump } = emailSlice.actions;

export default emailSlice.reducer;
