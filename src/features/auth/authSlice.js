import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../apis/auth.api";

export const register = createAsyncThunk(
  "/Register",
  async (data, thunkAPI) => {
    try {
      const res = await authApi.register(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (data, thunkAPI) => {
    try {
      const res = await authApi.login(data);
      return res;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const handleAuth=(state,action)=>{
  const {sdt,access_token}=action.payload.data
  state.profile=sdt
  localStorage.setItem("sdt", JSON.stringify(state.profile));
  localStorage.setItem('accessToken',access_token)
}

const auth = createSlice({
  name: "auth",
  initialState: {
    profile: JSON.parse(localStorage.getItem(localStorage.user)) || {},
  },

  extraReducers: {
    [register.fulfilled]: handleAuth,
    [login.fulfilled]:  handleAuth,
  },
});

const authReducer = auth.reducer;
export default authReducer;
