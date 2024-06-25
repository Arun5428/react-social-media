import React, { useContext, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import DataContext from '../context/DataContext';

const EditPost = () => {
  const {  post,handleUpdate,editBody,setEditBody,editTitle,setEditTitle}=useContext(DataContext)
  const {id}=useParams();
  const posts=post.find(post=>(post.id).toString()===id);
  useEffect(()=>{
    if(posts){
      setEditTitle(posts.title);
      setEditBody(posts.body);
    }

  },[posts,setEditBody,setEditTitle])
  return (
 
    <main className='NewPost'>

      {editTitle &&
      <>
      
      <h1>edit post</h1>
      <form action="" className='newPostForm' onSubmit={(e)=>e.preventDefault()} >
        <label htmlFor="">title</label>
        <input type="text"
        required
        value={editTitle}
        onChange={(e)=>setEditTitle(e.target.value)} name="" id="" />
        <label htmlFor="">Post</label>
        <textarea name="" id=""
        required
        value={editBody}
        onChange={(e)=>setEditBody(e.target.value)}
        ></textarea>
        <button type='submit' onClick={()=>handleUpdate(posts.id)}>submit</button>

      </form>
      </>}
      {
        !editTitle&&
        <>

<h2>page not found</h2>
      <p>well, that's disappointing</p>
      <p>
        visite our home page
      </p>

        </>
      }
      </main>

  )
}

export default EditPost