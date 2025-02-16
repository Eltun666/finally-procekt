`use client`;

import { configureStore } from "@reduxjs/toolkit";
import  counterSlice  from "./Features/product/productSlice"
import  searchSlice  from "./Features/product/searchSlice";

export const store = configureStore({
    reducer:{
        counter: counterSlice,
        search: searchSlice,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;