import { createSlice } from "@reduxjs/toolkit";
const initialState={
    newData:[],
}
const Dataslice=createSlice({
    name:'newdata object',
    initialState,
    reducers:{
        updateHandler:(state,action)=>{
            return state.map((item) =>
            item.key === action.payload.key ? { ...item, name: action.payload.updatedName } : item
          );
                 
            
                
        }
    }
})
export const{updateHandler}=Dataslice.actions
export const UpdateHandler=Dataslice.reducer