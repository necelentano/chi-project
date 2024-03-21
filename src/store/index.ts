import { configureStore } from "@reduxjs/toolkit";
import { firebaseApi } from "./firebaseApi";

import authReducer from "./authSlice";
import modalReducer from "./modalSlice";

export const store = configureStore({
  reducer: {
    [firebaseApi.reducerPath]: firebaseApi.reducer,
    auth: authReducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(firebaseApi.middleware),
  devTools: true,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
