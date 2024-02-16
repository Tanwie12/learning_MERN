import React from 'react'
import { useSelector } from 'react-redux'


/**
 * Component to display a single post
 */
export default function Singlepost() {
    // Get the postId from the URL
    
    
    // Get the post from the Redux store
    const post = useSelector(state => state.post.posts);
    
    // If the post is not found, display a message
    if (!post) {
        return (
          <section>
            <h2>Post not found!</h2>
          </section>
        )
    } else {
        // Display the post details
        return (
            <section className=''>
                <article className="post">
                    <h2>{post.title}</h2>
                    <p className="post-content">{post.content}</p>
                </article>
            </section>
        )
    }
}
