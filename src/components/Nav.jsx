import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext'

const Nav = () => {
  const {search,setSearch}=useContext(DataContext)
  return (
   <nav className='Nav'>
    <form action="" className='searchForm' onSubmit={(e)=>e.preventDefault()}>
      <label htmlFor="">search posts</label>
      <input type="text" name="" id="search"
      placeholder='search posts' 
      value={search}
      onChange={(e)=>setSearch(e.target.value)}/>
    </form>
<ul>
  <li><Link to="/">Home</Link></li>
  <li><Link to="newpost">Post</Link></li>
  <li><Link to="about">about</Link></li>
  
  
  </ul>   


    </nav>
  )
}

export default Nav