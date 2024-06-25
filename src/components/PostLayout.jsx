import React from 'react';
import { Link, Outlet } from 'react-router-dom'

const PostLayout = () => {
  return (
   <>
     <Link to="/postpage/1" >post 1</Link> <br />
     <Link to="/postpage/2" >post 2</Link> <br />
     <Link to="/postpage/3" >post 3</Link> <br />
     <Link to="/postpage/4" >post 4</Link> <br />
     <Link to="/postpage/5" >post 5</Link> <br />
     <Link to="/postpage/newpost">new post</Link>
     <Outlet/>
     </>
 
  )
}

export default PostLayout