import axios from "axios";
import { useEffect, useState } from "react"

const useAxiousFetch = (dataUrl) => {
const[data,setData]=useState([]);
const[fetchErr,setFetchErr]=useState(null);
const[isLoading,setIsLoading]=useState(false)

useEffect(()=>{
    let isMounder=true;
    const source=axios.CancelToken.source();

    const fatchData=async(url)=>{
        setIsLoading(true);
        try
        {
            const response=await axios.get(url,{
                cancelToken:source.token
            });
            if(isMounder){
                setData(response.data);
                setFetchErr(null);
            }

        }catch(err){
            if(isMounder){
                setFetchErr(err.message);
                setData([])
            }

        }finally{
            isMounder && setTimeout(()=>setIsLoading(false), 2000);

        }

    }
    fatchData(dataUrl);
    const cleanUp=()=>{
        isMounder=false;
        source.cancel();

    }
    return cleanUp;

},[dataUrl])
return {data,fetchErr,isLoading}

}

export default useAxiousFetch