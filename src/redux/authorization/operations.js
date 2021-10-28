import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

axios.defaults.baseURL = "https://slimmom-backend.goit.global";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

const register = createAsyncThunk(
  "auth/register",
  async ({ username, email, password }, { rejectWithValue }) => {
    try {
      await axios.post("/auth/register", {
        username,
        email,
        password,
      });
      const { data } = await axios.post("/auth/login", {
        email,
        password,
      });
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logIn = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/auth/login", credentials);
      token.set(data.accessToken);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const logOut = createAsyncThunk(
  "auth/logout",
  async (credentials, { rejectWithValue }) => {
    try {
      await axios.post("/auth/logout", credentials);
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const refreshAccessToken = createAsyncThunk(
  "auth/refresh",
  async (_, { rejectWithValue, getState }) => {
    const state = getState();
    const refreshToken = state.auth.refreshToken;
    const sid = state.auth.sid;

    if (refreshToken === null) {
      return rejectWithValue();
    }
    token.set(refreshToken);
    try {
      const { data } = await axios.post("/auth/refresh", { sid });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const refreshUserData = createAsyncThunk(
  "/user",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/user");
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const operations = {
  register,
  logOut,
  logIn,
  refreshAccessToken,
  refreshUserData,
};
export default operations;
