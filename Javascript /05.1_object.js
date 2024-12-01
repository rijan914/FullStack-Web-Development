// const object ={
//     rocket:'😇',
//     home:'🏠'
//     //key :value;
// };

// for(k in object){
//     console.log(k);
// }
// //string,number , bigint,boolean,null,undefine,symbol

// const obj1={
//     rocket:'1',
//     fuel:3,
//     config:{
//         name:'mars'
//     }
// }
// obj1.fuel=200;
// obj1['year']=3000;
// //we can modify the value of object

// //part 2
// const obj2=new Object() //constructor
// obj2.redbook='red'
// obj2.myvalue='1 blue book '
// console.log(obj2)

// //part 3
// const powers ={
//     fly:true,
//     coordinate:Math.random()+2

// }
// const obj3 = Object.create(powers)

// console.log(obj3.coordinate)


// //practice 
// const bookish={
//     book1:'nice',
//     book2:'okone'
// }
// console.log(bookish)
// //second 
// const rijan=new Object()
// rijan.redbook='red'
// console.log(rijan)

// //third 
// const thirdwheel={
//     kohoyo:'kta',
//     hora:'hainahola'
// }
// const kohun=Object.create(thirdwheel);
// console.log(kohun.kohoyo);
// console.log(thirdwheel);
// console.log(Object.getPrototypeOf(thirdwheel));

//---------------


// // part 4 
// const obj4 = Object.create({})
// // Object.defineProperty()
// // obj4.name='hitesh';

// Object.defineProperty(obj4,'book',{
//     // icon:'red';
//     get:()=> 'bleue',
//     enumerable:true
// })
// console.log(obj4.book);

// for(k in obj4)
// {
//     // console.log("value is",k)
// }

//part 5
const obj5={
    comics:'marvel',
    pen:'',
    printeComic:function(){
       this.pen+='notebook'  
       console.log(this) 
       return this;
            /////important
    },
    //arrow function dont havve access to this keyword
    printaComic: ()=>{
        // this.pen+= 'rijan'
        console.log(this)
    },
}
console.log(obj5)
console.log(obj5.printeComic)
console.log(obj5.printaComic)

console.log(obj5.printeComic().printeComic().printaComic())

