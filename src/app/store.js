import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import counterReducer from "../features/counter/counterSlice";
import orderSlice from './../features/dashboard/order/orderSlice';
import userSlice from './../features/dashboard/user/userSlice';
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    order: orderSlice,
    auth: authReducer,
    user: userSlice,
  },
  devTools: process.env.NODE_ENV === "development",
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({ serializableCheck: false }),
  ],
});
