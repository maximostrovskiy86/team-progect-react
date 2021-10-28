import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./operations";

const initialState = {
  user: { username: null, email: null, id: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  isLoggedIn: false,
  todaySummary: null,
  userData: null,
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
      state.user.username = action.payload.user.username;
      state.user.email = action.payload.user.email;
      state.user.id = action.payload.user.id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.todaySummary = action.payload.todaySummary;
      state.userData = action.payload.user.userData;
      state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.logIn.pending](state) {
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.user.username = action.payload.user.username;
      state.user.email = action.payload.user.email;
      state.user.id = action.payload.user.id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.todaySummary = action.payload.todaySummary;
      state.userData = action.payload.user.userData;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.logOut.pending](state) {
      state.error = null;
    },
    [authOperations.logOut.fulfilled](state) {
      // state = initialState;
      state.user.username = null;
      state.user.email = null;
      state.user.id = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.todaySummary = null;
      state.userData = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected](state, action) {
      // state = initialState;
      state.user.username = null;
      state.user.email = null;
      state.user.id = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      state.todaySummary = null;
      state.userData = null;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
    [authOperations.refreshUser.pending](state) {
      state.isRefreshingUser = true;
    },
    [authOperations.refreshUser.fulfilled](state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      state.isLoggedIn = true;
      state.isRefreshingUser = false;
    },
    [authOperations.refreshUser.rejected](state) {
      state.isRefreshingUser = false;
    },
  },
});

export default authSlice.reducer;
