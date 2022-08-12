import { useEffect, useState } from "react";

export const useFetch =(url)=>{
const [data,setData] =useState(null)
const [loading,setLoading]= useState(false)
const [error,setError] = useState(false)


useEffect(() => {
    const abortConst = new AbortController();
try {
    setLoading(true)

const fetchData = async()=>{
    const res = await fetch(url,{signal:abortConst.signal})
if (!res.ok) {
    throw new Error (res.statusText)
}
const data = await res.json()
setData(data)
setLoading(false)
}
fetchData();
} catch (error) {
     setLoading(false);
 if (error==="AbortError") {
    setError("Abort")
 } else {
    setError("couldn't fetch")
 }   

}

  return () =>  abortConst.abort


}, [url])


return{data,loading,error}
}