import React from 'react'
import { Link } from 'react-router-dom'

const post = ({post}) => {
  return (
  
    <article className='post'>
        <Link to={`newpost/${post.id}`}>
      <h2>{post.title}</h2>
      <p className='postDate'> {post.datetime}</p> </Link>
      <p className='postbody'>{
        (post.body).length<=25?post.body:`${(post.body).slice(0,25)}....`

        }</p>
    </article>
  )
}

export default post