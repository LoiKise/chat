import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authApi from "../../apis/auth.api";
import LocalStorage from "../../helpers/localStorage";
import { payloadCreator } from "../../helpers/payloadCreators";

export const register = createAsyncThunk(
  "auth/register",
  payloadCreator(authApi.register)
);

export const login = createAsyncThunk(
  "auth/login",
  payloadCreator(authApi.login)
);

const handleChangePass = (state, action) => {
  const { oldPassword, newPassword } = action.payload;
  state.profile = {...state.profile, password : newPassword};
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
}

const handleUpdate = (state, action) => {
  const { email, fullname, phone, imgUrl } = action.payload;
  state.profile = { ...state.profile, email, fullname, phone, imgUrl };
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
}

const handleLogin = (state, action) => {
  const { user, token } = action.payload.data;
  state.profile = user;
  localStorage.setItem(LocalStorage.user, JSON.stringify(state.profile));
  localStorage.setItem(LocalStorage.accessToken, token);
};

const handleAuthSocial = (state, action) => {
  const { user, accessToken } = action.payload;
  state.profile = user;
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
  reducers: {
    logout: handleUnAuth,
    loginSocial: handleAuthSocial,
    updateInfo : handleUpdate,
    changePass : handleChangePass,
  },
  extraReducers: {
    [login.fulfilled]: handleLogin,
  },
});

const authReducer = auth.reducer;
export const logout = auth.actions.logout;
export const loginSocial = auth.actions.loginSocial;
export const updateInfo = auth.actions.updateInfo;
export const changePass = auth.actions.changePass;
export default authReducer;
