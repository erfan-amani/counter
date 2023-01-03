import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: 0,
};

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increament: (state) => {
      state.value++;
    },
    decreament: (state) => {
      state.value--;
    },
    increamentByAmount: (state, action) => {
      state.value += action.payload;
    },
    reset: (state) => {
      state.value = 0;
    },
  },
});

export const {
  increament,
  decreament,
  increamentByAmount,
  reset,
} = counterSlice.actions;

export const increamentAsync = (amount) => (dispatch) => {
  setTimeout(() => {
    dispatch(increamentByAmount(amount));
  }, 1000);
};

export default counterSlice.reducer;
