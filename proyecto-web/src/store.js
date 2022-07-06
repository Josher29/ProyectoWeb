import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import appSlice from "./Slices/appSlice";
import userSlice from "./Slices/userSlice";
import reactionSlice from "./Slices/reactionSlice";

const reducers = combineReducers({
  app: appSlice,
  user: userSlice,
  reaction: reactionSlice
});

const rootPersistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(rootPersistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
