import axios from "axios";
import {createAsyncThunk} from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const token = {
    set(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    },
    unset() {
        axios.defaults.headers.common.Authorization = "";
    },
};

const rateDailyUser = createAsyncThunk(
    "/daily/rateDaily",
    async (credentials, {rejectWithValue, getState}) => {
        const state = getState();
        console.log(state)
        console.log('LOG с ID')

        const id = state.user.id;
        const accessToken = state.auth.accessToken;
        token.set(accessToken);

        try {
            const {data} = await axios.post(`/daily-rate/${id}`, credentials);
            console.log(credentials)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const fetchDayInfo = createAsyncThunk(
    "daily/info",
    async (credentials, {rejectWithValue, getState}) => {
        console.log(credentials)
        const state = getState();
        const accessToken = state.auth.accessToken;
        try {
            const {data} = await axios.post("/day/info", credentials);
            token.set(accessToken);
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const addProductByDay = createAsyncThunk(
    "daily/day",
    async (credentials, {rejectWithValue, getState}) => {
        console.log(credentials)
        const state = getState();
        const accessToken = state.auth.accessToken;
        try {
            token.set(accessToken);
            const {data} = await axios.post("/day", credentials);
            console.log(data)
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const operations = {
    fetchDayInfo,
    rateDailyUser,
    addProductByDay,
}

export default operations;

