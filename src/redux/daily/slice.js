import { createSlice } from "@reduxjs/toolkit";
import {dailyOperations} from "./index";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dailyPersistConfig = {
  key: "daily",
  storage,
};


// const initialDailyState = {
//   username: null,
//   email: null,
//   id: null,
//   todaySummary: null,
//   userData: null,
//   isLoggedIn: false,
//   date: null,
//   error: null,
//   kcalLeft: null,
//   kcalConsumed: null,
//   percentsOfDailyRate: null,
//
//
// };

// const initialDailyState = {
//   daySummary: null,
// };


const userSlice = createSlice({
  name: "user",
  // initialState: initialDailyState,
  extraReducers: {
    [dailyOperations.fetchDayInfo.fulfilled](state, action) {
      state.userData.dailyRate = action.payload.daySummary.dailyRate;
      state.userData.notAllowedProducts = action.payload.notAllowedProducts;
      state.date = action.payload.daySummary.date;
      state.kcalLeft = action.payload.daySummary.kcalLeft;
      state.kcalConsumed = action.payload.daySummary.kcalConsumed;
      state.percentsOfDailyRate = action.payload.daySummary.percentsOfDailyRate;

    },

    // [authOperations.rateDailyUser.fulfilled](state, action) {
    //   state.userData.dailyRate = action.payload.dailyRate;
    //   state.todaySummary = action.payload.summaries;
    //   state.userData.notAllowedProducts = action.payload.notAllowedProducts;


      // state.userData = action.payload.userData;
      // state.username = action.payload.username;
      // state.email = action.payload.email;
      // state.id  = action.payload.id;
      // state.isLoggedIn = true;

  },
});


export const persistedUserReducer = persistReducer(
 dailyPersistConfig,
  userSlice.reducer
);
