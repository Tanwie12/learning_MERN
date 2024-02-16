import { Button } from '@material-tailwind/react';
import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'
import { SelectAllpost, fetchPostData } from './states/postSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
export default function Postlist() {
  const dispatch=useDispatch()
    const postData=useSelector(SelectAllpost)
    const postStatus=useSelector(state=>state.post.status);
    
    console.log(fetchPostData)
    useEffect(()=>{
        if(postStatus==='idle'){
            dispatch(fetchPostData())
        }
    },[postStatus,dispatch])



    const renderedPosts=postData.map(post=>(
        <article className='flex flex-row p-4 bg-blue-gray-50' key={post.id}>
            <div className='mx-3'>
            <h3>{post.title}</h3>
            </div>
            <div className='mx-3 bg-blue-gray-300'> 
            <p>{post.content}</p>
            <Link to={`/post/${post.id}`} className="button muted-button">
        View Post
      </Link>
      <Link to={`/editPost/${post.id}`} className="button">
         <Button variant='outlined' color='red' > Edit Post</Button>
        </Link>
            </div>
        </article>
    ))
  return (
    <div className='align-center container '>
<div className='text-2xl shadow-lg'>post</div>

        {renderedPosts}
        <Outlet/>
        </div>
  )
}
