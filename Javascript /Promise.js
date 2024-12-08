//promise
const newPromise = new Promise((resolve, reject) => {
    setTimeout(() => {

        const arrone=["html","css","js"];
        if(arrone.length>0){
            resolve("completed");   

        }
        else{
            reject("Array is empty");

        }
        
    }, 3000);
});
newPromise.then((result)=>{
    console.log(result);

})
.catch((result)=>{
    clg.log(result);
})

//ASYNC AWAIT
