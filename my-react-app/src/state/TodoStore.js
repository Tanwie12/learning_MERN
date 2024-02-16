import { configureStore } from '@reduxjs/toolkit';

import {updateHandler } from './TodoSlice';
const Todostore = configureStore({
  reducer: {
    update:updateHandler,
    todo: []
    
  },
});

export default Todostore;
