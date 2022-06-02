import React, { useEffect, useState } from 'react';

export default function Compute({value}){
  const [item, setItem] = useState("0");
  const [result, setResult] = useState("0");
  const operator = ['/', '*', '+', '-', '.', '=']
    useEffect(() => {
      var v = value()
      console.log(v)
      setItem(v)
      console.log("uodate")
      if(operator.includes(v.slice(-1)))
       setResult(eval(v.substring(0, v.length - 1)))

      if(v.slice(-1)=='='){
        console.log(v, item)
        v = v.substring(0, v.length - 1)
        setItem(eval(v))
      }
    }, [value])


    return (
        <><span>{item || "0"}</span><br></br><span>{ result }</span></>
    )
}