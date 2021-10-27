import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./operations";

const initialState = {
  user: { username: null, email: null, id: null },
  token: null,
  isLoggedIn: false,
  isRefreshingUser: false,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.error = null;
    },
    [authOperations.register.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.error = null;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.logIn.pending](state) {
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.isLoggedIn = true;
      // state.error = null;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.logOut.pending](state) {
      state.error = null;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user = { username: null, email: null };
      state.token = null;
      state.isLoggedIn = false;
      state.isRefreshingUser = false;
      // state.error = null;
    },
    [authOperations.logOut.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.refreshCurrentUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [authOperations.refreshCurrentUser.fulfilled](state, action) {
      state.user = action.payload;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.refreshCurrentUser.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice.reducer;
