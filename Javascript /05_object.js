//object 
let userName={
    firstname:'anurag',
    lastname:'tiwari',
    role:'admin',
    logincount:23
};
// console.log(userName.role)

userName.logincount=43;
// console.log(userName)

//forin
for(let x in userName)
{
    console.log(userName[x])
}

