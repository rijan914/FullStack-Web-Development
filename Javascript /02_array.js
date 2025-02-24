// let names=['rijan','ankur','surya','anirudh']
// console.log(names)
// console.log(names.length)

// console.log(names[names.length-1])
// names[4]='viraj'
// console.log(names)

// let names=new Array('name1','name2')//a way to declare a array // not recommended
// console.log(names)

// //push
// names.push('rijannnn')
// console.log(names)

// //pop
// names.pop('rijannn')
// console.log(names)

// //slice
// let names=['rijan','ankur','surya','anirudh']
// // console.log(names.slice(1,3))

// //splice
// let fruit=["Apple","Bada Apple",'Chota Apple','who','are','you']
// fruit.splice(2,2,'kharab apple','acha apple')
// console.log(fruit)

//concatenation
// let arr1=[1,2,3]
// let arr2=[3,23,3,2]
// console.log(arr1.concat(arr2))

//fill
let arr4 = [1,2,23,43,3245,24,42];
arr4.fill('anurag',2,5);
console.log("arr4",arr4);

//include
// check an item in the index
// let arr11=['rijan','pigeon','sijan','brother']
// console.log(arr11.includes('sijan',0))
//provide true or false answer

//indexof
// console.log(arr11.indexOf('rijan'))
// console.log(arr11.indexOf('sijan'))

//isArray()
// let num='rijan';
// console.log(Array.isArray(arr11));

// console.log(ar11.join("and"));
// console.log(arr11.join(" and "));

//keys
//Forof

//lastindexof
// let arr11 = ["rijan", "pigeon", "sijan", "brother"];
// let maths = ["anurag",1, 23, 43, 4];
// console.log(arr11.lastIndexOf('brother'))

//map
// console.log(maths.map(Math.sqrt));
// console.log(maths.pop())
// console.log(maths.shift())

//sort
let names = ["rijan", "pigeon", "sijan", "brother"];
// console.log(names.sort())
// console.log(names.reverse(names.sort()))

// // console.log(names[1])
// console.log(names.unshift('rijughan','pigeon'));
// console.log(names)

//converting to array
let name = "rizzon";
let array1 = name.split();
console.log(array1);

//for of
let fruit = ["Apple", "Bada apple", "Chota apple", "Double apple"];
let Upperfruit = [];
for (const badaletter of fruit) {
  Upperfruit.push(badaletter.toUpperCase());
}
console.log(Upperfruit);

let football = ["Messi", "Ronaldo", "Kaka", "Vini"];
let goat = [];
for (const prime of football) {
  goat.push(prime.toUpperCase());
}
console.log(goat);

let teachers = ["Leonardo", "Caprio", "fabrion", "Sickle"];
let best = [];
for (const yoteacher of teachers) {
  best.push(yoteacher.toLowerCase());
}
console.log(best);

//break and continue
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break; //terminate everything and come out of the block
  }
  console.log(i);
}
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue; //skip ,omit
  }
  console.log(i);
}



///array method in javascript  and write a blog on it 
