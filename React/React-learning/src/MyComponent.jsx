import React,{useState} from "react";

function MyComponent(){
const [name,setName]=useState("Guest");
const [age, setAge]=useState(20);
const [isEmployed,setIsEmployed]=useState(false);

const updateName=()=>{
    setName("Rijan");
}
const incrementAge=()=>{
    setAge(age+1);
}
const toggleEmployedStatus=()=>{
    setIsEmployed(!isEmployed);
}
return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
        <p>Age:{age}</p>
        <button onClick={incrementAge}>Incremenet Age</button>
        <p>Is employed:{isEmployed?"yes":"no"}</p>
        <button onClick={toggleEmployedStatus}>Toggle Status</button>
    </div>
)

}
export default MyComponent