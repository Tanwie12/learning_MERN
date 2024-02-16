import { configureStore } from "@reduxjs/toolkit";
import { postReducer } from "./postSlice";
import { counterReducer } from "../../state/Store";

export const postStore= configureStore({
    reducer:{
        post:postReducer,
        counter:  counterReducer,
    }

})