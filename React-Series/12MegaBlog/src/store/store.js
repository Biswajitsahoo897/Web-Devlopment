import {configureStore} from '@reduxjs/toolkit'
import authSlice from './authSlice.js'
const store=configureStore({
    reducer:{
        auth:authSlice,
    }
})

export default store


/*
A reducer is a pure function that takes the current state and an action, and returns the new state.

*/