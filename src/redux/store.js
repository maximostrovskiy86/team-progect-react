import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  //   persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import logger from "redux-logger";
// import storage from "redux-persist/lib/storage";
// import { contactsReducer } from "./phonebook";
// import { authReducer } from "./authorization";
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
// .concat(logger);

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
