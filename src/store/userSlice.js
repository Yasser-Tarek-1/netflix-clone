import { createSlice } from "@reduxjs/toolkit";

const userLocal = localStorage.getItem("user") || null;

const initialState = {
  user: userLocal,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state, action) => {
      state.user = null;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
