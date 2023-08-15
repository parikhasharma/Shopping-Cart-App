import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cardSlice from "./cartSlice";
import uiSlice from "./uiSlice.js";

const store=configureStore({
    reducer:{
        auth:authSlice.reducer,
        cart:cardSlice.reducer,
        ui:uiSlice.reducer,
    }
})

export default store