//Higher order function
// CALLBACK
// FUNCTION IS CALLING A FUNCTION

// Higher order function is a function which takes  other function as parameter or return a function as a value . The function passed as a parameter is called callback.

// function a(){
//     console.log("I was called by a function");
// }
// function b(){
// a();
// }
// b();

// //mini program
// const callback =(n)=>
// {
//     return n**2;
// };
// function cube(callback,n){
//     return callback(n)*n;
// }
// console.log(cube(callback,2));

//For each
// const arr =["hey","hi","hello","hola","Namaste"];
// arr.forEach((val)=>{
//     console.log(val);

// });
// arr.forEach(myfunc)
// function myfunc(val){
//     console.log(val);

// }

//SetTimeOut
// setTimeout(()=>{
//     console.log("HELLO FSJS 2 ");
// },3000)

// setInterval(()=>{
//     console.log("got to toilet");
// },2000)

//map
const numbers = [1, 2, 3, 4, 5, 6];
const numsq = numbers.map((num) => num * num);
console.log(numsq);

//filter

const count = [
  "india",
  "pakistan",
  "canada",
  "ireland",
  "japan",
  "kenya",
  "nepal",
  "germany",
  "Srilanka",
];
const store=count.filter((val)=> val.includes("land"))
console.log(store);
//reduce
const num1=[1,2,3]
const sum = num1.reduce((acc,curr)=>acc+curr,0);
console.log(sum);

//find
//every
//some
//sort
