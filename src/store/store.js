import { configureStore, combineReducers } from "@reduxjs/toolkit";
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
import storage from "redux-persist/lib/storage";
import basketAddSlice from "../features/basketCount/addItembasket";
import Theme from "../features/basketCount/addTheme";
import Likes from "../features/basketCount/Likes";
import Search from "../features/basketCount/Search";
import Menu from "../features/basketCount/Menu";

const rootReducer = combineReducers({
  item: basketAddSlice,
  themes: Theme,
  like: Likes,
  search: Search,
  menu: Menu,
});
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["menu", "search"],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store);
