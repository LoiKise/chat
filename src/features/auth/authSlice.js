import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../apis/auth.api";
import LocalStorage from "../../helpers/localStorage";

export const register = createAsyncThunk(
  "auth/register",
  async (data, thunkAPI) => {
    try {
      const res = await authApi.register(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk("auth/login", async (data, thunkAPI) => {
  try {
    const res = await authApi.login(data);
    return res;
  } catch (error) {
    return thunkAPI.rejectWithValue(error);
  }
});

export const logout = createAsyncThunk(
  "auth/logout",
  async (data, thunkAPI) => {
    try {
      const res = await authApi.logout(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const handleAuth = (state, action) => {
  const { user, accessToken } = action.payload.data;
  state.profile = user;
  console.log(user);
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
  localStorage.setItem(LocalStorage.accessToken, accessToken);
};

const handleUnAuth = (state) => {
  state.profile = {};
  localStorage.removeItem(LocalStorage.user);
  localStorage.removeItem(LocalStorage.accessToken);
};

const auth = createSlice({
  name: "auth",
  initialState: {
    profile: JSON.parse(localStorage.getItem(LocalStorage.user)) || {},
  },

  extraReducers: {
    [register.fulfilled]: handleAuth,
    [login.fulfilled]: handleAuth,
    [logout.fulfilled]: handleUnAuth,
  },
});

const authReducer = auth.reducer;
export default authReducer;
