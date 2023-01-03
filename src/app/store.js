import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counter-slice';

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});

export default store;
