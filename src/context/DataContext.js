import { createContext,useState,useEffect } from 'react'
import useWindowSize from '../hooks/useWindowSize';
import useAxiousFetch from '../hooks/useAxiousFetch';
import { useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import api from '../api/Posts'


const DataContext =createContext({})


export const Dataprovider=({children})=>{
    const [post,setPosts]=useState(
        []
      )
      
    
      const [search,setSearch]=useState('');
    
      const [searchResult,setSearchResult]=useState([])
      const[postTitle,setPosttitle]=useState('');
      const [postBody,setPostBody]=useState('');
      const [editTitle,setEditTitle]=useState('');
      const [editBody,setEditBody]=useState('')
      const navigate=useNavigate();
    const {width}=useWindowSize();
    
    
    const {data,fetchErr,isloading}=useAxiousFetch("http://localhost:3500/post")
    
      // useEffect(()=>{
      // const fetchApi=async()=>{
      //   try{
    
      //     const response=await api.get('/post');
      //     setPosts(response.data);
      //     console.log(response.data)
      //   }catch(err){
      //     if(err.response){
      //       console.log(err.response.data);
      //       console.log(err.response.status);
      //       console.log(err.response.header);
      //     }else{
      //       console.log(`err${err.message}`);
      //     }
    
      //   }
      // }
      // fetchApi();
      // },[]),
    
    
      useEffect(()=>{
        setPosts(data)
      },[data])
    
    useEffect(()=>{
      const filterresult=post.filter((post)=>
        ((post.body).toLowerCase()).includes(search.toLowerCase())||
        ((post.title).toLowerCase()).includes(search.toLowerCase()))
      setSearchResult(filterresult.reverse());
    },[post,search]);
    
      const handkeSubmit=async(e)=>{
        e.preventDefault();
        const id=post.length?post[post.length-1].id+1:1;
        const datetime=format(new Date(),'mmm ddd,yyy, pp');
        const newPost={id,title:postTitle,datetime,body:postBody};
        try{
        const response=await api.post('/post',newPost)
        const allPosts=[...post,response.data];
        setPosts(allPosts);
        setPosttitle('')
        setPostBody('')
        navigate('/')
        }catch(err){
          if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.header);
          }else{
            console.log(`err${err.message}`);
          }
    
        }
      }
    
      const handleDelete=async(id)=>{
        try{
        await api.delete(`/post/${id}`)
        
        const postList=post.filter(post=>post.id !==id);
        setPosts(postList);
        navigate("/")
        }catch(err){
          if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.header);
          }else{
            console.log(`err${err.message}`);
          }
        }
    
      }
      const handleUpdate=async(id)=>{
        const datetime=format(new Date(),'mmm ddd,yyy, pp');
        const newPost={id,title:editTitle,datetime,body:editBody};
        try{
          const response=await api.put(`/post/${id}`,newPost);
          setPosts(post.map(post=>post.id===id?{...response.data}:post));
          setEditTitle('')
          setEditBody('')
          navigate('/')
        }catch(err){
          console.log(err);
        }
      }
    
    return(
        <DataContext.Provider value={{
            width,
            search,setSearch,
            searchResult, fetchErr,isloading,
            handkeSubmit,
            postTitle,
            setPosttitle,
            postBody,
            setPostBody,
            post,
            handleDelete,
            handleUpdate,
            editBody,
            setEditBody,
            editTitle,
            setEditTitle,

        }}>
            {children}

        </DataContext.Provider>
    );
}

export default DataContext;