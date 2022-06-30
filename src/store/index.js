import { configureStore } from "@reduxjs/toolkit";
import counters from './counterSlice';

const store = configureStore({
    reducer: {counters},
    devTools: process.env.NODE_ENV !== 'production'
})

export default store;