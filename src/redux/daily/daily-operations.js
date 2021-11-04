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
        const id = state.user.id;
        const accessToken = state.auth.accessToken;
        token.set(accessToken);

        try {
            const {data} = await axios.post(`/daily-rate/${id}`, credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);


const fetchDayInfo = createAsyncThunk(
    "daily/info",
    async (credentials, {rejectWithValue, getState}) => {
        const state = getState();
        const accessToken = state.auth.accessToken;
        try {
            const {data} = await axios.post("/day/info", credentials);
            token.set(accessToken);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);

const addProductByDay = createAsyncThunk(
    "daily/day",
    async (credentials, {rejectWithValue, getState}) => {
        const state = getState();
        const accessToken = state.auth.accessToken;
        try {
            token.set(accessToken);
            const {data} = await axios.post("/day", credentials);
            return data;
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const deleteProductByDay = createAsyncThunk(
    "daily/delete",
    async (credentials, {rejectWithValue, getState}) => {
        const state = getState();
        const accessToken = state.auth.accessToken;
        try {
            token.set(accessToken);
            const {data} = await axios.delete("/day", {data: {...credentials}});
            // axios.delete(URL, {data: payload}, header);
            return {credentials, ...data};
        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
)

const operations = {
    fetchDayInfo,
    rateDailyUser,
    addProductByDay,
    deleteProductByDay,
}

export default operations;

