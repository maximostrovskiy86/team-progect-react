import {createSlice} from "@reduxjs/toolkit";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {dailyOperations} from "./index";
import authOperations from "../authorization/operations";

const dailyPersistConfig = {
    key: "daily",
    storage,
};

const initialDailyState = {
    eatenProduct: {},
    day: {
        date: null,
        kcalLeft: null,
        kcalConsumed: null,
        percentsOfDailyRate: null,
        dailyRate: null,
        // notAllowedProducts: [],
        eatenProducts: [],
    }
};

const dailySlice = createSlice({
    name: "daily",
    initialState: initialDailyState,
    extraReducers: {
        [dailyOperations.addProductByDay.fulfilled](state, action) {
            state.eatenProduct = action.payload.eatenProduct;
            state.day.eatenProducts = action.payload.eatenProduct;
        },

        [dailyOperations.rateDailyUser.fulfilled](state, action) {
            state.day.date = action.payload.summaries.date;
            state.day.kcalLeft = action.payload.summaries.kcalLeft;
            state.day.kcalConsumed = action.payload.summaries.kcalConsumed;
            state.day.percentsOfDailyRate = action.payload.summaries.percentsOfDailyRate;
            state.day.dailyRate = action.payload.dailyRate;
            state.day.notAllowedProducts = action.payload.notAllowedProducts;
            // state.days.
        },
        // [authOperations.rateDailyUser.fulfilled](state, action) {
        //   state.userData.dailyRate = action.payload.dailyRate;
        //   state.todaySummary = action.payload.summaries;
        //   state.userData.notAllowedProducts = action.payload.notAllowedProducts;

        [dailyOperations.fetchDayInfo.fulfilled](state, action) {
            state.date = action.payload.date;
            state.kcalLeft = action.payload.kcalLeft;
            state.kcalConsumed = action.payload.kcalConsumed;
            state.percentsOfDailyRate = action.payload.percentsOfDailyRate;
            state.dailyRate = action.payload.dailyRate;
        },

        [authOperations.logOut.fulfilled](state) {
            state.date = null;
            state.kcalLeft = null;
            state.kcalConsumed = null;
            state.percentsOfDailyRate = null;
            state.dailyRate = null;
            state.notAllowedProducts = [];
            state.eatenProducts = null;
        },
        [authOperations.logOut.rejected](state) {
            state.date = null;
            state.kcalLeft = null;
            state.kcalConsumed = null;
            state.percentsOfDailyRate = null;
            state.dailyRate = null;
            state.notAllowedProducts = [];
            state.eatenProducts = null;
        },
    },
});

export const persistedDailyReducer = persistReducer(
    dailyPersistConfig,
    dailySlice.reducer
);
