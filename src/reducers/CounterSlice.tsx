import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '../store/configureStore';
import { fetchCounterData } from '../actions';

// Define a type for the slice state
interface CounterState {
    value: number;
    loading: boolean;
    error: string | null | undefined
}

// Define the initial state using that type
const initialState: CounterState = {
    value: 0,
    loading: false,
    error: null
}

// Create slice
export const counterSlice = createSlice({
    name: 'counter',
    //  `createSlice` will infer the state type from the `initialState` argument
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1
        },
        decrement: (state) => {
            state.value -= 1
        },   
        // Use the PayloadAction type to declare the contents of `action.payload`
        incrementByAmount: (state, action: PayloadAction<number>) => {
            state.value += action.payload
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchCounterData.pending, (state) => {
            state.loading = true;
            state.error = null;
          })
          .addCase(fetchCounterData.fulfilled, (state, action) => {
            state.loading = false;
            state.value = action.payload;
          })
          .addCase(fetchCounterData.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
          });
      },
})

export const { increment, decrement, incrementByAmount } = counterSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectCount = (state: RootState) => state.counter.value

export default counterSlice.reducer
