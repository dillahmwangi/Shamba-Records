import { configureStore } from "@reduxjs/toolkit";
import { api } from "./services/api";
import authReducer from "./features/auth/AuthSlice";
import { farmersApi } from "./services/farmerApis";


export const store = configureStore({
  reducer: {
    [api.reducerPath]: api.reducer,
     auth: authReducer,
     [farmersApi.reducerPath]: farmersApi.reducer,

  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware,farmersApi.middleware),
});
