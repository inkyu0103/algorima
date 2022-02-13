import { configureStore } from "@reduxjs/toolkit";
import reducer from "./slice";

export const store = configureStore({
  reducer,
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["root/setFunc"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
