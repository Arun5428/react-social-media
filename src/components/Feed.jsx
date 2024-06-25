import React from 'react'
import Post from './Posts'


const Feed = ({posts}) => {
  return (
    
        <>
        {posts.map(post=>(
           <Post key={post.id} post={post}/>
        ))}
        </>
  )
}

export default Feed