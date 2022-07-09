import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import appSlice from "./Slices/appSlice";
import userSlice from "./Slices/userSlice";
import reactionSlice from "./Slices/reactionSlice";
import {
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER
} from 'redux-persist'

const reducers = combineReducers({
  app: appSlice,
  user: userSlice,
  reaction: reactionSlice
});

const rootPersistConfig = {
  key: "root",
  storage:storage,
};
const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoreActions: [FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER],
      },
    }),
});

export default store;
