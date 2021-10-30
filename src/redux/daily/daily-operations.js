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


const fetchDayInfo = createAsyncThunk(
    "day/info",
    async (credentials, {rejectWithValue,getState}) => {
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

const operations = {
    fetchDayInfo,
}

export default operations;

