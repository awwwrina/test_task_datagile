import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    counters:  [1]
}

const countersSlice = createSlice({
    name: 'counters',
    initialState,
    reducers: {
        counterAdded(state, action) {
            state.counters.push(action.payload);
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
