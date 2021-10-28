import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
// import logger from "redux-logger";
import storage from "redux-persist/lib/storage";
// import { contactsReducer } from "./phonebook";
import { authReducer } from "./authorization";
import {
  persistedAuthReducer,
  persistedUserReducer,
} from "./authorization/slice";

const middleware = (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: {
      ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
    },
  });
// .concat(logger);

// const authPersistConfig = {
//   key: "auth",
//   storage,
// };

// const userPersistConfig = {
//   key: "user",
//   storage,
// };

const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    auth: persistedAuthReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === "development",
});

const persistor = persistStore(store);

export { store, persistor };
