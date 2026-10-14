import { configureStore } from "@reduxjs/toolkit";
import bankReducer from '../features/bankslice';

export const store = configureStore({
    reducer: {
        bank: bankReducer
    }
})