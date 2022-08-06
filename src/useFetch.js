import { useState ,useEffect } from "react";

const useFetch=(url)=>{

const [data, setData] = useState(null);
const [isPending,setIsending]=useState(true);
const [error, setError] = useState(null);

    useEffect(()=>
    {

      const abortCont=new AbortController();
  
      setTimeout(()=>{
        fetch(url,{signal:abortCont.signal})
      .then(res=>{
        //console.log(res);
        if(!res.ok)
        {
          throw Error('could not fetch data from that resource/URL');
        }
        return res.json()
      })
      .then((data)=>{
        setData(data);
        setIsending(false);
        setError(null);//after first request is failed it will set true and then if we are making subsequent request set to null
      })
      .catch(err=>{
        if(err.name==='AbortError')
        {
          console.log('Fetch aborted');
        }
        else
        {
          setIsending(false);
          setError(err.message);
        }
        
      })
      },1000);

      return ()=>abortCont.abort;
      
    
    },[url]);

    return {data,isPending,error};
}

export default useFetch;