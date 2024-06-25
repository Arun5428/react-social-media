import React, { useContext } from 'react'
import Feed from './Feed'
import DataContext from '../context/DataContext'

const Home = () => {
  const{searchResult, fetchErr,isloading}=useContext(DataContext)
  return (
    <main className='Home'>
     {isloading && <p className='statusMsg'>Loading....</p>}
     {!isloading && fetchErr&& <p className='statusMsg' style={{color:"red"}}>{fetchErr}</p>}
     {!isloading && !fetchErr&& (searchResult.length? <Feed posts={searchResult}/>:<p className='statusMsg'>no post to display</p>)}
     
      
      
      
    
    
    </main>
  )
}

export default Home