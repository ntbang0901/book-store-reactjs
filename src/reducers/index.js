import { authReducer } from "./authReducer";
import { productReducer } from "./productReducer";
import { cartReducer } from "./cartReducer";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import autoMergeLevel2 from "redux-persist/lib/stateReconciler/autoMergeLevel2";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
};

const userPersistConfig = {
  ...persistConfig,
  key: "user",
  whitelist: ["isLogin", "currentUser", "token", "refreshToken"],
};

const cartPersistConfig = {
  ...persistConfig,
  key: "cart",
};

const rootReducer = combineReducers({
  auth: persistReducer(userPersistConfig, authReducer),
  product: productReducer,
  carts: persistReducer(cartPersistConfig, cartReducer),
});

export default rootReducer;
