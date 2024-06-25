import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import Home from './components/Home';
import NewPost from './components/NewPost';
import PostPage from './components/PostPage';
import About from './components/About';
import Missing from './components/Missing';
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Post from './components/Posts';
import PostLayout from './components/PostLayout';
import { useEffect, useState } from 'react';
import { format } from 'date-fns';
import api from './api/Posts'
import EditPost from './components/EditPost';
import useWindowSize from './hooks/useWindowSize';
import useAxiousFetch from './hooks/useAxiousFetch';
import { Dataprovider } from './context/DataContext';
// import DataProvider from'./context/DataContext';

function App() {


  return (
    <div className="App">
     <Dataprovider>

      

     
 <Header
//  width={width}
 title='social media'
 />
 <Nav />
 <Routes>
  <Route path='/' element={<Home

 />}/>
 <Route path='/newpost'>
 <Route index element={ <NewPost
//  postTitle={postTitle}
//  setPostTitle={setPosttitle}
//  setPostBody={setPostBody}
//  postBody={postBody}
//  handleSubmit={handkeSubmit}
 />} />

 <Route path=':id' element={<PostPage 
//  post={post} handleDelete={handleDelete} 
 />}/>
 </Route>

 <Route path='/edit/:id' element={<EditPost 
  // post={post}
  // handleEdit={handleUpdate}
  // editBody={editBody}
  // setEditBody={setEditBody}
  // editTitle={editTitle}
  // setEditTitle={setEditTitle}
 />}/>
  <Route path='/about' element={<About/>}/>
  <Route path='*' element={<Missing/>}/>

 </Routes>

 <Footer/>
 {/* <Home
 post={searchResult}
 />

 <NewPost
 postTitle={postTitle}
 setPostTitle={setPosttitle}
 setPostBody={setPostBody}
 postBody={postBody}
 handleSubmit={handkeSubmit}
 />
 <PostPage/>
 <About/>
 <Missing/>
 <Footer/> */}

</Dataprovider>
    </div>
  );
}

export default App;
