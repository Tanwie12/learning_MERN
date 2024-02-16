// store.js
import { configureStore } from '@reduxjs/toolkit';
import { counterReducer } from './Store';

const store = configureStore({
  reducer: {
    counter:  counterReducer,
    
  },
});

export default store;
