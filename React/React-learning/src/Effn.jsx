import React , {useState,useEffect} from 'react';

function Effn(){
const [count,setCount]=useState(0);
const [total, setTotal] = useState(1);
    // first - side-effect function 
    // second - clean-up function 
    // third - comma seperated dep list

    // variation :1 
    // runs on every render
    // useEffect(()=>{
    // alert("i will run on each render ")
    // })

    //variation : 2 
    // that runs on only first render 
    // useEffect(()=>{
    //     alert("i will run on only 1st render")

    // },[])

    // variation : 3
    // useEffect(()=>{
    //     alert("i will run everytime when count is updated ")
    // },[count])
    
    //variation :4
    // multiple dependencies
    // useEffect(()=>{
    //     alert("i will run every time when count total is updated")


    // },[count,total])

    //variation : 5
    // add cleanup function 
    // useEffect(()=>{
    //     alert("count is updated ")
    //     return()=>{
    //         alert("count is unmounted from UI")

    //     }
    // },[count]);
    



function handleTotalClick(){
    setTotal(total+1)

}
    function handleClick(){
        setCount(count+1);
    }
    return(
<div>
    <button onClick={handleClick}>Update Count </button>
    <br />
    Count is : {count}
    <br />
    <button onClick={handleTotalClick}>Update Total </button>
    <br />
    Total is :{total}
</div>
    )

}
export default Effn;