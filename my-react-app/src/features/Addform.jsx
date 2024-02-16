import { Button } from '@material-tailwind/react';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Addpost } from './states/postSlice';
import { nanoid } from '@reduxjs/toolkit';

export default function Addform() {
    const dispatch=useDispatch()
    const [postData, setPostData] = useState({id:nanoid(), title: '', content: '' });
    const handleChange = e => {
        const { name, value } = e.target;
        setPostData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };
  const handleSubmit = (e) => { 
    e.preventDefault()
    if(postData.title && postData.content!==''){
        dispatch(Addpost(postData))
        setPostData({id:nanoid(), title: '', content: '' });
    }else{
        alert('empty field');
    }
  
   

  }
  return (
    <div>
        <section className='bg-green'>
      <h2>Add a New Post</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="title"
          value={postData.title}
          onChange={handleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="content"
          value={postData.content}
          onChange={handleChange}
        />
  <Button type='submit' >save post</Button>
      </form>
    </section>
    </div>
  )
}
