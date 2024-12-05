//Try and Catch
// try: "Let’s bake cookies and hope for the best!"
// catch: "Oh no! Something went wrong. Let's fix it and keep baking!"
//finally : whatever happens it executes

//Syntax
// try {
//   //logical error
//   console.log(anurag);
// } catch (err) {
//   //error handling message
//   console.log("Ohhh my goood bigryooo ");
// } finally {
//   console.log("Keep quiet");
// }

//different types of error we have in Javascript
// -Reference error
// -syntax error
// -type error

//promise
// - pinding
// - fullfilled
// - rejected

//event loop

// const userOne =()=>{
//     console.log("hello one");
// }
// const userTwo =()=>{
//     setTimeout(()=>{console.log("hello i m inside");},3000)
//     console.log("hello two");
// }
// const userThree =()=>{
//     console.log("hello three");
// }
// userOne()
// userThree()
// userTwo()

//promise
const one = () => {
  return "index";
};
const two = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("cred clear");
    }, 3000);
  });
};
const three = () => {
  return " redirect to homepage";
};
const callme = async() => {
  let valone = one();
  console.log(valone);
  let valtwo = await two();
  console.log(valtwo);
  let valthree = three();
  console.log(valthree);
};
callme();
