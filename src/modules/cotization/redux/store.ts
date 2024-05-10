import { configureStore } from "@reduxjs/toolkit";
import ratesReducer from './ratesSlice';

export const store = configureStore({
    reducer : {
        user: ratesReducer,
    }
})