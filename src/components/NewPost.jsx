import React, { useContext } from 'react'
import DataContext from '../context/DataContext'

const NewPost = () => {
  const { handkeSubmit,postTitle,setPosttitle,postBody,setPostBody}=useContext(DataContext)
  return (
    <main className='NewPost'>
      <h1>newPage</h1>
      <form action="" className='newPostForm' onSubmit={handkeSubmit} >
        <label htmlFor="">title</label>
        <input type="text"
        required
        value={postTitle}
        onChange={(e)=>setPosttitle(e.target.value)} name="" id="" />
        <label htmlFor="">Post</label>
        <textarea name="" id=""
        required
        value={postBody}
        onChange={(e)=>setPostBody(e.target.value)}
        ></textarea>
        <button type='submit'>submit</button>

      </form>
      </main>
  )
}

export default NewPost