import { createSlice } from "@reduxjs/toolkit";

import { INITIAL_VALUE } from "../constants";

const initialState = {
    counters:  [INITIAL_VALUE]
}

const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        counterAdded(state) {
            const sum = state.counters.reduce((acc, num) => acc + num);
            state.counters.push(sum);
        },
        counterDeleted(state, action) {
            const index = action.payload;
            state.counters.splice([index], 1);
        },
        valueIncreased(state, action) {
            const index = action.payload;
            state.counters[index] += 1;
        },
        valueReduced(state, action) {
            const index = action.payload;
            state.counters[index] -= 1
        }
    }
})

const {actions, reducer} = countersSlice;

export default reducer;

export const {
    counterAdded,
    counterDeleted,
    valueIncreased,
    valueReduced
} = actions;
