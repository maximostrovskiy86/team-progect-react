import {createSlice} from "@reduxjs/toolkit";
import authOperations from "./operations";
import {persistReducer} from "redux-persist";
import storage from "redux-persist/lib/storage";
import {dailyOperations} from "../daily";

const authPersistConfig = {
    key: "auth",
    storage,
};

const userPersistConfig = {
    key: "user",
    storage,
};

const initialState = {
    accessToken: null,
    refreshToken: null,
    sid: null,
    error: null,
};

const initialUserState = {
    username: null,
    email: null,
    id: null,
    days: [],
    userData: {
        weight: null,
        height: null,
        age: null,
        bloodType: null,
        desiredWeight: null,
        dailyRate: null,
        notAllowedProducts: [],
    },

    isLoggedIn: false,
    date: new Date(),
    error: null,
};

const userSlice = createSlice({
    name: "user",
    initialState: initialUserState,
    extraReducers: {
        [dailyOperations.deleteProductByDay.fulfilled](state, action) {
            state.days = state.days.map(day => day._id === action.payload.credentials.dayId ?
                {
                    ...day,
                    eatenProducts: day.eatenProducts.filter(item => item.id !== action.payload.credentials.eatenProductId)
                } : day,
            )
        },

        [authOperations.refreshUserData.fulfilled](state, action) {
            state.days = action.payload.days;
            state.userData = action.payload.userData;
            state.username = action.payload.username;
            state.email = action.payload.email;
            state.id = action.payload.id;
            state.isLoggedIn = true;
        },

        [dailyOperations.rateDailyUser.fulfilled](state, action) {
            state.userData.notAllowedProducts = action.payload.notAllowedProducts;
            // state.days.
        },

        [dailyOperations.addProductByDay.fulfilled](state, action) {
            state.days = action.payload.day ?
                state.days.map(item => (item._id || item.id) === action.payload.day.id ?
                    {...action.payload.day, daySummary: action.payload.daySummary} : item)
                :
                [...state.days, {...action.payload.newDay, daySummary: action.payload.newSummary}]
        },

        [authOperations.refreshUserData.rejected](state) {
            state.days = [];
            state.username = null;
            state.email = null;
            state.id = null;
            state.isLoggedIn = false;
            state.userData = {
                weight: null,
                height: null,
                age: null,
                bloodType: null,
                desiredWeight: null,
                dailyRate: null,
                notAllowedProducts: [],
            }
        },

        [authOperations.logOut.fulfilled](state) {
            state.days = [];
            state.username = null;
            state.email = null;
            state.id = null;
            state.isLoggedIn = false;
            state.userData = {
                weight: null,
                height: null,
                age: null,
                bloodType: null,
                desiredWeight: null,
                dailyRate: null,
                notAllowedProducts: [],
            }
        },
        [authOperations.logOut.rejected](state) {
            state.days = [];
            state.username = null;
            state.email = null;
            state.id = null;
            state.isLoggedIn = false;
            state.userData = {
                weight: null,
                height: null,
                age: null,
                bloodType: null,
                desiredWeight: null,
                dailyRate: null,
                notAllowedProducts: [],
            }
        },

        [authOperations.refreshAccessToken.rejected](state) {
            state.username = null;
            state.email = null;
            state.id = null;
            state.todaySummary = null;
            state.userData = null;
            state.isLoggedIn = false;
            state.date = null;
        },
        [authOperations.refreshAccessToken.fulfilled](state) {
            state.isLoggedIn = true;
        },

        [authOperations.register.fulfilled](state, action) {
            state.date = action.payload.todaySummary.date;
            state.todaySummary = action.payload.todaySummary;
            state.userData = action.payload.user.userData;
            state.username = action.payload.user.username;
            state.email = action.payload.user.email;
            state.id = action.payload.user.id;
            state.isLoggedIn = true;
        },
        [authOperations.logIn.fulfilled](state, action) {
            state.date = action.payload.todaySummary.date;
            state.todaySummary = action.payload.todaySummary;
            state.userData = action.payload.user.userData;
            state.username = action.payload.user.username;
            state.email = action.payload.user.email;
            state.id = action.payload.user.id;
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
            // state.username = action.payload.user.username;
            // state.email = action.payload.user.email;
            // state.id = action.payload.user.id;
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
            // state.username = action.payload.user.username;
            // state.email = action.payload.user.email;
            // state.id = action.payload.user.id;
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
            // state.username = null;
            // state.email = null;
            // state.id = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.sid = null;
            // state.todaySummary = null;
            // state.userData = null;
            // state.isLoggedIn = false;
        },
        [authOperations.logOut.rejected](state, action) {
            // state.username = null;
            // state.email = null;
            // state.id = null;
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
            // state.username = null;
            // state.email = null;
            // state.id = null;
            state.accessToken = null;
            state.refreshToken = null;
            state.sid = null;
            // state.todaySummary = null;
            // state.userData = null;
            // state.isLoggedIn = false;
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
