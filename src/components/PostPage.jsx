import React, { useContext } from 'react'
import { Link, useParams } from 'react-router-dom'
import PostLayout from './PostLayout'
import DataContext from '../context/DataContext'


const PostPage = () => {
  const {post,handleDelete}=useContext(DataContext)
  const {id}=useParams();
  const posts=post.find(posts=>(posts.id).toString()===id);
  return (
    <main className='PostPage'>
      <article className='post'>
        {
          posts&&
          <>
           <h2>{posts.title}</h2>
      <p className='postDate'> {posts.datetime}</p> 
      <p className='postbody'>{
       posts.body

        }</p>
        <Link to={`/edit/${posts.id}`}>
        <button>edit</button></Link>
        <button onClick={()=>handleDelete(posts.id)}> delete post</button>

          </>
        }
        {!post &&
        <>
         <h2>page not found</h2>
      <p>well, that's disappointing</p>
      <p>
        visite our home page
      </p>
        </>
        }

      </article>

     
    </main>
   
   
  )
}

export default PostPage