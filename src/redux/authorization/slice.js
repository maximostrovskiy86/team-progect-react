import { createSlice } from "@reduxjs/toolkit";
import authOperations from "./operations";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const authPersistConfig = {
  key: "auth",
  storage,
};

const userPersistConfig = {
  key: "user",
  storage,
};

const initialState = {
  // user: { username: null, email: null, id: null },
  accessToken: null,
  refreshToken: null,
  sid: null,
  // isLoggedIn: false,
  // todaySummary: null,
  // userData: null,
  error: null,
};

const initialUserState = {
  user: { username: null, email: null, id: null },
  todaySummary: null,
  userData: null,
  isLoggedIn: false,
};

const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  extraReducers: {
    [authOperations.register.fulfilled](state, action) {
      state.todaySummary = action.payload.todaySummary;
      state.userData = action.payload.user.userData;
      state.user.username = action.payload.user.username;
      state.user.email = action.payload.user.email;
      state.user.id = action.payload.user.id;
      state.isLoggedIn = true;
    },
    [authOperations.logIn.fulfilled](state, action) {
      state.todaySummary = action.payload.todaySummary;
      state.userData = action.payload.user.userData;
      state.user.username = action.payload.user.username;
      state.user.email = action.payload.user.email;
      state.user.id = action.payload.user.id;
      state.isLoggedIn = true;
    },
    [authOperations.logOut.fulfilled](state) {
      state.user.username = null;
      state.user.email = null;
      state.user.id = null;
      state.todaySummary = null;
      state.userData = null;
      state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected](state) {
      state.user.username = null;
      state.user.email = null;
      state.user.id = null;
      state.todaySummary = null;
      state.userData = null;
      state.isLoggedIn = false;
    },
    [authOperations.refreshAccessToken.rejected](state) {
      state.user.username = null;
      state.user.email = null;
      state.user.id = null;
      state.todaySummary = null;
      state.userData = null;
    },
    [authOperations.refreshAccessToken.fulfilled](state) {
      state.isLoggedIn = true;
    },
  },
});

const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: {
    [authOperations.register.pending](state) {
      state.error = null;
    },
    [authOperations.register.fulfilled](state, action) {
      // state.user.username = action.payload.user.username;
      // state.user.email = action.payload.user.email;
      // state.user.id = action.payload.user.id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      // state.todaySummary = action.payload.todaySummary;
      // state.userData = action.payload.user.userData;
      // state.isLoggedIn = true;
    },
    [authOperations.register.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.logIn.pending](state) {
      state.error = null;
    },
    [authOperations.logIn.fulfilled](state, action) {
      // state.user.username = action.payload.user.username;
      // state.user.email = action.payload.user.email;
      // state.user.id = action.payload.user.id;
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      // state.todaySummary = action.payload.todaySummary;
      // state.userData = action.payload.user.userData;
      // state.isLoggedIn = true;
    },
    [authOperations.logIn.rejected](state, action) {
      state.error = action.payload;
    },
    [authOperations.logOut.pending](state) {
      state.error = null;
    },
    [authOperations.logOut.fulfilled](state) {
      // state.user.username = null;
      // state.user.email = null;
      // state.user.id = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      // state.todaySummary = null;
      // state.userData = null;
      // state.isLoggedIn = false;
    },
    [authOperations.logOut.rejected](state, action) {
      // state.user.username = null;
      // state.user.email = null;
      // state.user.id = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      // state.todaySummary = null;
      // state.userData = null;
      // state.isLoggedIn = false;
      state.error = action.payload;
    },
    [authOperations.refreshAccessToken.pending](state) {
      state.error = null;
    },
    [authOperations.refreshAccessToken.fulfilled](state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
      state.sid = action.payload.sid;
      // state.isLoggedIn = true;
      state.isRefreshingToken = false;
    },
    [authOperations.refreshAccessToken.rejected](state, action) {
      // state.user.username = null;
      // state.user.email = null;
      // state.user.id = null;
      state.accessToken = null;
      state.refreshToken = null;
      state.sid = null;
      // state.todaySummary = null;
      // state.userData = null;
      state.isLoggedIn = false;
      state.error = action.payload;
    },
  },
});

export const persistedUserReducer = persistReducer(
  userPersistConfig,
  userSlice.reducer
);
export const persistedAuthReducer = persistReducer(
  authPersistConfig,
  authSlice.reducer
);

// const authRedusers = combineReducers({
//   user: persistedUserReducer,
//   auth: persistedAuthReducer,
// });

// export default authRedusers;
// export authSlice.reducer;
