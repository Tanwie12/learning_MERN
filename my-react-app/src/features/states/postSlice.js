import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

const initialState = {
  posts: [],
  status:'idle',
  error:null,
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
      },
      extraReducers:(builder)=>{
        builder
        .addCase(fetchPostData.pending,(state)=>{
          state.status='loading'
        })
        .addCase(fetchPostData.fulfilled,(state,action)=>{
          state.status='succeeded'
          state.posts=action.payload
        })
        .addCase(fetchPostData.rejected,(state,action)=>{
          state.status='failed'
          state.error=action.error.message
        })
      }
      

  })
  export const SelectAllpost=state=>state.post.posts
  export const selectPostById = (state, postId) =>
  state.post.posts.find(post => post.id === postId)
export const{Addpost,updatePost}=postSlice.actions
  export const postReducer=postSlice.reducer

  // creating asynyc function to fetch post data using redux toolkit
  

export const fetchPostData = createAsyncThunk(
  "post/fetchPostData",
  async () => {
    const response = await axios.get("http://localhost:3001/posts");
    const data = await response.data;
    return data;
  }
);
  