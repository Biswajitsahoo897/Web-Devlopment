import { configureStore } from "@reduxjs/toolkit";
import todoReducer from '../Features/ToDo/todoSlice';
export const store = configureStore({
    reducer:todoReducer

});


// it is the single source truth value