import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import {
  persistedAuthReducer,
  persistedUserReducer,
} from "./authorization/slice";
import {persistedDailyReducer} from "./daily/slice";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    auth: persistedAuthReducer,
    daily: persistedDailyReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
