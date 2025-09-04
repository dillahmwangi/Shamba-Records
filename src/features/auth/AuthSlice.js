import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  user: null,
};

const slice= createSlice({
  name: "auth",
  initialState,
  reducers: {
    setCredentials: (state, action) => {
      const { token, user } = action.payload || {};

     if (token) {
        state.token = token;
        localStorage.setItem("token", token);
      }
      if (user !== undefined) state.user = user;
    },
    clearCredentials: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem("token");
    },
  },
});

export const { setCredentials, clearCredentials } = slice.actions;
export default slice.reducer;
