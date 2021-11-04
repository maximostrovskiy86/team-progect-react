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
    kcalLeft: 0,
    kcalConsumed: 0,
    percentsOfDailyRate: 0,
    dailyRate: 0,
    eatenProducts: [],
};

const dailySlice = createSlice({
    name: "daily",
    initialState: initialDailyState,
    extraReducers: {
        [dailyOperations.rateDailyUser.fulfilled](state, action) {
            state.kcalLeft = action.payload.summaries.kcalLeft;
            state.kcalConsumed = action.payload.summaries.kcalConsumed;
            state.percentsOfDailyRate = action.payload.summaries.percentsOfDailyRate;
            state.dailyRate = action.payload.dailyRate;
            state.notAllowedProducts = action.payload.notAllowedProducts;
        },
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
