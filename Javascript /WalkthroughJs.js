let userDetails = {
  name: [],
  age: 20,
  address: "ktm",
  email: "abcd@gmail.com",
  contact: 1234567890,
  courseList: [],
getName:function(name){
    this.name.push(name);
},
  buycourse: function(courseName) {
    this.courseList.push(courseName);
  },
  getCourseCount:function(courseList){
    return`${this.name} is enrolled in total ${this.courseList.length} courses`;
  }
};

userDetails.buycourse("js");
console.log(userDetails);
userDetails.getName("rijan","bhandari");
console.log(userDetails);
console.log(userDetails.getCourseCount());