import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../feature/counter/counterSlice";
import postReducer from "../feature/counter/postSlice";
import storage from "redux-persist/lib/storage";
import {persistReducer} from "redux-persist/";
import { combineReducers } from "@reduxjs/toolkit";

const persistConfiguration = {
    key: 'root',
    version: 1,
    storage
};

const reducer = combineReducers({
  post: postReducer,
  counter: counterReducer,
});

const persistedReducer = persistReducer(persistConfiguration, reducer)

export const store = configureStore({
    reducer: persistedReducer
})