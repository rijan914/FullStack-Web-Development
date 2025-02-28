import React, {useState, useEffect} from 'react';

function TimerComponent(){
const [seconds, setSeconds]=useState(0);

//runs on every render
useEffect(()=>{
            const intervalId= setInterval(()=>{
                console.log("set interval started ")
                setSeconds(prevSeconds=>prevSeconds+1);
            },1000);

return()=> {
    console.log("time to stop")
    clearInterval(intervalId);
    //component unmount bhayesi clear

};
 },[])
    return(
    
        <div>
            <h1>Seconds: {seconds}</h1>
        </div>

    )

}
export default TimerComponent;