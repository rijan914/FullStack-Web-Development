
import React , {useState} from 'react'

function UpdaterFunction() {
    const [count ,setCount]= useState(0);
    function increment(){
        setCount(count=>count+1);
        setCount(count=>count+1);
        setCount(count=>count+1);

    };
    function decrement(){
        setCount(count=>count-1);
                

    }
    function reset(){
        setCount(0);
    }   

    return (
        <div>
            <p>count:{count}</p>
            <button onClick={increment}>Increment</button>
            <button onClick={reset}>Reset</button>
            <button onClick={decrement}>Decrement</button>
        </div>

    )

}
export default UpdaterFunction