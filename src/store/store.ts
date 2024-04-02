import { configureStore } from "@reduxjs/toolkit";
import reactionsReducer from "./reactionsSlice";
import reactionsAmountReducer from "./reactionsAmountSlice";
import { setupListeners } from "@reduxjs/toolkit/query";
import { postsApi } from "../api/posts";

export const store = configureStore({
  reducer: {
    reactions: reactionsReducer,
    reactionsAmount: reactionsAmountReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
