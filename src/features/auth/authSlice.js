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

const auth = createSlice({
  name: "auth",
  initialState: {
    profile: JSON.parse(localStorage.getItem(localStorage.user)) || {},
  },

  extraReducers: {
    [register.fulfilled]: (state, action) => {
      state.profile = action.payload.data;
      localStorage.setItem("user", JSON.stringify(state.profile));
    },
  },
});

const authReducer = auth.reducer;
export default authReducer;
