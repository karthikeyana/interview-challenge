import { useState, useEffect } from 'react';

const useFetch = (url,method,input) => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch(url,{
      method: method, 
      headers: { 'Content-Type': 'application/json'},
      body: JSON.stringify({key:input}) 
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setData(data.items || data.result);
      }).catch(e=>{
        console.log(e)
      });
  }, [url,method,input]);

  return data;
};

export default useFetch;
