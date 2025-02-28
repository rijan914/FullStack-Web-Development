// useEffect(function)
// 1. useEffect(()=>{}) // runs after every re-render 
// 2. useEffect(()=>{},[]) // runs only on mount
// 3. useEffect(()=> {},[value])  // runs on mount + when value changes
import React, {useState, useEffect} from 'react';

function Effecting(){

    const[count,setCount]= useState(0);

    useEffect(()=>{
        document.title=`My Counter Program:`; 

    },[]);
    function addCount(){
    setCount(c=>c+1);
}


    return (
<>
<p>Count: {count}</p>
<button onClick={addCount}>Add</button>
</>

    );
}
export default Effecting;


