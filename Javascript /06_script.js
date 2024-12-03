let myHeros = ["thor", "spiderman", "tony"];
let dcHeros = ["batman", "superman"];

let heropower = {
  thor: "hammer",
  spiderman: "sling",
  getspiderpower: function () {
    console.log("spidey power is ${this.spiderman}");
  },
};
Object.prototype.hitesh = function () {
  console.log("hitesh is present in all objects");
}

Array.prototype.heyHitesh=function(){
    console.log('Hitesh says hello')
}

myHeros.hitesh();


//inheritance

const User = {
  name: "top name",
  email: "topuser@gmail.com",
};
const Teacher = {
  makeVideos: true,
};
const TeachingSupport = {
  isAvailable: false,
};
const TSAssistant = {
  makeAssignment: "JS assignment",
  fullTime: true,
  __proto__: TeachingSupport,
};

// Teacher can be binded with user 
Teacher.__proto__=User

// modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

//Goal : get true length of string
String.prototype.truelength = function(){
    console.log(`true length is: ${this.trim().length}`);
}
let myname="hitesh  "