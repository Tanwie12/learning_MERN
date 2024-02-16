import { createSlice } from "@reduxjs/toolkit"


const initialState = {
  posts: [ { id: 1, title: 'Sample Post 1', content: 'This is the content of Sample Post 1' },],
};

  const postSlice=createSlice({
    name:'post',
    initialState,
    reducers:{
        Addpost:(state,action)=>{
            state.posts.push(action.payload)
        },
        updatePost: (state, action) => {
          const { id, title, content } = action.payload;
          const post = state.posts.find((post) => post.id === id);
          if (post) {
            state.posts = { id, title, content };
          }
        },
      } 
  })
export const{Addpost,updatePost}=postSlice.actions
  export const postReducer=postSlice.reducer