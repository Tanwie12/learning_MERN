import{createAsyncThunk, createSlice} from '@reduxjs/toolkit'

const initialState={
    value:1,
}
 const counterSlice=createSlice({
     name:'counter',
     initialState: {
        value: 0
      },
     reducers:{
        increment:(state)=>{
            state.value +=1;
        },
        decrement:(state)=>{
            state.value -=1;
        },
        incrementByAmount:(state,action)=>{
            state.value+=action.payload
        }
     },
     extraReducers:(builder)=>{
        builder.addCase(incrementAsync.pending,(state)=>{
            console.log('pending');
        })
        builder.addCase(incrementAsync.fulfilled,(state,action)=>{
            state.value +=action.payload
        })

     }

})
export const incrementAsync=createAsyncThunk(
    'counter/async',
    async(amount)=>{
        await new Promise((resolve, reject) => setTimeout(resolve,1000))
        return amount;
    }
)
export const counterReducer= counterSlice.reducer
export const{increment,decrement,incrementByAmount}=counterSlice.actions
