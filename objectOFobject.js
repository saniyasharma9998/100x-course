function adult(users) {
    return users.filter(user => user.age > 18 && user.gender.toLowerCase() === "male") ;
}

const users = [
    { name: "Saniya", age:20, gender:"female "},
    {name:"Akash", age:23, gender:"male"},
    {name:"Alish", age:56, gender:"Female"},
    {name:"Naman", age:34, gender:"Male"}
];
console.log(adult(users));