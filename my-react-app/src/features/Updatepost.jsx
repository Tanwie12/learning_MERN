import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
import { updatePost } from './states/postSlice';

export default function Updatepost() {
  const posts = useSelector(state => state.post.posts);
  const { postId } = useParams();
  const post = posts.find(post => post.id === postId);
  
  const [title, setTitle] = useState(post ? post.title : '');
  const [content, setContent] = useState(post ? post.content : '');
  
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'title') {
      setTitle(value);
    } else if (name === 'content') {
      setContent(value);
      
    }
  };
  
  const submitHandler = (e) => {
    e.preventDefault();
    if (title && content) {
      dispatch(updatePost({ id: postId, title, content }));
      navigate(`/posts/${postId}`);
    } 
  };

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  return (
    <div>
      <form onSubmit={submitHandler}>
        <input
          type='text'
          placeholder='Title'
          value={title}
          onChange={handleChange}
          name='title'
        />
        <textarea
          name='content'
          placeholder='Content'
          value={content}
          onChange={handleChange}
        />
        <Button type='submit'>Submit</Button>
      </form>
    </div>
  );
}