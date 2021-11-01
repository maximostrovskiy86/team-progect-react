import { createSlice } from "@reduxjs/toolkit";
import {dailyOperations} from "./index";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const dailyPersistConfig = {
  key: "daily",
  storage,
};

const initialDailyState = {
  kcalLeft: null,
  kcalConsumed: null,
  percentsOfDailyRate: null,
  dailyRate: null,
};


const dailySlice = createSlice({
  name: "daily",
  initialState: initialDailyState,
  extraReducers: {
    [dailyOperations.fetchDayInfo.fulfilled](state, action) {
      // state.userData.dailyRate = action.payload.daySummary.dailyRate;
      // state.userData.notAllowedProducts = action.payload.notAllowedProducts;
      state.date = action.payload.date;
      state.kcalLeft = action.payload.kcalLeft;
      state.kcalConsumed = action.payload.kcalConsumed;
      state.percentsOfDailyRate = action.payload.percentsOfDailyRate;
      state.dailyRate = action.payload.dailyRate;
    },

    // [authOperations.rateDailyUser.fulfilled](state, action) {
    //   state.userData.dailyRate = action.payload.dailyRate;
    //   state.todaySummary = action.payload.summaries;
    //   state.userData.notAllowedProducts = action.payload.notAllowedProducts;
  },
});


export const persistedDailyReducer = persistReducer(
 dailyPersistConfig,
  dailySlice.reducer
);
